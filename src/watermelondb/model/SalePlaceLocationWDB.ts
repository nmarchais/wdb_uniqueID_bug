// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";
import CompanySiteWDB from "./CompanySiteWDB";

export default class SalePlaceLocationWDB extends Model {
  static table = TableName.SALE_PLACE_LOCATION;

  static associations: Associations = {
    [TableName.COMPANY_SITE]: {type: 'belongs_to', key: 'site_id'},
  }

  @field('externalId') externalId: number; 
  @field('locationName') locationName: string; 
  @field('gpsLocation_latitude') gpsLocation_latitude: number; 
  @field('gpsLocation_longitude') gpsLocation_longitude: number; 
  @field('locationState') locationState: string; 

  @relation(TableName.COMPANY_SITE, 'site_id') site: Relation<CompanySiteWDB>;

  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
