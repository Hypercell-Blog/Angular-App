import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Ipost } from 'src/app/models/ipost';
import { Ireact } from 'src/app/models/ireact';
import { ReactService } from 'src/app/services/react.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  reactList:any =[]
  isLoved: boolean = false;
  isLike: boolean = false;
  @Input() post: any;
  constructor(private _sanitizer: DomSanitizer, private reactService:ReactService) { }

  onReactClick(postId:number , type:number) {
    if(type==1){

    }else if(type==2){

    }else{

    }
  }
  // getReactOfPost(){
  //   this.reactService.getAllReactPerPost(2017).subscribe({
  //     next:(reactList: Ireact[]) => {
  //       this.reactList = reactList
  //       console.log("reactList", reactList)
  //   }

  //   })

  // }
  convertImage(image: string) {
    console.log("image", this._sanitizer.bypassSecurityTrustResourceUrl(image))
    return this._sanitizer.bypassSecurityTrustResourceUrl(image) ;
  }

}
