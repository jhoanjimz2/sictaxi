import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Taxista } from 'src/app/interfaces';
import { perfilTaxista } from 'src/assets/data/estadisticas';

export interface DialogData {
  idVinculacion: string;
}



@Component({
  selector: 'app-modal-perfil-taxista',
  templateUrl: './modal-perfil-taxista.component.html',
  styleUrls: ['./modal-perfil-taxista.component.scss']
})
export class ModalPerfilTaxistaComponent {
  taxista: Taxista = perfilTaxista;
  constructor(
    dialogRef: MatDialogRef<ModalPerfilTaxistaComponent>,
    @Inject(MAT_DIALOG_DATA) data: DialogData,
  ) {
    console.log(data.idVinculacion);
  }


}
