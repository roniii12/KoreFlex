import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomItemComponent } from './room-list/room-item/room-item.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomEditComponent } from './room-edit/room-edit.component';
import { RoomsRoutingModule } from './therapists-routing.module';



@NgModule({
  declarations: [RoomsComponent, RoomListComponent, RoomItemComponent, RoomDetailsComponent, RoomEditComponent],
  imports: [
    CommonModule,
    RoomsRoutingModule
  ]
})
export class RoomsModule { }
