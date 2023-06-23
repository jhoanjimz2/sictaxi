import { Component } from '@angular/core';
import { Graficas, ReqGrafComentarios, RespGraficaComentarios } from 'src/app/interfaces';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
 import { subDays, subMonths } from 'date-fns';
import Chart from 'chart.js/auto';
import * as moment from 'moment';
import { LoadingService } from 'src/app/services/loading.service';
import { DownloadService } from 'src/app/services/download.service';


@Component({
  selector: 'app-card-grafica-comentarios-neg',
  templateUrl: './card-grafica-comentarios-neg.component.html',
  styleUrls: ['./card-grafica-comentarios-neg.component.scss']
})
export class CardGraficaComentariosNegComponent {
  formatGrafic: number = 1;
  typeGrafic: number = 2;
  dataGraficaComentariosNDias: Graficas = {} as Graficas;
  dataGraficaComentariosNMeses: Graficas = {} as Graficas;
  dataGraficaComentariosNAnhos: Graficas = {} as Graficas;
  chart: any;
  fechaFinal = moment(new Date()).format("YYYY-MM-DD");
  fechaInicial = moment(subMonths(new Date(), 1)).format("YYYY-MM-DD");
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
    private loading: LoadingService,
    private download: DownloadService
  ) { this.cargarData(); }

  cargarData(bandera = false) {
    this.loading.show();
    let comentarios = undefined;
    if (this.comentarios.length) comentarios = this.comentarios;
    let data: ReqGrafComentarios  = {
      type: 'NEGATIVE',
      fechaFinal: this.fechaFinal,
      fechaInicial: this.fechaInicial,
      comentarios
    }
    this.eS.getGraficaComentarios(data).subscribe({
      next: (data: RespGraficaComentarios[]) => {
        this.setDatasetsDias(data);
        this.setDatasetsMeses(data);
        this.setDatasetsAnhos(data);
        if ( bandera ) this.updateGrafica();
        else this.createChart();
      }, error: () => {
        this.loading.hide();
        this.loading.error('Error al cargar grafica');
      }
    })
  }

  setDatasetsDias(data: RespGraficaComentarios[]) {
    let fechas = data[0].graph.map( item => { return item.fecha })
    let datasets = data.map( item => {
      return { label: item.comentario, data: item.graph.map( item2 => { return item2.cantidad }) }
    });
    this.dataGraficaComentariosNDias.datasets = datasets;
    this.dataGraficaComentariosNDias.labels = fechas;
  }

  setDatasetsMeses(data: RespGraficaComentarios[]) {
    let stringFechas = data[0].graph.map( item => { return moment(item.fecha).format("YYYY-MM") })
    let setFechas = new Set(stringFechas);
    let fechas = [...setFechas];
    let arr: any = [];
    fechas.forEach(_fecha => {
      arr.push(data.map( item => {
        return { 
          label: item.comentario, 
          data: item.graph.filter(({fecha}) => moment(fecha).format("YYYY-MM") === moment(_fecha).format("YYYY-MM"))
        }
      }));
    })
    let _datasets: any[] = [];
    arr.map( (item:any) => {
      item.map((_item:any) => {
        var vare: any = {
          label: _item.label, 
          data: _item.data.map( (__item: any) => { return __item.cantidad })
        }
        var pre: any = {
          label: vare.label,
          data: [vare.data.reduce((a: number, b: number) => a + b, 0)]
        }
        var _pre = _datasets.find(element => element.label == pre.label)
        if (!_pre) _datasets.push(pre);
        else _pre.data.push(...pre.data)
      })
    })
    this.dataGraficaComentariosNMeses.datasets = _datasets;
    this.dataGraficaComentariosNMeses.labels = fechas;
  }


  setDatasetsAnhos(data: RespGraficaComentarios[]) {
    let stringFechas = data[0].graph.map( item => { return moment(item.fecha).format("YYYY") })
    let setFechas = new Set(stringFechas);
    let fechas = [...setFechas];
    let arr: any = [];
    fechas.forEach(_fecha => {
      arr.push(data.map( item => {
        return { 
          label: item.comentario, 
          data: item.graph.filter(({fecha}) => moment(fecha).format("YYYY") === moment(_fecha).format("YYYY"))
        }
      }));
    })
    let _datasets: any[] = [];
    arr.map( (item:any) => {
      item.map((_item:any) => {
        var vare: any = {
          label: _item.label, 
          data: _item.data.map( (__item: any) => { return __item.cantidad })
        }
        var pre: any = {
          label: vare.label,
          data: [vare.data.reduce((a: number, b: number) => a + b, 0)]
        }
        var _pre = _datasets.find(element => element.label == pre.label)
        if (!_pre) _datasets.push(pre);
        else _pre.data.push(...pre.data)
      })
    })
    this.dataGraficaComentariosNAnhos.datasets = _datasets;
    this.dataGraficaComentariosNAnhos.labels = fechas;
  }

  typeGrafica(number: number) {
    this.typeGrafic = number;
    if (number == 2) this.chart.config.type = "bar";
    else this.chart.config.type = "line";
    this.chart.update();
  }
  createChart() {
    let df = { display: false };
    this.chart = new Chart("ChartComentariosN",  {
      type: 'bar',
      data: 
        (this.formatGrafic == 1) ? this.dataGraficaComentariosNDias : 
        (this.formatGrafic == 2) ? this.dataGraficaComentariosNMeses : 
        (this.formatGrafic == 3) ? this.dataGraficaComentariosNAnhos : {} as Graficas,
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
    this.chart.config.options = {
      plugins: { legend: { display: false } },
      scales: {
        y: { grid: { display: false }, title:{ text: 'Número de quejas', display: true } },
        x: { grid: { display: false }, title: { 
          text: 
            (this.formatGrafic == 1) ? 'Días'  : 
            (this.formatGrafic == 2) ? 'Meses' : 
            (this.formatGrafic == 3) ? 'Años'  : null, 
          display: true 
        }}
      }
    };
    this.chart.config.data = 
      (this.formatGrafic == 1) ? this.dataGraficaComentariosNDias : 
      (this.formatGrafic == 2) ? this.dataGraficaComentariosNMeses : 
      (this.formatGrafic == 3) ? this.dataGraficaComentariosNAnhos : {} as Graficas,
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
  setFormat(type: number) {
    this.loading.show();
    this.formatGrafic = type;
    this.updateGrafica();
  }
  exportar() {
    this.loading.show();
    this.eS.exportDataGraphComentariosNegativos({ 
      fechaFinal: this.fechaFinal,
      fechaInicial: this.fechaInicial,
      comentarios: this.comentarios
    }).subscribe({
      next: (data: any) => {
        this.download.download(data, 'Reporte de comentarios negativos');
      }, error: (error: any) => {
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    })
  }
}