import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  idEmpresa: string;
}


@Component({
  selector: 'app-modal-crear-empresa',
  templateUrl: './modal-crear-empresa.component.html',
  styleUrls: ['./modal-crear-empresa.component.scss']
})
export class ModalCrearEmpresaComponent {
  constructor(
    dialogRef: MatDialogRef<ModalCrearEmpresaComponent>,
    @Inject(MAT_DIALOG_DATA) data: DialogData,
  ) {
    console.log(data.idEmpresa);
  }
}

