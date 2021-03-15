import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  regURL = "http://localhost:3000/users"

  constructor(private httpClient: HttpClient) { }

  createUser(data) {
    return this.httpClient.post(this.regURL,data);
  }

  addUser(user: IUser) {
    let users = [];
    if(localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users'));
      users = [user, ...users];
    } else {
      users = [user];
    }
    localStorage.setItem('Users',JSON.stringify(users));
  }

  
}
