// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import InventoryWDB from "./InventoryWDB";
import StorageProductLineWDB from "./StorageProductLineWDB";
import ForShippingProductDefinitionWDB from "./ForShippingProductDefinitionWDB";

export default class InventoryLineWDB extends Model {
  static table = TableName.INVENTORY_LINE;

  static associations: Associations = {
    [TableName.INVENTORY]: {type: 'belongs_to', key: 'inventory_id'},
    [TableName.STORAGE_PRODUCT_LINE]: {type: 'belongs_to', key: 'storage_product_line_id'},
    [TableName.FOR_SHIPPING_PRODUCT_DEFINITION]: {type: 'belongs_to', key: 'product_id'},
  }

  @field('quantity') quantity: number; 

  @relation(TableName.INVENTORY, 'inventory_id') inventory: Relation<InventoryWDB>;
  @relation(TableName.STORAGE_PRODUCT_LINE, 'storage_product_line_id') storageProductLine: Relation<StorageProductLineWDB>;
  @relation(TableName.FOR_SHIPPING_PRODUCT_DEFINITION, 'product_id') product: Relation<ForShippingProductDefinitionWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
