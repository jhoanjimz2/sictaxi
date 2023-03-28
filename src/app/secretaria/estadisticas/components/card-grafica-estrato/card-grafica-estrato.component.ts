import { Component, OnInit } from '@angular/core';
import { dataGrafica3 } from 'src/assets/data/estadisticas';
import { Grafica } from '../../../../interfaces/estadisticas';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-card-grafica-estrato',
  templateUrl: './card-grafica-estrato.component.html',
  styleUrls: ['./card-grafica-estrato.component.scss']
})
export class CardGraficaEstratoComponent implements OnInit {
  chart: any;
  dataGrafica3: Grafica[] = dataGrafica3;
  ngOnInit(): void {
    let data: any = dataGrafica3.map(item => { return item.value;});
    let backgroundColor: any = dataGrafica3.map(item => { return item.color;});
    let labels: any = dataGrafica3.map(item => { return item.name;});
    this.createChart(data, backgroundColor, labels);
  }
  createChart(data: [], backgroundColor: [], labels: []){
    this.chart = new Chart("ChartEstrato", {
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
