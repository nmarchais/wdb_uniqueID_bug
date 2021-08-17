// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import CustomActivityDefinitionWDB from "./CustomActivityDefinitionWDB";
import ActivityWDB from "./ActivityWDB";

export default class CustomActivityWDB extends Model {
  static table = TableName.CUSTOM_ACTIVITY;

  static associations: Associations = {
    [TableName.CUSTOM_ACTIVITY_DEFINITION]: {type: 'belongs_to', key: 'custom_activity_definition_id'},
    [TableName.ACTIVITY]: {type: 'belongs_to', key: 'id'},
  }

  @field('comment') comment: string; 
  @field('beginIdentificationMode') beginIdentificationMode: string; 
  @field('beginIdentificationCode') beginIdentificationCode: string; 
  @field('endIdentificationMode') endIdentificationMode: string; 
  @field('endIdentificationCode') endIdentificationCode: string; 
  @field('manualIdentificationStartComment') manualIdentificationStartComment: string; 
  @field('manualIdentificationEndComment') manualIdentificationEndComment: string; 

  @relation(TableName.CUSTOM_ACTIVITY_DEFINITION, 'custom_activity_definition_id') customActivityDefinition: Relation<CustomActivityDefinitionWDB>;
  @relation(TableName.ACTIVITY, 'id') activity: Relation<ActivityWDB>

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
