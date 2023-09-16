import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
createpostform!:FormGroup;
constructor (
  private _fb: FormBuilder )
  {
    this.createpostform=this._fb.group({
      title :[null],
      describtion :[null],
      imageurl :[null]
    })
  }
  submitForm(){
    console.log(this.createpostform)
  }
}
