import {tableSchema} from "@nozbe/watermelondb";
import {TableNameNotSynced} from "./tableNameNotSynced";

export const tablesNotSync = [
  tableSchema({
    name: TableNameNotSynced.SalePlaceNotAffectedToUser,
    columns: [
      {name: 'firstSync', type: 'boolean'},
      {name: 'code', type: 'string'},
      {name: 'identification', type: 'boolean'},
      {name: 'serverId', type: 'string'},
// WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ]
  }),
  tableSchema({
    name: TableNameNotSynced.ImageToSync,
    columns: [
      {name: 'path', type: 'string'},
// WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ]
  }),
  tableSchema({
    name: TableNameNotSynced.VisitProductMovement,
    columns: [
      {name: 'activity_id', type: 'string', isIndexed: true},
      {name: 'product_id', type: 'string', isIndexed: true},
      {name: 'storage_product_line_id', type: 'string', isIndexed: true},
      {name: 'productMovementType', type: 'string'},
      {name: 'quantity', type: 'number'},
// WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ]
  }),
  tableSchema({
    name: TableNameNotSynced.VehicleProductMovement,
    columns: [
      {name: 'vehicle_id', type: 'string', isIndexed: true},
      {name: 'product_id', type: 'string', isIndexed: true},
      {name: 'productMovementType', type: 'string'},
      {name: 'quantity', type: 'number'},
// WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ]
  }),
];