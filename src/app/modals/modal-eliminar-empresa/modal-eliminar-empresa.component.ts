import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  idEmpresa: string;
}

@Component({
  selector: 'app-modal-eliminar-empresa',
  templateUrl: './modal-eliminar-empresa.component.html',
  styleUrls: ['./modal-eliminar-empresa.component.scss']
})
export class ModalEliminarEmpresaComponent {

  constructor(
    dialogRef: MatDialogRef<ModalEliminarEmpresaComponent>,
    @Inject(MAT_DIALOG_DATA) data: DialogData,
  ) {
    console.log(data.idEmpresa);
  }

}
