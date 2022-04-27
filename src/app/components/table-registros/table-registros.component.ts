import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Paciente } from 'src/app/models/paciente.model';
import { PacientesService } from 'src/app/services/pacientes/pacientes.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  originDataTable: Paciente[] = [];
  keysTable: String[] = [];
  
  public deletePacienteForm: FormGroup;
  displayTable: boolean = true;

  public updatePacienteForm: FormGroup;

  constructor(private pacientesService: PacientesService, private fb: FormBuilder, private router: Router) {
    this.deletePacienteForm = this.fb.group({
      id: ['', Validators.required ]
    });
    this.updatePacienteForm = this.fb.group({
      id: ['', Validators.required ]
    });
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
      const uriID = location.href.split('/').pop();
      console.log('detalle', uriID);
      this.deletePacienteForm.value.id = uriID;
      this.updatePacienteForm.value.id = uriID;
      rawDataTable = rawDataTable.filter( 
        (paciente: any) => 
        paciente._id == uriID
        );
    }
    
    console.log(rawDataTable);
    this._input != 'busqueda' ?
    rawDataTable.map( (paciente: Paciente) => 
      this.dataTable.push(paciente)
    ) : null;
    rawDataTable.map( (paciente: Paciente) => 
      this.originDataTable.push(paciente)
    );
    rawDataTable[0] ?
    this.keysTable = Object.keys(rawDataTable[0]).filter(key=>key!="fotoPersonal" && key!="__v"):
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

  async updatePaciente(){
    return this.router.navigate(['/registro/actualizar/'+this.updatePacienteForm.value.id])
  }

  async deletePaciente(){
    this.pacientesService.deletePaciente(this.deletePacienteForm.value.id).subscribe( 
      response => {
        console.log("success deletePaciente() ", response);
        this.router.navigate(['/registro/listar'])     
      },
      error => {
        console.log("error deletePaciente() ", error);
      }
    )
  } 

  async toSearch(type: any){

    console.log('toSearch', type);

    if(type=='sexo'){
      this.dataTable = this.originDataTable.filter( 
        paciente => paciente.sexo == (<HTMLInputElement>document.querySelector('#input-sexo')).value
        );
     }
     if(type=='enfermedad'){
      this.dataTable = this.originDataTable.filter( 
        paciente => paciente.enfermedad == (<HTMLInputElement>document.querySelector('#input-enfermedad')).value
        );
     }

     if(type=='fechaIngreso'){
      this.dataTable = this.originDataTable.filter( 
        paciente => 
        new Date(paciente.fechaIngreso).toISOString().split('T')[0]
        ==
        (<HTMLInputElement>document.querySelector('#input-fechaIngreso')).value 
        );
     }

  }

  viewImg(event: any){

    console.log('viewImg', event);

    (<HTMLInputElement>document.querySelector('#ver-foto-icon-'+event._id)) ?
    (<HTMLInputElement>document.querySelector('#ver-foto-icon-'+event._id)).style.display = 'none'
    :null;
    
    (<HTMLInputElement>document.querySelector('#ver-foto-img-'+event._id)) ?
    (<HTMLInputElement>document.querySelector('#ver-foto-img-'+event._id)).style.display = 'block'
    :null;

  }

}
