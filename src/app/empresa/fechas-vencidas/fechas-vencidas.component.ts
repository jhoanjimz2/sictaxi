import { Component } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-fechas-vencidas',
  templateUrl: './fechas-vencidas.component.html',
  styleUrls: ['./fechas-vencidas.component.scss']
})
export class FechasVencidasComponent {
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
