import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriageComponent } from './containers/triage/triage.component';


const routes: Routes = [
  {
    path: '',
    component: TriageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TriageRoutingModule { }
