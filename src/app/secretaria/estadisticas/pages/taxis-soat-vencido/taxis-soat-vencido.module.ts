import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxisSoatVencidoRoutingModule } from './taxis-soat-vencido-routing.module';
import { TaxisSoatVencidoComponent } from './taxis-soat-vencido.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TaxisSoatVencidoComponent
  ],
  imports: [
    CommonModule,
    TaxisSoatVencidoRoutingModule,
    SharedModule,
    PipesModule,
  ]
})
export class TaxisSoatVencidoModule { }
