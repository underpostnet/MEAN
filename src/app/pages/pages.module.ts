import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { NuevoRegistroComponent } from './nuevo-registro/nuevo-registro.component';

@NgModule({
  declarations: [
    HomeComponent,
    NuevoRegistroComponent
  ],
  exports: [
    HomeComponent,
    NuevoRegistroComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class PagesModule { }
