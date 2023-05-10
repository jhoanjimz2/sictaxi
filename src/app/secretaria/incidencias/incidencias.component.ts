import { Component } from '@angular/core';
import { Alertas, RespAlertas } from 'src/app/interfaces/alertas';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.scss']
})
export class IncidenciasComponent {

  totalPages: number = 1;
  paginaActual: number = 1;
  alertas: Alertas[] = [];

  constructor( 
    private loading: LoadingService,
    private eS: EstadisticasService
  ) { this.pagina({ pagina: 1 }); }
  
  pagina({pagina}: any) {
    this.loading.show();
    this.paginaActual = pagina;
    this.eS.getObservaciones(pagina).subscribe({
      next: (data: RespAlertas) => {
        this.alertas = data.data;
        this.totalPages = data.pages;
        this.loading.hide();
      }, error: (error: any) => {
        this.totalPages = 1;
        this.alertas = [];
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    })
  }
}
