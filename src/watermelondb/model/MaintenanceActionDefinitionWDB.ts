// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";

export default class MaintenanceActionDefinitionWDB extends Model {
  static table = TableName.MAINTENANCE_ACTION_DEFINITION;

  static associations: Associations = {
  }

  @field('actionName') actionName: string; 
  @field('forProvisioner') forProvisioner: boolean; 
  @field('forTechnician') forTechnician: boolean; 
  @field('forSupervisor') forSupervisor: boolean; 


  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
