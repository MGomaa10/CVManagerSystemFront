import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../Services/auth.service';
import { FormGroup, Validators, FormBuilder, FormControl} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { NotificationService } from 'src/@shared/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  unSubscribe = new Subject<void>();
  LoginForm !:FormGroup;
  constructor(private _services: AuthService, private _notification: NotificationService, 
    private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      email:new FormControl('', Validators.required),
      password:['', Validators.required]
    })
  }

    Login(){
      this._services.login(this.LoginForm.value).subscribe({
        next: (response: any)=>{
          this.router.navigate(["/Home/Home"]); 
        },
        error:(response: any)=>{
        }
      })
    }
}
