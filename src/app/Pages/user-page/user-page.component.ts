import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  constructor(public userService: UserService) { }

  deleteUser(event:any, userId:number){
    if(confirm('Estás seguro de que quieres eliminar al usuario?'))
    {
      this.userService.deleteUser(userId);
    }
  }
}
