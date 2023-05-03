import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RespListUsuarios, UsuarioList } from 'src/app/interfaces';
import { ModalCrearUsuarioComponent } from 'src/app/modals/modal-crear-usuario/modal-crear-usuario.component';
import { ModalEliminarUsuarioComponent } from 'src/app/modals/modal-eliminar-usuario/modal-eliminar-usuario.component';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  usuarios: UsuarioList[] = [];

  constructor(
    private loading: LoadingService,
    private eS: EstadisticasService,
    public dialog: MatDialog
  ) {
    this.cargarData();
  }

  cargarData() {
    this.loading.show();
    this.eS.getListUsers().subscribe({
      next: (data: RespListUsuarios) => {
        this.usuarios = data.result;
        this.loading.hide();
      }, error: (error: any) => {
        this.loading.hide();
        this.usuarios = [];
        this.loading.error(error.error.message);
      }
    })
  }

  eliminar(id: string) {
    const dialogRef = this.dialog.open(ModalEliminarUsuarioComponent, {data: { id }});
    dialogRef.afterClosed().subscribe(result => {});
  }
  editar(id: string) {
    const dialogRef = this.dialog.open(ModalCrearUsuarioComponent, {data: { id }});
    dialogRef.afterClosed().subscribe(result => {});
  }
  
}
