import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientItemComponent } from './patient-list/patient-item/patient-item.component';
import { SharedModule } from '../shared/shared.module';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




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
    PatientsRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers:[DatePipe,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},]
})
export class PatientsModule { }
