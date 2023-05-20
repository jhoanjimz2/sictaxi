import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-matriculas-canceladas',
  templateUrl: './matriculas-canceladas.component.html',
  styleUrls: ['./matriculas-canceladas.component.scss']
})
export class MatriculasCanceladasComponent {
  constructor( 
    private loading: LoadingService,
    private dialog: MatDialog
  ) {}

  pagina({pagina}: any) {
    this.loading.show();
    setTimeout(() => {
      this.loading.hide();
    }, 500)
  }
}
