import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  email = new FormControl('')
  password = new FormControl('')

  constructor(private auth: AuthenticationService) {
  }

  ngOnInit(): void {

  }

  loginAuth() {
    console.log(this.email.value as string, this.password.value as string)
    this.auth.auth(this.email.value as string, this.password.value as string)
  }

}
