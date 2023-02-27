import { createSelector } from "@ngrx/store";
import { Appstate } from "../app.state";
import { UsersState } from "src/app/interfaces/user.state";

//es el selector que tiene relacion con la propiedad users
export const selectUsersFeature = (state:Appstate) => state.users //accedemos a la propiedad padre del estado en este caso el users

export const selectListUsers = createSelector(
  selectUsersFeature,
  (state:UsersState) => state.users  //accedemos a los componenteshijos de este estado en este caso la listas de usuarios
)

export const selectLoading = createSelector(
    selectUsersFeature,
    (state:UsersState) => state.loading //accedemos a los componenteshijos de este estado en este caso la propiedad cargando
)

