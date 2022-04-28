import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { NuevoRegistroComponent } from './nuevo-registro/nuevo-registro.component';
import { NewPatientComponent } from '../components/new-patient/new-patient.component';
import { TableRegistrosComponent } from '../components/table-registros/table-registros.component';
import { ListarRegistrosComponent } from './listar-registros/listar-registros.component';
import { ErrorComponent } from './error/error.component';
import { SearchComponent } from '../components/search/search.component';
import { BuscarRegistroComponent } from './buscar-registro/buscar-registro.component';
import { DetalleRegistroComponent } from './detalle-registro/detalle-registro.component';
import { ActualizarRegistroComponent } from './actualizar-registro/actualizar-registro.component';
import { BusquedaRegistroComponent } from './busqueda-registro/busqueda-registro.component';
import { ListarRegistroComponent } from './listar-registro/listar-registro.component';


@NgModule({
  declarations: [
    HomeComponent,
    NuevoRegistroComponent,
    NewPatientComponent,
    TableRegistrosComponent,
    ListarRegistrosComponent,
    ErrorComponent,
    SearchComponent,
    BuscarRegistroComponent,
    DetalleRegistroComponent,
    ActualizarRegistroComponent,
    BusquedaRegistroComponent,
    ListarRegistroComponent
  ],
  exports: [
    HomeComponent,
    NuevoRegistroComponent,
    NewPatientComponent,
    TableRegistrosComponent,
    ListarRegistrosComponent,
    ErrorComponent,
    SearchComponent,
    BuscarRegistroComponent,
    DetalleRegistroComponent,
    ActualizarRegistroComponent,
    BusquedaRegistroComponent,
    ListarRegistroComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class PagesModule { }
