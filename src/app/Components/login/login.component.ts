import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform!: FormGroup;
  constructor(
    private _login: FormBuilder,
    private _userService: UserService
  ) {
    this.loginform = this._login.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]

    })
  }
  getError(control: string, error: string): boolean {
    return this.loginform.controls[control].touched && this.loginform.controls[control].hasError(error);
  }

  submitForm() {
    this._userService.login(this.loginform.value);
  }


}
