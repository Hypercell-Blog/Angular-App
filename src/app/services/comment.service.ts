import { Injectable } from '@angular/core';
import { GenericApiService } from './generic-api.service';
import { Observable, map } from 'rxjs';
import { Icomment } from '../models/icomment';
import { APIResponse } from '../models/apiresponse';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private genericApiService: GenericApiService) {
   }

  getAllCommentPerPost(postId: number): Observable<Icomment[]> {
    return this.genericApiService.getAll('all-comment', postId).pipe(
      map((apiReponse: APIResponse<Icomment[]>) => {
        return apiReponse.data
      })
    )
  }

  addComment(newComment: Icomment, postId:number): Observable<Icomment> {
    return this.genericApiService.add('add-comment', newComment, postId).pipe(
      map((apiReponse: APIResponse<Icomment>) => {
        return apiReponse.data
      })
    )
  }

  deleteComment(commentId: number , userId: number) {
    return this.genericApiService.delete('delete-post', commentId, userId).pipe(
      map((apiReponse: APIResponse<Icomment>) => {
        return apiReponse.data
      })
    )

  }
}
