import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import Chart from 'chart.js/auto';
import { Comentarios, GraficaComentarios } from 'src/app/interfaces';
import { dataGraficaComentariosNeg, dataComentarioN } from 'src/assets/data/estadisticas';


@Component({
  selector: 'app-card-grafica-comentarios-neg',
  templateUrl: './card-grafica-comentarios-neg.component.html',
  styleUrls: ['./card-grafica-comentarios-neg.component.scss']
})
export class CardGraficaComentariosNegComponent implements OnInit {
  comentariosN:Comentarios[] = dataComentarioN;
  typeGrafic: number = 1;
  dataGraficaComentariosN: GraficaComentarios = dataGraficaComentariosNeg;
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
    this.chart = new Chart("ChartComentariosN",  {
      type: 'line',
      data: this.dataGraficaComentariosN,
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