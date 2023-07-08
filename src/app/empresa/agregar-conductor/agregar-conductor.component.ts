import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { AddCrearConductor, ConductorBxC, FormAddConductor1, FormAddConductor2, FormAddConductor3, GetConductorIDVinculacion, RespBusquedaPorCedula, RespBusquedaPorPlaca, VehiculoBxC } from 'src/app/interfaces';
import { AddConductorService } from 'src/app/services/add-conductor.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-agregar-conductor',
  templateUrl: './agregar-conductor.component.html',
  styleUrls: ['./agregar-conductor.component.scss']
})
export class AgregarConductorComponent {
  seleccionado: number = 1;
  id = this.activatedRoute.snapshot.params['id'];
  conductor!: GetConductorIDVinculacion;

  formConductor_1!: FormAddConductor1;
  formConductor_2!: FormAddConductor2;
  formConductor_3!: FormAddConductor3;
  crearConductor: AddCrearConductor = {} as AddCrearConductor;

  formSaved_1: boolean = false;
  formSaved_2: boolean = false;
  formSaved_3: boolean = false;

  conductorBxC!: ConductorBxC;
  vehiculoBxC!: VehiculoBxC;

  saveForm1: boolean = false;
  _form1: FormGroup = this.fb.group({
    cedula: new FormControl('', [Validators.required]),
    nombres: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    fechaNacimiento: new FormControl('', [Validators.required]),
    tipoSangre: new FormControl('', [Validators.required]),
    rh: new FormControl('', [Validators.required]),
    sexo: new FormControl('', [Validators.required]),
    estadoCivil: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    barrio: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    categoriaPase: new FormControl('', [Validators.required]),
    fechaLicenciaConduccion: new FormControl('', [Validators.required]),
    idAfp: new FormControl('', [Validators.required]),
    idArl: new FormControl('', [Validators.required]),
    idEps: new FormControl('', [Validators.required]),
    jornada: new FormControl('', [Validators.required]),
    consecutivo: new FormControl({value:'', disabled: true}),
    fechaUltimaRefrendacion: new FormControl({value:'', disabled: true}),
  });

  _form2: FormGroup = this.fb.group({
    parentescoJefeHogar: new FormControl('', [Validators.required]),
    numeroHijos: new FormControl('', [Validators.required]),
    personasCargo: new FormControl('', [Validators.required]),
    nivelEducativoAlcanzado: new FormControl('', [Validators.required]),
    estudia: new FormControl('', [Validators.required]),
    tipoDiscapacidad: new FormControl('', [Validators.required]),
    taxistaOcacional: new FormControl('', [Validators.required]),
    tiempoComoConductor: new FormControl('', [Validators.required]),
    conductorLaborUnidad: new FormControl('', [Validators.required]),
    ingresosAproxConductor: new FormControl('', [Validators.required]),
    otraLabor: new FormControl('', [Validators.required]),
    ingresosOtraLabor: new FormControl(''),
    tiempoOtraLabor: new FormControl(''),
    otraLaborUnidad: new FormControl(''),
    estratoSocioEconomico: new FormControl('', [Validators.required]),
    tipoVivienda: new FormControl('', [Validators.required]),
    luz: new FormControl('', [Validators.required]),
    agua: new FormControl('', [Validators.required]),
    gas: new FormControl('', [Validators.required]),
    alcantarillado: new FormControl('', [Validators.required]),
    recoleccionBasura: new FormControl('', [Validators.required]),
  });

  _form3: FormGroup = this.fb.group({
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
    private activatedRoute: ActivatedRoute,
    private loading: LoadingService,
    private location: Location,
    private aC: AddConductorService,
    private fb: FormBuilder
  ){
    if ( this.id ) this.cargarData();
  }

  cargarData() {
    this.loading.show();
    this.aC.getConductor(this.id).subscribe({
      next: (data: GetConductorIDVinculacion) => {
        this.conductor = data;
        this.loading.hide();
      }, error: () => {
        this.location.back();
        this.loading.hide();
        this.loading.error('Error data conductor, comuniquese con el administrador de la base de datos')
      }
    })
  }

  next(event: number) { this.seleccionado = event; }
  
  validarFechas() {
    var fechaActual                 = new Date();

    var fechaNacimiento             = new Date(moment(this._form1.controls['fechaNacimiento'].value).format('YYYY-MM-DD'));
    var fechaLicenciaConduccion     = new Date(moment(this._form1.controls['fechaLicenciaConduccion'].value).format('YYYY-MM-DD'));

    var fechaTarjetaOperacion = new Date(moment(this._form3.controls['fechaTarjetaOperacion'].value).format('YYYY-MM-DD'));
    var fechaTarjetaOperacionF = new Date(moment(this._form3.controls['fechaTarjetaOperacionF'].value).format('YYYY-MM-DD'));
    var fechaNumeroRCE = new Date(moment(this._form3.controls['fechaNumeroRCE'].value).format('YYYY-MM-DD'));
    var fechaNumeroRCC = new Date(moment(this._form3.controls['fechaNumeroRCC'].value).format('YYYY-MM-DD'));
    var fechaNumeroSOAT = new Date(moment(this._form3.controls['fechaNumeroSOAT'].value).format('YYYY-MM-DD'));
    var fechaNumeroTecnoMecanica = new Date(moment(this._form3.controls['fechaNumeroTecnoMecanica'].value).format('YYYY-MM-DD'));

    if (fechaActual.getTime() <= fechaNacimiento.getTime())              this.loading.error('Fecha de nacimiento mayor a la fecha actual, para poder refrendar debe actualizar la fecha.');
    else if (fechaActual.getTime() > fechaLicenciaConduccion.getTime())  this.loading.error('Licencia de conducción vencida, para poder refrendar debe actualizar la fecha.');
    else if (fechaActual.getTime() < fechaTarjetaOperacion.getTime())    this.loading.error('Fecha de expedición de tarjeta de operación inválida, para poder refrendar debe actualizar la fecha.');
    else if (fechaActual.getTime() > fechaTarjetaOperacionF.getTime())   this.loading.error('Fecha de tarjeta de operación vencida, para poder refrendar debe actualizar la fecha.');
    else if (fechaActual.getTime() > fechaNumeroRCE.getTime())           this.loading.error('Fecha de RCE vencida, para poder refrendar debe actualizar la fecha.');
    else if (fechaActual.getTime() > fechaNumeroRCC.getTime())           this.loading.error('Fecha de RCC vencida, para poder refrendar debe actualizar la fecha.');
    else if (fechaActual.getTime() > fechaNumeroSOAT.getTime())          this.loading.error('Fecha de SOAT vencida, para poder refrendar debe actualizar la fecha.');
    else if (fechaActual.getTime() > fechaNumeroTecnoMecanica.getTime()) this.loading.error('Fecha de la revisión técnico mecánica vencida, para poder refrendar debe actualizar la fecha.');
    
    else this.refrendar();
  }

  refrendar() {
    this.loading.show();
    this.aC.refrendar(this.id).subscribe({
      next: (data: any) => {
        this.loading.exito('Refrendación exitosa')
        this.loading.hide();
      }, error: () => {
        this.loading.hide();
        this.loading.error('Error al refrendar, comuniquese con el administrador de la base de datos')
      }
    })
  }
  
  savedForm(event: any, type: number) {
    if ( type == 1 ) { this.formConductor_1 = event; this.formSaved_1 = true; this.seleccion(2); }
    if ( type == 2 ) { this.formConductor_2 = event; this.formSaved_2 = true; this.seleccion(3);}
    if ( type == 3 ) { this.formConductor_3 = event; this.formSaved_3 = true; this.guardar(); }
  }
  
  seleccion(value: number) {
    if (value == 1) {
      this.seleccionado = value;
    } 
    if (value == 2) {
      if ( this._form1.valid && this.formSaved_1) this.seleccionado = value;
      if ( !this._form1.valid && !this.formSaved_1) this.loading.error('Rellena todos los campos y guarda el formulario para pasar al siguiente');
      if ( this._form1.valid && !this.formSaved_1) this.loading.error('Dale click en "Guardar todo" para pasar al siguiente formulario');
    } 
    if (value == 3) {
      if ( this._form2.valid && this.formSaved_2) this.seleccionado = value;
      if ( !this._form2.valid && !this.formSaved_2) this.loading.error('Rellena todos los campos y guarda el formulario para pasar al siguiente');
      if ( this._form2.valid && !this.formSaved_2) this.loading.error('Dale click en "Guardar todo" para pasar al siguiente formulario');
    }
  }
  
  guardar() {
    this.crearConductor = { 
      ...this.formConductor_1, 
      ...this.formConductor_2, 
      ...this.formConductor_3,
      consecutivo        : this.conductor?.consecutivo? this.conductor.consecutivo : undefined,
      comparendosVigentes: undefined,
      clase              : undefined,
      capacidad          : undefined,
      tipoCombustible    : undefined,
    }
    if ( this.id ) this.editar();
    else this.nuevo();
  }

  nuevo() {
    this.loading.show();
    this.aC.crearConductor(this.crearConductor).subscribe({
      next: (data: any) => {
        if ( data.status ) this.loading.exito('Perfil de taxista creado');
        else this.loading.error(data.message);
        this.loading.hide();
      }, error: () => {
        this.loading.hide();
        this.loading.error('Error data conductor, comuniquese con el administrador de la base de datos');
      }
    })
  }

  editar() {
    this.loading.show();
    this.aC.editarConductor(this.crearConductor).subscribe({
      next: (data: any) => {
        this.loading.exito('Perfil de taxista actualizado');
        this.loading.hide();
      }, error: () => {
        this.loading.hide();
        this.loading.error('Error data conductor, comuniquese con el administrador de la base de datos');
      }
    })
  }
  buscarC(cedula: string) {
    this.aC.searchConductorEmpresasByCedula(cedula).subscribe({
      next: (data: RespBusquedaPorCedula) => {
        if ( data.conductor ) this.conductorBxC = data.conductor;
        else this.conductorBxC = data.actual;
      }
    })
  }
  buscarV(placa: string) {
    this.aC.searchVehiculoEmpresasByPlaca(placa).subscribe({
      next: (data: RespBusquedaPorPlaca) => {
        this.vehiculoBxC = data.actual;
      }
    })
  }
}