import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { NgModule } from "@angular/core";
import { PostFormComponent } from "./post-form/post-form.component";
import { IsUserGuard } from "src/app/services/auth-guard.service";

const routes: Routes = [
  {
    path: 'profile/:id',
    component: ProfileComponent,
    canActivate: [IsUserGuard]
  }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class UserRoutingModule{
}
