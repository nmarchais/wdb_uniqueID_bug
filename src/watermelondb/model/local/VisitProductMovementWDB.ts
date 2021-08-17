// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {TableName} from "../../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import {date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import ActivityWDB from "../ActivityWDB";
import {TableNameNotSynced} from "../../schema/tableNameNotSynced";
import ForShippingProductDefinitionWDB from "../ForShippingProductDefinitionWDB";
import StorageProductLineWDB from "../StorageProductLineWDB";

export default class VisitProductMovementWDB extends Model {
  static table = TableNameNotSynced.VisitProductMovement;

  static associations: Associations = {
    [TableName.ACTIVITY]: {type: 'belongs_to', key: 'activity_id'},
    [TableName.FOR_SHIPPING_PRODUCT_DEFINITION]: {type: 'belongs_to', key: 'product_id'},
    [TableName.STORAGE_PRODUCT_LINE]: {type: 'belongs_to', key: 'storage_product_line_id'},
  }

  @field('productMovementType') productMovementType: string;
  @field('quantity') quantity: number;

  @relation(TableName.ACTIVITY, 'activity_id') activity: Relation<ActivityWDB>;
  @relation(TableName.FOR_SHIPPING_PRODUCT_DEFINITION, 'product_id') product: Relation<ForShippingProductDefinitionWDB>;
  @relation(TableName.STORAGE_PRODUCT_LINE, 'storage_product_line_id') storageProductLine: Relation<StorageProductLineWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}