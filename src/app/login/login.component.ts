import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  email = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticateService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.email, this.password)
    ) {
      this.router.navigate(['createusers'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}