import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { TherapistListComponent } from './therapist-list/therapist-list.component';
import { TherapistEditComponent } from './therapist-list/therapist-edit/therapist-edit.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientEditComponent } from './patient-list/patient-edit/patient-edit.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomEditComponent } from './room-list/room-edit/room-edit.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminEditComponent } from './admin-list/admin-edit/admin-edit.component';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent,
    TherapistListComponent,
    TherapistEditComponent,
    PatientListComponent,
    PatientEditComponent,
    RoomListComponent,
    RoomEditComponent,
    AdminListComponent,
    AdminEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AdminModule { }
