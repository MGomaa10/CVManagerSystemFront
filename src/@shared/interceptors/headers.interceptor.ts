import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {
  }

  /**
   * Add auth header with jwt if user is logged in and request is to api url
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const apiUrl = environment.basiUrl;
    const isApiUrl = request.url.startsWith(apiUrl);
    let Token = localStorage.getItem("token");
    if (isApiUrl) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${Token}` }
      });
    }
    return next.handle(request);
  }
}

export const HeadersInterceptors={
  provide:HTTP_INTERCEPTORS,
  useClass:HeadersInterceptor,
  multi:true
}