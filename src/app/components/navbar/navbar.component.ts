import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavBarComponent implements OnInit {
  
  
  dataNavBar: string[] = [
    "Home", "NuevoRegistro", "Listar Registros", "Buscar Registro"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
