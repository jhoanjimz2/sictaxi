import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './empresa.component';
import { empresaRoutes } from './empresa.routes';

const routes: Routes = [
  {
    path: '',
    component: EmpresaComponent,
    children : empresaRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
