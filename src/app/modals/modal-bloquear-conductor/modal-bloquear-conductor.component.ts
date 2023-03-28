import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  idVinculacion: string;
}

@Component({
  selector: 'app-modal-bloquear-conductor',
  templateUrl: './modal-bloquear-conductor.component.html',
  styleUrls: ['./modal-bloquear-conductor.component.scss']
})
export class ModalBloquearConductorComponent {

  constructor(
    dialogRef: MatDialogRef<ModalBloquearConductorComponent>,
    @Inject(MAT_DIALOG_DATA) data: DialogData,
  ) {
    console.log(data.idVinculacion);
  }

}
