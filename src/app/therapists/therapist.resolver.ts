import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer'
import { TherapistService } from './therapist.service';

@Injectable({
  providedIn: 'root'
})
export class TherapistResolver implements Resolve<boolean> {
  constructor(
    private store: Store<fromApp.AppState>,
    private therapistService: TherapistService
  ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.therapistService.fetchTherapist();
    return of(true);
  }
}
