import { Component } from '@angular/core';
import { Cards } from 'src/app/interfaces';
import { dataCards } from 'src/assets/data/estadisticas';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent {
  dataCards: Cards = dataCards;
}
