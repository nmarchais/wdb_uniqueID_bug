// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import ActivityWDB from "./ActivityWDB";
import VendorUserWDB from "./VendorUserWDB";
import StorageAreaWDB from "./StorageAreaWDB";

export default class ProductFlowWDB extends Model {
  static table = TableName.PRODUCT_FLOW;

  static associations: Associations = {
    [TableName.VENDOR_USER]: {type: 'belongs_to', key: 'vendor_user_id'},
    [TableName.ACTIVITY]: {type: 'belongs_to', key: 'activity_id'},
    [TableName.STORAGE_AREA]: {type: 'belongs_to', key: 'origin_storage_area_id'},
    [TableName.STORAGE_AREA]: {type: 'belongs_to', key: 'destination_storage_area_id'},
  }

  @date('flowDate') flowDate: Date;
  @field('productMovementType') productMovementType: string;

  @relation(TableName.VENDOR_USER, 'vendor_user_id') vendorUser: Relation<VendorUserWDB>;
  @relation(TableName.ACTIVITY, 'activity_id') activity: Relation<ActivityWDB>;
  @relation(TableName.STORAGE_AREA, 'origin_storage_area_id') originStorageArea: Relation<StorageAreaWDB>;
  @relation(TableName.STORAGE_AREA, 'destination_storage_area_id') destinationStorageArea: Relation<StorageAreaWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
