import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  list = [
    {
      name: 'Rana',
      role: 'Backend Developer'
    },
    {
      name: 'Mariam',
      role: 'Backend Developer'
    },
    {
      name: 'Farah',
      role: 'Backend Developer'
    },
    {
      name: 'Raneen',
      role: 'Fronted Developer'
    },
    {
      name: 'Yasmeen',
      role: 'Frontend Developer'
    },
    {
      name: 'Heba',
      role: 'Frontend Developer'
    },
    {
      name: 'Gehad',
      role: 'Frontend Developer'
    }
  ]
}
