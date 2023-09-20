import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GenericApiService } from './generic-api.service';
import { Ipost } from '../models/ipost';
import { APIResponse } from '../models/apiresponse';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private genericApiService: GenericApiService) {}

  getAllPosts(userId: number): Observable<Ipost[]> {
    return this.genericApiService.getAll('all-posts', userId).pipe(
      map((apiReponse: APIResponse<Ipost[]>) => {
        return apiReponse.data
      })
    )
  }
  getPostById(postId: number): Observable<Ipost> {
    return this.genericApiService.getById('post-details', postId).pipe(
      map((apiReponse: APIResponse<Ipost>) => {
        return apiReponse.data
      })
    )
  }

  getAllPostsByUserId(id: number, userId: number): Observable<Ipost[]> {
    return this.genericApiService.getAllById('posts', id, userId).pipe(
      map((apiReponse: APIResponse<Ipost[]>) => {
        return apiReponse.data
      })
    )
  }

  addPost(newPost: Ipost, userId: number): Observable<Ipost> {
    return this.genericApiService.add('add-post', newPost, userId).pipe(
      map((apiReponse: APIResponse<Ipost>) => {
        return apiReponse.data
      })
    )
  }

  sharePost(newPost: Ipost, userId: number, postId: number): Observable<Ipost> {
    return this.genericApiService.share('share-post', newPost, userId, postId).pipe(
      map((apiReponse: APIResponse<Ipost>) => {
        return apiReponse.data
      })
    )
  }

  updatePost(postId: number, newPost: Ipost, userId: number) {
    return this.genericApiService.update('update-post', postId, newPost, userId).pipe(
      map((apiReponse: APIResponse<Ipost>) => {
        return apiReponse.data
      })
    )
  }

  deletePost(postId: number, userId: number) {
    return this.genericApiService.delete('delete-post', postId, userId).pipe(
      map((apiReponse: APIResponse<Ipost>) => {
        return apiReponse.data
      })
    )
  }
}
