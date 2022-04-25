import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Paciente } from 'src/app/models/paciente.model';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styles: [
  ]
})
export class NewPatientComponent implements OnInit {
  
  public pacienteForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.pacienteForm = this.fb.group({
      nombre: ['', Validators.required ]
    });

   }

  ngOnInit(): void {

    
  }

  savePaciente(){
    console.log("savePaciente", this.pacienteForm.value);

  }

}
