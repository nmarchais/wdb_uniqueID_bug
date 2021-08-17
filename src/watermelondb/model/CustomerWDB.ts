// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {date, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import BaseCompanyWDB from "./BaseCompanyWDB";

export default class CustomerWDB extends Model {
  static table = TableName.CUSTOMER;

  static associations: Associations = {
    [TableName.BASE_COMPANY]: {type: 'belongs_to', key: 'id'},
  }


  @relation(TableName.BASE_COMPANY, 'id') baseCompany: Relation<BaseCompanyWDB>

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
