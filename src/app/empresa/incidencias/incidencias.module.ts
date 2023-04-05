import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidenciasRoutingModule } from './incidencias-routing.module';
import { IncidenciasComponent } from './incidencias.component';


@NgModule({
  declarations: [
    IncidenciasComponent
  ],
  imports: [
    CommonModule,
    IncidenciasRoutingModule
  ]
})
export class IncidenciasModule { }
