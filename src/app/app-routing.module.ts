import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowUsersComponent } from './modules/show-users/show-users.component';
import { ListUsersComponent } from './modules/list-users/list-users.component';

const routes: Routes = [
  {
    path:'',
    component:ShowUsersComponent
  },
  {
    path:'listar',
    component:ListUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
