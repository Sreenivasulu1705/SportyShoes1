import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  private url:string;

  constructor(private http:HttpClient) {

this.url="http://localhost:9000/products";
    
   }

   public productlist():Observable<Product[]>{
   return  this.http.get<Product[]>(this.url);

   }

   

   }



