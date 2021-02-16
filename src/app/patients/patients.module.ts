import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientItemComponent } from './patient-list/patient-item/patient-item.component';


@NgModule({
  declarations: [
    PatientsComponent,
    PatientDetailsComponent,
    PatientEditComponent,
    PatientListComponent,
    PatientItemComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule
  ]
})
export class PatientsModule { }
