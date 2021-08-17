// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import BaseProductDefinitionWDB from "./BaseProductDefinitionWDB";

export default class ForShippingProductDefinitionWDB extends Model {
  static table = TableName.FOR_SHIPPING_PRODUCT_DEFINITION;

  static associations: Associations = {
    [TableName.BASE_PRODUCT_DEFINITION]: {type: 'belongs_to', key: 'id'},
  }

  @field('vatRateForPurchases') vatRateForPurchases: number; 
  @field('stockShouldBeManaged') stockShouldBeManaged: boolean; 
  @field('vehiclePickingRoundCoef') vehiclePickingRoundCoef: number; 
  @field('measureUnit') measureUnit: string; 

  @relation(TableName.BASE_PRODUCT_DEFINITION, 'id') baseProductDefinition: Relation<BaseProductDefinitionWDB>

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
