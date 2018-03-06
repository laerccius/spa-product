import { Component, OnInit ,OnDestroy } from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service'
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy  {  
  products:Product[] = [];
  error: any;
  
  constructor(public productService:ProductService) { }


  ngOnInit() {
    this.getProducts();
  }

  getProducts():void{    
       this.productService.getProducts()
      .subscribe(b => {this.products = b;});    
  }  

  

  ngOnDestroy() {
    
  }
}
