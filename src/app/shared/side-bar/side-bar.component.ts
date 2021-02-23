import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }
  isAppearSideBar:boolean = false;
  ngOnInit(): void {

  }

  onIconClick(){
    this.isAppearSideBar = !this.isAppearSideBar;
  }

}
