import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../../services/post-service.service';
import { FormGroup, FormControl } from "@angular/forms"

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],

})

export class PostListComponent implements OnInit {
  isLoved: boolean = false;
  isLike: boolean = false;
  postSearchForm!: FormGroup;


  constructor(  ) {

  }

  ngOnInit(): void {

    this.postSearchForm = new FormGroup({
      postTitle: new FormControl('Title 1'),

    });


  }

  onSearchPost() {
    // this._api.searchPost(this.postSearchForm.value).subscribe({
    //   next: (res) => console.log(res)
    // })
  }
  onLoveClick() {
    this.isLoved = !this.isLoved
  }
  onLikeClick() {
    this.isLike = !this.isLike
  }

  @Input() postList:any;
}

