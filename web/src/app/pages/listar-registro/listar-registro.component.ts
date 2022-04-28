import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-registro',
  templateUrl: './listar-registro.component.html',
  styles: [
  ]
})
export class ListarRegistroComponent implements OnInit {

  constructor(private router: Router) { 
  
  }

  ngOnInit(): void {
    this.router.navigate(['/registro/listar-todos']);
  }  

}
