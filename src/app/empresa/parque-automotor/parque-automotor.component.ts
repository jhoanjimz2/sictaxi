import { Component } from '@angular/core';
import { GetParqueAutomotor, Vehiculo } from 'src/app/interfaces/parque-automotor';
import { DownloadService } from 'src/app/services/download.service';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-parque-automotor',
  templateUrl: './parque-automotor.component.html',
  styleUrls: ['./parque-automotor.component.scss']
})
export class ParqueAutomotorComponent {
  
  vahiculos: Vehiculo[] = [];
  totalPages: number = 0;
  paginaActual: number = 0;
  filtro: string = '';
  
  constructor( 
    private loading: LoadingService,
    private eS: EstadisticasService,
    private download: DownloadService
  ) { this.pagina({ pagina: 1 }); }

  pagina({pagina}: any) {
    this.loading.show();
    this.paginaActual = pagina;
    this.eS.getVehiculosGeneral(pagina, this.filtro).subscribe({
      next: (data: GetParqueAutomotor) => {
        this.totalPages = data.pages;
        this.vahiculos = data.data;
        this.loading.hide();
      }, error: (error: any) => {
        this.totalPages = 0;
        this.vahiculos = [];
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    })
  }
  buscar(busca: string) {
    this.filtro = busca;
    this.pagina({ pagina: 1 });
  }
  exportar() {
    this.loading.show();
    this.eS.getParqueAutomotorExcel().subscribe({
      next: (data: any) => {
        this.download.download(data, 'Parque Automotor');
      }, error: (error: any) => {
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    })
  }
}