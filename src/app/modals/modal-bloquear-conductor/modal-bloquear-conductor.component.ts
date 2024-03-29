import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConductoresConQuejas } from 'src/app/interfaces';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

interface data {
  conductor: ConductoresConQuejas
}

@Component({
  selector: 'app-modal-bloquear-conductor',
  templateUrl: './modal-bloquear-conductor.component.html',
  styleUrls: ['./modal-bloquear-conductor.component.scss']
})
export class ModalBloquearConductorComponent {

  constructor(
    private dialogRef: MatDialogRef<ModalBloquearConductorComponent>,
    @Inject(MAT_DIALOG_DATA) private data: data,
    private eS: EstadisticasService,
    private loading: LoadingService
  ) {}

  bloquear() {
    this.loading.show();
    this.eS.bloquearConductor(this.data.conductor.idVinculacion).subscribe({
      next: () => {
        this.loading.hide();
        this.dialogRef.close();
        this.loading.exito('Conductor bloqueado');
        this.data.conductor.estado = 'Bloqueada';
      }, error: () => {
        this.loading.hide();
        this.loading.error('Hubo un error al momento de bloquear este conductor, comuniquese con el administrador de la base de datos');
      }
    })
  }

}
