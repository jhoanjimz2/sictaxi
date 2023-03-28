import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { dataGrafica2 } from 'src/assets/data/estadisticas';
import { Grafica } from '../../../../interfaces/estadisticas';

@Component({
  selector: 'app-card-grafica-educacion',
  templateUrl: './card-grafica-educacion.component.html',
  styleUrls: ['./card-grafica-educacion.component.scss']
})
export class CardGraficaEducacionComponent implements OnInit {
  chart: any;
  dataGrafica2: Grafica[] = dataGrafica2;
  ngOnInit(): void {
    let data: any = dataGrafica2.map(item => { return item.value;});
    let backgroundColor: any = dataGrafica2.map(item => { return item.color;});
    let labels: any = dataGrafica2.map(item => { return item.name;});
    this.createChart(data, backgroundColor, labels);
  }
  createChart(data: [], backgroundColor: [], labels: []){
    this.chart = new Chart("ChartEducacion", {
      type: 'doughnut',
      data: { datasets: [ { data, backgroundColor ,hoverOffset: 4 } ], labels },
      options: { 
        aspectRatio:2, 
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            mode: 'nearest',
            callbacks: {
              label: (context: any): string => {
                const total = context.dataset.data.reduce((a:number, b:number) => a + b, 0);
                const tooltipPercentage = Math.round((context.formattedValue / total) * 100);
                return context.label + ': ' + context.formattedValue + ' (' + tooltipPercentage + '%)';
              }
            } 
          }
        }
      },
    });
  }

}
