import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

    @Input() product: Product | null=null;


    constructor(private productService:ProductService) {
    }

    ngOnInit(): void {
}


getById(id:number){
      this.productService.getByID(id);
    }
}
