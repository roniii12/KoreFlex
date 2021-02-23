import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  constructor(
    // public mat:MatFormFieldControl
  ) { }

  @ViewChild('roomName') roomName:ElementRef
  name:string="";
  isAppearWarningDelete = false
  ngOnInit(): void {

  }
  onEdit(){
    this.roomName.nativeElement.focus();
  }
  onConfirmAction(isAccept:boolean){
    this.isAppearWarningDelete = false;
  }

}
