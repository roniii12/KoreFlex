import { Action, createReducer, on } from '@ngrx/store';
import { Therapist } from '../../models/therapist.model';

import * as TherapistActions from './therapist.actions'
import { Meeting } from '../../models/meeting.model';

export interface State {
  therapists:Therapist[];
  meetings:Meeting[];
  error:string;
}

export const initialState: State = {
  therapists:[],
  meetings:[],
  error:null
};


export const TherapistReducer = createReducer(
  initialState,
  on(TherapistActions.setTherapists,(state,action)=>({
    ...state,
    therapists:action.therapists,
    error:null
  })),
  on(TherapistActions.addTherapistSuccess,(state,action)=>({
    ...state,
    therapists:[...state.therapists, action.therapist],
    error:null
  })),
  on(TherapistActions.updateTherapistSuccess,(state,action)=>{
    let index;
    state.therapists.forEach((therapist,i)=>{
      if(therapist.id === action.therapist.id){
        index = i;
      }
    })
    if(!index)
      return{...state}
    const updatedTherapists = [...state.therapists];
    let updatedTherapist = {...action.therapist};
    updatedTherapists[index] = {...updatedTherapist}
    return{
      ...state,
      therapists:updatedTherapists,
      error:null
    }
  }),
  on(TherapistActions.setTherapistsMeetings,(state,action)=>({
    ...state,
    meetings:action.meetings,
    error:null
  })),
  on(TherapistActions.addMeetingSuccess,(state,action)=>({
    ...state,
    meeting:[...state.meetings,action.meeting]
  })),
  on(TherapistActions.updateMeetingSuccess,(state,action)=>{
    let index;
    state.meetings.forEach((meeting,i)=>{
      if(meeting.id===action.meeting.id){
        index=i;
        return;
      }
    });
    if(!index)
      return {...state};
    const updatedMeetings = [...state.meetings];
    const updatedMeeting = {...action.meeting};
    updatedMeetings[index] = updatedMeeting;
    return{
      ...state,
      meetings:updatedMeetings,
      error: null
    };
  }),
  on(TherapistActions.therapistFail, (state,action)=>({
    ...state,
    error:action.errorMsg
  })),
  on(TherapistActions.clearError,(state)=>({
    ...state,
    error:null
  }))
);

