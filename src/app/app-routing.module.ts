import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { PostDetailsComponent } from './Components/post/post-details/post-details.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    data: {
      animation: 'HompePage'
    }
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {animation: 'Register'}
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {animation: 'Login'}
  },
  {
    path: "post-details",
    component: PostDetailsComponent,
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./Components/user/user.module').then(m => m.UserModule),
    data: {
      animation: 'UserProfile'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
