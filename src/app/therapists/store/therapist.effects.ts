import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import * as TherapistActions from './therapist.actions'
import { LoggingService } from '../../shared/logging.service';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { Therapist } from '../../models/therapist.model';
import { Meeting } from '../../models/meeting.model';


@Injectable()
export class TherapistEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private LoggingService: LoggingService
    ) {}

  handleError(errRes){
    this.LoggingService.printLog(errRes)
    let errorMessage = "An unknown error occurred"
    if(!errRes.error||!errRes.error.error)
      return of(TherapistActions.therapistFail({errorMsg: errorMessage}));
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
    return of(TherapistActions.therapistFail({errorMsg: errorMessage}));
  }

  fetchTherapist = createEffect(() => {
    return this.actions$.pipe(
      ofType(TherapistActions.fetchTherapist),
      switchMap(()=>{
        return this.http.get<Therapist[]>(
          'http://localhost:44321/therapists/all'
        ).pipe(
          map(therapists=>{
            return TherapistActions.setTherapists({therapists});
          }),
          catchError(errorRes=>{
            return this.handleError(errorRes);
          })
        )
      })
    )
  })
  addTherapist = createEffect(()=>{
    return this.actions$.pipe(
      ofType(TherapistActions.addTherapist),
      switchMap(action=>{
        return this.http.post<Therapist>(
          'http://localhost:44321/therapists/createTherapist',
          action.therapist
        ).pipe(
          map(therapist=>TherapistActions.addTherapistSuccess({therapist})),
          catchError(errorRes=>this.handleError(errorRes))
        );
      })
    );
  });
  updateTherapist = createEffect(()=>{
    return this.actions$.pipe(
      ofType(TherapistActions.updateTherapist),
      switchMap(action=>{
        return this.http.post<Therapist>(
          'http://localhost:44321/therapists/update',
          action.therapist
        ).pipe(
          map(therapist=>TherapistActions.updateTherapistSuccess({therapist})),
          catchError(errorRes=>this.handleError(errorRes))
        )
      })
    );
  });
  meetingTherapist = createEffect(()=>{
    return this.actions$.pipe(
      ofType(TherapistActions.fetchTherapistMeetings),
      switchMap(action=>{
        return this.http.post<Meeting[]>(
          'http://localhost:44321/therapists/meetings',
          {dateStart:action.dateStart,dateEnd:action.dateEnd}
        ).pipe(
          map(meetings=>TherapistActions.setTherapistsMeetings({meetings})),
          catchError(errorRes=>this.handleError(errorRes))
        )
      })
    );
  });
  addMeeting = createEffect(()=>{
    return this.actions$.pipe(
      ofType(TherapistActions.addMeeting),
      switchMap(action=>{
        return this.http.put<Meeting>(
          'http://localhost:44321/therapists/createMeeting',
          { therapistId:action.therapistId,
            patientId:action.patientId,
            meeting:action.meeting }
        ).pipe(
          map(meeting=>TherapistActions.addMeetingSuccess({meeting})),
          catchError(errorRes=>this.handleError(errorRes))
        )
      })
    );
  });
  updateMeeting = createEffect(()=>{
    return this.actions$.pipe(
      ofType(TherapistActions.updateMeeting),
      switchMap(action=>{
        return this.http.post<Meeting>(
          'http://localhost:44321/therapists/updateMeeting',
          action.meeting
        ).pipe(
          map(meeting=>TherapistActions.updateMeetingSuccess({meeting})),
          catchError(errorRes=>this.handleError(errorRes))
        )
      })
    );
  });
}
