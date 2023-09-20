import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IsUserService } from 'src/app/services/is-user.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userId = '';
  isUser = false;
  
  constructor(private _userService: UserService, private router: Router,
              private _isUser: IsUserService){}

  ngOnInit(): void {
    this.userId = this._userService.getUserId();
    this._isUser.subject.subscribe({
      next: v => {
        if(v){
          this.userId = this._userService.getUserId();
          this.isUser = true;
        }
        else{
          this.isUser = false;
        }
      }
    })
  }

  login(){
    this.router.navigate(['login']);
  }

  register(){
    this.router.navigate(['register']);
  }

  signOut(){
    this._userService.signOut();
    this._isUser.subject.next(false);
    this.router.navigate(['']);
  }

  


}
