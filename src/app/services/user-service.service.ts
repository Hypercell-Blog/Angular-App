import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private _user: HttpClient
    ) { }

    registerUser(userData: any): Observable<any> {
        return this._user.post('', userData);
    }



}
