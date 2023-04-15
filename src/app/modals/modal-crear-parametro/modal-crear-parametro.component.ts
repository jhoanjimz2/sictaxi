import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Action } from 'src/app/interfaces';

interface DialogData {
  id: number | null;
  action: Action
}

@Component({
  selector: 'app-modal-crear-parametro',
  templateUrl: './modal-crear-parametro.component.html',
  styleUrls: ['./modal-crear-parametro.component.scss']
})
export class ModalCrearParametroComponent {
  constructor(
    private dialogRef: MatDialogRef<ModalCrearParametroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    console.log(data)
  }

}
