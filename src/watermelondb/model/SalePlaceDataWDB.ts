// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import SalePlaceWDB from "./SalePlaceWDB";

export default class SalePlaceDataWDB extends Model {
  static table = TableName.SALE_PLACE_DATA;

  static associations: Associations = {
    [TableName.SALE_PLACE]: {type: 'belongs_to', key: 'sale_place_id'},
  }

  @field('salePlaceState') salePlaceState: string;
  @date('lastVisitDate') lastVisitDate: Date;
  @date('lastSupplierVisitDate') lastSupplierVisitDate: Date;
  @date('lastTechnicianVisitDate') lastTechnicianVisitDate: Date;
  @date('nextPlannedFillingVisitDate') nextPlannedFillingVisitDate: Date;
  @date('lastPaiementSystemReplacementDate') lastPaiementSystemReplacementDate: Date;
  @date('lastVendingMachineReplacementDate') lastVendingMachineReplacementDate: Date;
  @date('lastSaleDate') lastSaleDate: Date;
  @field('salesCounter') salesCounter: number;
  @field('last3DaysSalesCounter') last3DaysSalesCounter: number;
  @field('fillingRate') fillingRate: number;
  @field('last3DaysFillingRate') last3DaysFillingRate: number;
  @field('freshProductFillingRate') freshProductFillingRate: number;
  @field('hotProductFillingRate') hotProductFillingRate: number;
  @field('stock') stock: number;
  @field('last3DaysSalesTurnover') last3DaysSalesTurnover: number;
  @field('turnoverSinceLastVisit') turnoverSinceLastVisit: number;
  @field('cashAmountSinceLastVisit') cashAmountSinceLastVisit: number;
  @field('soldOutCounter') soldOutCounter: number;
  @field('informations') informations: string;

  @relation(TableName.SALE_PLACE, 'sale_place_id') salePlace: Relation<SalePlaceWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
