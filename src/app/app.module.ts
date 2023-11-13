import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {HttpClientModule} from "@angular/common/http";
import { CatalogComponent } from './catalog/catalog.component';
import { ItemComponent } from './catalog/item/item.component';
import { CartComponent } from './cart/cart.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CommentsComponent } from './catalog/item/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ItemComponent,
    CartComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
