import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import {  AuthenticationService } from './authentication.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private _authService: AuthenticationService, public router: Router) {}
  
//   canActivate(): boolean {
//     if (this._authService.checkloggedin()) {
//         return true;

//     }else{
//     this.router.navigate(['/login']);
//     return false;

//   }
// }

canActivate(): boolean {
  if (!this._authService.isAuthenticated()) {
    this.router.navigate(['login']);
    return false;
  }
  return true;
}
}