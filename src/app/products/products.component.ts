import {Component, OnInit} from '@angular/core';
import {ProductService} from "./product.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    products$ = this.productService.get();

    constructor(private productService: ProductService, private router:Router) {
    }

    ngOnInit(): void {
    }

    getById(id:number){
      console.log(id)
      this.productService.getByID(id);
    }

  logOut(){
      localStorage.removeItem("token");
      this.router.navigateByUrl("login")
  }

}
