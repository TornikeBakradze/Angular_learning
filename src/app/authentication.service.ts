import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient,
              private router:Router) { }

  auth(username:string,password:string){
    console.log("hello")
    this.http.get<User[]>("http://localhost:3000/user")
      .pipe(
        tap((users:User[])=>{
          const user=users.filter(u=>u.username==username&&u.password==password)[0]
          if(user){
            localStorage.setItem('token',user.token)
            localStorage.setItem("isAdmin",<string>user.isAdmin?.toString())
            this.router.navigate(['products'])
          }else {
            alert('invalid username or password  ')
          }
        })
      ).subscribe()
    console.log("hello")
  }
}

export interface User{
  username:string,
  password:string,
  token:string,
  isAdmin?:boolean
}
