import { Component, OnInit } from '@angular/core';
import { PacientesService } from 'src/app/services/pacientes/pacientes.service';

@Component({
  selector: 'app-nuevo-registro',
  templateUrl: './nuevo-registro.component.html',
  styles: [
  ]
})
export class NuevoRegistroComponent implements OnInit {

  constructor(private pacientesService: PacientesService) { }

  ngOnInit(): void {
    this.init();
  }

  async init(){
    await this.getPacientes();
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
