import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilEmpresaRoutingModule } from './perfil-empresa-routing.module';
import { PerfilEmpresaComponent } from './perfil-empresa.component';


@NgModule({
  declarations: [
    PerfilEmpresaComponent
  ],
  imports: [
    CommonModule,
    PerfilEmpresaRoutingModule
  ]
})
export class PerfilEmpresaModule { }
