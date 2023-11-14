import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";
import { ProductsComponent } from './products/products.component';
import { ItemComponent } from './products/item/item.component';
import { CommentsComponent } from './products/item/comments/comments.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ItemComponent,
    CommentsComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:"login",
        component:LoginPageComponent
      },
      {
        path:"products",
        component:ProductsComponent
      },
      {
        path:'',
        redirectTo:"login",
        pathMatch:'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
