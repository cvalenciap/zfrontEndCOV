import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicLayoutComponent } from './common/components/basic-layout/basic-layout.component';
import { BlankLayoutComponent } from './common/components/blank-layout/blank-layout.component';
import {ErrorPageComponent} from './error-page/error-page.component';

import {AuthGuardService} from './services/auth-guard.service';
import {AuthGuardInsideService} from './services/auth-guard-inside.service';

const routes: Routes = [
  {
    path: 'inicio', component: BasicLayoutComponent, canActivate: [AuthGuardInsideService],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { preload: true, delay: false }
  },
  {
    path: 'triaje',
    component: BasicLayoutComponent,
    canActivate: [AuthGuardService],
    loadChildren: () => import('./triage/triage.module').then(m => m.TriageModule),
    data: { preload: true, delay: false }
  },
  {
    path: 'paciente',
    component: BasicLayoutComponent,
    canActivate: [AuthGuardService],
    loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule),
    data: { preload: true, delay: false }
  },
  {
    path: 'doctor',
    component: BasicLayoutComponent,
    canActivate: [AuthGuardService],
    loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule),
    data: { preload: true, delay: false }
  },
  {
    path: 'autoridad',
    component: BasicLayoutComponent,
    canActivate: [AuthGuardService],
    loadChildren: () => import('./authority/authority.module').then(m => m.AuthorityModule),
    data: { preload: true, delay: false }
  },
  {
    path: 'reportes',
    component: BasicLayoutComponent,
    canActivate: [AuthGuardService],
    loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule),
    data: { preload: true, delay: false }
  },
  {
    path: 'login',
    component: BlankLayoutComponent,
    canActivate: [AuthGuardInsideService],
    loadChildren: () => import('./security/security.module').then(m => m.SecurityModule),
    data: { preload: true, delay: false }
  },
  {
    path: '',
    component: BlankLayoutComponent,
    canActivate: [AuthGuardService]
  },
  { path: 'error', component: ErrorPageComponent, canActivate: [AuthGuardInsideService] },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
