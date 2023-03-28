import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  id: string;
}

@Component({
  selector: 'app-modal-crear-asociacion',
  templateUrl: './modal-crear-asociacion.component.html',
  styleUrls: ['./modal-crear-asociacion.component.scss']
})
export class ModalCrearAsociacionComponent {

  constructor(
    dialogRef: MatDialogRef<ModalCrearAsociacionComponent>,
    @Inject(MAT_DIALOG_DATA) data: DialogData,
  ) {
    console.log(data.id);
  }
  
}
