// @ts-nocheck
import {Model} from "@nozbe/watermelondb";
import {date, field, readonly} from "@nozbe/watermelondb/decorators";
import {TableNameNotSynced} from "../../schema/tableNameNotSynced";

export default class ImageToSyncWDB extends Model {
  static table = TableNameNotSynced.ImageToSync;

  @field('path') path: string;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}