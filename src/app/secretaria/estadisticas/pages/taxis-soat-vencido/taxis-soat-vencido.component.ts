import { Component } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-taxis-soat-vencido',
  templateUrl: './taxis-soat-vencido.component.html',
  styleUrls: ['./taxis-soat-vencido.component.scss']
})
export class TaxisSoatVencidoComponent {

  constructor( 
    private loading: LoadingService
  ) {}

  pagina({pagina}: any) {
    this.loading.show();
    console.log(pagina)
    setTimeout(() => {
      this.loading.hide();
    }, 500)
  }

}
