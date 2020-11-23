import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { HttpService } from './http.service';
import { SorterService } from './sort.service';

@NgModule({
	imports: [ HttpClientModule ],
	providers : [ HttpService ,SorterService]
})

export class CoreModule { }
