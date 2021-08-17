// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import VendorUserWDB from "./VendorUserWDB";

export default class MessageWDB extends Model {
  static table = TableName.MESSAGE;

  static associations: Associations = {
    [TableName.VENDOR_USER]: {type: 'belongs_to', key: 'recipient_id'},
  }

  @field('message') message: string; 
  @field('sendSms') sendSms: boolean; 
  @field('type') type: string; 
  @field('relatedID') relatedID: string; 
  @field('relatedEntityName') relatedEntityName: string; 
  @field('target') target: string; 
  @date('readingDate') readingDate: Date;
  @date('sendingDate') sendingDate: Date;

  @relation(TableName.VENDOR_USER, 'recipient_id') recipient: Relation<VendorUserWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
