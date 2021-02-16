import { createAction, props } from '@ngrx/store';

export const loadRooms = createAction(
  '[Room] Load Rooms'
);

export const loadRoomsSuccess = createAction(
  '[Room] Load Rooms Success',
  props<{ data: any }>()
);

export const loadRoomsFailure = createAction(
  '[Room] Load Rooms Failure',
  props<{ error: any }>()
);
