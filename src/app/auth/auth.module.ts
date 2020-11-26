import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth.guard.service'

@NgModule({
	imports: [ HttpClientModule ],
	providers : [ AuthenticationService,AuthGuardService]
})

export class AuthModule { }
