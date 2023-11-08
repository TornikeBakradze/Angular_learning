import {Component, OnInit} from '@angular/core';
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  get cartItem(){
    return this.cartService.products;
  }


  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  delete(id: number) {
    this.cartService.deleteCart(id);
  }
}