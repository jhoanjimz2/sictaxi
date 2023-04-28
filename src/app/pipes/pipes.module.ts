import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenesPipe } from './imagenes.pipe';
import { TaxistasEasyPipe } from './taxistas-easy.pipe';
import { OrderDatePipe } from './order-date.pipe';



@NgModule({
  declarations: [
    ImagenesPipe,
    TaxistasEasyPipe,
    OrderDatePipe
  ],
  exports: [
    ImagenesPipe,
    TaxistasEasyPipe,
    OrderDatePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
