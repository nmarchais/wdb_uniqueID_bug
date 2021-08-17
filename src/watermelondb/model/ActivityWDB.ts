import {Model, Relation} from "@nozbe/watermelondb";
import {date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import WorkingDayWDB from "./WorkingDayWDB";

export default class ActivityWDB extends Model {
  static table = TableName.ACTIVITY;

  static associations: Associations = {
    [TableName.WORKING_DAY]: {type: 'belongs_to', key: 'working_day_id'},
  };

  @date('beginDate') beginDate: Date;
  @date('endDate') endDate: Date;
  @field('startLocation_latitude') startLocation_latitude: number;
  @field('startLocation_longitude') startLocation_longitude: number;
  @field('endLocation_latitude') endLocation_latitude: number;
  @field('endLocation_longitude') endLocation_longitude: number;
  @field('activityType') activityType: string;

  @relation(TableName.WORKING_DAY, 'working_day_id') workingDay: Relation<WorkingDayWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
