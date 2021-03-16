import { Action, createReducer, on } from '@ngrx/store';
import { Patient } from '../../models/patient.model';

import * as PatientActions from './patient.actions'
import { Meeting } from '../../models/meeting.model';

export interface State {
  patients:Patient[];
  meetings:Meeting[];
  error:string;
}

export const initialState: State = {
  patients:[],
  meetings:[],
  error:null
};


export const PatientReducer = createReducer(
  initialState,
  on(PatientActions.setPatients,(state,action)=>({
    ...state,
    patients:action.patients,
    error:null
  })),
  on(PatientActions.addPatientSuccess,(state,action)=>({
    ...state,
    patients:[...state.patients, action.patient],
    error:null
  })),
  on(PatientActions.updatePatientSuccess,(state,action)=>{
    let index;
    state.patients.forEach((patient,i)=>{
      if(patient.id === action.patient.id){
        index = i;
      }
    })
    if(!index)
      return{...state}
    const updatedPatients = [...state.patients];
    let updatedPatient = {...action.patient};
    updatedPatients[index] = {...updatedPatient}
    return{
      ...state,
      patients:updatedPatients,
      error:null
    }
  }),
  on(PatientActions.setPatientsMeetings,(state,action)=>({
    ...state,
    meetings:action.meetings,
    error:null
  })),
  on(PatientActions.patientFail, (state,action)=>({
    ...state,
    error:action.errorMsg
  })),
  on(PatientActions.clearError,(state)=>({
    ...state,
    error:null
  }))
);

