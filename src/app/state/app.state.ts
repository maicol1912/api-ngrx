import { ActionReducerMap } from "@ngrx/store";
import { UsersState } from "../interfaces/user.state";
import { usersReducer } from "./reducers/users.reducer";

//este sera el estado global que consultaran los diferentes componentes de la app
export interface Appstate{
  users:UsersState;
}

export const ROOT_REDUCERS:ActionReducerMap<Appstate>= {
  users:usersReducer  //aca se vincula que el estado de los users vaya relacionado con el reducer del usuario
}
