import { createAction, props } from '@ngrx/store';
import { Therapist } from '../../models/therapist.model';
import { Meeting } from '../../models/meeting.model';

export const fetchTherapist = createAction(
  '[Therapist] Fetch Therapists'
);

export const setTherapists = createAction(
  '[Therapist] Set Therapists',
  props<{ therapists: Therapist[] }>()
);


export const fetchTherapistMeetings = createAction(
  '[Therapist] Fetch Therapists Meetings',
  props<{dateStart:Date,dateEnd:Date}>()
  );

export const setTherapistsMeetings = createAction(
'[Therapist] Set Therapists Meetings',
props<{ meetings: Meeting[] }>()
);

export const addTherapist = createAction(
  '[Therapist] Add Therapist',
  props<{ therapist: Therapist }>()
);

export const addTherapistSuccess = createAction(
  '[Therapist] Add Therapist Success',
  props<{ therapist: Therapist }>()
);

export const addMeeting = createAction(
  '[Therapist] Add Meeting',
  props<{ meeting: Meeting, therapistId:string, patientId:string }>()
);

export const addMeetingSuccess = createAction(
  '[Therapist] Add Meeting Success',
  props<{ meeting: Meeting }>()
);

export const updateTherapist = createAction(
  '[Therapist] Update Therapist',
  props<{ therapist: Therapist }>()
);

export const updateTherapistSuccess = createAction(
  '[Therapist] Update Therapist Success',
  props<{ therapist: Therapist }>()
);

export const updateMeeting = createAction(
  '[Therapist] Update Meeting',
  props<{ meeting: Meeting }>()
);

export const updateMeetingSuccess = createAction(
  '[Therapist] Update Meeting Success',
  props<{ meeting: Meeting }>()
);

export const therapistFail = createAction(
  '[Therapist] Therapist Fail',
  props<{errorMsg:string}>()
)
export const clearError = createAction(
  '[Therapist] Clear Error'
)
