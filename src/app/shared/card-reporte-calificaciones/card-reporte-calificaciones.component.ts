import { Component } from '@angular/core';
import * as moment from 'moment';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { ConductorConCalificacion, ReqEstadisticaConductores } from 'src/app/interfaces';
import { subWeeks } from 'date-fns';

@Component({
  selector: 'app-card-reporte-calificaciones',
  templateUrl: './card-reporte-calificaciones.component.html',
  styleUrls: ['./card-reporte-calificaciones.component.scss']
})
export class CardReporteCalificacionesComponent {
  tipo: string = localStorage.getItem('role')!.toString()

  buscar: string = '';

  cargandoN: boolean = false;
  taxistasN: ConductorConCalificacion[] = [];
  fechaFinalN = moment(new Date()).format("YYYY-MM-DD");
  fechaInicialN = moment(new Date(subWeeks(new Date(), 1))).format("YYYY-MM-DD");
  comentariosN: string[] = [];
  selectComentN(event: string[]) { 
    this.comentariosN = event; 
    if (this.tipo == 'Empresa') {}
    else if (this.tipo == 'Secretaria') {this.cargarTaxistasQuejas();} 
  }

  cargandoP: boolean = false;
  taxistasP: ConductorConCalificacion[] = [];
  fechaFinalP = moment(new Date()).format("YYYY-MM-DD");
  fechaInicialP = moment(new Date(subWeeks(new Date(), 1))).format("YYYY-MM-DD");
  comentariosP: string[] = [];
  selectComentP(event: string[]) { 
    this.comentariosP = event; 
    if (this.tipo == 'Empresa') {}
    else if (this.tipo == 'Secretaria') {this.cargarTaxistasBuenas();} 
  }

  constructor( private eS: EstadisticasService ) {
    if (this.tipo == 'Empresa') {}
    else if (this.tipo == 'Secretaria') {this.cargarTaxistasBuenas(); this.cargarTaxistasQuejas();} 
  }

  cargarTaxistasBuenas() {
    this.cargandoP = true;
    let comentarios = undefined;
    if ( this.comentariosP.length ) comentarios = this.comentariosP;
    let data: ReqEstadisticaConductores = {
      fechaFinal: this.fechaFinalP,
      fechaInicial: this.fechaInicialP,
      comentarios
    }
    this.eS.getConductoresBienCalificados(data).subscribe({
      next: (data: ConductorConCalificacion[]) => {
        this.taxistasP = data;
        this.cargandoP = false;
      }, error: () => {
        this.cargandoP = false;
        this.taxistasP = [];
      }
    })
  }
  cargarTaxistasQuejas() {
    this.cargandoN = true;
    let comentarios = undefined;
    if ( this.comentariosN.length ) comentarios = this.comentariosN;
    let data: ReqEstadisticaConductores = {
      fechaFinal: this.fechaFinalN,
      fechaInicial: this.fechaInicialN,
      comentarios
    }
    this.eS.getConductoresConQuejas(data).subscribe({
      next: (data: ConductorConCalificacion[]) => {
        this.taxistasN = data;
        this.cargandoN = false;
      }, error: () => {
        this.cargandoN = false;
        this.taxistasN = [];
      }
    })
  }
  selectDateP({start, end}: any) {
    this.fechaFinalP = moment(end).format("YYYY-MM-DD");
    this.fechaInicialP = moment(start).format("YYYY-MM-DD");
    if (this.tipo == 'Empresa') {}
    else if (this.tipo == 'Secretaria') {this.cargarTaxistasBuenas();} 
  }
  selectDateN({start, end}: any) {
    this.fechaFinalN = moment(end).format("YYYY-MM-DD");
    this.fechaInicialN = moment(start).format("YYYY-MM-DD");
    if (this.tipo == 'Empresa') {}
    else if (this.tipo == 'Secretaria') {this.cargarTaxistasQuejas();} 
  }
  buscando(event: any) {
    this.buscar = event;
  }
  
}

