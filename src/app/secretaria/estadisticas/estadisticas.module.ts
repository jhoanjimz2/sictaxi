import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadisticasRoutingModule } from './estadisticas-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { EstadisticasComponent } from './estadisticas.component';

import { CardGraficaEducacionComponent } from './components/card-grafica-educacion/card-grafica-educacion.component';
import { CardGraficaEstratoComponent } from './components/card-grafica-estrato/card-grafica-estrato.component';
import { CardGraficaModelosComponent } from './components/card-grafica-modelos/card-grafica-modelos.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BarHoySemanaMesComponent } from './components/bar-hoy-semana-mes/bar-hoy-semana-mes.component';
import { ListTaxistasComponent } from './components/list-taxistas/list-taxistas.component';
import { PipesModule } from '../../pipes/pipes.module';
import { CardGraficaComentariosPosComponent } from './components/card-grafica-comentarios-pos/card-grafica-comentarios-pos.component';
import { CardGraficaComentariosNegComponent } from './components/card-grafica-comentarios-neg/card-grafica-comentarios-neg.component';
import { CardGraficaCalificacionesComponent } from './components/card-grafica-calificaciones/card-grafica-calificaciones.component';
import { CardReporteCalificacionesComponent } from './components/card-reporte-calificaciones/card-reporte-calificaciones.component';

@NgModule({
  declarations: [
    EstadisticasComponent,
    CardGraficaModelosComponent,
    CardGraficaEducacionComponent,
    CardGraficaEstratoComponent,
    BarHoySemanaMesComponent,
    ListTaxistasComponent,
    CardGraficaComentariosPosComponent,
    CardGraficaComentariosNegComponent,
    CardGraficaCalificacionesComponent,
    CardReporteCalificacionesComponent
  ],
  imports: [
    CommonModule,
    EstadisticasRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    PipesModule
  ]
})
export class EstadisticasModule { }
