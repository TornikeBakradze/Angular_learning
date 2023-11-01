import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, ControlContainer, FormControl, FormGroup, ValidatorFn} from "@angular/forms";

@Component({
  selector: 'app-person-address',
  templateUrl: './person-address.component.html',
  styleUrls: ['./person-address.component.scss']
})
export class PersonAddressComponent implements OnInit {

  @Input() address: FormGroup = {} as unknown as any;

  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit(): void {
    this.address.get("district")?.setValidators(shouldContainDot());
  }

  get district(){
    return this.address.get("district") as FormControl;
  }
}

function shouldContainDot(): ValidatorFn {
  return function (control) {
    return !control.value.includes('.') ? {customs: "Should contain ."} : null;
  }
}

const a = function (control: AbstractControl) {
  return !control.value.includes(".") ? {customs: "Should contain ."} : null;
}
