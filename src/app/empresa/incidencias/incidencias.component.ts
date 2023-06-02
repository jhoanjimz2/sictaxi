import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Alertas, RespAlertas } from 'src/app/interfaces/alertas';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.scss']
})
export class IncidenciasComponent {

  form: FormGroup = this.fb.group({
    observacion: new FormControl('', [Validators.required]),
  });
  totalPages: number = 1;
  paginaActual: number = 1;
  alertas: Alertas[] = [];

  constructor( 
    private fb: FormBuilder,
    private loading: LoadingService,
    private eS: EstadisticasService
  ) { this.pagina({ pagina: 1 }); }
  
  pagina({pagina}: any) {
    this.loading.show();
    this.paginaActual = pagina;
    this.eS.getObservaciones(pagina).subscribe({
      next: (data: RespAlertas) => {
        this.alertas = data.data;
        this.totalPages = data.pages;
        this.loading.hide();
      }, error: (error: any) => {
        this.totalPages = 1;
        this.alertas = [];
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    })
  }

  guardar() {
    this.loading.show();
    this.eS.addObservacion(this.form.controls['observacion'].value).subscribe({
      next: () => {
        this.form.reset();
        this.loading.exito('Alerta enviada con exito');
        this.loading.hide();
        this.pagina({ pagina: 1 });
      }, error: (error: any) => {
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    })
  }
}
