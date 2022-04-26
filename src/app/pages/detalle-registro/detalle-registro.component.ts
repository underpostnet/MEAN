import { Component, OnInit } from '@angular/core';
import { PacientesService } from 'src/app/services/pacientes/pacientes.service';

@Component({
  selector: 'app-detalle-registro',
  templateUrl: './detalle-registro.component.html',
  styles: [
  ]
})
export class DetalleRegistroComponent implements OnInit {

  constructor(private pacientesService: PacientesService) { 
    
  }

  ngOnInit(): void {
  }

 

}
