import {Model, Relation} from "@nozbe/watermelondb";
import ForShippingProductDefinitionWDB from "../ForShippingProductDefinitionWDB";
import StorageProductLineWDB from "../StorageProductLineWDB";

export interface ProductMovement extends Model {
  product: Relation<ForShippingProductDefinitionWDB>;
  quantity: number;
  productMovementType?: string;
  storageProductLine?: Relation<StorageProductLineWDB>;

  createdAt: Date;
  updatedAt: Date;
}