import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from '../schema/schema';
import migrations from '../migration/dbMigration';
import {modelClasses} from "./modelClasses";
import {modelClassesNotSynced} from "./modelClassesNotSynced";

export const createDatabase = () => {
  const adapter = new SQLiteAdapter({
    schema,
    migrations
  });

  const database = new Database({
    adapter,
    modelClasses: [
      ...modelClasses,
      ...modelClassesNotSynced
    ],
  });

  return database;
};


