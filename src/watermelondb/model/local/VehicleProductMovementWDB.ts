// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {TableName} from "../../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import {date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableNameNotSynced} from "../../schema/tableNameNotSynced";
import ForShippingProductDefinitionWDB from "../ForShippingProductDefinitionWDB";
import VehicleWDB from "../VehicleWDB";

export default class VehiculeProductMovementWDB extends Model {
  static table = TableNameNotSynced.VehicleProductMovement;

  static associations: Associations = {
    [TableName.VEHICLE]: {type: 'belongs_to', key: 'vehicle_id'},
    [TableName.FOR_SHIPPING_PRODUCT_DEFINITION]: {type: 'belongs_to', key: 'product_id'},
  }

  @field('productMovementType') productMovementType: string;
  @field('quantity') quantity: number;

  @relation(TableName.VEHICLE, 'vehicle_id') vehicle: Relation<VehicleWDB>;
  @relation(TableName.FOR_SHIPPING_PRODUCT_DEFINITION, 'product_id') product: Relation<ForShippingProductDefinitionWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}