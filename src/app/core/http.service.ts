import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders,HttpEvent, } from "@angular/common/http";

import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { Router,ActivatedRoute } from '@angular/router';

@Injectable()

export class HttpService {
 

  constructor(private _http: HttpClient , private _router: Router) {}

  url='https://information-portal.herokuapp.com/';
private httpOptions = {
  headers: new HttpHeaders()
};



getMembers(){
  
  return this._http
  .get(this.url+'api/members/',this.httpOptions)
  .pipe(catchError(this.handleError));
}


private handleError(error: any) {

  if (error.status === 404) {
        
    this._router.navigate(['/pagenotfound'])
   
 }
  console.error("server error:", error);
 
  if (error.error instanceof Error) {
    const errMessage = error.error.message;
    
    return Observable.throw(errMessage);
   
  }
  return Observable.throw(error || "server error");
}



}
