import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  postSearchForm!: FormGroup;
  postTitle = '';

  constructor(private _fb: FormBuilder){
    this.postSearchForm = _fb.group({
      postTitle: 'title1',
    });
  }

  onSubmit(){
    this.postTitle = String(this.postSearchForm.get('postTitle')?.value);
  }

}
