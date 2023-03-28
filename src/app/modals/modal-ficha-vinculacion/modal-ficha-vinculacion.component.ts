import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PerfilDeVinculacion } from 'src/app/interfaces';
import { perfilVinculacion } from 'src/assets/data/estadisticas';

export interface DialogData {
  idVinculacion: string;
}

@Component({
  selector: 'app-modal-ficha-vinculacion',
  templateUrl: './modal-ficha-vinculacion.component.html',
  styleUrls: ['./modal-ficha-vinculacion.component.scss']
})
export class ModalFichaVinculacionComponent {
  perfilVinculacion: PerfilDeVinculacion = perfilVinculacion;
  constructor(
    dialogRef: MatDialogRef<ModalFichaVinculacionComponent>,
    @Inject(MAT_DIALOG_DATA) data: DialogData,
  ) {
    console.log(data.idVinculacion);
  }

}
