import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  constructor() { }

  createPatientForm:FormGroup;
  fullName:FormControl;
  email:FormControl;
  @Output() close = new EventEmitter<void>();


  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(){
    
  }

  onClose(){
    this.close.emit();
  }

  private initForm(){
    let patFullName = "";
    let patEmail = "";
    let patUserName = "";
    let patPassword = "";
    this.createPatientForm = new FormGroup({
      fullName: new FormControl(patFullName, Validators.required),
      email: new FormControl(patEmail,[Validators.required,Validators.email]),
      username: new FormControl(patUserName, Validators.required),
      password: new FormControl(patPassword, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}/)])
    })
  }

}
