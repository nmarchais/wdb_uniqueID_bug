// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import ForShippingProductDefinitionWDB from "./ForShippingProductDefinitionWDB";

export default class PackagingWDB extends Model {
  static table = TableName.PACKAGING;

  static associations: Associations = {
    [TableName.FOR_SHIPPING_PRODUCT_DEFINITION]: {type: 'belongs_to', key: 'product_id'},
    [TableName.PACKAGING]: {type: 'belongs_to', key: 'sub_packaging_id'},
  }

  @field('name') name: string;
  @field('quantity') quantity: number;
  @field('barcode_code') barcode_code: string;
  @field('barcode_barcodeType') barcode_barcodeType: string;

  @relation(TableName.FOR_SHIPPING_PRODUCT_DEFINITION, 'product_id') product: Relation<ForShippingProductDefinitionWDB>;
  @relation(TableName.PACKAGING, 'sub_packaging_id') subPackaging: Relation<PackagingWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
