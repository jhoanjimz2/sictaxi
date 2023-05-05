import { Component } from '@angular/core';
import { Cards } from 'src/app/interfaces';
import { EstadisticasService } from '../../services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent {
  dataCards: Cards = new Cards();

  constructor(
    private loading: LoadingService,
    private eS: EstadisticasService
  ) {
    if(!loading.loading) loading.show();
    eS.getCards().subscribe({
      next: (data: Cards) => {
        this.dataCards = data;
        loading.hide();
      }, error: () => {
        loading.hide();
      }
    })
  }

}
