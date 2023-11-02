import {Component, OnDestroy, OnInit} from '@angular/core';
import {ObservableService} from "../observable.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-observer1',
  templateUrl: './observer1.component.html',
  styleUrls: ['./observer1.component.scss']
})
export class Observer1Component implements OnInit, OnDestroy {

  subscription: Subscription | null = null;

  value: Observable<any> | null = null;


  constructor(private observable: ObservableService) {
  }

  ngOnInit(): void {
    this.subscription = this.observable.myObservable.subscribe({
      next: (value: any) => {
        console.log("observe 1 value: ", value)
      }
    })
    this.value=this.observable.myObservable;
  }

  subject$=this.observable.$subject.asObservable();

  ngOnDestroy(): void {
    console.log("destroy");
    this.subscription?.unsubscribe();
  }

}
