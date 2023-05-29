import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RespListUsuarios, UsuarioList } from 'src/app/interfaces';
import { ModalCrearUsuarioComponent } from 'src/app/modals/modal-crear-usuario/modal-crear-usuario.component';
import { ModalEliminarUsuarioComponent } from 'src/app/modals/modal-eliminar-usuario/modal-eliminar-usuario.component';
import { LoadingService } from 'src/app/services/loading.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  usuarios: UsuarioList[] = [];

  constructor(
    private loading: LoadingService,
    private uS: UsuariosService,
    public dialog: MatDialog
  ) {
    this.cargarData();
  }
  cargarData() {
    this.loading.show();
    this.uS.getListUsers().subscribe({
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
  eliminar(id: number) {
    const dialogRef = this.dialog.open(ModalEliminarUsuarioComponent, {data: { id }});
    dialogRef.afterClosed().subscribe(result => {
      if ( result ) this.cargarData();
    });
  }
  editar(id: number, type: boolean) {
    const dialogRef = this.dialog.open(ModalCrearUsuarioComponent, {data: { id, type }});
    dialogRef.afterClosed().subscribe(result => {
      if ( result ) this.cargarData();
    });
  }
}
