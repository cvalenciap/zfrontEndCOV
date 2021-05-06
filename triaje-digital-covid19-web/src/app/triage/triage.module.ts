import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TriageRoutingModule } from './triage-routing.module';
import { TriageComponent } from './containers/triage/triage.component';
import { SharedModule } from '../shared/shared.module';
import { InformationRecordComponent } from './components/information-record/information-record.component';
import { CareAdviceComponent } from './components/care-advice/care-advice.component';
import { ProtocolsComponent } from './components/protocols/protocols.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { MatDatepicker } from '@angular/material/datepicker';


@NgModule({
  declarations: [TriageComponent, InformationRecordComponent, CareAdviceComponent, ProtocolsComponent, QuestionsComponent],
  imports: [
    CommonModule,
    TriageRoutingModule,
    SharedModule
  ],
  providers: [MatDatepicker]
})
export class TriageModule { }
