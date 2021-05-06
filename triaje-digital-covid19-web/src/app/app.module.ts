import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BasicLayoutComponent } from './common/components/basic-layout/basic-layout.component';
import { BlankLayoutComponent } from './common/components/blank-layout/blank-layout.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { TopNavbarComponent } from './common/components/top-navbar/top-navbar.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ErrorDialogComponent } from './shared/error-dialog/error-dialog.component';
import { ContentDialogComponent } from './shared/';
import { AppPreloadingStrategy } from './app-preloading.strategy';
import { SharedModule } from './shared/shared.module';

/* import from angular material */
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

/* import services */
import {
  ApiService,
  AuthGuardInsideService,
  AuthGuardService,
  AuthService,
  MainService,
  ErrorDialogService
} from './services';

import { BasicAuthInterceptor, ErrorInterceptor } from './helpers';

/* import { OpenDialogDirective } from './directives/'; */

@NgModule({
  declarations: [
    AppComponent,
    BasicLayoutComponent,
    BlankLayoutComponent,
    FooterComponent,
    TopNavbarComponent,
    ErrorPageComponent,
    ErrorDialogComponent,
    ContentDialogComponent
    /* OpenDialogDirective */
  ],
  entryComponents: [
    ErrorDialogComponent,
    ContentDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SharedModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    AppPreloadingStrategy,
    ApiService,
    AuthGuardService,
    AuthGuardInsideService,
    AuthService,
    MainService,
    ErrorDialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
