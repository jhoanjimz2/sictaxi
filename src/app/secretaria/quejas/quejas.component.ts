import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalQuejasTramitadasComponent } from 'src/app/modals/modal-quejas-tramitadas/modal-quejas-tramitadas.component';
import { LoadingService } from 'src/app/services/loading.service';
import { ModalBloquearConductorComponent } from '../../modals/modal-bloquear-conductor/modal-bloquear-conductor.component';
import { ModalPerfilTaxistaComponent } from 'src/app/modals/modal-perfil-taxista/modal-perfil-taxista.component';
import { ConductoresConQuejas, ReqConductoresConQuejas, RespConductoresConQuejas } from 'src/app/interfaces';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import * as moment from 'moment';
import { subWeeks } from 'date-fns';
import { ModalDesbloquearConductorComponent } from 'src/app/modals/modal-desbloquear-conductor/modal-desbloquear-conductor.component';

@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.scss']
})
export class QuejasComponent {

  conductoresConQuejas: ConductoresConQuejas[] = [];
  totalPages: number = 0;
  paginaActual: number = 0;
  fechaFinal = moment(new Date()).format("YYYY-MM-DD");
  fechaInicial = moment(subWeeks(new Date(), 1)).format("YYYY-MM-DD");
  comentarios: string[] = [];
  cedula!: string;

  constructor( 
    private loading: LoadingService,
    public dialog: MatDialog,
    private eS: EstadisticasService
  ) { this.pagina({ pagina: 1 }); }

  pagina({pagina}: any, bandera = true) {
    this.paginaActual = pagina;
    let comentarios = undefined;
    let placa = undefined;
    let cedula = undefined;
    if (this.comentarios.length) comentarios = this.comentarios;
    if (this.cedula != '') {
      placa = this.cedula;
      cedula = this.cedula;
    }
    if (bandera) this.loading.show();
    let data:ReqConductoresConQuejas = {
      fechaInicial: this.fechaInicial,
      fechaFinal: this.fechaFinal,
      comentarios,
      placa,
      cedula
    };
    this.eS.getConductoresConQuejasPaginado(pagina, data).subscribe({
      next: (data: RespConductoresConQuejas) => {
        this.totalPages = data.pages;
        this.conductoresConQuejas = data.data;
        this.loading.hide();
      }, error: (error: any) => {
        this.totalPages = 0;
        this.conductoresConQuejas = [];
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    })
  }
  selectDate({start, end}: any) {
    this.fechaFinal = moment(end).format("YYYY-MM-DD");
    this.fechaInicial = moment(start).format("YYYY-MM-DD");
    this.pagina({ pagina: 1 });
  }
  selectComent(event: string[]) {
    this.comentarios = event;
    this.pagina({ pagina: 1 });
  }
  quejasTramitadas(idVinculacion: number) {
    const dialogRef = this.dialog.open(ModalQuejasTramitadasComponent, {
      data: { idVinculacion: idVinculacion },
      height: '450px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  bloquear(conductor: ConductoresConQuejas) {
    const dialogRef = this.dialog.open(ModalBloquearConductorComponent, {
      data: { conductor }
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  desbloquear(conductor: ConductoresConQuejas) {
    const dialogRef = this.dialog.open(ModalDesbloquearConductorComponent, {
      data: { conductor }
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  datosConductor(idConductor: number) {
    const dialogRef = this.dialog.open(ModalPerfilTaxistaComponent, {
      data: { idConductor, completo: true },
      height: '90%',
      width: '1000px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  buscar(busca: string) {
    this.cedula = busca;
    this.pagina({ pagina: 1 });
  }
}
