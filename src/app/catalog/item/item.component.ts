import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {CartService} from "../../service/cart.service";
import {FormControl} from "@angular/forms";
import {filter, map} from "rxjs";
import {ItemServiceService} from "./item-service.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  providers: [ItemServiceService]
})
export class ItemComponent implements OnInit {

  @Input() product: Product | null = null;

  countFC = new FormControl('');

  // countInCart$ = this.cartService.productCountInCart$
  //   .pipe(filter(p => p[0] == this.product?.id),
  //     map(p => p[1]));

  get count() {
    return this.itemService.counter;
  }

  constructor(private cartService: CartService, private itemService: ItemServiceService) {
  }

  ngOnInit(): void {
  }

  aadToCard() {
    this.cartService.addProducts(this.product as any, this.countFC.value as any);
    this.itemService.add(this.countFC.value as any);
  }
}
