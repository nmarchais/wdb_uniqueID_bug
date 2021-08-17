// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import ActivityWDB from "./ActivityWDB";

export default class WorkingDayBreakWDB extends Model {
  static table = TableName.WORKING_DAY_BREAK;

  static associations: Associations = {
    [TableName.ACTIVITY]: {type: 'belongs_to', key: 'id'},
  }


  @relation(TableName.ACTIVITY, 'id') activity: Relation<ActivityWDB>

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
