import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  id: string;
}

@Component({
  selector: 'app-modal-eliminar-matricula',
  templateUrl: './modal-eliminar-matricula.component.html',
  styleUrls: ['./modal-eliminar-matricula.component.scss']
})
export class ModalEliminarMatriculaComponent {
  constructor(
    dialogRef: MatDialogRef<ModalEliminarMatriculaComponent>,
    @Inject(MAT_DIALOG_DATA) data: DialogData,
  ) {
    console.log(data.id);
  }
}
