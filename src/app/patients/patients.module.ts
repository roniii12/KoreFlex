import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientItemComponent } from './patient-list/patient-item/patient-item.component';
import { SharedModule } from '../shared/shared.module';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule} from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';




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
    ReactiveFormsModule,
    MatStepperModule,
    MatButtonModule,
    MatCardModule
  ],
  providers:[DatePipe,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    }
  ]
})
export class PatientsModule { }
