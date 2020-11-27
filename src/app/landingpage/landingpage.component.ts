import { Component, OnInit, ViewChild,HostListener } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { HttpService } from '../core/http.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingPageComponent implements OnInit {



  constructor(private _snackBar: MatSnackBar,private route: ActivatedRoute,
    private _router: Router,private _httpService: HttpService,) {
   
  
    }

  ngOnInit() {
    
   
}




}