// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import SalePlaceStorageAreaWDB from "./SalePlaceStorageAreaWDB";
import SalePlaceLocationWDB from "./SalePlaceLocationWDB";
import VendorUserWDB from "./VendorUserWDB";

export default class SalePlaceWDB extends Model {
  static table = TableName.SALE_PLACE;

  static associations: Associations = {
    [TableName.SALE_PLACE_STORAGE_AREA]: {type: 'belongs_to', key: 'storage_area_id'},
    [TableName.VENDOR_USER]: {type: 'belongs_to', key: 'assigned_supplier_id'},
    [TableName.VENDOR_USER]: {type: 'belongs_to', key: 'assigned_technician_id'},
    [TableName.VENDOR_USER]: {type: 'belongs_to', key: 'assigned_salesman_id'},
    [TableName.VENDOR_USER]: {type: 'belongs_to', key: 'assigned_supervisor_id'},
    [TableName.SALE_PLACE_LOCATION]: {type: 'belongs_to', key: 'sale_place_location_id'},
  }

  @field('notAffectedToUser') notAffectedToUser: boolean;
  @field('externalId') externalId: number;
  @field('installationStatus') installationStatus: string;
  @field('salePlaceType') salePlaceType: string;
  @field('code') code: string;
  @field('identification') identification: string;
  @date('startDate') startDate: Date;
  @field('stars') stars: number;
  @field('capacity') capacity: number;
  @field('master') master: boolean;
  @field('closed') closed: boolean;
  @field('allowRestockingOrder') allowRestockingOrder: boolean;
  @field('productFlowManagedByProductLines') productFlowManagedByProductLines: boolean;
  @field('capacityCalculationMethod') capacityCalculationMethod: string;
  @field('connectable') connectable: boolean;
  @field('toDoToday') toDoToday: boolean;
  @field('allowAlertConfigurationByOperator') allowAlertConfigurationByOperator: boolean;
  @field('mostRecentPicture') mostRecentPicture: string;
  @field('fillingRateWarningThresold') fillingRateWarningThresold: number;
  @field('daysWithoutVisitWarningThresold') daysWithoutVisitWarningThresold: number;
  @field('daysWithoutSaleAlert') daysWithoutSaleAlert: number;
  @field('daysWithoutSaleCritical') daysWithoutSaleCritical: number;

  @relation(TableName.SALE_PLACE_STORAGE_AREA, 'storage_area_id') storageArea: Relation<SalePlaceStorageAreaWDB>;
  @relation(TableName.VENDOR_USER, 'assigned_supplier_id') assignedSupplier: Relation<VendorUserWDB>;
  @relation(TableName.VENDOR_USER, 'assigned_technician_id') assignedTechnician: Relation<VendorUserWDB>;
  @relation(TableName.VENDOR_USER, 'assigned_salesman_id') assignedSalesman: Relation<VendorUserWDB>;
  @relation(TableName.VENDOR_USER, 'assigned_supervisor_id') assignedSupervisor: Relation<VendorUserWDB>;
  @relation(TableName.SALE_PLACE_LOCATION, 'sale_place_location_id') salePlaceLocation: Relation<SalePlaceLocationWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
