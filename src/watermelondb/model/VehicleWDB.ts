import {Model} from "@nozbe/watermelondb";
import {date, field, readonly} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";

export default class VehicleWDB extends Model {
  static table = TableName.VEHICLE;

  static associations: Associations = {};

  @field('registrationNumber') registrationNumber: string;
  @field('brand') brand: string;
  @field('model') model: string;


  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
