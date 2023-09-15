import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent {
createpostform!:FormGroup;

constructor (
  private _fb: FormBuilder, private dialogRef: MatDialogRef<PostFormComponent> )
  {
    this.createpostform=this._fb.group({
      title :[null],
      description :[null],
      imageurl :[null]
    })
  }
  
  submitForm(){
    console.log(this.createpostform);
    this.dialogRef.close();
  }
}
