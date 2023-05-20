import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-proximos-vencerse',
  templateUrl: './proximos-vencerse.component.html',
  styleUrls: ['./proximos-vencerse.component.scss']
})
export class ProximosVencerseComponent {

  fechasVencida!: any[];
  totalPages: number = 0;
  paginaActual: number = 0;
  buscar: string = '';

  constructor( 
    private loading: LoadingService,
    private dialog: MatDialog
  ) { this.pagina({ pagina: 1 }); }

  pagina({pagina}: any) {
    this.paginaActual = pagina;
    // this.loading.show();
    // this.eS.getDataDocumentosVencidos(pagina).subscribe({
    //   next: (data: RespFechasVencidas) => {
    //     this.totalPages = data.pages;
    //     this.fechasVencida = data.data;
    //     this.loading.hide();
    //   }, error: (error: any) => {
    //     this.totalPages = 0;
    //     this.fechasVencida = [];
    //     this.loading.hide();
    //     this.loading.error(error.error.message);
    //   }
    // })
  }
  exportar() {
    // const dialogRef = this.dialog.open(FasesExportarComponent, { 
    //   width: '800px'
    // });
    // dialogRef.afterClosed().subscribe(result => {});
  }
  buscando(event: string) {
    this.buscar = event.toUpperCase();
  }

}
