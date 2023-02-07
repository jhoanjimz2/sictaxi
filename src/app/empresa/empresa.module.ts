import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaComponent } from './empresa.component';
import { AgregarConductorComponent } from './components/agregar-conductor/agregar-conductor.component';
import { BuscarConductorComponent } from './components/buscar-conductor/buscar-conductor.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PerfilEmpresaComponent } from './components/perfil-empresa/perfil-empresa.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { FechasVencidasComponent } from './components/fechas-vencidas/fechas-vencidas.component';
import { ParqueAutomotorComponent } from './components/parque-automotor/parque-automotor.component';
import { IncidenciasComponent } from './components/incidencias/incidencias.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    EmpresaComponent,
    AgregarConductorComponent,
    BuscarConductorComponent,
    UsuariosComponent,
    PerfilEmpresaComponent,
    PerfilUsuarioComponent,
    FechasVencidasComponent,
    ParqueAutomotorComponent,
    IncidenciasComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule
  ]
})
export class EmpresaModule { }
