import {Injectable} from '@angular/core';
import {Product} from "../models/product";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: [{ product: Product, count: number }] = [] as any;


  private $productCountInCart = new Subject<[id: number, count: number]>()
  productCountInCart$ = this.$productCountInCart.asObservable();

  constructor() {
  }

  addProducts(product: Product, count: number) {
    const p = this.products.find(p => p.product.id == product.id)
    if (p != null) {
      p.count += count;
      this.$productCountInCart.next([p.product.id, p.count])
    } else {
      this.products.push({product, count})
      this.$productCountInCart.next([product.id, count])
    }
    console.log(this.products)
  }

  deleteCart(id: number) {
    this.products = <[{ product: Product, count: number }]>this.products.filter(p => p.product.id != id);
  }
}
