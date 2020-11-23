import { Component, OnInit, ViewChild,HostListener } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';

import { HttpService } from '../core/http.service';
import { SorterService } from '../core/sort.service';
import { Title, Meta }     from '@angular/platform-browser';
// import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';

import { HttpClient,HttpParams } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
// import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
malenos=0
femalenos=0
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Male', 'Female'];
  // public pieChartData: SingleDataSet=[3,5];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  
  pieChartData:any = [
    { 
        data: []
    }
];
    data;
    
   
    sortby(){


       
        let data = this.dataSource
        this.dataSource=[]
        let d = data.sort(this._sorterService.sort("name"))

        d.forEach((item, i) => {
            item.id = i + 1;
          });
        
        

 
    this.dataSource =  d
    }
  
   
  
  
 
   

    dataSource
   
  constructor(private _snackBar: MatSnackBar,private titleService: Title,private meta: Meta,private route: ActivatedRoute,
    private _router: Router,private _httpService: HttpService, private _sorterService: SorterService) {
   

  


     
       }


       ngOnInit(){

            this._httpService.getMembers()
            .subscribe(data=>{
               
                this.data = data
                
                this.data.forEach((item, i) => {
                    item.id = i + 1;
                    if(item.gender =="female"){
                      this.femalenos = this.femalenos + 1
                    }
                    if(item.gender == "male"){
                      this.malenos = this.malenos + 1
                    }
                  });
                  console.log(this.malenos)

                  this.pieChartData = [this.malenos,this.femalenos]
                  // this.pieChartData.push(this.malenos)
                  // this.pieChartData.push(this.femalenos)
                this.dataSource = this.data
                console.log(this.dataSource)
               
                
            })

            monkeyPatchChartJsTooltip();
            monkeyPatchChartJsLegend();

            // this.dataSource.forEach(element => {
            //   if(element.gender == "female"){
            //     this.femalenos = this.femalenos + 1
            //   }
            //   else{
            //     this.malenos = this.malenos + 1
            //   }

            // });
            // console.log(this.malenos)
       }
         
       

      

     
       
 







}

  