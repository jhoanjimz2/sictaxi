import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenesPipe } from './imagenes.pipe';
import { TaxistasEasyPipe } from './taxistas-easy.pipe';



@NgModule({
  declarations: [
    ImagenesPipe,
    TaxistasEasyPipe
  ],
  exports: [
    ImagenesPipe,
    TaxistasEasyPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
