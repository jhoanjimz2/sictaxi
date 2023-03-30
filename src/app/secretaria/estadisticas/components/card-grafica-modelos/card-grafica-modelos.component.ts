import { Component } from '@angular/core';
import { Grafica } from 'src/app/interfaces';
import Chart from 'chart.js/auto';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-card-grafica-modelos',
  templateUrl: './card-grafica-modelos.component.html',
  styleUrls: ['./card-grafica-modelos.component.scss']
})
export class CardGraficaModelosComponent {
  chart: any;
  constructor( private eS: EstadisticasService) {
    eS.getModelos().subscribe({
      next: (data: Grafica[]) => {
        this.createChart(data);
      }
    });
  }
  createChart(_data: Grafica[]) {
    let data: any = _data.map(item => { return item.value;});
    let labels: any = _data.map(item => { return item.name;});
    let backgroundColor: any = _data.map(item => { return item.color;});
    let speedData = { labels, datasets: [ { data, backgroundColor } ] };
    let df = { display: false };
    this.chart = new Chart("ChartModelo",  {
      type: 'bar',
      data: speedData,
      options: { plugins: { legend: df }, scales: { y: { grid: df }, x: { grid: df } } }
    });
  }

}
