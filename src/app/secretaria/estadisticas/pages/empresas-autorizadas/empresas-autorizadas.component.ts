import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoadingService } from '../../../../services/loading.service';
import { ModalEliminarEmpresaComponent } from '../../../../modals/modal-eliminar-empresa/modal-eliminar-empresa.component';
import { ModalCrearEmpresaComponent } from '../../../../modals/modal-crear-empresa/modal-crear-empresa.component';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { EmpresaAutorizada, RespEmpresasAutorizadas } from 'src/app/interfaces';
import { DownloadService } from 'src/app/services/download.service';

@Component({
  selector: 'app-empresas-autorizadas',
  templateUrl: './empresas-autorizadas.component.html',
  styleUrls: ['./empresas-autorizadas.component.scss']
})
export class EmpresasAutorizadasComponent {
  empresas!: EmpresaAutorizada[];
  totalPages: number = 0;
  paginaActual: number = 0;
  constructor( 
    private loading: LoadingService,
    public dialog: MatDialog,
    private eS: EstadisticasService,
    private download: DownloadService
  ) {
    this.pagina({ pagina: 1 });
  }
  pagina({pagina}: any, bandera = true) {
    this.paginaActual = pagina;
    if (bandera) this.loading.show();
    this.eS.getEmpresasAutorizadas(pagina).subscribe({
      next: (data: RespEmpresasAutorizadas) => {
        this.totalPages = data.pages;
        this.empresas = data.data;
        this.loading.hide();
      }, error: (error: any) => {
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    })
  }
  exportar() {
    this.loading.show();
    this.eS.getExcelEmpresasAutorizadas().subscribe({
      next: (data: any) => {
        this.download.download(data, 'Empresas Autorizadas');
      }, error: (error: any) => {
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    })
  }
  editar(id: number | null) {
    const dialogRef = this.dialog.open(ModalCrearEmpresaComponent, {
      data: { id },
      height: '378.5px',
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.pagina({ pagina: this.paginaActual }, false);
    });
  }
  eliminar(id: number) {
    const dialogRef = this.dialog.open(ModalEliminarEmpresaComponent, {
      data: { id },
      height: '150px',
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.pagina({ pagina: this.paginaActual }, false);
    });
  }
}
