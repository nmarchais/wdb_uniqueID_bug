// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import UserAccountWDB from "./UserAccountWDB";
import TicketWDB from "./TicketWDB";

export default class TicketCommentWDB extends Model {
  static table = TableName.TICKET_COMMENT;

  static associations: Associations = {
    [TableName.USER_ACCOUNT]: {type: 'belongs_to', key: 'author_id'},
    [TableName.TICKET]: {type: 'belongs_to', key: 'ticket_id'},
  }

  @field('comment') comment: string; 
  @date('commentDate') commentDate: Date;

  @relation(TableName.USER_ACCOUNT, 'author_id') author: Relation<UserAccountWDB>;
  @relation(TableName.TICKET, 'ticket_id') ticket: Relation<TicketWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
