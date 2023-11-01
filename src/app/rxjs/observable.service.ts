import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() {
  }

  myObservable = new Observable(subscriber => {
    subscriber.next(new Observable(subscriber1 => {
      subscriber1.next("toko");
      subscriber1.complete()
    }));
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4)
      subscriber.complete()
    }, 1000)
  })
}



