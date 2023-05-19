import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddConductorService } from 'src/app/services/add-conductor.service';
import { LoadingService } from 'src/app/services/loading.service';

export interface DialogData {
  idVinculacion: number;
}
@Component({
  selector: 'app-modal-desvincular',
  templateUrl: './modal-desvincular.component.html',
  styleUrls: ['./modal-desvincular.component.scss']
})
export class ModalDesvincularComponent {
  form: FormGroup = this.fb.group({
    password: new FormControl('', [Validators.required]),
  });
  constructor(
    private dialogRef: MatDialogRef<ModalDesvincularComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private loading: LoadingService,
    private aC: AddConductorService,
    private fb: FormBuilder
  ) {
  }

  desvincular() {
    this.loading.show();
    this.aC.desvincular(this.data.idVinculacion, this.form.controls['password'].value).subscribe({
      next: (data: any) => {
        if (data === 1) {
          this.loading.exito('Conductor desvinculado');
          this.dialogRef.close(true);
          this.loading.hide();
        } else if (data === 0) {
          this.loading.hide();
          this.loading.error('Clave incorrecta');
        }
      }
    })
  }

}
