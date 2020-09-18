import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  state: boolean = false;
  private product:Product[];
  constructor(private service:ProductService) { }

  ngOnInit() {
    
    this.service.productlist().subscribe(data=>{
this.product=data;
    });


  }
  
  selectedProduct(product:any){
   
      return  (this.selectedProduct=product);

      
        
      }


  }

 


