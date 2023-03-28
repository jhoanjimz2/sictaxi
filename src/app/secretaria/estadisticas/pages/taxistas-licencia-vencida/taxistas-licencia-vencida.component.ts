import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoadingService } from 'src/app/services/loading.service';
import { ModalPerfilTaxistaComponent } from '../../../../modals/modal-perfil-taxista/modal-perfil-taxista.component';


@Component({
  selector: 'app-taxistas-licencia-vencida',
  templateUrl: './taxistas-licencia-vencida.component.html',
  styleUrls: ['./taxistas-licencia-vencida.component.scss']
})
export class TaxistasLicenciaVencidaComponent {

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
    const dialogRef = this.dialog.open(ModalPerfilTaxistaComponent, {
      data: { idConductor },
      height: '90%',
      width: '1000px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }



}
