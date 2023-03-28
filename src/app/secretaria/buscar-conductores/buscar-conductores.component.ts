import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalFichaVinculacionComponent } from 'src/app/modals/modal-ficha-vinculacion/modal-ficha-vinculacion.component';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-buscar-conductores',
  templateUrl: './buscar-conductores.component.html',
  styleUrls: ['./buscar-conductores.component.scss']
})
export class BuscarConductoresComponent {
  constructor( 
    private loading: LoadingService,
    public dialog: MatDialog
  ) {}

  pagina({pagina}: any) {
    this.loading.show();
    console.log(pagina)
    setTimeout(() => {
      this.loading.hide();
    }, 500)
  }
  datosConductor(idConductor: string) {
    const dialogRef = this.dialog.open(ModalFichaVinculacionComponent, {
      data: { idConductor },
      height: '90%',
      width: '1000px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
}
