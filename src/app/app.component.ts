import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComentariosService } from './services/comentarios.service';
import { ModalInitCambiarPasswordComponent } from './modals/modal-init-cambiar-password/modal-init-cambiar-password.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sictaxi';
  constructor(
    private router: Router,
    private cS: ComentariosService,
    private dialog: MatDialog
  ) {
    this.cS.cargarComentarios();
    if (localStorage.getItem('role') == 'Secretaria') {
      this.router.navigateByUrl('/secretaria');
    } else {
      this.router.navigateByUrl('/empresa');
    }
    if (localStorage.getItem('user')) {
      if (JSON.parse(localStorage.getItem('user')!).solicitarCambioclave == 1) {
        this.cambiarPassword();
      }
    }
  }
  
  cambiarPassword() {
    const dialogRef = this.dialog.open(ModalInitCambiarPasswordComponent, {
      closeOnNavigation: false,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
}
