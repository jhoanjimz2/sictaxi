import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'secretaria',
    loadChildren: () => import('./secretaria/secretaria.module').then( m => m.SecretariaModule),
  },
  { 
    path: '**', redirectTo: 'secretaria', pathMatch: 'full'
  },
  { 
    path: '', redirectTo: 'secretaria', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
