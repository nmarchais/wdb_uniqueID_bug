// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import SalePlaceWDB from "./SalePlaceWDB";
import VendorUserWDB from "./VendorUserWDB";
import VisitWDB from "./VisitWDB";

export default class PassageWDB extends Model {
  static table = TableName.PASSAGE;

  static associations: Associations = {
    [TableName.SALE_PLACE]: {type: 'belongs_to', key: 'sale_place_id'},
    [TableName.VENDOR_USER]: {type: 'belongs_to', key: 'designated_operator_id'},
    [TableName.VENDOR_USER]: {type: 'belongs_to', key: 'assigned_operator_id'},
    [TableName.VISIT]: {type: 'belongs_to', key: 'performed_visit_id'},
  }

  @date('passageDate') passageDate: Date;
  @date('previousPassageDate') previousPassageDate: Date;
  @field('performed') performed: boolean;
  @field('creator') creator: string;
  @field('importance') importance: string;
  @field('fillingRate') fillingRate: number;
  @field('salePlaceState') salePlaceState: string;
  @field('salesCountSincePreviousPassage') salesCountSincePreviousPassage: number;
  @field('cashAmountSincePreviousPassage') cashAmountSincePreviousPassage: number;
  @field('turnoverSincePreviousPassage') turnoverSincePreviousPassage: number;
  @field('stars') stars: number;

  @relation(TableName.SALE_PLACE, 'sale_place_id') salePlace: Relation<SalePlaceWDB>;
  @relation(TableName.VENDOR_USER, 'designated_operator_id') designatedOperator: Relation<VendorUserWDB>;
  @relation(TableName.VENDOR_USER, 'assigned_operator_id') assignedOperator: Relation<VendorUserWDB>;
  @relation(TableName.VISIT, 'performed_visit_id') performedVisit: Relation<VisitWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
