// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import SalePlaceWDB from "./SalePlaceWDB";
import ActivityWDB from "./ActivityWDB";

export default class VisitWDB extends Model {
  static table = TableName.VISIT;

  static associations: Associations = {
    [TableName.SALE_PLACE]: {type: 'belongs_to', key: 'sale_place_id'},
    [TableName.ACTIVITY]: {type: 'belongs_to', key: 'id'},
  }

  @field('beginIdentificationMode') beginIdentificationMode: string;
  @field('beginIdentificationCode') beginIdentificationCode: string;
  @field('endIdentificationMode') endIdentificationMode: string;
  @field('endIdentificationCode') endIdentificationCode: string;
  @field('manualIdentificationStartComment') manualIdentificationStartComment: string;
  @field('manualIdentificationEndComment') manualIdentificationEndComment: string;
  @field('visitComment') visitComment: string;
  @field('lackOfChoice') lackOfChoice: boolean;
  @field('poorQualityPicture') poorQualityPicture: boolean;
  @field('salesCounter') salesCounter: number;
  @field('salesCounterWithoutCup') salesCounterWithoutCup: number;
  @field('moneyCarryingBagIdentification') moneyCarryingBagIdentification: string;
  @field('moneyHasBeenRecovered') moneyHasBeenRecovered: boolean;
  @field('ticketHasBeenUpdated') ticketHasBeenUpdated: boolean;
  @field('fullProductFilling') fullProductFilling: boolean;
  @field('productHasBeenLoaded') productHasBeenLoaded: boolean;
  @field('inventoryHasBeenDone') inventoryHasBeenDone: boolean;
  @field('productFillingCounter') productFillingCounter: number;
  @field('productRemovedCounter') productRemovedCounter: number;
  @field('productRemovedToTrashCounter') productRemovedToTrashCounter: number;
  @field('productFillingRate') productFillingRate: number;
  @field('productFillingRateFromAudit') productFillingRateFromAudit: number;
  @field('salesCounterFromAudit') salesCounterFromAudit: number;
  @field('salesAmountFromAudit') salesAmountFromAudit: number;
  @field('payBackAmount') payBackAmount: number;
  @field('testCount') testCount: number;
  @field('testAmount') testAmount: number;
  @field('soldOutProductsCounter') soldOutProductsCounter: number;
  @field('fillingCoinsAmount') fillingCoinsAmount: number;
  @field('fillingCoinsAmountFromAudit') fillingCoinsAmountFromAudit: number;
  @field('salePlaceStateBeforeActivity') salePlaceStateBeforeActivity: string;

  @relation(TableName.SALE_PLACE, 'sale_place_id') salePlace: Relation<SalePlaceWDB>;
  @relation(TableName.ACTIVITY, 'id') activity: Relation<ActivityWDB>

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
