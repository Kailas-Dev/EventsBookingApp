import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/registration.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  alert: boolean = false;
  user: any = {};

 

  createUser = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  

  onSubmit() {
    console.log(this.createUser.value);
   
    this.user = Object.assign(this.user, this.createUser.value);
    this.userService.addUser(this.user);
    alert('User Registered successfully');
    this.router.navigate(['/users/login']);
    this.createUser.reset();
  }
  closeAlert() {
    this.alert = false;
  }
}
