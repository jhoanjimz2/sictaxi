import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Usuario } from 'src/app/interfaces';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-modal-init-cambiar-password',
  templateUrl: './modal-init-cambiar-password.component.html',
  styleUrls: ['./modal-init-cambiar-password.component.scss']
})
export class ModalInitCambiarPasswordComponent {

  form: FormGroup = this.fb.group({
    nueva: new FormControl('', [Validators.required]),
    confirmacion: new FormControl('', [Validators.required]),
  });
  constructor(
    private dialogRef: MatDialogRef<ModalInitCambiarPasswordComponent>,
    private loading: LoadingService,
    private eS: EstadisticasService,
    private fb: FormBuilder
  ) {
  }
  guardar() {
    if(this.form.controls['nueva'].value != this.form.controls['confirmacion'].value) {
      return this.loading.error('Las contraseñas no son iguales');
    }
    let local: Usuario = JSON.parse(localStorage.getItem('user')!);
    this.loading.show();
    this.eS.cambiarContrasenaInit(this.form.controls['nueva'].value).subscribe({
      next: (data: any) => {
        this.loading.hide();
        this.dialogRef.close();
        this.loading.exito('Contraseña actualizada');
        local.solicitarCambioclave = null;
        localStorage.setItem('user', JSON.stringify(local));
      }, error: () => {
        this.loading.hide();
        this.loading.error('Error actualizar contraseña, comuniquese con el administrador de la base de datos');
      }
    })
  }
}
