import {Component, OnDestroy, OnInit} from '@angular/core';
import {ObservableService} from "../observable.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-observer1',
  templateUrl: './observer1.component.html',
  styleUrls: ['./observer1.component.scss']
})
export class Observer1Component implements OnInit, OnDestroy {

  subscription: Subscription | null = null;

  constructor(private observable: ObservableService) {
  }

  ngOnInit(): void {
    this.subscription = this.observable.myObservable.subscribe({
      next: (value: any) => {
        if (value._subscribe) {
          value.subscribe({
            next: (val: any) => {
              console.log("observe 1_1 value: ", val)
            }
          })
        } else {
          console.log("observe 1 value: ", value)
        }
      }
    })
  }

  ngOnDestroy(): void {
    console.log("destroy");
    this.subscription?.unsubscribe();
  }

}
