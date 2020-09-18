import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  private users:Users[];
  constructor(private service:UsersService) { }

  ngOnInit() {

    this.service.userslist().subscribe(data=>{
this.users=data;
    });


  }

}
