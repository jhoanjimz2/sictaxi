import { Component } from '@angular/core';
import { RespTaxisSoatVencido, TaxiSoatVencido } from 'src/app/interfaces/taxis-soat-vencido';
import { DownloadService } from 'src/app/services/download.service';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-taxis-soat-vencido',
  templateUrl: './taxis-soat-vencido.component.html',
  styleUrls: ['./taxis-soat-vencido.component.scss']
})
export class TaxisSoatVencidoComponent {

  taxis!: TaxiSoatVencido[];
  totalPages: number = 0;
  paginaActual: number = 0;
  
  constructor( 
    private loading: LoadingService,
    private eS: EstadisticasService,
    private download: DownloadService
    ) {
      this.pagina({pagina: 1});
    }
    
  pagina({pagina}: any) {
    this.paginaActual = pagina;
    this.loading.show();
    this.eS.getTaxisSoatVencido(pagina).subscribe({
      next: (data: RespTaxisSoatVencido) => {
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
    this.eS.getExcelTaxiSoatVencidoExcel().subscribe({
      next: (data: any) => {
        this.download.download(data, 'Taxis Soat Vencido');
      }, error: (error: any) => {
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    })
  }

}
