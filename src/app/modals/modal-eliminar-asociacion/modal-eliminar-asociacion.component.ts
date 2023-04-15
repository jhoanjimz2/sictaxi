import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

export interface DialogData {
  id: number;
}

@Component({
  selector: 'app-modal-eliminar-asociacion',
  templateUrl: './modal-eliminar-asociacion.component.html',
  styleUrls: ['./modal-eliminar-asociacion.component.scss']
})
export class ModalEliminarAsociacionComponent {
  constructor(
    private dialogRef: MatDialogRef<ModalEliminarAsociacionComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private loading: LoadingService,
    private eS: EstadisticasService
  ) {}
  eliminar() {
    this.loading.show();
    this.eS.eliminarAsociacion(this.data.id).subscribe({
      next: (data: any) => {
        this.loading.hide();
        this.loading.exito('Asociación eliminada con éxito');
        this.dialogRef.close();
      },
      error: (error: any) => {
        this.loading.hide();
        this.loading.error('Error al eliminar asociación');
      }
    })
  }
}
