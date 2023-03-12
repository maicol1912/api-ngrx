import { createReducer,on } from "@ngrx/store";
import { ProductState } from "src/app/interfaces/products.state";
import { loadedProducts, loadProducts } from "../actions/product.actions";

export const initialState:ProductState = {loading:false,products:[]};

export const productsReducer = createReducer(
    initialState,
    on(loadProducts,(state)=>{
        return {...state,loading:true}
    }),
    on(loadedProducts,(state,{products})=>{
        return {...state,loading:false,products:products}
    })
)