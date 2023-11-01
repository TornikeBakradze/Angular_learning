import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observer2Component } from './observer2.component';

describe('Observer2Component', () => {
  let component: Observer2Component;
  let fixture: ComponentFixture<Observer2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Observer2Component]
    });
    fixture = TestBed.createComponent(Observer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
