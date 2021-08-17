import {
  SyncArgs,
  SyncDatabaseChangeSet,
  synchronize,
  SyncLog,
} from "@nozbe/watermelondb/sync";
import {TableNameNotSynced} from "../schema/tableNameNotSynced";
import SalePlaceNotAffectedToUserWDB from "../model/local/SalePlaceNotAffectedToUserWDB";
import {TableName} from "../schema/tableName";
import {Database} from "@nozbe/watermelondb";

const pullSync = async (
  lastPulledAt: number | null,
  schemaVersion: number | undefined,
  migration: any,
  salePointNotAffectedToUsers: Array<{firstSync: boolean; code: string}>,
) => {
  return {
    status: 200,
    statusText: "tout va bien",
    data: {
      timestamp: Date.now(),
      changes: {},
    },
  };
  // return axios.post("sync/db/pull", {
  //   lastPulledAt,
  //   schemaVersion,
  //   migration,
  //   salePointNotAffectedToUsers,
  // });
};

const pushSync = async (
  lastPulledAt: number | null,
  changes: SyncDatabaseChangeSet,
) => {
  return {
    status: 200,
    statusText: "tout va bien",
  };
  // return axios.post("sync/db/push", {
  //   lastPulledAt,
  //   changes,
  // });
};

// Flag permettant de savoir si une synchronisation est en cours ou non.
let synchronizing = false;

const removeTablesNotSynced = (changes: SyncDatabaseChangeSet) => {
  for (const tableNameNotSynced of Object.values(TableNameNotSynced)) {
    delete changes[tableNameNotSynced];
  }
};

const updateTablesNotSynced = async (
  database: Database,
  dataPulled: SyncDatabaseChangeSet,
  salePointNotAffectedToUsersFirstSync: Array<SalePlaceNotAffectedToUserWDB>,
) => {
  for (const sp of salePointNotAffectedToUsersFirstSync) {
    const created = dataPulled[TableName.SALE_PLACE].created.filter(
      csp => csp.code === sp.code,
    );
    if (created.length > 0) {
      await database.write(async () => {
        await sp.update(record => {
          record.firstSync = false;
          record.serverId = created[0].id;
        });
      });
    }
  }

  const salePointsNotAffectedToUser: Array<SalePlaceNotAffectedToUserWDB> =
    await database.collections
      .get<SalePlaceNotAffectedToUserWDB>(
        TableNameNotSynced.SalePlaceNotAffectedToUser,
      )
      .query()
      .fetch();
  for (const sp of salePointsNotAffectedToUser) {
    const deleted = dataPulled[TableName.SALE_PLACE].deleted.filter(
      id => id === sp.serverId,
    );
    if (deleted.length > 0) {
      await database.write(async () => {
        // await sp.markAsDeleted(); // syncable
        await sp.destroyPermanently();
        // TODO supprimer le point de vente et ses relations de la base de données locale
        // TODO réaliser aussi cette suppression en fin de visite
      });
    }
  }
};

export async function syncDB(database: Database, errorCounter: number = 0) {
  if (synchronizing === false || errorCounter > 0) {
    try {
      synchronizing = true;

      let log = {};
      await synchronize(synchronizeParams(database, log, false));
      // second appel obligatoire et important --> on récupère côté client les entités créés côté serveur !!!
      log = {};
      await synchronize(synchronizeParams(database, log, true));

      synchronizing = false;
    } catch (e) {
      if (errorCounter === 0) {
        // Il se peut qu'une entité existe côté client et qu'elle ait été supprimée côté serveur ce qui provoque une exception côté serveur.
        // On force une nouvelle sync pour que le pull mette le client à jour.
        await syncDB(database, 1);
      }
    }
  }
}

const synchronizeParams = (
  database: Database,
  log: SyncLog,
  pullOnly: boolean,
): SyncArgs => {
  let dataPulled: SyncDatabaseChangeSet;
  let salePointNotAffectedToUsers: Array<SalePlaceNotAffectedToUserWDB>;

  const pullChanges = async ({lastPulledAt, schemaVersion, migration}) => {
    // console.log("lastPulledAt: " + lastPulledAt);
    // console.log("schemaVersion: " + schemaVersion);
    // console.log("migration: " + migration);

    salePointNotAffectedToUsers = await database.collections
      .get<SalePlaceNotAffectedToUserWDB>(
        TableNameNotSynced.SalePlaceNotAffectedToUser,
      )
      .query()
      .fetch();
    const salePointNotAffectedToUsersMapped = salePointNotAffectedToUsers.map(
      sp => {
        return {
          firstSync: sp.firstSync,
          code: sp.code,
          identification: sp.identification,
        };
      },
    );

    const response = await pullSync(
      lastPulledAt,
      schemaVersion,
      migration,
      salePointNotAffectedToUsersMapped,
    );
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    const {changes, timestamp} = await response.data;
    dataPulled = changes;

    // UNDER NO CIRCUMSTANCES SHOULD YOU COMMIT THESE LINES UNCOMMENTED!!!
    require("@nozbe/watermelondb/sync/debugPrintChanges").default(
      changes,
      false,
    );

    // console.log("timestamp: " + response.data.timestamp);
    // console.log(changes.sale_place.created);
    return {changes, timestamp};
  };

  const pushChanges = async ({changes, lastPulledAt}) => {
    await updateTablesNotSynced(
      database,
      dataPulled,
      salePointNotAffectedToUsers,
    );

    const modifiedChanges = {...changes};

    removeTablesNotSynced(modifiedChanges);

    // UNDER NO CIRCUMSTANCES SHOULD YOU COMMIT THESE LINES UNCOMMENTED!!!
    require("@nozbe/watermelondb/sync/debugPrintChanges").default(
      changes,
      true,
    );

    const response = await pushSync(lastPulledAt, modifiedChanges);
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
  };

  // @ts-ignore
  return pullOnly
    ? {
        database,
        pullChanges,
        migrationsEnabledAtVersion: 1,
        log: log,
      }
    : {
        database,
        pullChanges,
        pushChanges,
        migrationsEnabledAtVersion: 1,
        log: log,
      };
};
