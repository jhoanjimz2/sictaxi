import { Component } from '@angular/core';
import { Graficas, ReqGrafComentarios, RespGraficaComentarios } from 'src/app/interfaces';
import { subDays } from 'date-fns';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';
import Chart from 'chart.js/auto';
import * as moment from 'moment';

@Component({
  selector: 'app-card-grafica-comentarios-pos',
  templateUrl: './card-grafica-comentarios-pos.component.html',
  styleUrls: ['./card-grafica-comentarios-pos.component.scss']
})
export class CardGraficaComentariosPosComponent {
  typeGrafic: number = 1;
  dataGraficaComentariosP: Graficas = {} as Graficas;
  chart: any;

  fechaFinal = moment(new Date()).format("YYYY-MM-DD");
  fechaInicial = moment(subDays(new Date(), 8)).format("YYYY-MM-DD");
  comentarios: string[] = [];
  get seleccionados() { 
    return  this.chart?.data?.datasets?.map( (item: any) => { 
      return { 
        color: item.borderColor, 
        comentario: item.label, 
        cantidad: item.data.reduce((a: number, b: number) => a + b, 0)
      }
    })  
  }

  constructor( 
    private eS: EstadisticasService,
    private loading: LoadingService
  ) { this.cargarData(); }

  cargarData(bandera = false) {
    this.loading.show();
    let comentarios = undefined;
    if (this.comentarios.length) comentarios = this.comentarios;
    let data: ReqGrafComentarios  = {
      type: 'POSITIVE',
      fechaFinal: this.fechaFinal,
      fechaInicial: this.fechaInicial,
      comentarios
    }
    this.eS.getGraficaComentarios(data).subscribe({
      next: (data: RespGraficaComentarios[]) => {
        this.setLabels({ start: new Date(this.fechaInicial), end: new Date(this.fechaFinal)})
        this.setDatasets(data);
        if ( bandera ) this.updateGrafica();
        else this.createChart();
      }, error: () => {
        this.loading.hide();
        this.loading.error('Error al cargar grafica');
      }
    })
  }
  setDatasets(data: RespGraficaComentarios[]) {
    this.dataGraficaComentariosP.datasets = data.map( item => {
      return {
        label: item.comentario,
        data: item.graph.map( item2 => { return item2.cantidad })
      }
    });
  }
  setLabels({start, end}: { start: Date, end: Date }) {
    this.dataGraficaComentariosP.labels = [];
    while(end.getTime() >= start.getTime()){
      start.setDate(start.getDate() + 1);
      this.dataGraficaComentariosP.labels.push(moment(start).format("YYYY-MM-DD"));
    }
  }
  typeGrafica(number: number) {
    this.typeGrafic = number;
    if (number == 2) this.chart.config.type = "bar";
    else this.chart.config.type = "line";
    this.chart.update();
  }
  createChart() {
    let df = { display: false };
    this.chart = new Chart("ChartComentariosP",  {
      type: 'line',
      data: this.dataGraficaComentariosP,
      options: {
        plugins: { legend: df },
        scales: {
          y: { grid: df, title:{ text: 'Número de quejas', display: true } },
          x: { grid: df, ticks: { maxRotation: 90 }, title:{ text: 'Días', display: true } }
        }
      }
    });
  }
  updateGrafica() {
    this.chart.config.data = this.dataGraficaComentariosP;
    this.chart.update();
    this.loading.hide();
  }
  selectDate({start, end}: any) {
    this.fechaFinal = moment(end).format("YYYY-MM-DD");
    this.fechaInicial = moment(start).format("YYYY-MM-DD");
    this.cargarData(true);
  }
  selectComent(event: string[]) {
    this.comentarios = event;
    this.cargarData(true);
  }
}