import { Component } from '@angular/core';
import { RespTaxisChatarrizados, TaxiChatarrizado } from 'src/app/interfaces';
import { DownloadService } from 'src/app/services/download.service';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-matriculas-canceladas',
  templateUrl: './matriculas-canceladas.component.html',
  styleUrls: ['./matriculas-canceladas.component.scss']
})
export class MatriculasCanceladasComponent {

  taxis!: TaxiChatarrizado[];
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
    this.eS.getTaxisChatarrizados(pagina).subscribe({
      next: (data: RespTaxisChatarrizados) => {
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
    this.eS.getExcelChatarrizadosTaxiExcel().subscribe({
      next: (data: any) => {
        this.download.download(data, 'Matriculas Chatarrizadas');
      }, error: (error: any) => {
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    })
  }
}
