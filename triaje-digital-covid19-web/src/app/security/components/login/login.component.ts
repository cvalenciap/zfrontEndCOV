import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OpenDialogDirective } from '../../../directives/';
import { AuthService, MainService } from 'src/app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
/* export class LoginComponent implements OnInit { */
export class LoginComponent {
  form: FormGroup;
  loading = false;
  error = '';
  iconPass: string = 'open';
  @ViewChild(OpenDialogDirective) openDialog;

  constructor(private authService: AuthService, private router: Router, private mainService: MainService ) {
    this.form = new FormGroup({
      correo: new FormControl('', [Validators.required, Validators.email]),
      contrasena: new FormControl('', [Validators.required])
    });
  }

  async onSubmit() {
    this.error = '';
    this.loading = true;
    const body = {
      correo: this.form.value.correo,
      clave: this.form.value.contrasena
    };
    await this.mainService.verifyToken(false);
    this.authService.login(body).subscribe(
      response => {
        this.loading = false;
        if (response.estadoRespuesta) {
          if (response.parametros.flagRespuesta === 'A') {
            this.openDialog.onClick({
              dialogType: 'content',
              dialogSRC: 'loginError',
              title: 'Correo incorrecto',
              error: response.mensajeRespuesta,
              links: true,
              onEvent: (data: any) => {
                if (data === '1') {
                  this.router.navigate(['/login/registro']);
                }
              }
            });
          } else {
            this.router.navigate(['/']);
          }
        } else {
          this.loading = false;
          this.openDialog.onClick({
            dialogType: 'content',
            dialogSRC: 'error',
            error: response.mensajeRespuesta,
          });
        }
      },
      error => {
        this.loading = false;
        this.openDialog.onClick({
          dialogType: 'content',
          dialogSRC: 'error',
          error:
            'Tenemos problemas en nuestro servidor. Por favor, actualice la página y vuelva a intentar.'
        });
      }
    );
  }

  tooglePassword(contrasena) {
    contrasena.type = contrasena.type === 'password' ? 'text' : 'password';
    this.iconPass = contrasena.type === 'password' ? 'open' : 'close';
  }

  /* ngOnInit(): void {
  } */

}
