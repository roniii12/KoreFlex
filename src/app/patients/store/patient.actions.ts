import { createAction, props } from '@ngrx/store';

export const loadPatients = createAction(
  '[Patient] Load Patients'
);

export const loadPatientsSuccess = createAction(
  '[Patient] Load Patients Success',
  props<{ data: any }>()
);

export const loadPatientsFailure = createAction(
  '[Patient] Load Patients Failure',
  props<{ error: any }>()
);
