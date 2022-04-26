import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Paciente } from 'src/app/models/paciente.model';
import { PacientesService } from 'src/app/services/pacientes/pacientes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  
  @Input () _input: any; 
  @Output () _output: EventEmitter<any> = new EventEmitter();
  

  
  constructor(private pacientesService: PacientesService) {
    
   }

  ngOnInit(): void {
    this.init();
  }

  async init(){
          
  }


 

}
