import {Model} from "@nozbe/watermelondb";
import {date, field, readonly} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";

export default class VisitWDB extends Model {
  static table = TableName.VISIT;

  @field('beginIdentificationMode') beginIdentificationMode: string;
  @field('beginIdentificationCode') beginIdentificationCode: string;
  @field('endIdentificationMode') endIdentificationMode: string;
  @field('endIdentificationCode') endIdentificationCode: string;
  @field('manualIdentificationStartComment') manualIdentificationStartComment: string;
  @field('manualIdentificationEndComment') manualIdentificationEndComment: string;
  @field('salesCounter') salesCounter: number;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
