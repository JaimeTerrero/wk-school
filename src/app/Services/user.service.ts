import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any[] = [];

  constructor() { 
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }
  }
  
  saveUser(inputData: any){ 
    inputData.id = this.users.length + 1;
    this.users.push(inputData);
    localStorage.setItem('users', JSON.stringify(this.users));
    return this.users;
  }

  editUser(inputData: any){
    const userIndex = this.users.findIndex(user => user.id === inputData.id);
    if (userIndex !== -1) {
      this.users[userIndex] = inputData;
      localStorage.setItem('users', JSON.stringify(this.users));
    }
    return this.users;
  }

  getUser(id: number){
    return this.users.find(user => user.id === id);
  }

  deleteUser(id: number){
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      localStorage.setItem('users', JSON.stringify(this.users));
    }
    return this.users;
  }

  getUsers(){
    return this.users;
  }
}
