import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarCardComponent } from './side-bar-card/side-bar-card.component';
import { ContainerComponent } from './container/container.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddIconComponent } from './add-icon/add-icon.component';



@NgModule({
  declarations: [
  SideBarComponent,
  SideBarCardComponent,
  ContainerComponent,
  ConfirmComponent,
  AddIconComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    SideBarComponent,
    SideBarCardComponent,
    ContainerComponent,
    ConfirmComponent,
    AddIconComponent
  ],
  providers:[DatePipe]
})
export class SharedModule { }
