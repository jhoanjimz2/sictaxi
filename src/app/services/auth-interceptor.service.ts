
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor( private router: Router ) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zaWN0YXhpLmdvdi5jby9hcGkvbG9naW4iLCJpYXQiOjE2ODAxNzg1NTgsImV4cCI6MTY4MDE4MjE1OCwibmJmIjoxNjgwMTc4NTU4LCJqdGkiOiI5d0VzcW9uWWFMTFBQYWUxIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.irjnDauuoqY7Q0uf2gB30NY_m_SjbmQq-pCBRpmWyOQ';
    let request = req;
    if (token) request = req.clone({setHeaders: {Authorization: `Bearer ${ token }`}});
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) this.remueveTodo();
        return throwError( err );
      })
    );
  }
  remueveTodo() {
    localStorage.clear();
    this.router.navigateByUrl('/auth');
  }
}
