import { Component } from '@angular/core';
import { Cards } from 'src/app/interfaces';
import { EstadisticasService } from '../../services/estadisticas.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent {
  dataCards: Cards = new Cards();

  constructor(private eS: EstadisticasService) {
    eS.getCards().subscribe({
      next: (data: Cards) => {
        this.dataCards = data;
      }
    })
  }

}
