import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RespFichaVinculacion } from 'src/app/interfaces';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';


export interface DialogData {
  idConductor: number;
  completo: boolean;
}



@Component({
  selector: 'app-modal-perfil-taxista',
  templateUrl: './modal-perfil-taxista.component.html',
  styleUrls: ['./modal-perfil-taxista.component.scss']
})
export class ModalPerfilTaxistaComponent {
  taxista: RespFichaVinculacion = {} as RespFichaVinculacion;
  constructor(
    private dialogRef: MatDialogRef<ModalPerfilTaxistaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private eS: EstadisticasService,
    private loading: LoadingService,
  ) {
    this.cargarData();
  }
  cargarData() {
    this.loading.show();
    this.eS.getPerfilConductor(this.data.idConductor).subscribe({
      next: (data: RespFichaVinculacion) => {
        this.loading.hide();
        this.taxista = data;
      },
      error: (error: any) => {
        this.loading.hide();
        this.loading.error('Error al cargar los datos del conductor');
        this.dialogRef.close();
      }
    })
  }
  descargar() {
    this.loading.show();
    this.eS.descargarPdfProfile(this.data.idConductor).subscribe({
      next: (data: any) => {
        this.loading.exito('PDF generado correctamente');
        this.loading.hide();
        var a = document.createElement("a");
        a.href = data.file;
        a.download = data.name;
        document.body.appendChild(a);
        a.click();
        a.remove();
      },
      error: (error: any) => {
        this.loading.hide();
        this.loading.error('Error al descargar PDF');
        this.dialogRef.close();
      }
    })
  }


}
