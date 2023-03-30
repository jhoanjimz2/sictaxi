import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';
import { ValidarSecretariaGuard } from './guards/validar-secretaria.guard';
import { ValidarEmpresaGuard } from './guards/validar-empresa.guard';

const routes: Routes = [
  {
    path: 'secretaria',
    loadChildren: () => import('./secretaria/secretaria.module').then( m => m.SecretariaModule),
    canActivate: [ ValidarTokenGuard, ValidarSecretariaGuard  ],
    canLoad: [ ValidarTokenGuard, ValidarSecretariaGuard  ]
  },
  {
    path: 'empresa',
    loadChildren: () => import('./empresa/empresa.module').then( m => m.EmpresaModule),
    canActivate: [ ValidarTokenGuard, ValidarEmpresaGuard ],
    canLoad: [ ValidarTokenGuard, ValidarEmpresaGuard ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
  },
  { path: '**', redirectTo: 'auth', pathMatch: 'full' },
  { path: '', redirectTo: 'auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
