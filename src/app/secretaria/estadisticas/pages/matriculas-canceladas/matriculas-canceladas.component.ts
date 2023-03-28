import { Component } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-matriculas-canceladas',
  templateUrl: './matriculas-canceladas.component.html',
  styleUrls: ['./matriculas-canceladas.component.scss']
})
export class MatriculasCanceladasComponent {
  
  constructor( 
    private loading: LoadingService
  ) {}

  pagina({pagina}: any) {
    this.loading.show();
    console.log(pagina)
    setTimeout(() => {
      this.loading.hide();
    }, 500)
  }

}
