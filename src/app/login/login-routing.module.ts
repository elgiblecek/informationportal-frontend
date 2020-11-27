import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login.component';
import { SignupPageComponent } from './signup/signup.component';
const routes: Routes = [
	{ path: 'login', component: LoginPageComponent },
	{ path: 'signup', component: SignupPageComponent }
	
	
	 
	
	
];
@NgModule({
	imports: [ RouterModule.forChild(routes)],
	exports: [ RouterModule ]
})
export class LoginRoutingModule {
	
}