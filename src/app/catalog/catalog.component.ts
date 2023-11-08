import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../service/products.service";
import {environment} from "../../environments/environment";


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  products$ = this.productsService.get();

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {

  }
}
