// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import SalePlaceWDB from "./SalePlaceWDB";
import BaseCompanyWDB from "./BaseCompanyWDB";
import TicketTypeWDB from "./TicketTypeWDB";
import VendorUserWDB from "./VendorUserWDB";

export default class TicketWDB extends Model {
  static table = TableName.TICKET;

  static associations: Associations = {
    [TableName.TICKET_TYPE]: {type: 'belongs_to', key: 'ticket_type_id'},
    [TableName.VENDOR_USER]: {type: 'belongs_to', key: 'open_by_user_id'},
    [TableName.VENDOR_USER]: {type: 'belongs_to', key: 'close_by_user_id'},
    [TableName.VENDOR_USER]: {type: 'belongs_to', key: 'affected_to_user_id'},
    [TableName.SALE_PLACE]: {type: 'belongs_to', key: 'sale_place_id'},
    [TableName.BASE_COMPANY]: {type: 'belongs_to', key: 'associated_company_id'},
  }

  @field('codeForUnknownSalePlace') codeForUnknownSalePlace: string;
  @field('externalId') externalId: number;
  @date('openDate') openDate: Date;
  @date('deadlineDate') deadlineDate: Date;
  @date('closeDate') closeDate: Date;
  @field('description') description: string;
  @field('mischaracterized') mischaracterized: boolean;
  @field('mischaracterizedCause') mischaracterizedCause: string;
  @field('severity') severity: string;
  @field('priority') priority: string;
  @field('relevantService') relevantService: string;
  @field('status') status: string;

  @relation(TableName.TICKET_TYPE, 'ticket_type_id') ticketType: Relation<TicketTypeWDB>;
  @relation(TableName.VENDOR_USER, 'open_by_user_id') openByUser: Relation<VendorUserWDB>;
  @relation(TableName.VENDOR_USER, 'close_by_user_id') closeByUser: Relation<VendorUserWDB>;
  @relation(TableName.VENDOR_USER, 'affected_to_user_id') affectedToUser: Relation<VendorUserWDB>;
  @relation(TableName.SALE_PLACE, 'sale_place_id') salePlace: Relation<SalePlaceWDB>;
  @relation(TableName.BASE_COMPANY, 'associated_company_id') associatedCompany: Relation<BaseCompanyWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
