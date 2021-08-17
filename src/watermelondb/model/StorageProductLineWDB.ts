// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import ForShippingProductDefinitionWDB from "./ForShippingProductDefinitionWDB";
import StorageAreaWDB from "./StorageAreaWDB";

export default class StorageProductLineWDB extends Model {
  static table = TableName.STORAGE_PRODUCT_LINE;

  static associations: Associations = {
    [TableName.STORAGE_AREA]: {type: 'belongs_to', key: 'storage_area_id'},
    [TableName.FOR_SHIPPING_PRODUCT_DEFINITION]: {type: 'belongs_to', key: 'product_id'},
  }

  @field('lineCode') lineCode: string; 
  @field('capacity') capacity: number; 
  @field('stock') stock: number; 
  @field('standard') standard: boolean; 

  @relation(TableName.STORAGE_AREA, 'storage_area_id') storageArea: Relation<StorageAreaWDB>;
  @relation(TableName.FOR_SHIPPING_PRODUCT_DEFINITION, 'product_id') product: Relation<ForShippingProductDefinitionWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
