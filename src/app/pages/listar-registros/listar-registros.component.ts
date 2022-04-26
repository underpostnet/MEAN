import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PacientesService } from 'src/app/services/pacientes/pacientes.service';

@Component({
  selector: 'app-listar-registros',
  templateUrl: './listar-registros.component.html',
  styles: [
  ]
})
export class ListarRegistrosComponent implements OnInit {

  public deletePacienteForm: FormGroup;
  displayTable: boolean = true;

  constructor(private fb: FormBuilder, private pacientesService: PacientesService) { 
    this.deletePacienteForm = this.fb.group({
      id: ['', Validators.required ]
    });
  }

  ngOnInit(): void {
  }

  async deletePaciente(){
    this.pacientesService.deletePaciente(this.deletePacienteForm.value.id).subscribe( 
      response => {
        console.log("success deletePaciente() ", response);
        this.displayTable = false;
        this.deletePacienteForm.reset();
        setTimeout( () => this.displayTable = true, 0);        
      },
      error => {
        console.log("error deletePaciente() ", error);
      }
    )
  } 

}
