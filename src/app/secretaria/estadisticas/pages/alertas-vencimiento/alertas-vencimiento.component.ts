import { Component } from '@angular/core';
import { FechasVencidas, RespFechasVencidas } from 'src/app/interfaces';
import { DownloadService } from 'src/app/services/download.service';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-alertas-vencimiento',
  templateUrl: './alertas-vencimiento.component.html',
  styleUrls: ['./alertas-vencimiento.component.scss']
})
export class AlertasVencimientoComponent {

  fechasVencida: FechasVencidas[] = [];
  totalPages: number = 0;
  paginaActual: number = 0;
  buscar: string = '';

  constructor( 
    private loading: LoadingService,
    private eS: EstadisticasService,
    private download: DownloadService
  ) { this.pagina({ pagina: 1 }); }

  pagina({pagina}: any) {
    this.paginaActual = pagina;
    this.loading.show();
    this.eS.getDataDocumentosVencidos(pagina).subscribe({
      next: (data: RespFechasVencidas) => {
        this.totalPages = data.pages;
        this.fechasVencida = data.data;
        this.loading.hide();
      }, error: (error: any) => {
        this.totalPages = 0;
        this.fechasVencida = [];
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    })
  }
  exportar() {
    this.loading.show();
    this.eS.getExcelDocumentoVencidos().subscribe({
      next: (data: any) => {
        this.download.download(data, 'Fechas vencidas');
      }, error: (error: any) => {
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    })
  }
  buscando(event: string) {
    this.buscar = event.toUpperCase();
  }

}
