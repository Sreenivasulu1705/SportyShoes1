import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CreateproductService  {

  private url:string;

  constructor(private http:HttpClient) {
    

this.url="http://localhost:9000/createProduct";
    
   }


   public createProduct(product:Product){

    return this.http.post<Product>(this.url,product);

   }


}
