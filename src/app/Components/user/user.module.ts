import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import { PostModule } from '../post/post.module';
import { PostFormComponent } from './post-form/post-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { UserRoutingModule } from './user-routing.module';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ProfileComponent,
    PostFormComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    PostModule,
    MatFormFieldModule,
    MatSelectModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class UserModule { }
