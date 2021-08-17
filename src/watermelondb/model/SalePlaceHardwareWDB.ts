// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import HardwareDefinitionWDB from "./HardwareDefinitionWDB";

export default class SalePlaceHardwareWDB extends Model {
  static table = TableName.SALE_PLACE_HARDWARE;

  static associations: Associations = {
    [TableName.HARDWARE_DEFINITION]: {type: 'belongs_to', key: 'hardware_definition_id'},
  }

  @field('code') code: string;

  @relation(TableName.HARDWARE_DEFINITION, 'hardware_definition_id') hardwareDefinition: Relation<HardwareDefinitionWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
