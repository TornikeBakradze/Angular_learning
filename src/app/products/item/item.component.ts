import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../product";

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

    @Input() product: Product | null=null;

    constructor() {
    }

    ngOnInit(): void {
    }

}
