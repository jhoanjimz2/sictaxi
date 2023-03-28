import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import Chart from 'chart.js/auto';
import { Comentarios, GraficaComentarios } from 'src/app/interfaces';
import { dataGraficaComentariosPos, dataComentarioP } from 'src/assets/data/estadisticas';

@Component({
  selector: 'app-card-grafica-comentarios-pos',
  templateUrl: './card-grafica-comentarios-pos.component.html',
  styleUrls: ['./card-grafica-comentarios-pos.component.scss']
})
export class CardGraficaComentariosPosComponent implements OnInit {
  comentariosP:Comentarios[] = dataComentarioP;
  typeGrafic: number = 1;
  dataGraficaComentariosP: GraficaComentarios = dataGraficaComentariosPos;
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
    this.chart = new Chart("ChartComentariosP",  {
      type: 'line',
      data: this.dataGraficaComentariosP,
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
  selectComent(event: any) {
    console.log(event)
  }
}