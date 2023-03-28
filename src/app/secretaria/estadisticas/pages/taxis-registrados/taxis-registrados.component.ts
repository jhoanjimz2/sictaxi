import { Component } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-taxis-registrados',
  templateUrl: './taxis-registrados.component.html',
  styleUrls: ['./taxis-registrados.component.scss']
})
export class TaxisRegistradosComponent {

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
