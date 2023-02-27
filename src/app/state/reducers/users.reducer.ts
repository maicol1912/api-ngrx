import { createReducer,on } from "@ngrx/store";
import { UserModel } from "src/app/interfaces/user.interface";
import { loadUsers, loadedUsers } from "../actions/users.action";
import { UsersState } from "src/app/interfaces/user.state";

//el estado inicial es la inicializacion de las variables que usamos en nuestra aplicacion
export const initialState:UsersState= {loading:false,users:[]}

//funciones reducers
export
const usersReducer = createReducer(
  initialState, //toma el estado inicial
  on(loadUsers,(state)=>{ //escucha una action //el state es el estado antes de ejecutar el action
    return {...state,loading:true} //este ... es para crear un clon del estado anterior pero ahora con el loading en true
  }),
  on(loadedUsers,(state,{users}) => { // el segundo captura el prop
    console.log(users)
    return {...state,loading:false,users:users}
  })
)
