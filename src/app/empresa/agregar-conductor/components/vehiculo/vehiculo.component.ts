import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { Subject, debounceTime } from 'rxjs';
import { Aseguradora, Asociacion2, GetConductorIDVinculacion, Marca, VehiculoBxC } from 'src/app/interfaces';
import { AddConductorService } from 'src/app/services/add-conductor.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})
export class VehiculoComponent {
  mask: any = [/[0-3]/, /[0-9]/, '/', /[0-1]/, /[0-9]/, '/', /[1-2]/, /[0-9]/, /[0-9]/, /[0-9]/];
  @Output() refrendar: EventEmitter<any> = new EventEmitter();
  @Output() saveForm: EventEmitter<any> = new EventEmitter();
  @Output() busquedaXPlaca: EventEmitter<any> = new EventEmitter();
  @Input() conductor!: GetConductorIDVinculacion;
  @Input() vehiculoBxC!: VehiculoBxC;
  @Input() id = '';
  @Input() form!: FormGroup;
  _debounce: Subject<string> = new Subject();

  aseguradoras: Aseguradora[] = [];
  marcas: Marca[] = [];
  asociaciones: Asociacion2[] = [];

  constructor(
    private loading: LoadingService,
    private aC: AddConductorService,
    private fb: FormBuilder
  ) {
    this.cargarData();
    this._debounce.pipe(debounceTime(500)).subscribe(valor => {
      this.busquedaXPlaca.emit(this.form.controls['placa'].value);
    })
  }
  ngOnChanges() {
    if ( this.conductor ) this.cargarDatos();
    if ( this.vehiculoBxC ) this.rellenar();
  }
  debounce() {
    this._debounce.next(this.form.controls['placa'].value);
  }
  cargarData() {
    this.aC.obtenerMarcas().subscribe({next: (data: Marca[]) => this.marcas = data})
    this.aC.obtenerAseguradoras().subscribe({next: (data: Aseguradora[]) =>this.aseguradoras = data})
    this.aC.obtenerAsociaciones().subscribe({ next: (data: Asociacion2[]) => this.asociaciones = data})
  }
  rellenar() {
    this.form.controls['placa'].setValue(this.vehiculoBxC.placa);
    this.form.controls['idMarca'].setValue(this.vehiculoBxC.idMarca);
    this.form.controls['modelo'].setValue(this.vehiculoBxC.modelo);
    this.form.controls['cedulaPropietario'].setValue(this.vehiculoBxC.cedulaPropietario);
    this.form.controls['nombrePropietario'].setValue(this.vehiculoBxC.nombrePropietario);
    this.form.controls['direccionPropietario'].setValue(this.vehiculoBxC.direccionPropietario);
    this.form.controls['telefonoPropietario'].setValue(this.vehiculoBxC.telefonoPropietario);
    this.form.controls['numeroMotor'].setValue(this.vehiculoBxC.numeroMotor);
    this.form.controls['numeroChasis'].setValue(this.vehiculoBxC.numeroChasis);
    this.form.controls['tarjetaOperacion'].setValue(this.vehiculoBxC.tarjetaOperacion);
    this.form.controls['fechaTarjetaOperacion'].setValue(this.setFormat(this.vehiculoBxC.fechaTarjetaOperacion));
    this.form.controls['fechaTarjetaOperacionF'].setValue(this.setFormat(this.vehiculoBxC.fechaTarjetaOperacionF));
    this.form.controls['numeroRCC'].setValue(this.vehiculoBxC.numeroRCC);
    this.form.controls['numeroRCE'].setValue(this.vehiculoBxC.numeroRCE);
    this.form.controls['numeroSOAT'].setValue(this.vehiculoBxC.numeroSOAT);
    this.form.controls['numeroTecnoMecanica'].setValue(this.vehiculoBxC.numeroTecnoMecanica);
    this.form.controls['fechaNumeroRCC'].setValue(this.setFormat(this.vehiculoBxC.fechaNumeroRCC));
    this.form.controls['fechaNumeroRCE'].setValue(this.setFormat(this.vehiculoBxC.fechaNumeroRCE));
    this.form.controls['fechaNumeroSOAT'].setValue(this.setFormat(this.vehiculoBxC.fechaNumeroSOAT));
    this.form.controls['fechaNumeroTecnoMecanica'].setValue(this.setFormat(this.vehiculoBxC.fechaNumeroTecnoMecanica));
    this.form.controls['idAseguradora'].setValue(this.vehiculoBxC.idAseguradora);
    this.form.controls['idAsociacion'].setValue(this.vehiculoBxC.idAsociacion);
    this.form.controls['idMatricula'].setValue(this.vehiculoBxC.idMatricula);
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
    this.form.controls['fechaTarjetaOperacion'].setValue(this.setFormat(this.conductor.vehiculo.fechaTarjetaOperacion));
    this.form.controls['fechaTarjetaOperacionF'].setValue(this.setFormat(this.conductor.vehiculo.fechaTarjetaOperacionF));
    this.form.controls['numeroRCC'].setValue(this.conductor.vehiculo.numeroRCC);
    this.form.controls['numeroRCE'].setValue(this.conductor.vehiculo.numeroRCE);
    this.form.controls['numeroSOAT'].setValue(this.conductor.vehiculo.numeroSOAT);
    this.form.controls['numeroTecnoMecanica'].setValue(this.conductor.vehiculo.numeroTecnoMecanica);
    this.form.controls['fechaNumeroRCC'].setValue(this.setFormat(this.conductor.vehiculo.fechaNumeroRCC));
    this.form.controls['fechaNumeroRCE'].setValue(this.setFormat(this.conductor.vehiculo.fechaNumeroRCE));
    this.form.controls['fechaNumeroSOAT'].setValue(this.setFormat(this.conductor.vehiculo.fechaNumeroSOAT));
    this.form.controls['fechaNumeroTecnoMecanica'].setValue(this.setFormat(this.conductor.vehiculo.fechaNumeroTecnoMecanica));
    this.form.controls['idAseguradora'].setValue(this.conductor.vehiculo.idAseguradora);
    this.form.controls['idAsociacion'].setValue(this.conductor.vehiculo.idAsociacion);
    this.form.controls['idMatricula'].setValue(this.conductor.vehiculo.idMatricula);
  }
  setFormat(fecha: string | Date) {
    if (!fecha) return '';
    return moment(fecha).utc().format('YYYY/MM/DD');
  }
  _guardar() {
    this.form.markAllAsTouched();
    if ( this.form.valid ) this.validarCampos1();
    else this.validarCampos2();
  }
  _refrendar() {
    this.refrendar.emit();
  }

  validarCampos1() {
    var fechaActual = new Date();
    var fechaTarjetaOperacion = new Date(moment(this.form.controls['fechaTarjetaOperacion'].value).format('YYYY-MM-DD'));
    var fechaTarjetaOperacionF = new Date(moment(this.form.controls['fechaTarjetaOperacionF'].value).format('YYYY-MM-DD'));
    var fechaNumeroRCC = new Date(moment(this.form.controls['fechaNumeroRCC'].value).format('YYYY-MM-DD'));
    var fechaNumeroRCE = new Date(moment(this.form.controls['fechaNumeroRCE'].value).format('YYYY-MM-DD'));
    var fechaNumeroSOAT = new Date(moment(this.form.controls['fechaNumeroSOAT'].value).format('YYYY-MM-DD'));
    var fechaNumeroTecnoMecanica = new Date(moment(this.form.controls['fechaNumeroTecnoMecanica'].value).format('YYYY-MM-DD'));
    if (fechaActual.getTime() < fechaTarjetaOperacion.getTime())         this.loading.error('Fecha de expedición de tarjeta de operación inválida, por favor ingresa una fecha válida.');
    else if (fechaActual.getTime() > fechaTarjetaOperacionF.getTime())   this.loading.error('Fecha de tarjeta de operación vencida, por favor ingresa una fecha válida.');
    else if (fechaActual.getTime() > fechaNumeroRCE.getTime())           this.loading.error('Fecha de RCE vencida, por favor ingresa una fecha válida.');
    else if (fechaActual.getTime() > fechaNumeroRCC.getTime())           this.loading.error('Fecha de RCC vencida, por favor ingresa una fecha válida.');
    else if (fechaActual.getTime() > fechaNumeroSOAT.getTime())          this.loading.error('Fecha de SOAT vencida, por favor ingresa una fecha válida.');
    else if (fechaActual.getTime() > fechaNumeroTecnoMecanica.getTime()) this.loading.error('Fecha de la revisión técnico mecánica vencida, por favor ingresa una fecha válida.');
    else {
      this.saveForm.emit({ 
        ...this.form.value,
        fechaTarjetaOperacion: moment(this.form.controls['fechaTarjetaOperacion'].value).format('DD/MM/YYYY'),
        fechaTarjetaOperacionF: moment(this.form.controls['fechaTarjetaOperacionF'].value).format('DD/MM/YYYY'),
        fechaNumeroRCC: moment(this.form.controls['fechaNumeroRCC'].value).format('DD/MM/YYYY'),
        fechaNumeroRCE: moment(this.form.controls['fechaNumeroRCE'].value).format('DD/MM/YYYY'),
        fechaNumeroSOAT: moment(this.form.controls['fechaNumeroSOAT'].value).format('DD/MM/YYYY'),
        fechaNumeroTecnoMecanica: moment(this.form.controls['fechaNumeroTecnoMecanica'].value).format('DD/MM/YYYY'),
      });
    }
  }

  validarCampos2() {
    if      (!this.form.controls['placa'].valid)                    this.loading.error('Por favor, ingrese la placa del vehículo.');
    else if (!this.form.controls['idMarca'].valid)                  this.loading.error('Por favor, seleccione la marca del vehículo.');
    else if (!this.form.controls['modelo'].valid)                   this.loading.error('Por favor, ingrese el modelo del vehículo.');
    else if (!this.form.controls['cedulaPropietario'].valid)        this.loading.error('Por favor, ingrese la cédula del propietario del vehículo.');
    else if (!this.form.controls['nombrePropietario'].valid)        this.loading.error('Por favor, ingrese el nombre completo del propietario del vehículo.');
    else if (!this.form.controls['direccionPropietario'].valid)     this.loading.error('Por favor, ingrese la dirección del propietario del vehículo.');
    else if (!this.form.controls['telefonoPropietario'].valid)      this.loading.error('Por favor, ingrese el telefono del propietario del vehículo.');
    else if (!this.form.controls['numeroMotor'].valid)              this.loading.error('Por favor, ingrese el número de motor del vehículo.');
    else if (!this.form.controls['numeroChasis'].valid)             this.loading.error('Por favor, ingrese el número de chasis del vehículo.');
    else if (!this.form.controls['tarjetaOperacion'].valid)         this.loading.error('Por favor, ingrese el número de tarjeta de operación del vehículo.');
    else if (!this.form.controls['fechaTarjetaOperacion'].valid)    this.loading.error('Por favor, ingrese la fecha de expedición de la tarjeta de operación del vehículo.');
    else if (!this.form.controls['fechaTarjetaOperacionF'].valid)   this.loading.error('Por favor, ingrese la fecha de vencimiento de la tarjeta de operación del vehículo.');
    else if (!this.form.controls['numeroRCC'].valid)                this.loading.error('Por favor, ingrese el RCC del vehículo.');
    else if (!this.form.controls['numeroRCE'].valid)                this.loading.error('Por favor, ingrese el RCE del vehículo.');
    else if (!this.form.controls['numeroSOAT'].valid)               this.loading.error('Por favor, ingrese el número SOAT del vehículo.');
    else if (!this.form.controls['numeroTecnoMecanica'].valid)      this.loading.error('Por favor, ingrese la técnico mecánica del vehículo.');
    else if (!this.form.controls['fechaNumeroRCC'].valid)           this.loading.error('Por favor, ingrese la fecha de vencimiento del RCE del vehículo.');
    else if (!this.form.controls['fechaNumeroRCE'].valid)           this.loading.error('Por favor, ingrese la fecha de vencimiento del RCC del vehículo.');
    else if (!this.form.controls['fechaNumeroSOAT'].valid)          this.loading.error('Por favor, ingrese la fecha de vencimiento del SOAT del vehículo.');
    else if (!this.form.controls['fechaNumeroTecnoMecanica'].valid) this.loading.error('Por favor, ingrese la fecha de vencimiento de la técnico mecánica del vehículo.');
    else if (!this.form.controls['idAseguradora'].valid)            this.loading.error('Por favor, seleccione la aseguradora del vehículo.');
    else if (!this.form.controls['idAsociacion'].valid)             this.loading.error('Por favor, seleccione la asociación del vehículo.');
    else if (!this.form.controls['idMatricula'].valid)              this.loading.error('Por favor, ingrese el numero de registro del vehículo.');
  }
  
}
