import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GenericApiService } from './generic-api.service';
import { Ireact } from '../models/ireact';
import { APIResponse } from '../models/apiresponse';

@Injectable({
  providedIn: 'root'
})
export class ReactService {

  constructor(private genericApiService: GenericApiService) {

   }

  getAllReactPerPost(postId:number): Observable<Ireact[]> {
    return this.genericApiService.getAll('all-react', postId).pipe(
      map((apiReponse: APIResponse<Ireact[]>) => {
        return apiReponse.data

      })
    )
  }

  addReact(newReact: Ireact, userId: number): Observable<Ireact> {
    return this.genericApiService.add('add-react', newReact, userId).pipe(
      map((apiReponse: APIResponse<Ireact>) => {
        return apiReponse.data
      })
    )
  }

  updateReact(postId:number, newReact: Ireact ,userId:number) {
    return this.genericApiService.update('update-react', newReact, postId,userId).pipe(
      map((apiReponse: APIResponse<Ireact>) => {
        return apiReponse.data
      })
    )
  }

  deleteReact(postId: number,userId:number) {
    return this.genericApiService.delete('delete-react', postId , userId).pipe(
      map((apiReponse: APIResponse<Ireact>) => {
        return apiReponse.data
      })
    )

  }
}
