import { Component } from '@angular/core';
import { DownloadService } from 'src/app/services/download.service';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-fases-exportar',
  templateUrl: './fases-exportar.component.html',
  styleUrls: ['./fases-exportar.component.scss']
})
export class FasesExportarComponent {


  constructor(
    private loading: LoadingService,
    private download: DownloadService,
    private eS: EstadisticasService
  ) {}

  exportar(page: number) {
    this.loading.show();
    this.eS.getExcelDocumentoVencidos(page).subscribe({
      next: (data: any) => {
        this.loading.hide();
        this.download.download(data, `Documentos vencidos parte ${page}`);
      }, error: (error: any) => {
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    })
  }
}
