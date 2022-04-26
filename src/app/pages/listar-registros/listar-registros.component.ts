import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacientesService } from 'src/app/services/pacientes/pacientes.service';

@Component({
  selector: 'app-listar-registros',
  templateUrl: './listar-registros.component.html',
  styles: [
  ]
})
export class ListarRegistrosComponent implements OnInit {

  constructor(private pacientesService: PacientesService, private router: Router) { 

  }

  ngOnInit(): void {
  }

}
