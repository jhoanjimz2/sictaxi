import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalQuejasTramitadasComponent } from 'src/app/modals/modal-quejas-tramitadas/modal-quejas-tramitadas.component';
import { LoadingService } from 'src/app/services/loading.service';
import { ModalBloquearConductorComponent } from '../../modals/modal-bloquear-conductor/modal-bloquear-conductor.component';
import { ModalPerfilTaxistaComponent } from 'src/app/modals/modal-perfil-taxista/modal-perfil-taxista.component';

@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.scss']
})
export class QuejasComponent {

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
  selectDate(event: any) {
    console.log(event)
  }
  selectComent(event: any) {
    console.log(event)
  }
  quejasTramitadas(idVinculacion: string) {
    const dialogRef = this.dialog.open(ModalQuejasTramitadasComponent, {
      data: { idVinculacion: idVinculacion },
      height: '450px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  bloquear(idVinculacion: string) {
    const dialogRef = this.dialog.open(ModalBloquearConductorComponent, {
      data: { idVinculacion }
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  datosConductor(idConductor: number) {
    const dialogRef = this.dialog.open(ModalPerfilTaxistaComponent, {
      data: { idConductor, completo: true },
      height: '90%',
      width: '1000px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
}
