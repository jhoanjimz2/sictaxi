import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Action } from 'src/app/interfaces';
import { ModalCrearParametroComponent } from 'src/app/modals/modal-crear-parametro/modal-crear-parametro.component';
import { ModalEliminarParametroComponent } from 'src/app/modals/modal-eliminar-parametro/modal-eliminar-parametro.component';

@Component({
  selector: 'app-edit-add-delete',
  templateUrl: './edit-add-delete.component.html',
  styleUrls: ['./edit-add-delete.component.scss']
})
export class EditAddDeleteComponent {
  @Input() action!: Action;
  @Input() id!: number;
  constructor( private dialog: MatDialog ) {}
  editar(action: Action, id: number | null) {
    const dialogRef = this.dialog.open(ModalCrearParametroComponent, { 
      data: { action, id },
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  eliminar(action: Action, id: number) {
    const dialogRef = this.dialog.open(ModalEliminarParametroComponent, { data: { action, id } });
    dialogRef.afterClosed().subscribe(result => {});
  }
}
