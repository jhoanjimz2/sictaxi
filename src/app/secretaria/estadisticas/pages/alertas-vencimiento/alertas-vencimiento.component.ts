import { Component } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-alertas-vencimiento',
  templateUrl: './alertas-vencimiento.component.html',
  styleUrls: ['./alertas-vencimiento.component.scss']
})
export class AlertasVencimientoComponent {

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
