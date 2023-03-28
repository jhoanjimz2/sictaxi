import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCrearUsuarioComponent } from 'src/app/modals/modal-crear-usuario/modal-crear-usuario.component';
import { ModalEliminarUsuarioComponent } from 'src/app/modals/modal-eliminar-usuario/modal-eliminar-usuario.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {

  constructor( public dialog: MatDialog ) {}

  eliminar(id: string) {
    const dialogRef = this.dialog.open(ModalEliminarUsuarioComponent, {data: { id }});
    dialogRef.afterClosed().subscribe(result => {});
  }
  editar(id: string) {
    const dialogRef = this.dialog.open(ModalCrearUsuarioComponent, {data: { id }});
    dialogRef.afterClosed().subscribe(result => {});
  }
  
}
