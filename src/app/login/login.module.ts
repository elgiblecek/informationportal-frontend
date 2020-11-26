import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login.component';

import { LoginRoutingModule } from './login-routing.module';



import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
	declarations: [LoginPageComponent],
	imports: [
	CommonModule,
	LoginRoutingModule,
	

    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
	
    BrowserAnimationsModule,
	
	 ] 
})
export class LoginModule{} 