import {appSchema, tableSchema} from '@nozbe/watermelondb';
import {tablesNotSync} from "./tablesNotSync";
import {enhanceGeneratedSchema} from "./enhanceGeneratedSchema";

export const schemaVersion = 1;

export default appSchema({
  version: schemaVersion,
  tables: [
    ...enhanceGeneratedSchema().map(table => tableSchema(table)),
    ...tablesNotSync
  ]
});