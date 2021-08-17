// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import VisitWDB from "./VisitWDB";

export default class ImageVisitWDB extends Model {
  static table = TableName.IMAGE_VISIT;

  static associations: Associations = {
    [TableName.VISIT]: {type: 'belongs_to', key: 'visit_id'},
  }

  @field('image') image: string; 
  @field('type') type: string; 
  @field('lackOfChoice') lackOfChoice: boolean; 
  @field('poorQualityPicture') poorQualityPicture: boolean; 
  @field('soldOutProductsCounter') soldOutProductsCounter: number; 

  @relation(TableName.VISIT, 'visit_id') visit: Relation<VisitWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
