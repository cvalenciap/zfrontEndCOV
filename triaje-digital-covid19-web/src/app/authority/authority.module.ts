import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorityRoutingModule } from './authority-routing.module';
import { AuthorityComponent } from './containers/authority/authority.component';


@NgModule({
  declarations: [AuthorityComponent],
  imports: [
    CommonModule,
    AuthorityRoutingModule
  ]
})
export class AuthorityModule { }
