// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import StorageProductLineWDB from "./StorageProductLineWDB";
import ProductFlowWDB from "./ProductFlowWDB";
import ForShippingProductDefinitionWDB from "./ForShippingProductDefinitionWDB";

export default class ProductFlowLineWDB extends Model {
  static table = TableName.PRODUCT_FLOW_LINE;

  static associations: Associations = {
    [TableName.PRODUCT_FLOW]: {type: 'belongs_to', key: 'product_flow_id'},
    [TableName.STORAGE_PRODUCT_LINE]: {type: 'belongs_to', key: 'storage_product_line_id'},
    [TableName.FOR_SHIPPING_PRODUCT_DEFINITION]: {type: 'belongs_to', key: 'product_id'},
  }

  @field('quantity') quantity: number; 

  @relation(TableName.PRODUCT_FLOW, 'product_flow_id') productFlow: Relation<ProductFlowWDB>;
  @relation(TableName.STORAGE_PRODUCT_LINE, 'storage_product_line_id') storageProductLine: Relation<StorageProductLineWDB>;
  @relation(TableName.FOR_SHIPPING_PRODUCT_DEFINITION, 'product_id') product: Relation<ForShippingProductDefinitionWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
