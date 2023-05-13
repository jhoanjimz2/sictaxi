import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilUsuarioRoutingModule } from './perfil-usuario-routing.module';
import { PerfilUsuarioComponent } from './perfil-usuario.component';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [
    PerfilUsuarioComponent
  ],
  imports: [
    CommonModule,
    PerfilUsuarioRoutingModule,
    PipesModule
  ]
})
export class PerfilUsuarioModule { }
