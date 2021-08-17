// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";

export default class CustomActivityDefinitionWDB extends Model {
  static table = TableName.CUSTOM_ACTIVITY_DEFINITION;

  static associations: Associations = {
  }

  @field('activityName') activityName: string; 
  @field('commentNeeded') commentNeeded: boolean; 
  @field('beginIdentificationCodeNeeded') beginIdentificationCodeNeeded: boolean; 
  @field('endIdentificationCodeNeeded') endIdentificationCodeNeeded: boolean; 
  @field('endOperatorActionNeeded') endOperatorActionNeeded: boolean; 


  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
