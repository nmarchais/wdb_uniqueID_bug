import {SyncArgs, synchronize, SyncLog} from "@nozbe/watermelondb/sync";
import {Database} from "@nozbe/watermelondb";

const pullSync = async () => {
  return {
    status: 200,
    statusText: "OK",
    data: {
      timestamp: Date.now(),
      changes: {},
    },
  };
};

const pushSync = async () => {
  return {
    status: 200,
    statusText: "OK",
  };
};

let synchronizing = false;

export async function syncDB(database: Database) {
  if (synchronizing === false) {
    try {
      synchronizing = true;

      let log = {};
      await synchronize(synchronizeParams(database, log, false));
      // second call to synchronize to pull server changes after save/update
      log = {};
      await synchronize(synchronizeParams(database, log, true));
    } finally {
      synchronizing = false;
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
