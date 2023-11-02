import {Injectable} from '@angular/core';
import {map, Observable, of, ReplaySubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  $subject=new Subject<number>();
  $replaySubject=new ReplaySubject<number>();

  constructor() {
    setTimeout(()=>{
      this.$subject.next(3)
    },1000)
    setTimeout(()=>{
      this.$replaySubject.next(10);
    },3000)
    setTimeout(()=>{
      this.$replaySubject.next(22);
    },5000)

  }

  myObservable = of(1, 2, 3, 4, 5, 6)
    .pipe(
      map(value => value + 10)
    );

  // new Observable(subscriber => {
  // subscriber.next(new Observable(subscriber1 => {
  //   subscriber1.next("toko");
  //   subscriber1.complete()
  // }));
  //   subscriber.next(1);
  //   subscriber.next(2);
  //   subscriber.next(3);
  //   setTimeout(() => {
  //     subscriber.next(4)
  //     subscriber.complete()
  //   }, 1000)
  // })
}



