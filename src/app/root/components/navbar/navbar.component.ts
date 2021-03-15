import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedinUser: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  loggedin() {
    this.loggedinUser = localStorage.getItem('token');
    return this.loggedinUser;
  }
  onLogout() {
    localStorage.removeItem('token');
    alert('You are logged out !');
    this.router.navigate(['/']);
  }
} 


