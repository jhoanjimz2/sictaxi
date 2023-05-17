import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConductorSearch, RespBuscarConductores } from 'src/app/interfaces';
import { ModalPerfilTaxistaComponent } from 'src/app/modals/modal-perfil-taxista/modal-perfil-taxista.component';
import { DownloadService } from 'src/app/services/download.service';
import { LoadingService } from 'src/app/services/loading.service';
import { SearchCondutoresService } from 'src/app/services/search-condutores.service';

@Component({
  selector: 'app-buscar-conductores',
  templateUrl: './buscar-conductores.component.html',
  styleUrls: ['./buscar-conductores.component.scss']
})
export class BuscarConductoresComponent {
  
  conductores: ConductorSearch[] = [];
  totalPages: number = 0;
  paginaActual: number = 0;
  filtro: string = '';
  
  constructor( 
    private loading: LoadingService,
    public dialog: MatDialog,
    private sC: SearchCondutoresService,
    private download: DownloadService
  ) { this.pagina({ pagina: 1 }); }

  pagina({pagina}: any) {
    this.loading.show();
    this.paginaActual = pagina;
    this.sC.getConductoresGeneralEmpresa(pagina, this.filtro, JSON.parse(localStorage.getItem('user')!).idempresa).subscribe({
      next: (data: RespBuscarConductores) => {
        this.totalPages = data.pages;
        this.conductores = data.data;
        this.loading.hide();
      }, error: (error: any) => {
        this.totalPages = 0;
        this.conductores = [];
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    })
  }
  buscar(busca: string) {
    this.filtro = busca;
    this.pagina({ pagina: 1 });
  }

  datosConductor(idVinculacion: string, idConductor: string) {
    const dialogRef = this.dialog.open(ModalPerfilTaxistaComponent, {
      data: { idConductor, idVinculacion, completo: true },
      height: '90%',
      width: '1000px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

}