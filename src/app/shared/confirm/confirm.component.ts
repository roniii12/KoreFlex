import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
  animations:[
    trigger('showComponent',[
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
export class ConfirmComponent implements OnInit {

  constructor() { }

  @Input() title="אזהרה";
  @Input() message;
  isClosed = false;
  @Output() action = new EventEmitter<boolean>()

  ngOnInit(): void {
    this.isClosed=false;
  }
  onActionClick(isAccept:boolean){
    this.isClosed = true;
    setTimeout(() => {
      this.action.emit(isAccept);
    }, 150);
  }
}
