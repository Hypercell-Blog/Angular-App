import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms"

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],

})

export class PostListComponent implements OnInit {
  isLoved: boolean = false;
  isLike: boolean = false;
  @Input() searchFlag: boolean = true;
  @Input() postList: any=[];

  items =[1,2,3,4]
  posts = []
  postSearchForm!: FormGroup;


  constructor(  ) {

  }

  ngOnInit(): void {

    this.postSearchForm = new FormGroup({
      postTitle: new FormControl('Title 1'),

    });


  }


  onSearchPost() {
  }


}

