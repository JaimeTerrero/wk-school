import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  id!: number;
  fullName!: string;
  username!: string;
  password!: string;
  roleId!: number;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      const user = this.userService.getUser(this.id);
      if (user) {
        this.fullName = user.fullName;
        this.username = user.username;
        this.password = user.password;
        this.roleId = user.roleId;
      }
    }
  }

  saveUser(){ 
    var inputData = {
      id: this.id,
      fullName: this.fullName,
      username: this.username,
      password: this.password,
      roleId: this.roleId,
    }
    this.userService.editUser(inputData);

    // Redirige a la URL deseada
    this.router.navigate(['/user']);

    console.log(this.userService.getUsers());
  }
}
