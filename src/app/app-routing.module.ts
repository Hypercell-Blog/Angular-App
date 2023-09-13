import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { PostDetailsComponent } from './Components/post/post-details/post-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
    path: "post-details",
    component: PostDetailsComponent,
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./Components/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'create-post',
    loadChildren: () => import('./Components/user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
