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
import { SearchFormComponent } from '../search-form/search-form.component';
import { PostRoutingModule } from '../post/post-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    ProfileComponent,
    SearchFormComponent,
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
    ReactiveFormsModule,
    PostRoutingModule,
    HttpClientModule,
    MatDividerModule,
    MatGridListModule,
    MatDialogModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class UserModule { }