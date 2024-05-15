import { Product } from "./product.interface";

export interface ProductResponse {
  products: Product[];
  total : number;
}