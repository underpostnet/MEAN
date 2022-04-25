import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { NuevoRegistroComponent } from './nuevo-registro/nuevo-registro.component';
import { NewPatientComponent } from '../components/new-patient/new-patient.component';
import { TableRegistrosComponent } from '../components/table-registros/table-registros.component';
import { ListarRegistrosComponent } from './listar-registros/listar-registros.component';


@NgModule({
  declarations: [
    HomeComponent,
    NuevoRegistroComponent,
    NewPatientComponent,
    TableRegistrosComponent,
    ListarRegistrosComponent
  ],
  exports: [
    HomeComponent,
    NuevoRegistroComponent,
    NewPatientComponent,
    TableRegistrosComponent,
    ListarRegistrosComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class PagesModule { }
