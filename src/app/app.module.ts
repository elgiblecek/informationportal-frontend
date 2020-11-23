import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { MaterialElementsModule } from './materialelements/materialelements.module';
import { CoreModule } from './core/core.module';
import { LandingPageComponent } from './landingpage/landingpage.component';
import { FormPageComponent } from './formpage/formpage.component'; 
import { MembersComponent } from './members/members.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
    MaterialElementsModule,
    CoreModule,
    ReactiveFormsModule,
     FormsModule,
     ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
