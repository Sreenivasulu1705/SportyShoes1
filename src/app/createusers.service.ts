import { Injectable } from '@angular/core';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateusersService {

  private url:string;

  constructor(private http:HttpClient) {
    

this.url="http://localhost:9000/users";
    
   }


   public createUsers(users:Users){

    return this.http.post<Users>(this.url,users);

   }




  
}
