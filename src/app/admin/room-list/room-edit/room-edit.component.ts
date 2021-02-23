import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css']
})
export class RoomEditComponent implements OnInit {

  constructor() { }

  roomName:string="";

  @Output() addRoom = new EventEmitter<string>();

  ngOnInit(): void {
  }
  onAddRoom(){
    if(!this.roomName)
      return;
    this.addRoom.emit(this.roomName);
    this.roomName='';
  }
}
