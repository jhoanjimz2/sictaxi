import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FechasVencidasComponent } from './fechas-vencidas.component';

const routes: Routes = [{ path:'', component: FechasVencidasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FechasVencidasRoutingModule { }
