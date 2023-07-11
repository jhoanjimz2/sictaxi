import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RespTaxistasRegistrados } from 'src/app/interfaces';
import { ModalPerfilTaxistaComponent } from 'src/app/modals/modal-perfil-taxista/modal-perfil-taxista.component';
import { DownloadService } from 'src/app/services/download.service';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-taxistas-registrados',
  templateUrl: './taxistas-registrados.component.html',
  styleUrls: ['./taxistas-registrados.component.scss']
})
export class TaxistasRegistradosComponent {

  taxistas!: any[];
  totalPages: number = 0;
  paginaActual: number = 0;
  
  constructor( 
    private loading: LoadingService,
    public dialog: MatDialog,
    private download: DownloadService,
    private eS: EstadisticasService
    ) {
      this.pagina({ pagina: 1 });
    }
  pagina({pagina}: any) {
    this.paginaActual = pagina;
    this.loading.show();
    this.eS.getTaxistasRegistrados(pagina).subscribe({
      next: (data: RespTaxistasRegistrados) => {
        this.totalPages = data.pages;
        this.taxistas = data.data;
        this.loading.hide();
      }, error: (error: any) => {
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    })
  }
  exportar() {
    this.loading.show();
    this.eS.getExcelConductoresRegistradosExcelNoPage().subscribe({
      next: (data: any) => {
        this.download.download(data, 'Taxistas Registrados');
      }, error: (error: any) => {
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    })
  }
  datosConductor(idConductor: number) {
    const dialogRef = this.dialog.open(ModalPerfilTaxistaComponent, {
      data: { idConductor },
      height: '90%',
      width: '1000px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }


}
