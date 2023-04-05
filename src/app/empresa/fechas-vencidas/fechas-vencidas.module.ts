import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FechasVencidasRoutingModule } from './fechas-vencidas-routing.module';
import { FechasVencidasComponent } from './fechas-vencidas.component';


@NgModule({
  declarations: [
    FechasVencidasComponent
  ],
  imports: [
    CommonModule,
    FechasVencidasRoutingModule
  ]
})
export class FechasVencidasModule { }
