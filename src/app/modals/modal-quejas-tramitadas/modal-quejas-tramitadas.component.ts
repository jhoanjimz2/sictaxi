import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RespQuejasConductor } from 'src/app/interfaces';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

export interface DialogData {
  idVinculacion: number;
}

@Component({
  selector: 'app-modal-quejas-tramitadas',
  templateUrl: './modal-quejas-tramitadas.component.html',
  styleUrls: ['./modal-quejas-tramitadas.component.scss']
})
export class ModalQuejasTramitadasComponent {

  estado: boolean = false;
  quejasNoTramitadas: RespQuejasConductor[] = [];
  quejasSiTramitadas: RespQuejasConductor[] = [];

  constructor(
    private dialogRef: MatDialogRef<ModalQuejasTramitadasComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private loading: LoadingService,
    private eS: EstadisticasService
  ) {
    this.cargarQuejas();
  }

  cargarQuejas() {
    this.loading.show();
    this.eS.getDataQuejas(this.data.idVinculacion).subscribe({
      next: (data: RespQuejasConductor[]) => {
        this.loading.hide();
        this.quejasNoTramitadas = data;
        this.quejasSiTramitadas = data;
      },
      error: (error: any) => {
        this.loading.hide();
        this.loading.error('Error carga quejas');
        this.dialogRef.close();
      }
    })
  }

}
