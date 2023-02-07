import { Routes } from "@angular/router";
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { QuejasComponent } from './components/quejas/quejas.component';
import { BuscarConductorComponent } from './components/buscar-conductor/buscar-conductor.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PerfilUsuarioComponent } from "./components/perfil-usuario/perfil-usuario.component";
import { ParqueAutomotorComponent } from "./components/parque-automotor/parque-automotor.component";
import { IncidenciasComponent } from "./components/incidencias/incidencias.component";
import { ParametrosComponent } from './components/parametros/parametros.component';

export const secretariaRoutes: Routes = [
    { path: 'estadisticas', component: EstadisticasComponent },
    { path: 'quejas', component: QuejasComponent },
    { path: 'buscar-conductor', component: BuscarConductorComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'perfil-usuario', component: PerfilUsuarioComponent },
    { path: 'parque-automotor', component: ParqueAutomotorComponent },
    { path: 'incidencias', component: IncidenciasComponent },
    { path: 'parametros', component: ParametrosComponent },
    { path: '**', redirectTo: 'estadisticas', pathMatch: 'full' }
];