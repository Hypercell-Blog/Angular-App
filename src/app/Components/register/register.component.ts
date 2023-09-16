import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerform!: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private userService: UserService
  ) {
    this.registerform = this._fb.group(
      {
        name: [null, [Validators.required]],
        email: [null, [Validators.required]],
        password: [null, [Validators.minLength(6)]],
        Confirmpassword: [null, [Validators.required]]
      },
      {
        validator: this.confirmPasswordMatch('password', 'Confirmpassword')
      }
    )
  }
  getError(control: string, error: string): boolean {
    return this.registerform.controls[control].touched && this.registerform.controls[control].hasError(error);
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
    }
  }

  submitForm() {
    this.userService.registerUser(this.registerform)
  }


}
