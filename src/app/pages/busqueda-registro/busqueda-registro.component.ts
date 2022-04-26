import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda-registro',
  templateUrl: './busqueda-registro.component.html',
  styles: [
  ]
})
export class BusquedaRegistroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const search = location.href.split('/').pop();
    this.router.navigate(['/registro/detalle/'+search]);
  }

}
