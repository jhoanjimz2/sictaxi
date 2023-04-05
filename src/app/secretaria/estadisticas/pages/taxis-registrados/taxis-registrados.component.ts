import { Component } from '@angular/core';
import { RespTaxisRegistrados, TaxiRegistrado } from 'src/app/interfaces';
import { DownloadService } from 'src/app/services/download.service';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-taxis-registrados',
  templateUrl: './taxis-registrados.component.html',
  styleUrls: ['./taxis-registrados.component.scss']
})
export class TaxisRegistradosComponent {

  taxis!: TaxiRegistrado[];
  totalPages: number = 0;

  constructor( 
    private loading: LoadingService,
    private eS: EstadisticasService,
    private download: DownloadService
  ) {
    this.pagina({pagina: 1});
  }

  pagina({pagina}: any) {
    this.loading.show();
    this.eS.getTaxisRegistrados(pagina).subscribe({
      next: (data: RespTaxisRegistrados) => {
        this.totalPages = data.pages;
        this.taxis = data.data;
        this.loading.hide();
      }, error: (error: any) => {
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    });
  }
  exportar() {
    this.loading.show();
    this.eS.getExcelTaxisRegistrados().subscribe({
      next: (data: any) => {
        this.download.download(data, 'Taxis Registrados');
      }, error: (error: any) => {
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    })
  }

}
