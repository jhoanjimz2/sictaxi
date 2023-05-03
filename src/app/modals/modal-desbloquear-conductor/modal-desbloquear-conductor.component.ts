import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConductoresConQuejas } from 'src/app/interfaces';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

interface data {
  conductor: ConductoresConQuejas
}

@Component({
  selector: 'app-modal-desbloquear-conductor',
  templateUrl: './modal-desbloquear-conductor.component.html',
  styleUrls: ['./modal-desbloquear-conductor.component.scss']
})
export class ModalDesbloquearConductorComponent {

  constructor(
    private dialogRef: MatDialogRef<ModalDesbloquearConductorComponent>,
    @Inject(MAT_DIALOG_DATA) private data: data,
    private eS: EstadisticasService,
    private loading: LoadingService
  ) {}

  desbloquear() {
    this.loading.show();
    this.eS.desbloquearConductor(this.data.conductor.idVinculacion).subscribe({
      next: () => {
        this.loading.hide();
        this.dialogRef.close();
        this.loading.exito('Conductor desbloqueado');
        this.data.conductor.estado = 'Activa';
      }, error: () => {
        this.loading.hide();
        this.loading.error('Hubo un error al momento de bloquear este conductor, comuniquese con el administrador de la base de datos');
      }
    })
  }


}
