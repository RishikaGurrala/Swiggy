import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../Models/Product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseApiUrl:string=environment.baseUrl;
  constructor(private http:HttpClient) { }
   getProd():Observable<Product[]>{
    return this.http.get<[]>(this.baseApiUrl+'/Products/Read')
   }
}
