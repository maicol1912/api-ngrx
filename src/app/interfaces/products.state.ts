import { productModel } from "./product.interface";

export interface ProductState{
    loading:boolean;
    products:ReadonlyArray<productModel>
}