import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ShowUsersComponent } from './modules/show-users/show-users.component';
import { usersReducer } from './state/reducers/users.reducer';
import { ROOT_REDUCERS } from './state/app.state';
import { ListUsersComponent } from './modules/list-users/list-users.component';
import { ListProductsComponent } from './modules/list-products/list-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowUsersComponent,
    ListUsersComponent,
    ListProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name:'TEST'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
