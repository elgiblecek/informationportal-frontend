import { Component, OnInit, ViewChild,HostListener } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { HttpService } from '../core/http.service';
import { Title, Meta }     from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';

import { HttpClient,HttpParams } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
// import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;


  openSnackBar(message: string, action: '') {
    this._snackBar.open(message, action, {
      duration: 4000,
    });
  }

  email
password

  constructor(private _snackBar: MatSnackBar,private titleService: Title,private meta: Meta,private route: ActivatedRoute,
    private _router: Router,private _httpService: HttpService,private formBuilder: FormBuilder,) {
   

  


     

       

      

     
       
 }

  ngOnInit() {
   
  
    this.form = this.formBuilder.group({
      Email:['',Validators.required],
      
      Password:['',Validators.required],
     
  
  }); 
}


onSubmitform(){
 
  let a = this.form.value;

 
 
  var n =  a['Email'].indexOf("@");
  if(a.Password == ''){
    this.openSnackBar('Paasword field is required','')
  }
  else{
    this.password = a.Password
  }

  if (n== -1 || a.Email == ''){
    this.openSnackBar('Enter a valid email','')
    
  }else{
    this.email = a.Email
  }

 
 
  if(  this.password && this.email ){
  let body={
   
    email: this.email,
    password: this.password,
   
  }
  console.log(body)
  this._httpService.login(body)
  .subscribe(data=>{
    console.log(data)
    if(data['token']){
    localStorage.setItem('jwttoken',data['token'])
    // this.openSnackBar("successfully logged in",'')
    this._router.navigate(['/'])
    }
    else{
        this.openSnackBar('User not identified','')
    }
   
  })
  
}
   




}

}