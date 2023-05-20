import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentosVencidosRoutingModule } from './documentos-vencidos-routing.module';
import { DocumentosVencidosComponent } from './documentos-vencidos.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DocumentosVencidosComponent
  ],
  imports: [
    CommonModule,
    DocumentosVencidosRoutingModule,
    SharedModule,
    PipesModule
  ]
})
export class DocumentosVencidosModule { }
