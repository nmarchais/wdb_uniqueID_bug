// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";

export default class UserAccountWDB extends Model {
  static table = TableName.USER_ACCOUNT;

  static associations: Associations = {
  }

  @field('externalId') externalId: number; 
  @field('login') login: string; 
  @field('firstName') firstName: string; 
  @field('lastName') lastName: string; 
  @field('firstNameAndLastName') firstNameAndLastName: string; 
  @field('email') email: string; 
  @field('langKey') langKey: string; 
  @field('imageUrl') imageUrl: string; 


  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
