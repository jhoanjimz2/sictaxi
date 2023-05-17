import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-agregar-conductor',
  templateUrl: './agregar-conductor.component.html',
  styleUrls: ['./agregar-conductor.component.scss']
})
export class AgregarConductorComponent {
  seleccionado: number = 1;
  id = this.activatedRoute.snapshot.params['id'];
  constructor(
    private activatedRoute: ActivatedRoute,
    private loading: LoadingService
  ){
    if ( this.id ) this.cargarData();
  }

  cargarData() {
    this.loading.show();
  }

}
