import { Component } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.scss']
})
export class IncidenciasComponent {
  textarea: string = '';
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
