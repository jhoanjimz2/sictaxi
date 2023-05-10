import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

export interface DialogData {
  placa: string;
}

@Component({
  selector: 'app-modal-eliminar-matricula',
  templateUrl: './modal-eliminar-matricula.component.html',
  styleUrls: ['./modal-eliminar-matricula.component.scss']
})
export class ModalEliminarMatriculaComponent {
  constructor(
    private dialogRef: MatDialogRef<ModalEliminarMatriculaComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private loading: LoadingService,
    private eS: EstadisticasService
  ) {}
  
  eliminar() {
    this.loading.show();
    this.eS.cancelarMatricula(this.data.placa).subscribe({
      next: (data: any) => {
        this.loading.hide();
        this.loading.exito('Matricula cancelada con exito');
        this.dialogRef.close(true);
      },
      error: (error: any) => {
        this.loading.hide();
        this.loading.error('Error cancelar matricula, comuniquese con el administrador de la base de datos');
        this.dialogRef.close(false);
      }
    })
  }
}
