import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenesPipe } from './imagenes.pipe';
import { TaxistasEasyPipe } from './taxistas-easy.pipe';
import { OrderDatePipe } from './order-date.pipe';
import { FechasVencidasPipe } from './fechas-vencidas.pipe';



@NgModule({
  declarations: [
    ImagenesPipe,
    TaxistasEasyPipe,
    OrderDatePipe,
    FechasVencidasPipe
  ],
  exports: [
    ImagenesPipe,
    TaxistasEasyPipe,
    OrderDatePipe,
    FechasVencidasPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
