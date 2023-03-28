import { Component } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-taxis-tarjeta-vigente',
  templateUrl: './taxis-tarjeta-vigente.component.html',
  styleUrls: ['./taxis-tarjeta-vigente.component.scss']
})
export class TaxisTarjetaVigenteComponent {
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
