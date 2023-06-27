import { Component, Input } from '@angular/core';
import { ConductorConCalificacion } from 'src/app/interfaces';
import { ModalQuejasTramitadasComponent } from 'src/app/modals/modal-quejas-tramitadas/modal-quejas-tramitadas.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalPerfilTaxistaComponent } from 'src/app/modals/modal-perfil-taxista/modal-perfil-taxista.component';
import { ModalBuenasCalificacionesComponent } from 'src/app/modals/modal-buenas-calificaciones/modal-buenas-calificaciones.component';


@Component({
  selector: 'app-list-taxistas',
  templateUrl: './list-taxistas.component.html',
  styleUrls: ['./list-taxistas.component.scss']
})
export class ListTaxistasComponent {
  @Input() taxistas!: ConductorConCalificacion[];
  @Input() search!: string;
  @Input() evento: boolean = false;
  @Input() cargando: boolean = false;
  constructor( public dialog: MatDialog ) {}
  calificaciones(idVinculacion: number) {
    let componente: any;
    if (this.evento) componente = ModalQuejasTramitadasComponent;
    else componente = ModalBuenasCalificacionesComponent;
    const dialogRef = this.dialog.open(componente, {
      data: { idVinculacion },
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
  message(resp: any) {
    if ( resp.length ) return false
    else return true
  }
}
