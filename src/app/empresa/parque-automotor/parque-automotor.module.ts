import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParqueAutomotorRoutingModule } from './parque-automotor-routing.module';
import { ParqueAutomotorComponent } from './parque-automotor.component';


@NgModule({
  declarations: [
    ParqueAutomotorComponent
  ],
  imports: [
    CommonModule,
    ParqueAutomotorRoutingModule
  ]
})
export class ParqueAutomotorModule { }
