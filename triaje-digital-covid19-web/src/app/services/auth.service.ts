import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {ApiService} from './api.service';
import {Response} from '../interfaces/';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private API: ApiService) {
  }

  login(data: any): Observable<Response> {
    const loginURL = this.API.loginNewUser;
    return this.http
      .post<Response>(loginURL, data)
      .pipe(
        map(response => {
          if (response.estadoRespuesta === 1 && response.parametros.flagRespuesta !== 'B') {
            this.setSession({user: response.parametros, correo: data.correo});
          }
          return response;
        })
      );
  }

  logout() {
    localStorage.removeItem(environment.appname);
    localStorage.clear();
  }

  getUser(): any {
    if (localStorage.getItem(environment.appname)) {
      const session = JSON.parse(localStorage.getItem(environment.appname));
      return session.user;
    } else {
      return null;
    }
  }

  getCorreo(): any {
    if (localStorage.getItem(environment.appname)) {
      const session = JSON.parse(localStorage.getItem(environment.appname));
      return session.correo;
    } else {
      return null;
    }
  }

  public isAuthenticated(): boolean {
    if (localStorage.getItem(environment.appname)) {
      const session = JSON.parse(localStorage.getItem(environment.appname));
      return new Date().getTime() < session.expires_at;
    } else {
      return false;
    }
  }

  private setSession(session: any): void {
    session.expires_at = 1000 * 60 * 60 + new Date().getTime();
    localStorage.setItem(environment.appname, JSON.stringify(session));
  }
}
