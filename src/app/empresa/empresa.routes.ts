import { Routes } from "@angular/router";

export const rutas: Routes = [
  {
    path: 'estadisticas',
    loadChildren: () => import('./estadisticas/estadisticas.module').then( m => m.EstadisticasModule),
  },
  { path: '**', redirectTo: 'estadisticas', pathMatch: 'full' },
]