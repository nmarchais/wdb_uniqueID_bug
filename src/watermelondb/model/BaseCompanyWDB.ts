// @ts-nocheck
import {Model} from "@nozbe/watermelondb";
import {date, field, readonly} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";

export default class BaseCompanyWDB extends Model {
  static table = TableName.BASE_COMPANY;

  static associations: Associations = {}

  @field('externalId') externalId: number;
  @field('companyName') companyName: string;
  @field('enable') enable: boolean;


  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
