import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { CreateproductService } from '../createproduct.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent  {

private product:Product;

  constructor(private service:CreateproductService,private router:Router) {
this.product=new Product();

   }

   createProduct(product:Product){
   this.service.createProduct(this.product).subscribe(data=>{
     this.product=new Product();
     this.router.navigate(['/createproduct']);

   })

   }

}
