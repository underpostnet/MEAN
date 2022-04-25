import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Paciente } from 'src/app/models/paciente.model';
import { PacientesService } from 'src/app/services/pacientes/pacientes.service';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styles: [
  ]
})
export class NewPatientComponent implements OnInit {
  
  public pacienteForm: FormGroup;

  constructor(private fb: FormBuilder, private pacientesService: PacientesService) {

    this.pacienteForm = this.fb.group({
      nombre: ['', Validators.required ],
      rut: ['', Validators.required ],
      edad: ['', Validators.required ],
      fechaIngreso: ['', Validators.required],
      enfermedad: ['', Validators.required]
    });

   }

  ngOnInit(): void {

    
  }

  // eventos

  async savePaciente(){
    console.log("savePaciente", this.pacienteForm.value);
    console.log((<HTMLInputElement>document.querySelector('#input-revisado')).checked);
    console.log((<HTMLInputElement>document.querySelector('#input-sexo')).value);

    if(this.pacienteForm.invalid 
      ||
      (<HTMLInputElement>document.querySelector('#input-sexo')).value==''
      ){
      return alert('campos invalidos');
    }

    const postObj: Paciente = {
      ...this.pacienteForm.value,
      sexo: (<HTMLInputElement>document.querySelector('#input-sexo')).value,
      revisado: (<HTMLInputElement>document.querySelector('#input-revisado')).checked,
      fotoPersonal: ""
    };
    console.log(postObj);
    const request: any = await this.createPaciente(postObj);
    console.log('savePaciente() response', request); // .errors?
    if(request._id){

    }else{
      
    }
    

  }
  
  // servicios 
  
  async createPaciente(postObj: Paciente){
    return new Promise( (resolve, reject) => 
      this.pacientesService.postPaciente(postObj).subscribe( 
        response => {
          console.log("success postPaciente() ", response);
          resolve(response);
        },
        error => {
          console.log("error postPaciente() ", error);
          reject(error);
        }
      )
    )
  }

}
