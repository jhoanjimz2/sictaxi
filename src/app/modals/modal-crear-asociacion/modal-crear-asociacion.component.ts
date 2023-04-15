import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GuardarAsociacion, RespAsociacion } from 'src/app/interfaces';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

export interface DialogData {
  id: number;
}

@Component({
  selector: 'app-modal-crear-asociacion',
  templateUrl: './modal-crear-asociacion.component.html',
  styleUrls: ['./modal-crear-asociacion.component.scss']
})
export class ModalCrearAsociacionComponent {
  form: FormGroup = this.fb.group({
    nit: new FormControl('', [Validators.required]),
    razon: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(
    private dialogRef: MatDialogRef<ModalCrearAsociacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
    private loading: LoadingService,
    private eS: EstadisticasService
  ) {
    if ( !data.id ) return;
    this.cargarInfo();
  }
  cargarInfo() {
    this.loading.show();
    this.eS.getAsociacion(this.data.id).subscribe({
      next: (data: RespAsociacion) => {
        this.loading.hide();
        this.form.controls['nit'].setValue(data.nit);
        this.form.controls['razon'].setValue(data.razonSocial);
        this.form.controls['direccion'].setValue(data.direccion);
        this.form.controls['telefono'].setValue(data.telefono);
        this.form.controls['email'].setValue(data.email);
      },
      error: (error: any) => {
        this.loading.hide();
        this.loading.error('Error al cargar los datos de la asociación');
        this.dialogRef.close();
      }
    })
  }
  guardar() {
    if (this.form.invalid) return this.form.markAllAsTouched();
    let guard: GuardarAsociacion = {} as GuardarAsociacion;
    guard.id          = this.data.id;
    guard.nit         = this.form.controls['nit'].value;
    guard.email       = this.form.controls['email'].value;
    guard.telefono    = this.form.controls['telefono'].value;
    guard.direccion   = this.form.controls['direccion'].value;
    guard.razonSocial = this.form.controls['razon'].value;
    this.loading.show();
    this.eS.guardarAsociacion(guard).subscribe({
      next: (data: any) => {
        this.loading.hide();
        this.dialogRef.close();
        if (this.data.id) this.loading.exito('Cambios aplicados con éxito');
        else this.loading.exito('Asociación creada con éxito');
      },
      error: (error: any) => {
        this.loading.hide();
        this.loading.error('Error al actualizar los datos de la asociación');
      }
    })
  }
}
