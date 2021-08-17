// @ts-nocheck
import {Model} from "@nozbe/watermelondb";
import {date, readonly} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";

export default class StorageAreaWDB extends Model {
  static table = TableName.STORAGE_AREA;

  static associations: Associations = {}


  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
