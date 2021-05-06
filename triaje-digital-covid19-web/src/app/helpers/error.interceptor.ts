import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {ApiService, AuthService} from '../services';
import {ErrorDialogService} from '../services/error-dialog.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private errorDialogService: ErrorDialogService, private API: ApiService) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        localStorage.clear();
        if (err.status === 401 || err.status === 403 || err.status === 0 && !(request.url.includes(this.API.login))) {
          let data = {
            reason: err && err.error.reason ? err.error.reason : '',
            status: err.status
          };
          this.errorDialogService.openDialog(data);
          return throwError(err);
        } else {
          localStorage.clear();
          const error = err.error.message || err.statusText;
          return throwError(error);
        }
      })
    );
  }
}
