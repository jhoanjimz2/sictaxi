import { Component } from '@angular/core';
import { subWeeks } from 'date-fns';
import { Graficas, RespGraficaCalificaciones } from 'src/app/interfaces';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';
import * as moment from 'moment';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-card-grafica-calificaciones',
  templateUrl: './card-grafica-calificaciones.component.html',
  styleUrls: ['./card-grafica-calificaciones.component.scss']
})
export class CardGraficaCalificacionesComponent {

  typeGrafic: number = 1;
  dataGraficaCalificaciones: Graficas = {} as Graficas;
  chart: any;
  fechaFinal = moment(new Date()).format("YYYY-MM-DD");
  fechaInicial = moment(subWeeks(new Date(), 1)).format("YYYY-MM-DD");

  constructor( 
    private eS: EstadisticasService,
    private loading: LoadingService
  ) { this.cargarData(); }

  cargarData(bandera = false) {
    this.loading.show();
    this.eS.getGraficaCalificaciones({ 
      fechaFinal: this.fechaFinal,
      fechaInicial: this.fechaInicial
    }).subscribe({
      next: (data: RespGraficaCalificaciones) => {
        this.setLabels({ start: new Date(this.fechaInicial), end: new Date(this.fechaFinal) })
        this.setDatasets( data );
        if ( bandera ) this.updateGrafica();
        else this.createChart();
      }, error: () => {
        this.loading.hide();
        this.loading.error('Error al cargar grafica');
      }
    });
  }
  setLabels({start, end}: { start: Date, end: Date }) {
    this.dataGraficaCalificaciones.labels = [];
    while(end.getTime() >= start.getTime()){
      start.setDate(start.getDate() + 1);
      this.dataGraficaCalificaciones.labels.push(moment(start).format("YYYY-MM-DD"));
    }
  }
  setDatasets(data: RespGraficaCalificaciones) {
    let pos = data.positive.map( item => { return item.cantidad });
    let neg = data.negative.map( item => { return item.cantidad });
    let datasets = [ { data: pos, label: 'Buenas Calificaciones'}, { data: neg, label: 'Malas  Calificaciones'} ]
    this.dataGraficaCalificaciones.datasets = datasets;
  }

  typeGrafica(number: number) {
    this.typeGrafic = number;
    if (number == 2) this.chart.config.type = "bar";
    else this.chart.config.type = "line";
    this.chart.update();
  }
  createChart() {
    this.chart = new Chart("ChartCalificaciones",  {
      type: 'line',
      data: this.dataGraficaCalificaciones,
      options: {
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { display: false }, title:{ text: 'Número de quejas', display: true } },
          x: { grid: { display: false }, title:{ text: 'Días', display: true } }
        }
      }
    });
    this.loading.hide();
  }
  updateGrafica() {
    this.chart.config.data = this.dataGraficaCalificaciones;
    this.chart.update();
    this.loading.hide();
  }
  selectDate({start, end}: any) {
    this.fechaFinal = moment(end).format("YYYY-MM-DD");
    this.fechaInicial = moment(start).format("YYYY-MM-DD");
    this.cargarData(true);
  }
}
