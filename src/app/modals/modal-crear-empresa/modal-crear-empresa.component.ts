import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmpresaAutorizada } from 'src/app/interfaces';

export interface DialogData {
  empresa?: EmpresaAutorizada;
}


@Component({
  selector: 'app-modal-crear-empresa',
  templateUrl: './modal-crear-empresa.component.html',
  styleUrls: ['./modal-crear-empresa.component.scss']
})
export class ModalCrearEmpresaComponent {
  data: any;
  form: FormGroup = this.fb.group({
    nit: new FormControl('', [Validators.required]),
    razon: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    representante: new FormControl('', [Validators.required]),
  });
  constructor(
    private fb: FormBuilder,
    dialogRef: MatDialogRef<ModalCrearEmpresaComponent>,
    @Inject(MAT_DIALOG_DATA) data: DialogData,
  ) {
    this.data = data;
    if ( this.data ) this.rellenar();
  }
  rellenar() {
    this.form.controls['nit'].setValue(this.data.empresa.nit);
    this.form.controls['razon'].setValue(this.data.empresa.nombreEmpresa);
    this.form.controls['direccion'].setValue(this.data.empresa.direccion);
    this.form.controls['telefono'].setValue(this.data.empresa.telefono);
    this.form.controls['email'].setValue(this.data.empresa.email);
  }
  guardar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
  }
}

