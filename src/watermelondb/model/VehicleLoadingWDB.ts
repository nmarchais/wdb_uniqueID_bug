// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {date, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import VehicleWDB from "./VehicleWDB";
import ActivityWDB from "./ActivityWDB";

export default class VehicleLoadingWDB extends Model {
  static table = TableName.VEHICLE_LOADING;

  static associations: Associations = {
    [TableName.VEHICLE]: {type: 'belongs_to', key: 'vehicle_id'},
    [TableName.ACTIVITY]: {type: 'belongs_to', key: 'id'},
  }


  @relation(TableName.VEHICLE, 'vehicle_id') vehicle: Relation<VehicleWDB>;
  @relation(TableName.ACTIVITY, 'id') activity: Relation<ActivityWDB>

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
