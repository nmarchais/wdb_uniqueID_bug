// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import ForShippingProductDefinitionWDB from "./ForShippingProductDefinitionWDB";

export default class HardwareDefinitionWDB extends Model {
  static table = TableName.HARDWARE_DEFINITION;

  static associations: Associations = {
    [TableName.FOR_SHIPPING_PRODUCT_DEFINITION]: {type: 'belongs_to', key: 'id'},
  }


  @relation(TableName.FOR_SHIPPING_PRODUCT_DEFINITION, 'id') forShippingProductDefinition: Relation<ForShippingProductDefinitionWDB>

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
