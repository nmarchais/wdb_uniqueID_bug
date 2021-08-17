// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import VehicleWDB from "./VehicleWDB";
import StorageAreaWDB from "./StorageAreaWDB";

export default class VehicleStorageAreaWDB extends Model {
  static table = TableName.VEHICLE_STORAGE_AREA;

  static associations: Associations = {
    [TableName.VEHICLE]: {type: 'belongs_to', key: 'vehicle_id'},
    [TableName.STORAGE_AREA]: {type: 'belongs_to', key: 'id'},
  }


  @relation(TableName.VEHICLE, 'vehicle_id') vehicle: Relation<VehicleWDB>;
  @relation(TableName.STORAGE_AREA, 'id') storageArea: Relation<StorageAreaWDB>

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
