import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { ParametrosComponent } from './parametros.component';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../pipes/pipes.module';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [
    ParametrosComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    SharedModule,
    PipesModule,
    MaterialModule
  ]
})
export class ParametrosModule { }
