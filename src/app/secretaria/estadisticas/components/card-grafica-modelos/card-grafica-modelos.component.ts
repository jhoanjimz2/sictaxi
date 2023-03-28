import { Component, OnInit } from '@angular/core';
import { dataGrafica } from 'src/assets/data/estadisticas';
import { Grafica } from 'src/app/interfaces';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-card-grafica-modelos',
  templateUrl: './card-grafica-modelos.component.html',
  styleUrls: ['./card-grafica-modelos.component.scss']
})
export class CardGraficaModelosComponent implements OnInit{
  dataGrafica: Grafica[] = dataGrafica;
  chart: any;
  ngOnInit(): void {
    this.createChart();
  }
  createChart() {
    let data: any = dataGrafica.map(item => { return item.value;});
    let labels: any = dataGrafica.map(item => { return item.name;});
    let backgroundColor: any = dataGrafica.map(item => { return item.color;});
    let speedData = { labels, datasets: [ { data, backgroundColor } ] };
    this.chart = new Chart("ChartModelo",  {
      type: 'bar',
      data: speedData,
      options: {
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { display: false } },
          x: { grid: { display: false } }
        }
      }
    });
  }

}
