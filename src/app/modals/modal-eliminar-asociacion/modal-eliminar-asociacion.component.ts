import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  id: string;
}

@Component({
  selector: 'app-modal-eliminar-asociacion',
  templateUrl: './modal-eliminar-asociacion.component.html',
  styleUrls: ['./modal-eliminar-asociacion.component.scss']
})
export class ModalEliminarAsociacionComponent {
  constructor(
    dialogRef: MatDialogRef<ModalEliminarAsociacionComponent>,
    @Inject(MAT_DIALOG_DATA) data: DialogData,
  ) {
    console.log(data.id);
  }
}
