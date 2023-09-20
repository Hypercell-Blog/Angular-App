import { Component } from '@angular/core';
import { slideInAnimation } from 'src/app/animation';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class UserComponent {
  
}
