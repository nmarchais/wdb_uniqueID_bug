// @ts-nocheck
import {Model, Relation} from "@nozbe/watermelondb";
import {children, date, field, readonly, relation} from "@nozbe/watermelondb/decorators";
import {TableName} from "../schema/tableName";
import {Associations} from "@nozbe/watermelondb/Model";

export default class ContactWDB extends Model {
  static table = TableName.CONTACT;

  static associations: Associations = {
  }

  @field('firstName') firstName: string; 
  @field('lastName') lastName: string; 
  @field('firstNameAndLastName') firstNameAndLastName: string; 
  @field('civility') civility: string; 
  @field('email') email: string; 
  @field('deskPhoneNumber') deskPhoneNumber: string; 
  @field('mobilePhoneNumber') mobilePhoneNumber: string; 
  @field('role') role: string; 
  @field('informations') informations: string; 
  @field('avatarImagePath') avatarImagePath: string; 


  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
}
