import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient.model';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients:Patient[];
  constructor(
    private patientService:PatientService
  ) { }

  ngOnInit(): void {
    this.patientService.patientsChange.subscribe(patients=>{
      this.patients = patients;
    })
  }
}
