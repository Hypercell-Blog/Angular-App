import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform!:FormGroup;
   constructor(
   private _login : FormBuilder
   )
   {
     this.loginform = this._login.group({
      Email :[null],
      Password :[null]

    })
  }

  submitForm(){
    console.log(this.loginform)
  }


}
