import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

import { Therapist } from '../models/therapist.model';
import * as fromApp from '../store/app.reducer'
import * as TherapistActions from './store/therapist.actions'


@Injectable({
  providedIn: 'root'
})
export class TherapistService {

  constructor(
    private store:Store<fromApp.AppState>
  ) { }
  therapistsChange = new BehaviorSubject<Therapist[]>([]);
  errorChange = new Subject<string>();
  subscription:Subscription;
  private therapists:Therapist[]

  public fetchTherapist(){
    this.store.dispatch(
      TherapistActions.fetchTherapist()
    );
    this.subscription = this.store.select('therapists')
      .subscribe(therapistState=>{
        this.therapistsChange.next(therapistState.therapists);
      });
  }
  public createTherapist(therapist:Therapist){
    this.store.dispatch(
      TherapistActions.addTherapist({therapist})
    );
  }
  public updateTherapist(therapist:Therapist){
    this.store.dispatch(
      TherapistActions.updateTherapist({therapist})
    )
  }
}
