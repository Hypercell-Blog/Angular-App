import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  firstform!:FormGroup;
   constructor(
   private _fb : FormBuilder
   )
   {
     this.firstform = this._fb.group({
      Name :[null],
      Email :[null],
      Message :[null]

    })
  }

  submitForm(){
    console.log(this.firstform)
  }

}

