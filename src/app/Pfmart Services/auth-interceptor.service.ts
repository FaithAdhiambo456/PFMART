import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class AuthInterceptorService implements HttpInterceptor {

  // constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Auth Interceptor called!')
    // Modify the request or do something before sending it
    // For example, you can add headers here

    // Pass the modified request to the next interceptor or to the HTTP handler
    return next.handle(req);
  }
}
