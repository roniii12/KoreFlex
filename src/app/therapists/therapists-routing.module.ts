import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TherapistsComponent } from './therapists.component';

const routes: Routes = [
  {path:'',component:TherapistsComponent,children:[
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TherapistsRoutingModule { }
