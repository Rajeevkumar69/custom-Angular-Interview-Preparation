import { Injectable } from '@angular/core';
import {
     HttpInterceptor,
     HttpRequest,
     HttpHandler,
     HttpEvent,
     HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
          const token = localStorage.getItem('token');
          let headers = req.headers;

          if (token) {
               headers = headers.set('Authorization', `Bearer ${token}`);
          }

          const authReq = req.clone({ headers });

          return next.handle(authReq).pipe(
               catchError((error: HttpErrorResponse) => {
                    let message = 'Something went wrong';

                    if (error.error?.message) {
                         message = error.error.message;
                    } else if (error.status === 0) {
                         message = 'Network error. Please check your connection.';
                    } else if (error.status === 401) {
                         message = 'Unauthorized. Please login again.';
                    } else if (error.status === 500) {
                         message = 'Server error. Try again later.';
                    }

                    alert(message);

                    return throwError(() => error);
               })
          );
     }
}
