// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import StorageAreaWDB from "./StorageAreaWDB";

export default class SalePlaceStorageAreaWDB extends Model {
  static table = TableName.SALE_PLACE_STORAGE_AREA;

  static associations: Associations = {
    [TableName.STORAGE_AREA]: {type: 'belongs_to', key: 'id'},
  }


  @relation(TableName.STORAGE_AREA, 'id') storageArea: Relation<StorageAreaWDB>

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
