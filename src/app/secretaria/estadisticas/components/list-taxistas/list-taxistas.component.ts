import { Component, Input } from '@angular/core';
import { TaxistaEasy } from 'src/app/interfaces';
import { ModalQuejasTramitadasComponent } from '../../../../modals/modal-quejas-tramitadas/modal-quejas-tramitadas.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalPerfilTaxistaComponent } from 'src/app/modals/modal-perfil-taxista/modal-perfil-taxista.component';


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
  quejasTramitadas(idVinculacion: number) {
    if (!this.evento) return;
    const dialogRef = this.dialog.open(ModalQuejasTramitadasComponent, {
      data: { idVinculacion: idVinculacion },
      height: '450px',
      width: '600px',
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
