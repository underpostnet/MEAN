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
      path: "/listar-todos"
    },
    {
      name: "Buscar Registro", 
      path: "/"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
