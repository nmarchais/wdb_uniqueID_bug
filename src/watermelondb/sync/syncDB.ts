import {SyncArgs, synchronize, SyncLog} from "@nozbe/watermelondb/sync";
import {Database} from "@nozbe/watermelondb";

const pullSync = async () => {
  return {
    status: 200,
    statusText: "tout va bien",
    data: {
      timestamp: Date.now(),
      changes: {},
    },
  };
};

const pushSync = async () => {
  return {
    status: 200,
    statusText: "tout va bien",
  };
};

// Flag permettant de savoir si une synchronisation est en cours ou non.
let synchronizing = false;

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
  const pullChanges = async ({lastPulledAt, schemaVersion, migration}) => {
    const response = await pullSync();
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    const {changes, timestamp} = response.data;

    // UNDER NO CIRCUMSTANCES SHOULD YOU COMMIT THESE LINES UNCOMMENTED!!!
    require("@nozbe/watermelondb/sync/debugPrintChanges").default(
      changes,
      false,
    );

    return {changes, timestamp};
  };

  const pushChanges = async ({changes, lastPulledAt}) => {
    // UNDER NO CIRCUMSTANCES SHOULD YOU COMMIT THESE LINES UNCOMMENTED!!!
    require("@nozbe/watermelondb/sync/debugPrintChanges").default(
      changes,
      true,
    );

    const response = await pushSync();
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
