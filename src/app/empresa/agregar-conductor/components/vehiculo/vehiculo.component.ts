import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Aseguradora, Asociacion2, GetConductorIDVinculacion, Marca, RespAsociasiones } from 'src/app/interfaces';
import { AddConductorService } from 'src/app/services/add-conductor.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})
export class VehiculoComponent {
  mask: any = [/[0-3]/, /[0-9]/, '/', /[0-1]/, /[0-9]/, '/', /[1-2]/, /[0-9]/, /[0-9]/, /[0-9]/];
  @Output() guardar: EventEmitter<any> = new EventEmitter();
  @Output() refrendar: EventEmitter<any> = new EventEmitter();
  @Output() formulario: EventEmitter<any> = new EventEmitter();
  @Input() conductor!: GetConductorIDVinculacion;
  @Input() id = '';

  aseguradoras: Aseguradora[] = [];
  marcas: Marca[] = [];
  asociaciones: Asociacion2[] = [];

  form: FormGroup = this.fb.group({
    placa: new FormControl('', [Validators.required]),
    idMarca: new FormControl('', [Validators.required]),
    modelo: new FormControl('', [Validators.required]),
    cedulaPropietario: new FormControl('', [Validators.required]),
    nombrePropietario: new FormControl('', [Validators.required]),
    direccionPropietario: new FormControl('', [Validators.required]),
    telefonoPropietario: new FormControl('', [Validators.required]),
    numeroMotor: new FormControl('', [Validators.required]),
    numeroChasis: new FormControl('', [Validators.required]),
    tarjetaOperacion: new FormControl('', [Validators.required]),
    fechaTarjetaOperacion: new FormControl('', [Validators.required]),
    fechaTarjetaOperacionF: new FormControl('', [Validators.required]),
    numeroRCC: new FormControl('', [Validators.required]),
    numeroRCE: new FormControl('', [Validators.required]),
    numeroSOAT: new FormControl('', [Validators.required]),
    numeroTecnoMecanica: new FormControl('', [Validators.required]),
    fechaNumeroRCC: new FormControl('', [Validators.required]),
    fechaNumeroRCE: new FormControl('', [Validators.required]),
    fechaNumeroSOAT: new FormControl('', [Validators.required]),
    fechaNumeroTecnoMecanica: new FormControl('', [Validators.required]),
    idAseguradora: new FormControl('', [Validators.required]),
    idAsociacion: new FormControl('', [Validators.required]),
    idMatricula: new FormControl('', [Validators.required]),
  });
  constructor(
    private loading: LoadingService,
    private aC: AddConductorService,
    private fb: FormBuilder
  ) {
    this.cargarData();
  }
  ngOnChanges() {
    if ( this.conductor ) {
      this.cargarDatos();
    }
  }
  cargarData() {
    this.aC.obtenerMarcas().subscribe({
      next: (data: Marca[]) => {
        this.marcas = data;
      }
    })
    this.aC.obtenerAseguradoras().subscribe({
      next: (data: Aseguradora[]) => {
        this.aseguradoras = data;
      }
    })
    this.aC.obtenerAsociaciones().subscribe({
      next: (data: Asociacion2[]) => {
        this.asociaciones = data;
      }
    })
  }
  cargarDatos() {
    this.form.controls['placa'].setValue(this.conductor.vehiculo.placa);
    this.form.controls['idMarca'].setValue(this.conductor.vehiculo.idMarca);
    this.form.controls['modelo'].setValue(this.conductor.vehiculo.modelo);
    this.form.controls['cedulaPropietario'].setValue(this.conductor.vehiculo.cedulaPropietario);
    this.form.controls['nombrePropietario'].setValue(this.conductor.vehiculo.nombrePropietario);
    this.form.controls['direccionPropietario'].setValue(this.conductor.vehiculo.direccionPropietario);
    this.form.controls['telefonoPropietario'].setValue(this.conductor.vehiculo.telefonoPropietario);
    this.form.controls['numeroMotor'].setValue(this.conductor.vehiculo.numeroMotor);
    this.form.controls['numeroChasis'].setValue(this.conductor.vehiculo.numeroChasis);
    this.form.controls['tarjetaOperacion'].setValue(this.conductor.vehiculo.tarjetaOperacion);
    this.form.controls['fechaTarjetaOperacion'].setValue(this.conductor.vehiculo.fechaTarjetaOperacion);
    this.form.controls['fechaTarjetaOperacionF'].setValue(this.conductor.vehiculo.fechaTarjetaOperacionF);
    this.form.controls['numeroRCC'].setValue(this.conductor.vehiculo.numeroRCC);
    this.form.controls['numeroRCE'].setValue(this.conductor.vehiculo.numeroRCE);
    this.form.controls['numeroSOAT'].setValue(this.conductor.vehiculo.numeroSOAT);
    this.form.controls['numeroTecnoMecanica'].setValue(this.conductor.vehiculo.numeroTecnoMecanica);
    this.form.controls['fechaNumeroRCC'].setValue(this.conductor.vehiculo.fechaNumeroRCC);
    this.form.controls['fechaNumeroRCE'].setValue(this.conductor.vehiculo.fechaNumeroRCE);
    this.form.controls['fechaNumeroSOAT'].setValue(this.conductor.vehiculo.fechaNumeroSOAT);
    this.form.controls['fechaNumeroTecnoMecanica'].setValue(this.conductor.vehiculo.fechaNumeroTecnoMecanica);
    this.form.controls['idAseguradora'].setValue(this.conductor.vehiculo.idAseguradora);
    this.form.controls['idAsociacion'].setValue(this.conductor.vehiculo.idAsociacion);
    this.form.controls['idMatricula'].setValue(this.conductor.vehiculo.idMatricula);
  }
  _guardar() {
    this.form.markAllAsTouched();
    if ( this.form.valid ) {
      this.formulario.emit({ 
        ...this.form.value,
        fechaTarjetaOperacion: moment(this.form.controls['fechaTarjetaOperacion'].value).format('DD/MM/YYYY'),
        fechaTarjetaOperacionF: moment(this.form.controls['fechaTarjetaOperacionF'].value).format('DD/MM/YYYY'),
        fechaNumeroRCC: moment(this.form.controls['fechaNumeroRCC'].value).format('DD/MM/YYYY'),
        fechaNumeroRCE: moment(this.form.controls['fechaNumeroRCE'].value).format('DD/MM/YYYY'),
        fechaNumeroSOAT: moment(this.form.controls['fechaNumeroSOAT'].value).format('DD/MM/YYYY'),
        fechaNumeroTecnoMecanica: moment(this.form.controls['fechaNumeroTecnoMecanica'].value).format('DD/MM/YYYY'),
      });
      this.guardar.emit()
    }
  }
  _refrendar() {
    this.refrendar.emit();
  }
  
}
