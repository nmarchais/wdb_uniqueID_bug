// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import VehicleWDB from "./VehicleWDB";
import VendorUserWDB from "./VendorUserWDB";

export default class WorkingDayWDB extends Model {
  static table = TableName.WORKING_DAY;

  static associations: Associations = {
    [TableName.VENDOR_USER]: {type: 'belongs_to', key: 'vendor_user_id'},
    [TableName.VEHICLE]: {type: 'belongs_to', key: 'vehicle_id'},
  }

  @field('vehicleStartKm') vehicleStartKm: number;
  @field('vehicleEndKm') vehicleEndKm: number;
  @field('cashRegisterStart') cashRegisterStart: number;
  @field('cashRegisterEnd') cashRegisterEnd: number;
  @date('beginDate') beginDate: Date;
  @date('endDate') endDate: Date;
  @date('firstActivityStartDate') firstActivityStartDate: Date;
  @date('lastActivityStartDate') lastActivityStartDate: Date;
  @field('numberOfActivitiesPerformed') numberOfActivitiesPerformed: number;
  @field('numberOfVisitsPerformed') numberOfVisitsPerformed: number;
  @field('numberOfBreaksPerformed') numberOfBreaksPerformed: number;
  @field('numberOfVehicleLoadingsPerformed') numberOfVehicleLoadingsPerformed: number;

  @relation(TableName.VENDOR_USER, 'vendor_user_id') vendorUser: Relation<VendorUserWDB>;
  @relation(TableName.VEHICLE, 'vehicle_id') vehicle: Relation<VehicleWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}