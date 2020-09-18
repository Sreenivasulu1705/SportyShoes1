import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

   url:string;

  constructor(private http:HttpClient) {
this.url="http://localhost:9000/getUsers";

  }

  public userslist():Observable<Users[]>{
    return  this.http.get<Users[]>(this.url);
 
    }
  

}
