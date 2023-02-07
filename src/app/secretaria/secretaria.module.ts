import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretariaRoutingModule } from './secretaria-routing.module';
import { SecretariaComponent } from './secretaria.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { QuejasComponent } from './components/quejas/quejas.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { ParqueAutomotorComponent } from './components/parque-automotor/parque-automotor.component';
import { IncidenciasComponent } from './components/incidencias/incidencias.component';
import { ParametrosComponent } from './components/parametros/parametros.component';
import { BuscarConductorComponent } from './components/buscar-conductor/buscar-conductor.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    SecretariaComponent,
    EstadisticasComponent,
    QuejasComponent,
    UsuariosComponent,
    PerfilUsuarioComponent,
    ParqueAutomotorComponent,
    IncidenciasComponent,
    ParametrosComponent,
    BuscarConductorComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SecretariaRoutingModule
  ]
})
export class SecretariaModule { }
