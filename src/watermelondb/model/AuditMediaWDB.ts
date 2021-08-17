// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";

export default class AuditMediaWDB extends Model {
  static table = TableName.AUDIT_MEDIA;

  static associations: Associations = {
  }

  @field('auditMode') auditMode: string; 
  @field('youtubeVideoUrl') youtubeVideoUrl: string; 
  @field('image') image: string; 


  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
