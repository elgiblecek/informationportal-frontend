import { Component, OnInit, ViewChild,HostListener } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';

import { HttpService } from '../core/http.service';
import { Title, Meta }     from '@angular/platform-browser';
// import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';

import { HttpClient,HttpParams } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
// import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
   
    data;
    
   
    sortby(){
        this.dataSource.sortby()
    }
  
   
  
  
 
   

    dataSource
   
  constructor(private _snackBar: MatSnackBar,private titleService: Title,private meta: Meta,private route: ActivatedRoute,
    private _router: Router,private _httpService: HttpService,) {
   

  


     
       }


       ngOnInit(){

            this._httpService.getMembers()
            .subscribe(data=>{
               
                this.data = data
                
                this.data.forEach((item, i) => {
                    item.id = i + 1;
                  });

                this.dataSource = this.data
                console.log(this.dataSource)
               
                
            })

            
       }
         
       

      

     
       
 







}

  