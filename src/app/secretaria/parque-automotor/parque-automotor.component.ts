import { Component } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-parque-automotor',
  templateUrl: './parque-automotor.component.html',
  styleUrls: ['./parque-automotor.component.scss']
})
export class ParqueAutomotorComponent {
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
