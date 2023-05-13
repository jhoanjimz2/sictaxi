import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Action } from 'src/app/interfaces';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

interface DialogData {
  id: string | null;
  action: Action,
  texto: string
}

@Component({
  selector: 'app-modal-crear-parametro',
  templateUrl: './modal-crear-parametro.component.html',
  styleUrls: ['./modal-crear-parametro.component.scss']
})
export class ModalCrearParametroComponent {
  constructor(
    private dialogRef: MatDialogRef<ModalCrearParametroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private eS: EstadisticasService,
    private loading: LoadingService
  ) {}

  guardar() {
    if (this.data.id) this.editar();
    else this.nuevo();
  }

  editar() {
    let funcion: Observable<any>;
    if( this.data.action == 'MAR' ) funcion = this.eS.updateMarca(this.data.texto, this.data.id!);
    else if( this.data.action == 'AFP' ) funcion = this.eS.updateSeguridadSocial(this.data.texto, this.data.id!);
    else if( this.data.action == 'ARL' ) funcion = this.eS.updateSeguridadSocial(this.data.texto, this.data.id!);
    else if( this.data.action == 'EPS' ) funcion = this.eS.updateSeguridadSocial(this.data.texto, this.data.id!);
    else if( this.data.action == 'ASE' ) funcion = this.eS.updateAseguradora(this.data.texto, this.data.id!);
    else return;

    this.loading.show();
    funcion!.subscribe({
      next: () => {
        this.loading.hide();
        this.dialogRef.close(true);
        this.loading.exito('Editado con exito');
      }, error: () => {
        this.loading.hide();
        this.dialogRef.close();
        this.loading.error('Error al editar, comuniquese con el administrador de la base de datos');
      }
    })
  }
  nuevo() {
    this.loading.show();
    let funcion: Observable<any>;
    if( this.data.action == 'MAR' ) funcion = this.eS.nuevaMarca(this.data.texto);
    if( this.data.action == 'AFP' ) funcion = this.eS.nuevaSeguridadSocial(this.data.texto, 'AFP');
    if( this.data.action == 'ARL' ) funcion = this.eS.nuevaSeguridadSocial(this.data.texto, 'ARL');
    if( this.data.action == 'EPS' ) funcion = this.eS.nuevaSeguridadSocial(this.data.texto, 'EPS');
    if( this.data.action == 'ASE' ) funcion = this.eS.nuevaAseguradora(this.data.texto);

    funcion!.subscribe({
      next: () => {
        this.loading.hide();
        this.dialogRef.close(true);
        this.loading.exito('Creado con exito');
      }, error: () => {
        this.loading.hide();
        this.dialogRef.close();
        this.loading.error('Error al crear, comuniquese con el administrador de la base de datos');
      }
    })
  }


}
