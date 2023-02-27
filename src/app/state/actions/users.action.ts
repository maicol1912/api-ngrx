import { createAction,props } from "@ngrx/store";
import { UserModel } from "src/app/interfaces/user.interface";

export const loadUsers = createAction(
  '[User List] Loading User' //necesita un type
)

export const loadedUsers = createAction(
  '[User list] Loaded success',
   props<{users:UserModel[]}>() // al recibir los datos de la api esperamos una propiedad de tipo lista de item model
)
