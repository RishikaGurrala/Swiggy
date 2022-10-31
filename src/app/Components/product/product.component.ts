import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ProductList:any=[];
  constructor(private ProductService:ProductService) { }

  ngOnInit(): void {
    this.ProductService.getProd()
    .subscribe({
      next:(Product)=>
      {
        this.ProductList=Product;
      },
      error:(Response)=>
      {
        console.log(Response);
      }
    })
  }
  
  }

