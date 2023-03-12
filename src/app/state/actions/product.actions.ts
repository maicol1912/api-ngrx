import { createAction, props } from "@ngrx/store";
import { productModel } from "src/app/interfaces/product.interface";
export const loadProducts = createAction(
    '[Product List] Loading products'
);

export const loadedProducts = createAction(
    '[Product List] Loaded products succed',
    props<{products:productModel[]}>()
)