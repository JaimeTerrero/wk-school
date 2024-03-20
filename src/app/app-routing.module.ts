import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './Pages/user-create/user-create.component';

const routes: Routes = [
  {path: 'user/create', component: UserCreateComponent, title: 'Create User'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
