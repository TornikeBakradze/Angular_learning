import { Injectable } from '@angular/core';

@Injectable()
export class ItemServiceService {

  counter=0;

  constructor() { }

  add(count:number){
    this.counter+=count;
  }
}
