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
//TIP: you first clone the req then modify the request before sending it to the server as below:
const modifiedReq =req.clone({headers:req.headers.append('auth', 'abxyszx') })
    // Pass the modified request to the next interceptor or to the HTTP handler
    return next.handle(modifiedReq);      //modified request is passed to the next destination
  }
}
