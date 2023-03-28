import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  id: string;
}

@Component({
  selector: 'app-modal-eliminar-usuario',
  templateUrl: './modal-eliminar-usuario.component.html',
  styleUrls: ['./modal-eliminar-usuario.component.scss']
})
export class ModalEliminarUsuarioComponent {
  constructor(
    dialogRef: MatDialogRef<ModalEliminarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) data: DialogData,
  ) {
    console.log(data.id);
  }
}
