// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";

export default class ProductTypeWDB extends Model {
  static table = TableName.PRODUCT_TYPE;

  static associations: Associations = {
  }

  @field('externalId') externalId: number; 
  @field('code') code: string; 
  @field('name') name: string; 
  @field('nameForMobileDisplay') nameForMobileDisplay: string; 


  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
