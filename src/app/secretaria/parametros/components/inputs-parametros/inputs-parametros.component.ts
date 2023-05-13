import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { LoadParametros, UpdateParametros } from 'src/app/interfaces';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { LoadingService } from 'src/app/services/loading.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inputs-parametros',
  templateUrl: './inputs-parametros.component.html',
  styleUrls: ['./inputs-parametros.component.scss']
})
export class InputsParametrosComponent {

  formulario: FormGroup = this.fb.group({
    maximoNumero: new FormControl('', [Validators.required]),
    mensajedeBloqueo: new FormControl('', [Validators.required]),
    bloquearInicio: new FormControl('', [Validators.required]),
    conductoresXVehiculo: new FormControl('', [Validators.required]),
  });

  constructor(
    private eS: EstadisticasService,
    private loading: LoadingService,
    private location: Location,
    private fb: FormBuilder
  ) {
    this.cargarParametros();
  }

  cargarParametros() {
    this.loading.show();
    this.eS.getLoadParameters().subscribe({
      next: (data: LoadParametros) => {
        this.initData(data);
        this.loading.hide();
      },
      error: () => {
        this.loading.hide();
        this.location.back();
        this.loading.error('Error carga parametros, comuniquese con el administrador de la base de datos');
      }
    })
  }

  initData(data: LoadParametros) {
    this.formulario.controls['maximoNumero'].setValue(data.maximousuariosempresa)
    this.formulario.controls['mensajedeBloqueo'].setValue(data.mensajebloqueo)
    this.formulario.controls['bloquearInicio'].setValue(data.bloqueariniciosesion)
    this.formulario.controls['conductoresXVehiculo'].setValue(data.vehiculosXconductores)
  }

  guardar() {
    this.loading.show();
    let data: UpdateParametros = {} as UpdateParametros;
    data.id = JSON.parse(localStorage.getItem('user')!).id;
    data.bloqueariniciosesion = this.formulario.controls['bloquearInicio'].value;
    data.maximousuariosempresa = this.formulario.controls['maximoNumero'].value;
    data.mensajebloqueo = this.formulario.controls['mensajedeBloqueo'].value;
    data.vehiculosXconductores = this.formulario.controls['conductoresXVehiculo'].value;
    this.eS.updateParametros(data).subscribe({
      next: (data: LoadParametros) => {
        this.loading.hide();
        this.loading.exito('Parametros actualizados');
      },
      error: () => {
        this.loading.hide();
        this.loading.error('Error carga parametros, comuniquese con el administrador de la base de datos');
      }
    })
  }
}
