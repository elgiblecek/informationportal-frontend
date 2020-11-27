import { Component, OnInit, ViewChild,HostListener } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpService } from '../core/http.service';
import { SorterService } from '../core/sort.service';
import {MatSnackBar} from '@angular/material/snack-bar';
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

data

// Pie chart
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Male', 'Female'];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  
  pieChartData:any = [
    { 
        data: []
    }
];
    
    
//function to sort list by mobile numbers
sortmobile(){
  let data = this.dataSource
  this.dataSource=[]
  let mobilearray =[]
  data.map(item=>{
    mobilearray.push(item.mobile)
  })
       
        
  let d = mobilearray.sort(function(a,b){
    return a-b;
  })
  let newarraysortedbymobile=[]
    d.forEach(item=>{
      data.forEach(element => {
        if(element.mobile == item){
          newarraysortedbymobile.push(element)
        }
      });
    })
    d=[]
    data=[]

    newarraysortedbymobile.forEach((item, i) => {
      item.id = i + 1;
    });
        
        
    this.dataSource = newarraysortedbymobile
 
 
}
    
// sort list items by name,email,message 

sortby(property){
  if(property == 'name'){
    let data = this.dataSource
    this.dataSource=[]

    let d = data.sort(this._sorterService.sort("name"))
    d.forEach((item, i) => {
      item.id = i + 1;
    });
        
    this.dataSource =  d
  }
        
  if(property == 'email'){
    let data = this.dataSource
    this.dataSource=[]
    let d = data.sort(this._sorterService.sort("email"))
    
    d.forEach((item, i) => {
      item.id = i + 1;
    });
        
    this.dataSource =  d
  }

  if(property == 'message'){
    let data = this.dataSource
    this.dataSource=[]
    let d = data.sort(this._sorterService.sort("message"))

    d.forEach((item, i) => {
      item.id = i + 1;
    });
        
    this.dataSource =  d
  }
}

dataSource
   
  constructor(private _snackBar: MatSnackBar,private route: ActivatedRoute,
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
                  
                    

                  this.pieChartData = [this.malenos,this.femalenos]
                  
                  this.dataSource = this.data
                  
               
                
            })

            monkeyPatchChartJsTooltip();
            monkeyPatchChartJsLegend();

            
       }
         
       

      

     
       
 







}

  