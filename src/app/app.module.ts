import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PersonListComponent} from "./person-list/person-list.component";
import {EditPersonComponent} from "./person-list/edit-person/edit-person.component";
import {PersonAddressComponent} from "./person-list/edit-person/person-address/person-address.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    EditPersonComponent,
    PersonAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
