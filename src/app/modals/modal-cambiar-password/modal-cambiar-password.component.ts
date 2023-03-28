import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-cambiar-password',
  templateUrl: './modal-cambiar-password.component.html',
  styleUrls: ['./modal-cambiar-password.component.scss']
})
export class ModalCambiarPasswordComponent {

  constructor(
    dialogRef: MatDialogRef<ModalCambiarPasswordComponent>
  ) {
  }

}
