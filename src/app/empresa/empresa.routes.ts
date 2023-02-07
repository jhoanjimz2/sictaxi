import { Routes } from "@angular/router";
import { BuscarConductorComponent } from './components/buscar-conductor/buscar-conductor.component';
import { AgregarConductorComponent } from './components/agregar-conductor/agregar-conductor.component';
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import { PerfilEmpresaComponent } from "./components/perfil-empresa/perfil-empresa.component";
import { PerfilUsuarioComponent } from "./components/perfil-usuario/perfil-usuario.component";
import { FechasVencidasComponent } from "./components/fechas-vencidas/fechas-vencidas.component";
import { ParqueAutomotorComponent } from "./components/parque-automotor/parque-automotor.component";
import { IncidenciasComponent } from "./components/incidencias/incidencias.component";

export const empresaRoutes: Routes = [
  { path: 'buscar-conductor', component: BuscarConductorComponent },
  { path: 'agregar-conductor', component: AgregarConductorComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'perfil-empresa', component: PerfilEmpresaComponent },
  { path: 'perfil-usuario', component: PerfilUsuarioComponent },
  { path: 'fechas-vencidas', component: FechasVencidasComponent },
  { path: 'parque-automotor', component: ParqueAutomotorComponent },
  { path: 'incidencias', component: IncidenciasComponent },
  { path: '**', redirectTo: 'buscar-conductor', pathMatch: 'full' }
];