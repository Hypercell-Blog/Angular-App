import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsUserService {
  subject = new BehaviorSubject(false);
  constructor() { }
}
