import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../Services/auth.service';
import { FormGroup, Validators, FormBuilder, FormControl} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { NotificationService } from 'src/@shared/services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  unSubscribe = new Subject<void>();
  RegisterForm !:FormGroup;
  constructor(private _services: AuthService, private _notification: NotificationService, 
    private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.RegisterForm = this.formBuilder.group({
      email:new FormControl('', Validators.required),
      password:new FormControl('', Validators.required),
      firstName:new FormControl('', Validators.required),
      lastName:new FormControl('', Validators.required),
      address:new FormControl('', Validators.required),
      country:new FormControl('', Validators.required),
    })
  }

    Register(){
      this._services.register(this.RegisterForm.value).subscribe({
        next: (response: any) => {
        }
      })
    }
}
