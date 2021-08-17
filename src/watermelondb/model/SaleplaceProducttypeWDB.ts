// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import SalePlaceWDB from "./SalePlaceWDB";
import ProductTypeWDB from "./ProductTypeWDB";

export default class SaleplaceProducttypeWDB extends Model {
  static table = TableName.SALEPLACE_PRODUCTTYPE;

  static associations: Associations = {
    [TableName.SALE_PLACE]: {type: 'belongs_to', key: 'sale_place_id'},
    [TableName.PRODUCT_TYPE]: {type: 'belongs_to', key: 'product_type_id'},
  }


  @relation(TableName.SALE_PLACE, 'sale_place_id') salePlace: Relation<SalePlaceWDB>;
  @relation(TableName.PRODUCT_TYPE, 'product_type_id') productType: Relation<ProductTypeWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
