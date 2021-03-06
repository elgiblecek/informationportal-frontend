import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders,HttpEvent, } from "@angular/common/http";

import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { Router,ActivatedRoute } from '@angular/router';

@Injectable()

export class HttpService {
 

  constructor(private _http: HttpClient , private _router: Router) {}

  url='https://information-portal.herokuapp.com/';
  // url='http://localhost:3000/'


  private httpOptions = {
    headers: new HttpHeaders()
  };


//  to get list items

getMembers(){
  this.httpOptions.headers.append('Content-Type', 'application/json');
  return this._http
  .get(this.url+'api/members/',this.httpOptions)
  .pipe(catchError(this.handleError));
}

//  to post an item

addmember(body){
  this.httpOptions.headers.append('Content-Type', 'application/json');
  return this._http
  .post(this.url+'api/members/',body,{responseType: 'text'})
  .pipe(catchError(this.handleError));
  
}

//login 
login(body){
  this.httpOptions.headers.append('Content-Type', 'application/json');
  return this._http
  .post(this.url+'api/login/',body)
  .pipe(catchError(this.handleError));
}


//signup 
signup(body){
  this.httpOptions.headers.append('Content-Type', 'application/json');
  return this._http
  .post(this.url+'api/signup/',body)
  .pipe(catchError(this.handleError));
}

private handleError(error: any) {

  
  console.error("server error:", error);
  if (error.error instanceof Error) {
    const errMessage = error.error.message;
    return Observable.throw(errMessage);
    
  }
  return Observable.throw(error || "server error");
}



}
