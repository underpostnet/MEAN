import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavBarComponent implements OnInit {
  
  
  dataNavBar = [
    {
      name: "Home", 
      path: "/"
    },
    {
      name:"NuevoRegistro", 
      path: "/registro/nuevo"
    },
    {
      name: "Listar Registros", 
      path: "/registro/listar-todos"
    },
    {
      name: "Buscar Registro", 
      path: "/registro/buscar"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
