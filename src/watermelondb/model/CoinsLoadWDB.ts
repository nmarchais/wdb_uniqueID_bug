// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import ActivityWDB from "./ActivityWDB";

export default class CoinsLoadWDB extends Model {
  static table = TableName.COINS_LOAD;

  static associations: Associations = {
    [TableName.ACTIVITY]: {type: 'belongs_to', key: 'activity_id'},
  }

  @field('value') value: number; 
  @field('quantity') quantity: number; 

  @relation(TableName.ACTIVITY, 'activity_id') activity: Relation<ActivityWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
