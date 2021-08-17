import {appSchema, tableSchema} from "@nozbe/watermelondb";
import {tables} from "./tables";
import {TableSchemaSpec} from "@nozbe/watermelondb/Schema";

export const schemaVersion = 1;

export default appSchema({
  version: schemaVersion,
  tables: tables.map(table => tableSchema(table as TableSchemaSpec)),
});
