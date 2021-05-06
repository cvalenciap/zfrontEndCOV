import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class ApiService {
  login = environment.api + '/login';
  authService = '/autenticacion-usuario';

  //API AUTENTICACIÓN
  loginNewUser = environment.api + this.authService + '/aut-nuevo-usu';
  forgotPassword = environment.api + this.authService + '/recuperar-contrasena';
  updatePassword = environment.api + this.authService + '/actualizar-contrasena';
}