import {Component, OnInit} from '@angular/core';
import {ObservableService} from "../observable.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-observer2',
  templateUrl: './observer2.component.html',
  styleUrls: ['./observer2.component.scss']
})
export class Observer2Component implements OnInit {

  replaySubject$ = this.observable.$replaySubject;

  valueSubject = this.replaySubject$
    .pipe(
      tap(value => console.log("observer2", value))
    )

  constructor(private observable: ObservableService) {
  }

  ngOnInit(): void {
    // this.observable.myObservable.subscribe({
    //   next: (value: any) => {
    //     if (value._subscribe) {
    //       value.subscribe({
    //         next: (val: any) => {
    //           console.log("observe 2_1 value: ", val)
    //         }
    //       })
    //     } else {
    //       console.log("observe 2 value: ", value)
    //     }
    //   }
    // })


  }

  emit($event: any) {
    this.observable.$subject.next($event.target.value);
  }

}
