import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    this.registerform = this._fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.minLength(6)]],
      Confirmpassword: [null, [Validators.required]]

    })
  }
  getError(control: string, error: string): boolean {
    return this.registerform.controls[control].touched && this.registerform.controls[control].hasError(error);
  }

  submitForm() {
    this.userService.registerUser(this.registerform.value);
  }


}
