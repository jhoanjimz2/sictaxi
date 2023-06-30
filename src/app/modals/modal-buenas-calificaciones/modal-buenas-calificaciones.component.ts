import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Calificacion, Usuario } from 'src/app/interfaces';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

export interface DialogData {
  idVinculacion: number;
  fechaInicial: string;
  fechaFinal: string;
}

@Component({
  selector: 'app-modal-buenas-calificaciones',
  templateUrl: './modal-buenas-calificaciones.component.html',
  styleUrls: ['./modal-buenas-calificaciones.component.scss']
})
export class ModalBuenasCalificacionesComponent {
  
  buenasCalificaciones: Calificacion[] = [];
  get user(): Usuario { return JSON.parse(localStorage.getItem('user')!); }

  constructor(
    private dialogRef: MatDialogRef<ModalBuenasCalificacionesComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private loading: LoadingService,
    private eS: EstadisticasService
  ) {
    this.dataBuenasCalificaciones();
  }

  dataBuenasCalificaciones() {
    this.loading.show();
    this.eS.getDataBuenasCalificaciones(this.data.idVinculacion, this.data.fechaInicial, this.data.fechaFinal).subscribe({
      next: (data: Calificacion[]) => {
        this.loading.hide();
        this.buenasCalificaciones = data;
      },
      error: (error: any) => {
        this.loading.hide();
        this.loading.error('Error carga calificaciones');
        this.dialogRef.close();
      }
    })
  }

}
