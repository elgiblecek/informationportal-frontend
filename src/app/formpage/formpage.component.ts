import { Component, OnInit, ViewChild,HostListener } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { HttpService } from '../core/http.service';
import { Title, Meta }     from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';

import { HttpClient,HttpParams } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
// import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.css']
})
export class FormPageComponent implements OnInit {
  form: FormGroup;


  openSnackBar(message: string, action: '') {
    this._snackBar.open(message, action, {
      duration: 4000,
    });
  }
  mobile
  email
  name
  gender
  constructor(private _snackBar: MatSnackBar,private titleService: Title,private meta: Meta,private route: ActivatedRoute,
    private _router: Router,private _httpService: HttpService,private formBuilder: FormBuilder,) {
   

  


     

       

      

     
       
 }

  ngOnInit() {
   
  
    this.form = this.formBuilder.group({
      Name:['',Validators.required],
      Email:['',Validators.required],
      Mobile_Number:['',Validators.required],
      Gender:['',Validators.required],
      Message:['',]
  
  }); 
}


onSubmitform(){
 
  let a = this.form.value;
  var mob = /^[1-9]{1}[0-9]{9}$/;
  if (mob.test(a['Mobile_Number']) == false || a.Mobile_Number.length != 10 || a.Mobile_Number == '') {
   
    this.openSnackBar('Enter a valid mobile number','')
  }
  else{
    this.mobile = a['Mobile_Number']
  }
 
  var n =  a['Email'].indexOf("@");
  if (n== -1 || a.Email == ''){
    this.openSnackBar('Enter a valid email','')
    
  }else{
    this.email = a.Email
  }
  if(a.Gender == ''){
    this.openSnackBar('Choose gender','')
  }
  else{
    this.gender = a.Gender
  }
 
  if(a.Name == ''){
    this.openSnackBar('Name field is required','')
  }
  else{
    this.name = a.Name
  }
  if(this.mobile && this.name && this.email && this.gender){
  let body={
    name : this.name,
    email: this.email,
    mobile: this.mobile,
    gender: this.gender,
    message:a.Message
  }
  console.log(body)
  this._httpService.addmember(body)
  .subscribe(data=>{
    console.log(data)
    this.openSnackBar("successfully added",'')
    this._router.navigate(['/members'])
  })
  
}
   




}

}