import {Component, OnInit} from '@angular/core';
import {ProductService} from "./product.service";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    products$ = this.productService.get();

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
    }

}
