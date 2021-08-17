// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import MaintenanceActionWDB from "./MaintenanceActionWDB";
import MaintenanceActionDataDefinitionWDB from "./MaintenanceActionDataDefinitionWDB";

export default class MaintenanceActionDataWDB extends Model {
  static table = TableName.MAINTENANCE_ACTION_DATA;

  static associations: Associations = {
    [TableName.MAINTENANCE_ACTION]: {type: 'belongs_to', key: 'maintenance_action_id'},
    [TableName.MAINTENANCE_ACTION_DATA_DEFINITION]: {type: 'belongs_to', key: 'maintenance_action_data_definition_id'},
  }

  @field('value') value: string; 

  @relation(TableName.MAINTENANCE_ACTION, 'maintenance_action_id') maintenanceAction: Relation<MaintenanceActionWDB>;
  @relation(TableName.MAINTENANCE_ACTION_DATA_DEFINITION, 'maintenance_action_data_definition_id') maintenanceActionDataDefinition: Relation<MaintenanceActionDataDefinitionWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
