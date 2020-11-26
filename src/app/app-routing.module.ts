import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landingpage/landingpage.component';
import { FormPageComponent } from './formpage/formpage.component';
import { MembersComponent } from './members/members.component';

import { AuthGuardService } from './auth/auth.guard.service';
const routes: Routes = [
  { path: 'members', component: MembersComponent,canActivate: [AuthGuardService]},
  { path: 'form', component: FormPageComponent ,canActivate: [AuthGuardService]},
  { path: 'login', redirectTo:'./login'},
  { path: '', pathMatch: 'full',component: LandingPageComponent ,canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
