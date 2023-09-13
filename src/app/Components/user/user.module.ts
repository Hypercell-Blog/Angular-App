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
import { SearchFormComponent } from '../search-form/search-form.component';
import { PostRoutingModule } from '../post/post-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProfileComponent,
    SearchFormComponent
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
    PostRoutingModule,
    HttpClientModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class UserModule { }
