import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private sub: any;
  loginform!: FormGroup;

  constructor(
    private _login: FormBuilder,
    private _userService: UserService,
    private _router: Router
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
    this.sub = this._userService.login(this.loginform.value).subscribe({
      next: (response: any) => {
        this._userService.saveUserId(response.id);
        this._router.navigate(['']);                                               
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
