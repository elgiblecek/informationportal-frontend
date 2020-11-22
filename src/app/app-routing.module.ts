import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landingpage/landingpage.component';
import { FormPageComponent } from './formpage/formpage.component';
import { MembersComponent } from './members/members.component';
const routes: Routes = [
  { path: 'members', component: MembersComponent},
  { path: 'form', component: FormPageComponent },
  { path: '', pathMatch: 'full',component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
