import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./product";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  get(): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:3000/products`);
  }

  getByID(id: number){
     this.http.get<Product>(`http://localhost:3000/products/${id}`).subscribe()
  }
}
