import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {
  private sub: any;
  registerform!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private userService: UserService,
    private _router: Router
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
    this.sub = this.userService.registerUser({
      name: this.registerform.controls['name'].value, 
      email: this.registerform.controls['email'].value, 
      password: this.registerform.controls['password'].value
    }).subscribe({
      next: (response: any) => {
        // this.userService.login({email: response.email, password: response.password}).subscribe({
        //   next: (response: any) => {
        //     this.userService.saveUserId(response.id);
        //     this._router.navigate(['']);                                                
        //   }
        // });
        this._router.navigate(['/login']); 
      },
      error: (error: any) => console.log(error)
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
