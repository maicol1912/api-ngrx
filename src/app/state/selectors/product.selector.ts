import { createSelector } from "@ngrx/store"
import { ProductState } from "src/app/interfaces/products.state"
import { Appstate } from "../app.state"

export const selectProductsFeature = (state:Appstate) => state.products //accedemos a la propiedad padre del estado en este caso el users

export const selectListProducts = createSelector(
    selectProductsFeature,
  (state:ProductState) => state.products  //accedemos a los componenteshijos de este estado en este caso la listas de usuarios
)

export const selectLoading = createSelector(
    selectProductsFeature,
    (state:ProductState) => state.loading //accedemos a los componenteshijos de este estado en este caso la propiedad cargando
)