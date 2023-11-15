import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../product";

@Injectable({
  providedIn: 'root'
})
export class ProductViewService {

  constructor(private http: HttpClient) {
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`)
  }
}
