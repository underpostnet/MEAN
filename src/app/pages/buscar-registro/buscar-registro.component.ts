import { Component, OnInit } from '@angular/core';
import { PacientesService } from 'src/app/services/pacientes/pacientes.service';

@Component({
  selector: 'app-buscar-registro',
  templateUrl: './buscar-registro.component.html',
  styles: [
  ]
})
export class BuscarRegistroComponent implements OnInit {

  constructor(private pacientesService: PacientesService) { }

  ngOnInit(): void {
    this.init();
  }

  async init(){
    
  }


 

}
