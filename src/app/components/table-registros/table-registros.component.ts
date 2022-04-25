import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente.model';
import { PacientesService } from 'src/app/services/pacientes/pacientes.service';

@Component({
  selector: 'app-table-registros',
  templateUrl: './table-registros.component.html',
  styles: [
  ]
})
export class TableRegistrosComponent implements OnInit {
  
  dataTable: String;
  
  
  constructor(private pacientesService: PacientesService) {
    this.dataTable = "no-data";
   }

  ngOnInit(): void {
    this.init();
  }

  async init(){
    this.dataTable = JSON.stringify(await this.getPacientes(), null, 4);
  }

  async getPacientes(){
    return new Promise( (resolve, reject) => 
      this.pacientesService.getPacientes().subscribe( 
        response => {
          console.log("success getPacientes() ", response);
          resolve(response);
        },
        error => {
          console.log("error getPacientes() ", error);
          reject(error);
        }
      )
    )
  }

 

}
