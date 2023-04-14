import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalEliminarMatriculaComponent } from 'src/app/modals/modal-eliminar-matricula/modal-eliminar-matricula.component';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-parque-automotor',
  templateUrl: './parque-automotor.component.html',
  styleUrls: ['./parque-automotor.component.scss']
})
export class ParqueAutomotorComponent {
  constructor( 
    private loading: LoadingService,
    public dialog: MatDialog
  ) {}
  
  eliminar(id: string) {
    const dialogRef = this.dialog.open(ModalEliminarMatriculaComponent, {
      data: { id },
      height: '150px',
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

  pagina({pagina}: any) {
    this.loading.show();
    console.log(pagina)
    setTimeout(() => {
      this.loading.hide();
    }, 500)
  }
}
