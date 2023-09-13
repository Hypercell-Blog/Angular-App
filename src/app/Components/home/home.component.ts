import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  postList: any = [
    {
      post_id: 1,
      post_image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
      post_title: "Example Post 1",
      post_desc: "This is an example post.",
      post_date: "2023-09-13",
      shared_post: {
        _reacts: {
          love: {
            users: [
              {
                user_name: "user3",
                user_image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD...",
              },
            ],
          },
          like: {
            users: [
              {
                user_name: "user4",
                user_image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
              },
            ],
          },
        },
      },
      user_name: "user1",
      user_image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD...",
      post_reacts: {
        love: {
          users: [
            {
              user_name: "user5",
              user_image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
            },
          ],
        },
        like: {
          users: [
            {
              user_name: "user6",
              user_image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD...",
            },
          ],
        },
      },
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

}
