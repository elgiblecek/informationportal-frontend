import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    
    public currentUser;

    constructor(private http: HttpClient,public jwtHelper: JwtHelperService) {
       
       
    }

    

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('jwttoken');
       
        return !this.jwtHelper.isTokenExpired(token);
      }
    

    

    
}