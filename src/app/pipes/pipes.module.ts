import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenesPipe } from './imagenes.pipe';
import { TaxistasEasyPipe } from './taxistas-easy.pipe';
import { OrderDatePipe } from './order-date.pipe';
import { FechasVencidasPipe } from './fechas-vencidas.pipe';
import { FechasVencidasEmpresaPipe } from './fechas-vencidas-empresa.pipe';



@NgModule({
  declarations: [
    ImagenesPipe,
    TaxistasEasyPipe,
    OrderDatePipe,
    FechasVencidasPipe,
    FechasVencidasEmpresaPipe
  ],
  exports: [
    ImagenesPipe,
    TaxistasEasyPipe,
    OrderDatePipe,
    FechasVencidasPipe,
    FechasVencidasEmpresaPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
