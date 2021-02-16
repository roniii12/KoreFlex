import { createAction, props } from '@ngrx/store';

export const loadTherapists = createAction(
  '[Therapist] Load Therapists'
);

export const loadTherapistsSuccess = createAction(
  '[Therapist] Load Therapists Success',
  props<{ data: any }>()
);

export const loadTherapistsFailure = createAction(
  '[Therapist] Load Therapists Failure',
  props<{ error: any }>()
);
