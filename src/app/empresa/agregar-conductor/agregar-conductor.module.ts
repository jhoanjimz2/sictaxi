import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarConductorRoutingModule } from './agregar-conductor-routing.module';
import { AgregarConductorComponent } from './agregar-conductor.component';


@NgModule({
  declarations: [
    AgregarConductorComponent
  ],
  imports: [
    CommonModule,
    AgregarConductorRoutingModule
  ]
})
export class AgregarConductorModule { }
