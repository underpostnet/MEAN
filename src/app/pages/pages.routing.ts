import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { NuevoRegistroComponent } from './nuevo-registro/nuevo-registro.component';
import { ListarRegistrosComponent } from './listar-registros/listar-registros.component';
import { ErrorComponent } from './error/error.component';
import { BuscarRegistroComponent } from './buscar-registro/buscar-registro.component';
import { DetalleRegistroComponent } from './detalle-registro/detalle-registro.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'registro/nuevo', component: NuevoRegistroComponent },
    { path: 'registro/detalle/:id', component: DetalleRegistroComponent },   
    { path: 'registro/buscar', component: BuscarRegistroComponent },    
    { path: 'listar-todos', component: ListarRegistrosComponent },
    { path: '**', component: ErrorComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


