import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCambiarPasswordComponent } from '../../modals/modal-cambiar-password/modal-cambiar-password.component';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent {

  constructor( public dialog: MatDialog ) {}
  
  cambiarPassword() {
    const dialogRef = this.dialog.open(ModalCambiarPasswordComponent, {});
    dialogRef.afterClosed().subscribe(result => {});
  }
  
}
