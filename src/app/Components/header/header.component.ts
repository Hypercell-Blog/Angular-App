import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButtonModule, CommonModule]
})
export class HeaderComponent implements OnInit {
  userId = '';
  

  constructor(private _userService: UserService){}

  ngOnInit(): void {
    this.userId = this._userService.getUserId();
  }


}
