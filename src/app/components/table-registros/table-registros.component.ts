import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Paciente } from 'src/app/models/paciente.model';
import { PacientesService } from 'src/app/services/pacientes/pacientes.service';

@Component({
  selector: 'app-table-registros',
  templateUrl: './table-registros.component.html',
  styles: [
  ]
})
export class TableRegistrosComponent implements OnInit {
  
  @Input () _input: any; 
  @Output () _output: EventEmitter<any> = new EventEmitter();
  
  dataTable: Paciente[] = [];
  keysTable: String[] = [];
  
  
  constructor(private pacientesService: PacientesService) {
    
   }

  ngOnInit(): void {
    this.init();
  }

  async init(){
    let rawDataTable: any = await this.getPacientes();

    if(this._input=="home"){
      // listar ultimos 5
      rawDataTable = 
      rawDataTable.sort( (a: any, b: any) =>  
      new Date(b["fechaIngreso"]).getTime() - new Date(a["fechaIngreso"]).getTime() );
      rawDataTable = 
      rawDataTable.filter( (v: any, i: any) => i < 5 );
    }

    if(this._input=='detalle'){
      // solo mostrar paciente que coincida id por parametro URI
      console.log(location.href.split('/').pop());
      rawDataTable = rawDataTable.filter( 
        (paciente: any) => 
        paciente._id == location.href.split('/').pop()
        );
    }
    
    console.log(rawDataTable);
    rawDataTable.map( (paciente: Paciente) => 
      this.dataTable.push(paciente)
    );
    rawDataTable[0] ?
    this.keysTable = Object.keys(rawDataTable[0]).filter(key=>key!="fotoPersonal"):
    null;       
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

  getCellValue(key: any, item: any){
    return item[key];
  }

 

}
