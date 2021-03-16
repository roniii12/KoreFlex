import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { TherapistsRoutingModule } from './therapists-routing.module';
import { TherapistsComponent } from './therapists.component';
import { TherapistListComponent } from './therapist-list/therapist-list.component';
import { TherapistItemComponent } from './therapist-list/therapist-item/therapist-item.component';
import { TherapistDetailsComponent } from './therapist-details/therapist-details.component';
import { TherapistEditComponent } from './therapist-edit/therapist-edit.component';
import { SharedModule } from '../shared/shared.module';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
  declarations: [TherapistsComponent, TherapistListComponent, TherapistItemComponent, TherapistDetailsComponent, TherapistEditComponent],
  imports: [
    CommonModule,
    TherapistsRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatButtonModule,
    MatCardModule,
    MatAutocompleteModule
  ],
  providers:[DatePipe,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    }
  ]
})
export class TherapistsModule { }
