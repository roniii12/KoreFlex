import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TherapistsRoutingModule } from './therapists-routing.module';
import { TherapistsComponent } from './therapists.component';
import { TherapistListComponent } from './therapist-list/therapist-list.component';
import { TherapistItemComponent } from './therapist-list/therapist-item/therapist-item.component';
import { TherapistDetailsComponent } from './therapist-details/therapist-details.component';
import { TherapistEditComponent } from './therapist-edit/therapist-edit.component';


@NgModule({
  declarations: [TherapistsComponent, TherapistListComponent, TherapistItemComponent, TherapistDetailsComponent, TherapistEditComponent],
  imports: [
    CommonModule,
    TherapistsRoutingModule
  ]
})
export class TherapistsModule { }
