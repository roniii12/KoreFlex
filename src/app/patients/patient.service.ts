import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

import { Patient } from '../models/patient.model';
import * as fromApp from '../store/app.reducer'
import * as PatientActions from './store/patient.actions'


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(
    private store:Store<fromApp.AppState>
  ) { }
  patientsChange = new BehaviorSubject<Patient[]>([]);
  errorChange = new Subject<string>();
  subscription:Subscription;
  private patients:Patient[]

  public fetchPatient(){
    this.store.dispatch(
      PatientActions.fetchPatient()
    );
    this.subscription = this.store.select('patients')
      .subscribe(patientState=>{
        this.patientsChange.next(patientState.patients);
      });
  }
  public createPatient(patient:Patient){
    this.store.dispatch(
      PatientActions.addPatient({patient})
    );
  }
  public updatePatient(patient:Patient){
    this.store.dispatch(
      PatientActions.updatePatient({patient})
    )
  }
}
