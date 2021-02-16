import { ActionReducerMap } from '@ngrx/store';

import * as fromPatients from '../patients/store/patient.reducer'
import * as fromRooms from '../rooms/store/room.reducer'
import * as fromTherapists from '../therapists/store/therapist.reducer'


export interface AppState {
  patients: fromPatients.State;
  rooms: fromRooms.State;
  therapists: fromTherapists.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  patients: fromPatients.patientReducer,
  rooms: fromRooms.roomReducer,
  therapists: fromTherapists.therapistReducer
}
