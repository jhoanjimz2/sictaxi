import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DownloadService } from 'src/app/services/download.service';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

export interface DialogData {
  pos: { fechaInicial: string; fechaFinal: string; comentarios: string[] },
  neg: { fechaInicial: string; fechaFinal: string; comentarios: string[] },
}

@Component({
  selector: 'app-modal-excel-calificaciones',
  templateUrl: './modal-excel-calificaciones.component.html',
  styleUrls: ['./modal-excel-calificaciones.component.scss']
})
export class ModalExcelCalificacionesComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private dialogRef: MatDialogRef<ModalExcelCalificacionesComponent>,
    private loading: LoadingService,
    private download: DownloadService,
    private eS: EstadisticasService
  ) {}

  exportarP() {
    this.loading.show();
    let params = { fechaInicial: this.data.pos.fechaInicial, fechaFinal: this.data.pos.fechaFinal, ...this.transform({comentarios: this.data.pos.comentarios}) }
    this.eS.getConductoresBienCalificadosExcel(params).subscribe({
      next: (data: any) => {
        this.dialogRef.close();
        this.loading.hide();
        this.download.download(data, `Conductores bien calificados`);
      }, error: (error: any) => {
        this.dialogRef.close();
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    })
  }
  exportarN() {
    this.loading.show();
    let params = { fechaInicial: this.data.neg.fechaInicial, fechaFinal: this.data.neg.fechaFinal, ...this.transform({comentarios: this.data.neg.comentarios}) }
    this.eS.getConductoresMalCalificadosExcel(params).subscribe({
      next: (data: any) => {
        this.loading.hide();
        this.download.download(data, `Conductores mal calificados`);
      }, error: (error: any) => {
        this.dialogRef.close();
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    })
  }

  transform(data:any) {
    let fd:any = {};
    Object.keys(data).forEach( (key) => {
      data[key].forEach( (object: any, index: any) => {
        fd[`comentarios[${index}]`] = object;
      });
    });
    return fd;
  }

}
