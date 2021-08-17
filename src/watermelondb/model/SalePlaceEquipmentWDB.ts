// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {date, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import SalePlaceWDB from "./SalePlaceWDB";
import AuditMediaWDB from "./AuditMediaWDB";
import SalePlaceHardwareWDB from "./SalePlaceHardwareWDB";

export default class SalePlaceEquipmentWDB extends Model {
  static table = TableName.SALE_PLACE_EQUIPMENT;

  static associations: Associations = {
    [TableName.SALE_PLACE]: {type: 'belongs_to', key: 'sale_place_id'},
    [TableName.SALE_PLACE_HARDWARE]: {type: 'belongs_to', key: 'sale_place_hardware_id'},
    [TableName.AUDIT_MEDIA]: {type: 'belongs_to', key: 'default_audit_media_id'},
  }

  @date('installationDate') installationDate: Date;
  @date('removalDate') removalDate: Date;

  @relation(TableName.SALE_PLACE, 'sale_place_id') salePlace: Relation<SalePlaceWDB>;
  @relation(TableName.SALE_PLACE_HARDWARE, 'sale_place_hardware_id') salePlaceHardware: Relation<SalePlaceHardwareWDB>;
  @relation(TableName.AUDIT_MEDIA, 'default_audit_media_id') defaultAuditMedia: Relation<AuditMediaWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
