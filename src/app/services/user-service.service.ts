import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    response = {
        Confirmpassword: "123456789",
        email: "gehad0ahmed28@gmail.com",
        id: 101,
        name:  "Gehad",
        password: "123456789"
    };

    constructor(
        private _http: HttpClient
    ) { }

    registerUser(userData: any): any {
        return this._http.post('https://jsonplaceholder.typicode.com/posts', userData);
    }

    login(userData: any): any {
        return this._http.post('https://jsonplaceholder.typicode.com/posts', userData).subscribe({
           next: (response: any) => localStorage.setItem('id', response.id)
        });
    }

    getUser(): any{
        let userId = localStorage.getItem('id');
        return this._http.get("https://jsonplaceholder.typicode.com/posts/" + userId).subscribe({
            next: (user) => {
                return user;
            } 
        })
    }
}
