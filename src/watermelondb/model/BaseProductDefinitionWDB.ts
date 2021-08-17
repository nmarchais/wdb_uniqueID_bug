// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import ProductTypeWDB from "./ProductTypeWDB";

export default class BaseProductDefinitionWDB extends Model {
  static table = TableName.BASE_PRODUCT_DEFINITION;

  static associations: Associations = {
    [TableName.PRODUCT_TYPE]: {type: 'belongs_to', key: 'product_type_id'},
  }

  @field('externalId') externalId: number; 
  @field('name') name: string; 
  @field('brand') brand: string; 
  @field('reference') reference: string; 
  @field('defaultSalePrice') defaultSalePrice: number; 
  @field('vatRateForSales') vatRateForSales: number; 

  @relation(TableName.PRODUCT_TYPE, 'product_type_id') productType: Relation<ProductTypeWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
