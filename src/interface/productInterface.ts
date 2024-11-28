import { CommonInterface } from "./commonInterface";

export interface Product extends CommonInterface {
  description: string;
}

export interface ProductState {
  products: Product[];
}
