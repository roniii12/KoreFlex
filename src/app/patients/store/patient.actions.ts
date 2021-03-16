import { createAction, props } from '@ngrx/store';
import { Patient } from 'src/app/models/patient.model';
import { Meeting } from '../../models/meeting.model';

export const fetchPatient = createAction(
  '[Patient] Fetch Patients'
);

export const setPatients = createAction(
  '[Patient] Set Patients',
  props<{ patients: Patient[] }>()
);

export const fetchPatientMeetings = createAction(
  '[Patient] Fetch Patients Meetings',
  props<{dateStart:Date,dateEnd:Date}>()
);

export const setPatientsMeetings = createAction(
  '[Patient] Set Patients Meetings',
  props<{ meetings: Meeting[] }>()
);

export const addPatient = createAction(
  '[Patient] Add Patient',
  props<{ patient: Patient }>()
);

export const addPatientSuccess = createAction(
  '[Patient] Add Patient Success',
  props<{ patient: Patient }>()
);

export const updatePatient = createAction(
  '[Patient] Update Patient',
  props<{ patient: Patient }>()
);

export const updatePatientSuccess = createAction(
  '[Patient] Update Patient Success',
  props<{ patient: Patient }>()
);

export const patientFail = createAction(
  '[Patient] Patient Fail',
  props<{errorMsg:string}>()
)
export const clearError = createAction(
  '[Patient] Clear Error'
)
