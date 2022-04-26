import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Paciente } from 'src/app/models/paciente.model';
import { PacientesService } from 'src/app/services/pacientes/pacientes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  
  @Input () _input: any; 
  @Output () _output: EventEmitter<any> = new EventEmitter();
  
  public searchPacienteForm: FormGroup;
  displayTable: boolean = true;

  constructor(private fb: FormBuilder, private pacientesService: PacientesService) { 
    this.searchPacienteForm = this.fb.group({
      id: ['', Validators.required ]
    });
  }

  ngOnInit(): void {
  }


  async searchPaciente(){
    console.log(this.searchPacienteForm.value);
  }

}
