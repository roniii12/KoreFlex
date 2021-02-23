import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'admin' ,pathMatch:'full'},
  {path: 'admin', loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path: 'patients', loadChildren:()=>import('./patients/patients.module').then(m=>m.PatientsModule)},
  {path: 'therapists', loadChildren: ()=>import('./therapists/therapists.module').then(m=>m.TherapistsModule)},
  {path: 'rooms', loadChildren: ()=>import('./rooms/rooms.module').then(m=>m.RoomsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
