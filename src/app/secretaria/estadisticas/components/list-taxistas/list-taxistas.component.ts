import { Component, Input } from '@angular/core';
import { TaxistaEasy } from 'src/app/interfaces';
import { ModalQuejasTramitadasComponent } from '../../../../modals/modal-quejas-tramitadas/modal-quejas-tramitadas.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalFichaVinculacionComponent } from '../../../../modals/modal-ficha-vinculacion/modal-ficha-vinculacion.component';


@Component({
  selector: 'app-list-taxistas',
  templateUrl: './list-taxistas.component.html',
  styleUrls: ['./list-taxistas.component.scss']
})
export class ListTaxistasComponent {
  @Input() taxistas!: TaxistaEasy[];
  @Input() search!: string;
  @Input() evento: boolean = false;
  constructor( public dialog: MatDialog ) {}
  quejasTramitadas(idVinculacion: string) {
    if (!this.evento) return;
    const dialogRef = this.dialog.open(ModalQuejasTramitadasComponent, {
      data: { idVinculacion: idVinculacion },
      height: '450px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  datosConductor(idVinculacion: string) {
    const dialogRef = this.dialog.open(ModalFichaVinculacionComponent, {
      data: { idVinculacion: idVinculacion },
      height: '90%',
      width: '1000px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
}
