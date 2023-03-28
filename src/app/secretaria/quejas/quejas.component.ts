import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Comentarios } from 'src/app/interfaces';
import { ModalFichaVinculacionComponent } from 'src/app/modals/modal-ficha-vinculacion/modal-ficha-vinculacion.component';
import { ModalQuejasTramitadasComponent } from 'src/app/modals/modal-quejas-tramitadas/modal-quejas-tramitadas.component';
import { LoadingService } from 'src/app/services/loading.service';
import { dataComentarioN } from 'src/assets/data/estadisticas';
import { ModalBloquearConductorComponent } from '../../modals/modal-bloquear-conductor/modal-bloquear-conductor.component';

@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.scss']
})
export class QuejasComponent {
  
  comentariosN:Comentarios[] = dataComentarioN;

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
  datosConductor(idConductor: string) {
    const dialogRef = this.dialog.open(ModalFichaVinculacionComponent, {
      data: { idConductor },
      height: '90%',
      width: '1000px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
}
