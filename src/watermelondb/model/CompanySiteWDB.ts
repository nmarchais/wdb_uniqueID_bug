// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import ContactWDB from "./ContactWDB";
import CustomerWDB from "./CustomerWDB";

export default class CompanySiteWDB extends Model {
  static table = TableName.COMPANY_SITE;

  static associations: Associations = {
    [TableName.CUSTOMER]: {type: 'belongs_to', key: 'company_id'},
    [TableName.CONTACT]: {type: 'belongs_to', key: 'contact_id'},
  }

  @field('externalId') externalId: number;
  @field('name') name: string;

  @relation(TableName.CUSTOMER, 'company_id') company: Relation<CustomerWDB>;
  @relation(TableName.CONTACT, 'contact_id') contact: Relation<ContactWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
