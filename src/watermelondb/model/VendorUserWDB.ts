// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import UserAccountWDB from "./UserAccountWDB";

export default class VendorUserWDB extends Model {
  static table = TableName.VENDOR_USER;

  static associations: Associations = {
    [TableName.USER_ACCOUNT]: {type: 'belongs_to', key: 'id'},
  }

  @field('administrator') administrator: boolean; 
  @field('relevantService') relevantService: string; 

  @relation(TableName.USER_ACCOUNT, 'id') userAccount: Relation<UserAccountWDB>

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
