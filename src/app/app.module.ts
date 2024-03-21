import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbardComponent } from './Pages/Partials/navbard/navbard.component';
import { UserCreateComponent } from './Pages/user-create/user-create.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserPageComponent } from './Pages/user-page/user-page.component';
import { UserEditComponent } from './Pages/user-edit/user-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbardComponent,
    UserCreateComponent,
    UserPageComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
