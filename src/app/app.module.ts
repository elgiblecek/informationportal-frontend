import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { LandingPageComponent } from './landingpage/landingpage.component';
import { FormPageComponent } from './formpage/formpage.component'; 
import { MembersComponent } from './members/members.component';
import { JwtModule } from "@auth0/angular-jwt";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

export function tokenGetter() {
  return localStorage.getItem("jwttoken");
}

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FormPageComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    AuthModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
    LoginModule,

    JwtModule.forRoot({
      config: {
       tokenGetter: tokenGetter,
      
      },
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
