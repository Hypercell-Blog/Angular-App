import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { NgModule } from "@angular/core";
import { IsUserGuard } from "src/app/services/auth-guard.service";

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'profile/:id',
        component: ProfileComponent,
        canActivate: [IsUserGuard]
      }
    ]
  }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class UserRoutingModule{
}
