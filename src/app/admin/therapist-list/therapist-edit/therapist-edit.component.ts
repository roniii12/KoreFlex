import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-therapist-edit',
  templateUrl: './therapist-edit.component.html',
  styleUrls: ['./therapist-edit.component.css']
})
export class TherapistEditComponent implements OnInit {

  constructor() { }

  createTherapistForm:FormGroup;


  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(){}

  private initForm(){
    let therFullName = "";
    let therEmail = "";
    let therUserName = "";
    let therPassword = "";
    this.createTherapistForm = new FormGroup({
      fullName: new FormControl(therFullName, Validators.required),
      email: new FormControl(therEmail,[Validators.required,Validators.email]),
      username: new FormControl(therUserName, Validators.required),
      password: new FormControl(therPassword, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}/)])
    })
  }

}
