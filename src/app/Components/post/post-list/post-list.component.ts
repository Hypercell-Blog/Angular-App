import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../../services/post-service.service';
import { FormGroup, FormControl } from "@angular/forms"

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],

})
export class PostListComponent implements OnInit {
  @Input() searchFlag: boolean = true;
  
  items =[1,2,3,4]
  posts = []
  postSearchForm!: FormGroup;

  constructor(
    private _api: ApiService
  ) { }

  ngOnInit(): void {
    // this._api.getPosts().subscribe(
    //   {
    //     next: (posts) => console.log(posts)
    //   }
    // )

    this.postSearchForm = new FormGroup({
      postTitle: new FormControl('Title 1'),

    });
}
  onSearchPost() {
    // this._api.searchPost(this.postSearchForm.value).subscribe({
    //   next: (res) => console.log(res)
    // })
  }
}
