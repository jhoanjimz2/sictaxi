import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Usuario } from 'src/app/interfaces';
import { ModalCambiarImgProfileComponent } from 'src/app/modals/modal-cambiar-img-profile/modal-cambiar-img-profile.component';
import { ModalCambiarPasswordComponent } from 'src/app/modals/modal-cambiar-password/modal-cambiar-password.component';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent {

  get user(): Usuario { return JSON.parse(localStorage.getItem('user')!); }
  constructor( public dialog: MatDialog ) {}
  
  cambiarImg() {
    const dialogRef = this.dialog.open(ModalCambiarImgProfileComponent, {});
    dialogRef.afterClosed().subscribe(result => {});
  }
  cambiarPassword() {
    const dialogRef = this.dialog.open(ModalCambiarPasswordComponent, {});
    dialogRef.afterClosed().subscribe(result => {});
  }
}
