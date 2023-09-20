import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IsUserService } from 'src/app/services/is-user.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnDestroy {
  private subs: Subscription[] = [];
  registerform!: FormGroup;
  message = null;
  defaultImageSrc = '../../../../assets/images/defaultProfile.jpg';

  constructor(
    private _fb: FormBuilder,
    private userService: UserService,
    private _router: Router,
    private _isUser: IsUserService
  ) {
    this.registerform = this._fb.group(
      {
        name: [null, [Validators.required]],
        email: [null, [Validators.required]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        Confirmpassword: [null, [Validators.required]]
      },
      {
        validator: this.confirmPasswordMatch('password', 'Confirmpassword'),
      }
    );
  }

  getError(control: string, error: string): boolean {
    return (
      this.registerform.controls[control].touched &&
      this.registerform.controls[control].hasError(error)
    );
  }
  confirmPasswordMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmPasswordMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  submitForm() {
    if (this.registerform.invalid) {
      this.registerform.markAllAsTouched();
      return;
    }
    const data = this.registerform.value;
    const sub = this.userService.registerUser(data).subscribe({
      next: (response: any) => {
        this.userService
          .login({ email: response.email, password: response.password })
          .subscribe({
            next: (response: any) => {
              this.userService.saveUserId(response['id']);
              this._isUser.subject.next(true);
              this._router.navigate(['']);
              this.message = null;
              if (response['msg']) {
                this.message = response['msg'];
              }
            },

          });
      },
      error: (error: any) => console.log(error),
    });
    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    this.subs.forEach((el) => el.unsubscribe());
  }
}
