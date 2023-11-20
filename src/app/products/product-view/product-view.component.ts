import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductViewService} from "./product-view.service";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  currentId: number = this.route.snapshot.params['id']

  products = this.getById.getById(this.currentId);

  constructor(private route: ActivatedRoute, private getById: ProductViewService) {
    console.log(this.route.snapshot.params['id'])
  }

  ngOnInit() {
  }
}
