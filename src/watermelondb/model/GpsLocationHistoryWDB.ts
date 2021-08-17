// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";

export default class GpsLocationHistoryWDB extends Model {
  static table = TableName.GPS_LOCATION_HISTORY;

  static associations: Associations = {
  }

  @date('recordingDate') recordingDate: Date;
  @field('gpsLocation_latitude') gpsLocation_latitude: number; 
  @field('gpsLocation_longitude') gpsLocation_longitude: number; 


  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
