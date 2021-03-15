import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  userRegistrationURL = "http://localhost:3000/registerUser"

  constructor(private http: HttpClient) { }
  register(userData) {
    return this.http.post(this.userRegistrationURL,userData);
  }
}
