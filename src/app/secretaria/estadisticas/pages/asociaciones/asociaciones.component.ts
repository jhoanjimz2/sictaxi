import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoadingService } from '../../../../services/loading.service';
import { ModalEliminarAsociacionComponent } from '../../../../modals/modal-eliminar-asociacion/modal-eliminar-asociacion.component';
import { ModalCrearAsociacionComponent } from '../../../../modals/modal-crear-asociacion/modal-crear-asociacion.component';


@Component({
  selector: 'app-asociaciones',
  templateUrl: './asociaciones.component.html',
  styleUrls: ['./asociaciones.component.scss']
})
export class AsociacionesComponent {

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

  editar(id: string) {
    const dialogRef = this.dialog.open(ModalCrearAsociacionComponent, {
      data: { id },
      height: '378.5px',
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  eliminar(id: string) {
    const dialogRef = this.dialog.open(ModalEliminarAsociacionComponent, {
      data: { id },
      height: '150px',
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

}
