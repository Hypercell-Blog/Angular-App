import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Icomment } from 'src/app/models/icomment';
import { Ipost } from 'src/app/models/ipost';
import { CommentService } from 'src/app/services/comment.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit{
  message = new FormControl('');
  private postId: number= 0;
  comments: Icomment[]=[];
  post: Ipost= {
    id: 1,
    title: "Post 1",
    content: "This is the first post",
    image: "image1.jpg",
    user: {
      id: 1,
      name: "user1",
      pic: ""
    },
    createAt: "20/10/2023",
    numberOfReact: 10,
    numberOfComment: 5,
    isReact: 1,
    privacy: 0,
  };
  // addedComment:Icomment= {
  //   message,
  //   user: Iuser,

  //   this.postId

  // }
  constructor(private postService: PostService, private commentService: CommentService, private activatedRoute: ActivatedRoute, private _sanitizer: DomSanitizer){}


getPostIdFromParams(){
  this.postId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  console.log(this.postId)
}
  getPost() {
    this.postService.getPostById(this.postId).subscribe({
      next: (post: Ipost) => {
        this.post = post;
         console.log("post", post) }
    })
  }
  getAllCommentPerPost(){
    this.commentService.getAllCommentPerPost(this.postId).subscribe({
      next:(comments: Icomment[])=>{
        this.comments = comments;
        console.log("comments: ",comments);
      }
    })
  }
  addComment(comment: Icomment){
    this.commentService.addComment(comment,this.postId).subscribe({
      next:(ee)=>{
        console.log("add comment: ",ee)
      }
    })

  }
  ngOnInit() :void{
    this.getPostIdFromParams();
    this.getPost();
    this.getAllCommentPerPost();
  }
  convertImage(image: string) {
    console.log("image", this._sanitizer.bypassSecurityTrustResourceUrl(image))
    return this._sanitizer.bypassSecurityTrustResourceUrl(image);
  }

}
