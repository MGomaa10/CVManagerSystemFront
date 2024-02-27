import { Injectable } from '@angular/core';
import { HttpService } from 'src/@shared/services';

@Injectable({
  providedIn: 'root'
})

export class CvsService {

  constructor(private http: HttpService) {}

  getAllCVs() {
    return this.http.GET('api/CV');
  }

  getAllPagination(prameter: any) {
    return this.http.GET('api/CV/GetCVsFilteredByCity', prameter);
  }

  GetCVsFilteredByCity(prameter: any) {
    return this.http.GET('api/CV/GetCVsFilteredByCity"', prameter);
  }

  addCV(Cvs: any) {
    return this.http.POST('api/CV', Cvs);
  }
  
  editCv(Cvs: any, id: any) {
    return this.http.PUT('api/CV/' + id, Cvs);
  }

  deleteCV(id: any) {
    return this.http.DELETE('api/CV/' + id);
  }
}
