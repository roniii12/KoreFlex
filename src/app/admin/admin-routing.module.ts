import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TherapistListComponent } from './therapist-list/therapist-list.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { RoomListComponent } from './room-list/room-list.component';
import { PatientEditComponent } from './patient-list/patient-edit/patient-edit.component';
import { TherapistEditComponent } from './therapist-list/therapist-edit/therapist-edit.component';

const routes: Routes = [
  {path:'',component:AdminComponent,children:[
    {path:'therapists', component:TherapistListComponent},
    {path: 'therapists/new', component: TherapistEditComponent},
    {path:'patients', component:PatientListComponent},
    {path:'patients/new',component:PatientEditComponent},
    {path:'rooms', component:RoomListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
