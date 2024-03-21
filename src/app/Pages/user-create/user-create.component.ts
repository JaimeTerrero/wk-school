import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  id!: number;
  fullName!: string;
  username!: string;
  password!: string;
  roleId!: number;

  constructor(private userService: UserService, private router: Router) { }

  saveUser(){ 
    var inputData = {
      fullName: this.fullName,
      username: this.username,
      password: this.password,
      roleId: this.roleId,
    }
    this.userService.saveUser(inputData);

    // Redirige a la URL deseada
    this.router.navigate(['/user']);


    console.log(this.userService.getUsers());
  }
}
