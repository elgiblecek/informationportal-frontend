import { Component, OnInit, ViewChild,HostListener } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { HttpService } from '../../core/http.service';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupPageComponent implements OnInit {
  form: FormGroup;


  openSnackBar(message: string, action: '') {
    this._snackBar.open(message, action, {
      duration: 4000,
    });
  }

  email
  password
  username
  constructor(private _snackBar: MatSnackBar,private route: ActivatedRoute,
    private _router: Router,private _httpService: HttpService,private formBuilder: FormBuilder,) {
   

     
       
 }

  ngOnInit() {
   
  
    this.form = this.formBuilder.group({
      Username:['',Validators.required],
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
  if(a.Username == ''){
    this.openSnackBar('Paasword field is required','')
  }
  else{
    this.username = a.Username
  }

 
 
  if(this.password && this.email ){
  let body={
    username: this.username,
    email: this.email,
    password: this.password,
   
  }
  
  this._httpService.signup(body)
  .subscribe(data=>{
   
    if(data['token']){
    localStorage.setItem('jwttoken',data['token'])
  
    this._router.navigate(['/'])
    }
    else{
        this.openSnackBar('User not identified','')
    }
   
  })
  
}
   




}

}