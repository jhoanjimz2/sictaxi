import { Routes } from "@angular/router";

export const rutas: Routes = [
  {
    path: 'estadisticas',
    loadChildren: () => import('./estadisticas/estadisticas.module').then( m => m.EstadisticasModule),
  },
  {
    path: 'buscar-conductores',
    loadChildren: () => import('./buscar-conductores/buscar-conductores.module').then( m => m.BuscarConductoresModule),
  },
  {
    path: 'agregar-conductor',
    loadChildren: () => import('./agregar-conductor/agregar-conductor.module').then( m => m.AgregarConductorModule),
  },
  {
    path: 'agregar-conductor/:id/:vinculacion',
    loadChildren: () => import('./agregar-conductor/agregar-conductor.module').then( m => m.AgregarConductorModule),
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosModule),
  },
  {
    path: 'perfil-de-empresa',
    loadChildren: () => import('./perfil-empresa/perfil-empresa.module').then( m => m.PerfilEmpresaModule),
  },
  {
    path: 'perfil-de-usuario',
    loadChildren: () => import('./perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioModule),
  },
  {
    path: 'fechas-vencidas',
    loadChildren: () => import('./fechas-vencidas/fechas-vencidas.module').then( m => m.FechasVencidasModule),
  },
  {
    path: 'parque-automotor',
    loadChildren: () => import('./parque-automotor/parque-automotor.module').then( m => m.ParqueAutomotorModule),
  },
  {
    path: 'alertas',
    loadChildren: () => import('./incidencias/incidencias.module').then( m => m.IncidenciasModule),
  },
  { path: '**', redirectTo: 'estadisticas', pathMatch: 'full' },
]