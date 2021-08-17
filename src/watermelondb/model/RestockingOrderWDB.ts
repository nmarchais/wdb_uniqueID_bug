// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import StorageAreaWDB from "./StorageAreaWDB";

export default class RestockingOrderWDB extends Model {
  static table = TableName.RESTOCKING_ORDER;

  static associations: Associations = {
    [TableName.STORAGE_AREA]: {type: 'belongs_to', key: 'storage_area_id'},
  }

  @field('restockingOrderStatus') restockingOrderStatus: string;
  @field('restockingOrderType') restockingOrderType: string;

  @relation(TableName.STORAGE_AREA, 'storage_area_id') storageArea: Relation<StorageAreaWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
