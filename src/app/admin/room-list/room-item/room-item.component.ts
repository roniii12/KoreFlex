import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.css']
})
export class RoomItemComponent implements OnInit {

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
