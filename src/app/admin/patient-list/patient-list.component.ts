import { style, transition, trigger, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
  animations:[
    trigger('showModal',[
      transition(":enter", [
        style({ opacity: 0 }),
        animate(100, style({ opacity: 1 }))
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate(150, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class PatientListComponent implements OnInit {

  constructor() { }
  isAppearWarningDelete:boolean = false;
  isEditMode:boolean = false

  ngOnInit(): void {
  }
  onCloseEdit(){
    this.isEditMode = false;
  }

  onEdit(){

  }

}
