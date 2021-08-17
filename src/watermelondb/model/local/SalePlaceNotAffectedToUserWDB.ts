// @ts-nocheck
import {Model} from "@nozbe/watermelondb";
import {date, field, readonly} from "@nozbe/watermelondb/decorators";
import {TableNameNotSynced} from "../../schema/tableNameNotSynced";

export default class SalePlaceNotAffectedToUserWDB extends Model {
  static table = TableNameNotSynced.SalePlaceNotAffectedToUser;

  @field('firstSync') firstSync: boolean;
  @field('code') code: string;
  @field('identification') identification: boolean;
  @field('serverId') serverId: string;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
