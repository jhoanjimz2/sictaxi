import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { QuejaSiONoTramitada } from 'src/app/interfaces';
import { quejasNoTramitadas, quejasSiTramitadas } from 'src/assets/data/estadisticas';

export interface DialogData {
  idVinculacion: string;
}

@Component({
  selector: 'app-modal-quejas-tramitadas',
  templateUrl: './modal-quejas-tramitadas.component.html',
  styleUrls: ['./modal-quejas-tramitadas.component.scss']
})
export class ModalQuejasTramitadasComponent {

  estado: boolean = false;
  quejasNoTramitadas:QuejaSiONoTramitada[] = quejasNoTramitadas;
  quejasSiTramitadas:QuejaSiONoTramitada[] = quejasSiTramitadas;

  constructor(
    dialogRef: MatDialogRef<ModalQuejasTramitadasComponent>,
    @Inject(MAT_DIALOG_DATA) data: DialogData,
  ) {
    console.log(data.idVinculacion);
  }

}
