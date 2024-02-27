import { Injectable } from '@angular/core';
import { HttpService } from 'src/@shared/services';
@Injectable({
  providedIn: 'root'
})

export class HomeServicesService {

  constructor(private http : HttpService) { }


   getAllCounts(){
    return this.http.GET('Setting/GetCounts');
   }


   getLastContactUs(){
    return this.http.GET('ContactUs/GetLastesContactUs');
   }

   getLastesComment(){
    return this.http.GET('Comment/GetLastesComment'); 
   }
 
}
