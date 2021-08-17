// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import VendorUserWDB from "./VendorUserWDB";

export default class VendorUserVisitConfigurationWDB extends Model {
  static table = TableName.VENDOR_USER_VISIT_CONFIGURATION;

  static associations: Associations = {
    [TableName.VENDOR_USER]: {type: 'belongs_to', key: 'vendor_user_id'},
  }

  @field('mandatoryActionList') mandatoryActionList: string; 

  @relation(TableName.VENDOR_USER, 'vendor_user_id') vendorUser: Relation<VendorUserWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
