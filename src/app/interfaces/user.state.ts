import { UserModel } from "./user.interface";

export interface UsersState{
  loading:boolean,
  users:ReadonlyArray<UserModel>
}
