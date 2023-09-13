import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerform!:FormGroup;
   constructor(
   private _fb : FormBuilder
   )
   {
     this.registerform = this._fb.group({
      Name :[null],
      Email :[null],
      Password :[null],
      ConfirmPassword :[null]

    })
  }

  submitForm(){
    console.log(this.registerform)
  }


}
