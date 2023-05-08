import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetParqueAutomotor, Vehiculo } from 'src/app/interfaces/parque-automotor';
import { ModalEliminarMatriculaComponent } from 'src/app/modals/modal-eliminar-matricula/modal-eliminar-matricula.component';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-parque-automotor',
  templateUrl: './parque-automotor.component.html',
  styleUrls: ['./parque-automotor.component.scss']
})
export class ParqueAutomotorComponent {

  vahiculos: Vehiculo[] = [];
  totalPages: number = 0;
  paginaActual: number = 0;
  placa: string = '';

  constructor( 
    private loading: LoadingService,
    public dialog: MatDialog,
    private eS: EstadisticasService
  ) { this.pagina({ pagina: 1 }); }

  pagina({pagina}: any) {
    this.loading.show();
    this.paginaActual = pagina;
    this.eS.getVehiculosGeneral(pagina, this.placa, this.placa).subscribe({
      next: (data: GetParqueAutomotor) => {
        this.totalPages = data.pages;
        this.vahiculos = data.data;
        this.loading.hide();
      }, error: (error: any) => {
        this.totalPages = 0;
        this.vahiculos = [];
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    })
  }
  buscar(busca: string) {
    this.placa = busca;
    this.pagina({ pagina: 1 });
  }
  
  eliminar(id: number) {
    const dialogRef = this.dialog.open(ModalEliminarMatriculaComponent, {
      data: { id },
      height: '150px',
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
}
