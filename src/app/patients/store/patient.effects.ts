import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import * as PatientActions from './patient.actions'
import { LoggingService } from '../../shared/logging.service';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { Patient } from '../../models/patient.model';
import { updatePatient } from './patient.actions';
import { Meeting } from '../../models/meeting.model';


@Injectable()
export class PatientEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private LoggingService: LoggingService
    ) {}

  handleError(errRes){
    this.LoggingService.printLog(errRes)
    let errorMessage = "An unknown error occurred"
    if(!errRes.error||!errRes.error.error)
      return of(PatientActions.patientFail({errorMsg: errorMessage}));
    switch(errRes.error.error.message.toUpperCase()){
      case 'UNAUTHORIZED':
        errorMessage = 'Please log out and log in back';
        break;
      case 'UNKNOWN_HERO':
        errorMessage = 'This hero did not found in DB';
        break;
      case 'MAX_DAY_TRAINING':
        errorMessage = 'This hero received today maximum of training number on day'
    }
    return of(PatientActions.patientFail({errorMsg: errorMessage}));
  }

  fetchPatient = createEffect(() => {
    return this.actions$.pipe(
      ofType(PatientActions.fetchPatient),
      switchMap(()=>{
        return this.http.get<Patient[]>(
          'http://localhost:44321/patients/all'
        ).pipe(
          map(patients=>{
            return PatientActions.setPatients({patients});
          }),
          catchError(errorRes=>{
            return this.handleError(errorRes);
          })
        )
      })
    )
  })
  addPatient = createEffect(()=>{
    return this.actions$.pipe(
      ofType(PatientActions.addPatient),
      switchMap(action=>{
        return this.http.post<Patient>(
          'http://localhost:44321/patients/createPatient',
          action.patient
        ).pipe(
          map(patient=>PatientActions.addPatientSuccess({patient})),
          catchError(errorRes=>this.handleError(errorRes))
        );
      })
    );
  });
  updatePatient = createEffect(()=>{
    return this.actions$.pipe(
      ofType(PatientActions.updatePatient),
      switchMap(action=>{
        return this.http.post<Patient>(
          'http://localhost:44321/patients/update',
          action.patient
        ).pipe(
          map(patient=>PatientActions.updatePatientSuccess({patient})),
          catchError(errorRes=>this.handleError(errorRes))
        )
      })
    );
  });
  meetingPatient = createEffect(()=>{
    return this.actions$.pipe(
      ofType(PatientActions.fetchPatientMeetings),
      switchMap(action=>{
        return this.http.post<Meeting[]>(
          'http://localhost:44321/patients/meetings',
          {dateStart:action.dateStart,dateEnd:action.dateEnd}
        ).pipe(
          map(meetings=>PatientActions.setPatientsMeetings({meetings})),
          catchError(errorRes=>this.handleError(errorRes))
        )
      })
    );
  });
}
