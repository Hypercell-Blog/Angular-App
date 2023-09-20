import { Component, OnInit, Input } from '@angular/core';
import { Ipost } from 'src/app/models/ipost';
import { PostService } from 'src/app/services/post.service';
// import {MatGridListModule} from '@angular/material/grid-list';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postList: any = [
    {
      id: 1,
      title: "Post 1",
      content: "This is the first post",
      image: "image1.jpg",
      user: {
        id: 1,
        name: "user1",
        image: "userImage1.jpg"
      },
      createdAt: "20/10/2023",
      numberOfReact: 10,
      numberOfComment: 5,
      isReact: 1,
      privacy: 0,
    },
    {
      id: 2,
      title: "Post 2",
      content: "This is the second post",
      image: "image2.jpg",
      user: {
        id: 2,
        name: "user2",
        image: "userImage2.jpg"
      },
      createdAt: "02/01/2023",
      numberOfReact: 5,
      numberOfComment: 2,
      isReact: 2,
      privacy: 1,
    },
    {
      id: 3,
      title: "Post 3",
      content: "This is the third post",
      user: {
        id: 1,
        image: "userImage3.jpg"
      },
      createdAt: "06/09/2023",
      numberOfReact: 15,
      numberOfComment: 8,
      isReact: 0,
      sharedPost: {
        id: 2,
        title: "Shared Post",
        content: "This is a shared post",
        user: {
          id: 3,
          name: "user3",
          image: "userImage3.jpg"

        },
        createdAt: new Date(),
        numberOfReact: 3,
        numberOfComment: 1,
        isReact: 1,
        privacy: 0,
      },
      privacy: 2,
    },
  ];
  slides = [
    {
      title: "For Your Current Mood",
      url:
        "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
    {
      title: "Miouw",
      url:
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
    },
    {
      title: "In The Wilderness",
      url:
        "https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
    }
  ]
  constructor(private APIService: PostService) {

  }
  getPosts() {
    this.APIService.getAllPosts(2021).subscribe({
      next: (postList: Ipost[]) => {
        this.postList = postList
        console.log("postlist1",postList)
      }
    })

  }

  ngOnInit(): void {
    this.getPosts();
  }


}
