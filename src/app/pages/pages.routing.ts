import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { NuevoRegistroComponent } from './nuevo-registro/nuevo-registro.component';
import { ListarRegistrosComponent } from './listar-registros/listar-registros.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'registro/nuevo', component: NuevoRegistroComponent },
    { path: 'listar-todos', component: ListarRegistrosComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


