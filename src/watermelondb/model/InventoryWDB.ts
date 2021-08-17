// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import ActivityWDB from "./ActivityWDB";
import VendorUserWDB from "./VendorUserWDB";
import StorageAreaWDB from "./StorageAreaWDB";

export default class InventoryWDB extends Model {
  static table = TableName.INVENTORY;

  static associations: Associations = {
    [TableName.VENDOR_USER]: {type: 'belongs_to', key: 'vendor_user_id'},
    [TableName.ACTIVITY]: {type: 'belongs_to', key: 'activity_id'},
    [TableName.STORAGE_AREA]: {type: 'belongs_to', key: 'storage_area_id'},
  }

  @date('flowDate') flowDate: Date;
  @field('enumInventoryType') enumInventoryType: string;

  @relation(TableName.VENDOR_USER, 'vendor_user_id') vendorUser: Relation<VendorUserWDB>;
  @relation(TableName.ACTIVITY, 'activity_id') activity: Relation<ActivityWDB>;
  @relation(TableName.STORAGE_AREA, 'storage_area_id') storageArea: Relation<StorageAreaWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
