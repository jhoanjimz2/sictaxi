import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { dataComentarioP, dataTaxistasQuejas, dataTaxistasBuenas, dataComentarioN } from 'src/assets/data/estadisticas';
import { Comentarios, TaxistaEasy } from '../../../../interfaces/estadisticas';

@Component({
  selector: 'app-card-reporte-calificaciones',
  templateUrl: './card-reporte-calificaciones.component.html',
  styleUrls: ['./card-reporte-calificaciones.component.scss']
})
export class CardReporteCalificacionesComponent {
  comentariosP:Comentarios[] = dataComentarioP;
  comentariosN:Comentarios[] = dataComentarioN;
  taxistasQuejas: TaxistaEasy[] = dataTaxistasQuejas;
  taxistasBuenas: TaxistaEasy[] = dataTaxistasBuenas;
  buscar: string = '';

  
  selectComent(event: any) {
    console.log(event)
  }
  selectDate(event: any) {
    console.log(event)
  }
  buscando(event: any) {
    this.buscar = event;
  }
}

