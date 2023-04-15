import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoadingService } from 'src/app/services/loading.service';
import { ModalPerfilTaxistaComponent } from '../../../../modals/modal-perfil-taxista/modal-perfil-taxista.component';
import { RespTaxistasSinLicencia, TaxistaSinLicencia } from 'src/app/interfaces';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { DownloadService } from 'src/app/services/download.service';


@Component({
  selector: 'app-taxistas-licencia-vencida',
  templateUrl: './taxistas-licencia-vencida.component.html',
  styleUrls: ['./taxistas-licencia-vencida.component.scss']
})
export class TaxistasLicenciaVencidaComponent {

  taxistas!: TaxistaSinLicencia[];
  totalPages: number = 0;

  constructor( 
    private loading: LoadingService,
    public dialog: MatDialog,
    private eS: EstadisticasService,
    private download: DownloadService
  ) {
    this.pagina({ pagina: 1 });
  }
  pagina({pagina}: any) {
    this.loading.show();
    this.eS.getTaxistasSinLicencia(pagina).subscribe({
      next: (data: RespTaxistasSinLicencia) => {
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
    this.eS.getExcelConductoresSinLicenciaExcel().subscribe({
      next: (data: any) => {
        this.download.download(data, 'Taxistas Sin Licencia');
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
