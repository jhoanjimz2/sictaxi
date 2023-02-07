import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecretariaComponent } from './secretaria.component';
import { secretariaRoutes } from './secretaria.routes';

const routes: Routes = [
  {
    path: '',
    component: SecretariaComponent,
    children : secretariaRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretariaRoutingModule { }
