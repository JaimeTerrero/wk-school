import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './Pages/user-create/user-create.component';
import { UserPageComponent } from './Pages/user-page/user-page.component';
import { UserEditComponent } from './Pages/user-edit/user-edit.component';

const routes: Routes = [
  {path: 'user', component: UserPageComponent, title: 'User List'},
  {path: 'user/create', component: UserCreateComponent, title: 'Create User'},
  {path: 'user/:id/edit', component: UserEditComponent, title: 'Edit User'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
