import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardInsideService implements CanActivate {

  constructor(private auth: AuthService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.auth.isAuthenticated()) {
      return true;
    } else {
      return false;
    }
  }
}
