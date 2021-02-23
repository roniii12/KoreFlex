import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-therapist-list',
  templateUrl: './therapist-list.component.html',
  styleUrls: ['./therapist-list.component.css']
})
export class TherapistListComponent implements OnInit {

  constructor() { }
  isAppearWarningDelete:boolean = false;

  ngOnInit(): void {
  }

  onEdit(){

  }

}
