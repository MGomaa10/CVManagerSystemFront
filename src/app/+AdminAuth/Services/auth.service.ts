import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpService } from 'src/@shared/services';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService) { }

  login(auth: any){
   return this.http.POST('api/Account/login', auth).pipe(
    map(
      (Response:any)=>{
        const user = Response;
        if(user){
          localStorage.setItem('token', user.token);  
        }
      }
    ));
  }

  register(auth: any){
    return this.http.POST('api/Account/register', auth);
  }

  isLoggedIn(){
    if(localStorage.getItem('token') !== null){
      return true
    }else{
      return false;
    }
  }
  
}
