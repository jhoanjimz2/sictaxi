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
  selector: 'app-modal-quejas-tramitadas',
  templateUrl: './modal-quejas-tramitadas.component.html',
  styleUrls: ['./modal-quejas-tramitadas.component.scss']
})
export class ModalQuejasTramitadasComponent {

  get user(): Usuario { return JSON.parse(localStorage.getItem('user')!); }
  estado: boolean = false;
  quejasNoTramitadas: Calificacion[] = [];
  quejasSiTramitadas: Calificacion[] = [];

  constructor(
    private dialogRef: MatDialogRef<ModalQuejasTramitadasComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private loading: LoadingService,
    private eS: EstadisticasService
  ) {
    this.cargarQuejas();
    this.cargarQuejasTramitadas();
  }

  tramitarTodas() {
    this.loading.show();
    this.eS.tramitarQuejas(this.data.idVinculacion).subscribe({
      next: (data: Calificacion[]) => {
        this.loading.hide();
        this.loading.exito('Todas las quejas tramitadas');
        this.cargarQuejas();
        this.cargarQuejasTramitadas();
      },
      error: (error: any) => {
        this.loading.hide();
        this.loading.error('Error en la tramitación comuniquese con el administrador de la base de datos');
        this.dialogRef.close();
      }
    })
  }

  cargarQuejas() {
    this.loading.show();
    this.eS.getDataQuejas(this.data.idVinculacion, this.data.fechaInicial, this.data.fechaFinal).subscribe({
      next: (data: Calificacion[]) => {
        this.loading.hide();
        this.quejasNoTramitadas = data;
      },
      error: (error: any) => {
        this.loading.hide();
        this.loading.error('Error carga calificaciones');
        this.dialogRef.close();
      }
    })
  }
  cargarQuejasTramitadas() {
    this.loading.show();
    this.eS.getDataQuejasTramitadas(this.data.idVinculacion, this.data.fechaInicial, this.data.fechaFinal).subscribe({
      next: (data: Calificacion[]) => {
        this.loading.hide();
        this.quejasSiTramitadas = data;
      },
      error: (error: any) => {
        this.loading.hide();
        this.loading.error('Error carga calificaciones');
        this.dialogRef.close();
      }
    })
  }

}
