import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Graficas } from 'src/app/interfaces';
import { dataGraficaCalificaciones } from 'src/assets/data/estadisticas';

@Component({
  selector: 'app-card-grafica-calificaciones',
  templateUrl: './card-grafica-calificaciones.component.html',
  styleUrls: ['./card-grafica-calificaciones.component.scss']
})
export class CardGraficaCalificacionesComponent implements OnInit {
  typeGrafic: number = 1;
  dataGraficaCalificaciones: Graficas = dataGraficaCalificaciones;
  chart: any;
  ngOnInit(): void {
    this.createChart([]);
  }
  typeGrafica(number: number) {
    this.typeGrafic = number;
    if (number == 2) this.chart.config.type = "bar";
    else this.chart.config.type = "line";
    this.chart.update();
  }
  createChart(datasets: any) {
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
  }
  selectDate(event: any) {
    console.log(event)
  }
}
