import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarConductoresRoutingModule } from './buscar-conductores-routing.module';
import { BuscarConductoresComponent } from './buscar-conductores.component';


@NgModule({
  declarations: [
    BuscarConductoresComponent
  ],
  imports: [
    CommonModule,
    BuscarConductoresRoutingModule
  ]
})
export class BuscarConductoresModule { }
