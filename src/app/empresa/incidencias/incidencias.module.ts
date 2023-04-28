import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidenciasRoutingModule } from './incidencias-routing.module';
import { IncidenciasComponent } from './incidencias.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    IncidenciasComponent
  ],
  imports: [
    CommonModule,
    IncidenciasRoutingModule,
    SharedModule
  ]
})
export class IncidenciasModule { }
