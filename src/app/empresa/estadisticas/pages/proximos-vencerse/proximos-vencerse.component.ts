import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FechasVencidasEmpresa, RespFechasVencidasEmpresas } from 'src/app/interfaces';
import { DownloadService } from 'src/app/services/download.service';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-proximos-vencerse',
  templateUrl: './proximos-vencerse.component.html',
  styleUrls: ['./proximos-vencerse.component.scss']
})
export class ProximosVencerseComponent {

  fechasVencida: FechasVencidasEmpresa[] = [];
  totalPages: number = 0;
  paginaActual: number = 0;
  buscar: string = '';
  prevImg = environment.apiImg;

  constructor( 
    private loading: LoadingService,
    private eS: EstadisticasService,
    private dialog: MatDialog,
    private download: DownloadService
  ) { this.pagina({ pagina: 1 }); }

  pagina({pagina}: any) {
    this.paginaActual = pagina;
    this.loading.show();
    this.eS.getDataProximosDocumentosVencidosEmpresa(pagina).subscribe({
      next: (data: RespFechasVencidasEmpresas) => {
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
    this.eS.getExcelProximosDocumentoVencerseEmpresa().subscribe({
      next: (data: any) => {
        this.download.download(data, 'Proximos a vencerse');
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
