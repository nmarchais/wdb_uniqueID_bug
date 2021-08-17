import {TableSchemaSpec} from "@nozbe/watermelondb/Schema";
import {tables} from "./tables";
import {TableName} from "./tableName";

export const enhanceGeneratedSchema = () => {
  const updatedTables: Array<TableSchemaSpec> = [...tables] as Array<TableSchemaSpec>;
  updatedTables.filter(table => table.name === TableName.SALE_PLACE)[0].columns.push({
    name: "notAffectedToUser",
    type: "boolean"
  });
  return updatedTables;
}