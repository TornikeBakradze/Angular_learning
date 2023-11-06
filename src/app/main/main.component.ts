import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'form-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  myForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      email: ['', [Validators.minLength(2), Validators.email]],
      password: ['', Validators.minLength(8)],
      confirmPassword: ['', Validators.minLength(8)],
      nickName: ['', Validators.minLength(9)],
      phoneNumber: ['', Validators.minLength(9)],
    })
  }

  checkConfirmPassrod() {
    if (this.myForm.get('password')?.value != this.myForm.get("confirmPassword")?.value) {
      console.log(this.myForm.get('password')?.value)
      console.log(this.myForm.get("confirmPassword")?.value)
    }else {
      console.log("toko")
    }
  }
}
