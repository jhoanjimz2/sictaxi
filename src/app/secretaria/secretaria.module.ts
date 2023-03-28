import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretariaRoutingModule } from './secretaria-routing.module';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    SecretariaRoutingModule,
    SharedModule
  ]
})
export class SecretariaModule { }
