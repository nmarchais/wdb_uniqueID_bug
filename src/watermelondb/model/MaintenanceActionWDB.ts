// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import MaintenanceActionDefinitionWDB from "./MaintenanceActionDefinitionWDB";
import VisitWDB from "./VisitWDB";

export default class MaintenanceActionWDB extends Model {
  static table = TableName.MAINTENANCE_ACTION;

  static associations: Associations = {
    [TableName.MAINTENANCE_ACTION_DEFINITION]: {type: 'belongs_to', key: 'maintenance_action_definition_id'},
    [TableName.VISIT]: {type: 'belongs_to', key: 'visit_id'},
  }

  @date('maintenanceActionDate') maintenanceActionDate: Date;

  @relation(TableName.MAINTENANCE_ACTION_DEFINITION, 'maintenance_action_definition_id') maintenanceActionDefinition: Relation<MaintenanceActionDefinitionWDB>;
  @relation(TableName.VISIT, 'visit_id') visit: Relation<VisitWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
