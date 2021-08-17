// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import MaintenanceActionDefinitionWDB from "./MaintenanceActionDefinitionWDB";

export default class MaintenanceActionDataDefinitionWDB extends Model {
  static table = TableName.MAINTENANCE_ACTION_DATA_DEFINITION;

  static associations: Associations = {
    [TableName.MAINTENANCE_ACTION_DEFINITION]: {type: 'belongs_to', key: 'maintenance_action_definition_id'},
  }

  @field('pickerItems') pickerItems: string; 
  @field('dataName') dataName: string; 
  @field('maintenanceActionDataInputType') maintenanceActionDataInputType: string; 

  @relation(TableName.MAINTENANCE_ACTION_DEFINITION, 'maintenance_action_definition_id') maintenanceActionDefinition: Relation<MaintenanceActionDefinitionWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
