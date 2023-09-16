import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
// import { baseUrl } from 'src/environments/environment';

// const baseUrl = 'api/user/';
const baseUrl = 'https://jsonplaceholder.typicode.com/';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(
        private _http: HttpClient
    ) { }
    

    signOut(){
        localStorage.clear();
    }

    saveUserId(id: string){
        localStorage.removeItem('id');
        localStorage.setItem('id', id);
    }

    getUserId(): any{
        return localStorage.getItem('id');
    }

    registerUser(userData: any): Observable<any> {
        return this._http.post(`${baseUrl}add-user`, userData);
    }

    login(userData: any): Observable<any> {
        return this._http.post(`${baseUrl}posts`, userData);
    }

    getUser(id: string): Observable<any>{
        return this._http.get(`${baseUrl}get-user/` + id);
    }

    updateUser(id: string, userData: any){
        return this._http.post(`${baseUrl}update/` + id, userData);
    }


    addFriend(userId: string, friendId: string): Observable<any>{
        return this._http.get(`${baseUrl}add-friend`, {params: {
            userId: userId,
            friendId: friendId
        }});         
    }

    deleteFriend(userId: string, friendId: string): Observable<any>{
        return this._http.get(`${baseUrl}delete-friend`, {params: {
            userId: userId,
            friendId: friendId
        }});     
    }

    checkFriend(userId: string, friendId: string): Observable<any>{
        return this._http.get(`${baseUrl}check-friend`, {params: {
            userId: userId,
            friendId: friendId
        }});     
    }

    getFriends(id: string): Observable<any> {
        return this._http.get(`${baseUrl}get-friends/` + id);
    }
}