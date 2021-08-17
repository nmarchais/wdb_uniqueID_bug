// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";

export default class TicketTypeWDB extends Model {
  static table = TableName.TICKET_TYPE;

  static associations: Associations = {
  }

  @field('externalId') externalId: number; 
  @field('typeName') typeName: string; 
  @field('systemType') systemType: boolean; 
  @field('baseType') baseType: string; 


  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
