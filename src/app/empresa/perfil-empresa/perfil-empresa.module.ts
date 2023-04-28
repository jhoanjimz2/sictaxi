import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilEmpresaRoutingModule } from './perfil-empresa-routing.module';
import { PerfilEmpresaComponent } from './perfil-empresa.component';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    PerfilEmpresaComponent
  ],
  imports: [
    CommonModule,
    PerfilEmpresaRoutingModule,
    PipesModule
  ]
})
export class PerfilEmpresaModule { }
