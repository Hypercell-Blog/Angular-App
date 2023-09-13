import { Component, EventEmitter, Output } from '@angular/core';



export interface User {
  picUrl: string,
  name: string,
  bio: string,
  email: string,
  phone: string,
  facebook: string,
  groups: string[]
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  user: User = {
    picUrl: '../../../../assets/images/LeviAckerman.jpg',
    name: 'Levi Acerman',
    bio: 'Lorem ipsum dolor sit amet.',
    email: 'levi_acerman@gmail.com',
    phone: '+20 1156459200',
    facebook: 'Gehad28',
    groups: ['Backend Developers', 'Frontend Developers', 'Attack On Titan Fans']
  }

  
}
