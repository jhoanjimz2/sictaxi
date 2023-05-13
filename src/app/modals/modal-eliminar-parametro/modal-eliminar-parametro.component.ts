import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Action } from 'src/app/interfaces';

interface DialogData {
  id: number | null;
  action: Action
}

@Component({
  selector: 'app-modal-eliminar-parametro',
  templateUrl: './modal-eliminar-parametro.component.html',
  styleUrls: ['./modal-eliminar-parametro.component.scss']
})
export class ModalEliminarParametroComponent {
  constructor(
    private dialogRef: MatDialogRef<ModalEliminarParametroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
  }
}
