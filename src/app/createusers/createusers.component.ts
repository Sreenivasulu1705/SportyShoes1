import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { CreateusersService } from '../createusers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createusers',
  templateUrl: './createusers.component.html',
  styleUrls: ['./createusers.component.css']
})
export class CreateusersComponent  {

  private users:Users;

  constructor(private service:CreateusersService,private router:Router) {
this.users=new Users();

   }

   createUsers(users:Users){
   this.service.createUsers(this.users).subscribe(data=>{
     this.users=new Users();
     this.router.navigate(['/createusers']);

   })

   }
}
