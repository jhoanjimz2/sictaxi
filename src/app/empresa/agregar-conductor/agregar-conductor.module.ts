import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarConductorRoutingModule } from './agregar-conductor-routing.module';
import { AgregarConductorComponent } from './agregar-conductor.component';
import { ConductorComponent } from './components/conductor/conductor.component';
import { InfoComplementariaComponent } from './components/info-complementaria/info-complementaria.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    AgregarConductorComponent,
    ConductorComponent,
    InfoComplementariaComponent,
    VehiculoComponent
  ],
  imports: [
    CommonModule,
    AgregarConductorRoutingModule,
    PipesModule
  ]
})
export class AgregarConductorModule { }
