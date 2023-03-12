import { ActionReducerMap } from "@ngrx/store";
import { ProductState } from "../interfaces/products.state";
import { UsersState } from "../interfaces/user.state";
import { productsReducer } from "./reducers/products.reducer";
import { usersReducer } from "./reducers/users.reducer";

//este sera el estado global que consultaran los diferentes componentes de la app
export interface Appstate{
  users:UsersState;
  products:ProductState;
}

export const ROOT_REDUCERS:ActionReducerMap<Appstate>= {
  users:usersReducer, //aca se vincula que el estado de los users vaya relacionado con el reducer del usuario
  products:productsReducer
}
