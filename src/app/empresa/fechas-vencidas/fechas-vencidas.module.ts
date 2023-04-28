import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FechasVencidasRoutingModule } from './fechas-vencidas-routing.module';
import { FechasVencidasComponent } from './fechas-vencidas.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FechasVencidasComponent
  ],
  imports: [
    CommonModule,
    FechasVencidasRoutingModule,
    SharedModule,
    PipesModule
  ]
})
export class FechasVencidasModule { }
