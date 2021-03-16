import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-item',
  templateUrl: './patient-item.component.html',
  styleUrls: ['./patient-item.component.css']
})
export class PatientItemComponent implements OnInit {

  constructor() { }

  @Input() patientName

  ngOnInit(): void {
  }

}
