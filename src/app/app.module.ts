import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbardComponent } from './Pages/Partials/navbard/navbard.component';
import { UserCreateComponent } from './Pages/user-create/user-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbardComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
