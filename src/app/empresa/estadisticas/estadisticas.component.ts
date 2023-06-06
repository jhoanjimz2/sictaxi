import { Component } from '@angular/core';
import { CardsEmpresa } from 'src/app/interfaces';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent {
  dataCards: CardsEmpresa = {} as CardsEmpresa;

  constructor(
    private loading: LoadingService,
    private eS: EstadisticasService
  ) {
    if(!loading.loading) loading.show();
    eS.getCardsEmpresas().subscribe({
      next: (data: CardsEmpresa) => {
        this.dataCards = data;
        loading.hide();
      }, error: () => {
        loading.hide();
      }
    })
  }

}
