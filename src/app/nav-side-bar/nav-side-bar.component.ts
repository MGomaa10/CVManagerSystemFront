import { Component, OnInit } from '@angular/core';
import {NavBarServicesService} from './NavBarServices/nav-bar-services.service'
import { Router } from '@angular/router';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { FormControl, FormGroup, UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nav-side-bar',
  templateUrl: './nav-side-bar.component.html',
  styleUrls: ['./nav-side-bar.component.css']
})
export class NavSideBarComponent implements OnInit {
unSubscribe = new Subject<void>();
open: any = false;
close: any = true;
openSide: any = true;
SideBar: any;
Bevent: any = [];
contactUs: any;
FormNews!:FormGroup;
NotiData: any;
TotalData: any;
Hours: any = 1;
Minute: any;
days: any;
icon: any = 'bx bx-wallet icon';
  constructor(private _services: NavBarServicesService, private router:Router, private NotiForm: UntypedFormBuilder) { }

  ngOnInit(): void {
    // this.loadExternalScript([
    //   '../../assets/Forela/js/SideMenu.js'
    // ])
  }

 LoggedOut(){
   localStorage.removeItem('token');
   this.router.navigate(["/Auth/Login"]); 
 }

}
