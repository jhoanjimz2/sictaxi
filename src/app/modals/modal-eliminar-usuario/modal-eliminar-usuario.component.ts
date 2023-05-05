import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

export interface DialogData {
  id: number;
}

@Component({
  selector: 'app-modal-eliminar-usuario',
  templateUrl: './modal-eliminar-usuario.component.html',
  styleUrls: ['./modal-eliminar-usuario.component.scss']
})
export class ModalEliminarUsuarioComponent {
  constructor(
    private dialogRef: MatDialogRef<ModalEliminarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private loading: LoadingService,
    private eS: EstadisticasService
  ) {}


  eliminar() {
    this.loading.show();
    this.eS.eliminarUser(this.data.id).subscribe({
      next: () => {
        this.loading.exito(`Usuario eliminado con exito`);
        this.loading.hide();
        this.dialogRef.close(true)
      }, error: () => {
        this.loading.hide();
        this.dialogRef.close(false);
        this.loading.error(`Error eliminar usuario, comuniquese con el administrador de la base de datos`);
      }
    })
  }
}
