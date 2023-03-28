import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoadingService } from '../../../../services/loading.service';
import { ModalEliminarEmpresaComponent } from '../../../../modals/modal-eliminar-empresa/modal-eliminar-empresa.component';
import { ModalCrearEmpresaComponent } from '../../../../modals/modal-crear-empresa/modal-crear-empresa.component';

@Component({
  selector: 'app-empresas-autorizadas',
  templateUrl: './empresas-autorizadas.component.html',
  styleUrls: ['./empresas-autorizadas.component.scss']
})
export class EmpresasAutorizadasComponent {

  constructor( 
    private loading: LoadingService,
    public dialog: MatDialog
  ) {}

  pagina({pagina}: any) {
    this.loading.show();
    console.log(pagina)
    setTimeout(() => {
      this.loading.hide();
    }, 500)
  }

  editar(idEmpresa: string) {
    const dialogRef = this.dialog.open(ModalCrearEmpresaComponent, {
      data: { idEmpresa },
      height: '378.5px',
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  eliminar(idEmpresa: string) {
    const dialogRef = this.dialog.open(ModalEliminarEmpresaComponent, {
      data: { idEmpresa },
      height: '150px',
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
}
