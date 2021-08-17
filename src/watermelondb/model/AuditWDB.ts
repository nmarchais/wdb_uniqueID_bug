// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import SalePlaceWDB from "./SalePlaceWDB";
import AuditMediaWDB from "./AuditMediaWDB";
import SalePlaceEquipmentWDB from "./SalePlaceEquipmentWDB";
import VisitWDB from "./VisitWDB";

export default class AuditWDB extends Model {
  static table = TableName.AUDIT;

  static associations: Associations = {
    [TableName.SALE_PLACE]: {type: 'belongs_to', key: 'sale_place_id'},
    [TableName.SALE_PLACE_EQUIPMENT]: {type: 'belongs_to', key: 'sale_place_equipment_id'},
    [TableName.VISIT]: {type: 'belongs_to', key: 'visit_id'},
    [TableName.AUDIT_MEDIA]: {type: 'belongs_to', key: 'audit_media_id'},
  }

  @field('evaDtsText') evaDtsText: string; 

  @relation(TableName.SALE_PLACE, 'sale_place_id') salePlace: Relation<SalePlaceWDB>;
  @relation(TableName.SALE_PLACE_EQUIPMENT, 'sale_place_equipment_id') salePlaceEquipment: Relation<SalePlaceEquipmentWDB>;
  @relation(TableName.VISIT, 'visit_id') visit: Relation<VisitWDB>;
  @relation(TableName.AUDIT_MEDIA, 'audit_media_id') auditMedia: Relation<AuditMediaWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
