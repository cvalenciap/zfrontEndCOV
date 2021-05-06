import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const initialToken = JSON.parse(localStorage.getItem(environment.initialToken));
    if (initialToken && initialToken.token) {
      if (request.method === 'GET') {
        request = request.clone({
          setHeaders: {
            'Content-Type': 'application/json'
          }
        });
      }
      request = request.clone({
        setHeaders: {
          Authorization: initialToken.token
        }
      });
    }
    return next.handle(request);
  }
}
