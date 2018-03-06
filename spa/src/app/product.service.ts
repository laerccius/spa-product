import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
 
import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private _http:HttpClient) {}


  getProducts(): Observable<Product[]> {    
   return this._http.get<Product[]>('https://localhost:5050/api/products',
     { headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)});
   
  }

  // Implement a method to handle errors if any
  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }

  

}
