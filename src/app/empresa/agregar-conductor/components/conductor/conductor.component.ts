import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { Subject, debounceTime } from 'rxjs';
import { ConductorBxC, GetConductorIDVinculacion, LoadParametrosSelects, Param } from 'src/app/interfaces';
import { ModalTomarFotoComponent } from 'src/app/modals/modal-tomar-foto/modal-tomar-foto.component';
import { AddConductorService } from 'src/app/services/add-conductor.service';
import { LoadingService } from 'src/app/services/loading.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.scss']
})
export class ConductorComponent implements OnChanges {
  mask: any = [/[0-3]/, /[0-9]/, '/', /[0-1]/, /[0-9]/, '/', /[1-2]/, /[0-9]/, /[0-9]/, /[0-9]/];
  @ViewChild('myInput') input!: ElementRef;
  
  @Output() refrendar: EventEmitter<any> = new EventEmitter();
  @Output() saveForm: EventEmitter<any> = new EventEmitter();
  @Output() busquedaXCedula: EventEmitter<any> = new EventEmitter();
  
  @Input() conductorBxC!: ConductorBxC;
  @Input() conductor!: GetConductorIDVinculacion;
  @Input() id = '';
  @Input() form!: FormGroup;

  _debounce: Subject<string> = new Subject();

  img: string = '';
  imgsubir!:File;

  EPSs: Param[] = [];
  ARLs: Param[] = [];
  AFPs: Param[] = [];


  constructor(
    private loading: LoadingService,
    private aC: AddConductorService,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.cargarData();
    this._debounce.pipe(debounceTime(500)).subscribe(valor => {
      this.busquedaXCedula.emit(this.form.controls['cedula'].value);
    })
  }
  ngOnChanges() {
    if ( this.conductor ) this.cargarDatos();
    if ( this.conductorBxC ) this.rellenar();
  }
  debounce() {
    this._debounce.next(this.form.controls['cedula'].value);
  }
  rellenar() {
    this.form.controls['cedula'].setValue(this.conductorBxC.cedula);
    this.form.controls['nombres'].setValue(this.conductorBxC.nombres);
    this.form.controls['apellidos'].setValue(this.conductorBxC.apellidos);
    this.form.controls['fechaNacimiento'].setValue(this.setFormat(this.conductorBxC.fechaNacimiento));
    this.form.controls['tipoSangre'].setValue(this.conductorBxC.tipoSangre);
    this.form.controls['rh'].setValue(this.conductorBxC.rh);
    this.form.controls['sexo'].setValue(this.conductorBxC.sexo);
    this.form.controls['estadoCivil'].setValue(this.conductorBxC.estadoCivil);
    this.form.controls['direccion'].setValue(this.conductorBxC.direccion);
    this.form.controls['barrio'].setValue(this.conductorBxC.barrio);
    this.form.controls['telefono'].setValue(this.conductorBxC.telefono);
    this.form.controls['email'].setValue(this.conductorBxC.email);
    this.form.controls['categoriaPase'].setValue(this.conductorBxC.categoriaPase);
    this.form.controls['fechaLicenciaConduccion'].setValue(this.setFormat(this.conductorBxC.fechaLicenciaConduccion));
    this.form.controls['idArl'].setValue(this.conductorBxC.idArl);
    this.form.controls['idEps'].setValue(this.conductorBxC.idEps);
    this.form.controls['idAfp'].setValue(this.conductorBxC.idAfp);
    this.img = environment.apiImg + this.conductorBxC.fotoURL;
  }
  cargarDatos() {
    this.form.controls['cedula'].setValue(this.conductor.conductor.cedula);
    this.form.controls['nombres'].setValue(this.conductor.conductor.nombres);
    this.form.controls['apellidos'].setValue(this.conductor.conductor.apellidos);
    this.form.controls['fechaNacimiento'].setValue(this.setFormat(this.conductor.conductor.fechaNacimiento));
    this.form.controls['tipoSangre'].setValue(this.conductor.conductor.tipoSangre);
    this.form.controls['rh'].setValue(this.conductor.conductor.rh);
    this.form.controls['sexo'].setValue(this.conductor.conductor.sexo);
    this.form.controls['estadoCivil'].setValue(this.conductor.conductor.estadoCivil);
    this.form.controls['direccion'].setValue(this.conductor.conductor.direccion);
    this.form.controls['barrio'].setValue(this.conductor.conductor.barrio);
    this.form.controls['telefono'].setValue(this.conductor.conductor.telefono);
    this.form.controls['email'].setValue(this.conductor.conductor.email);
    this.form.controls['categoriaPase'].setValue(this.conductor.conductor.categoriaPase);
    this.form.controls['fechaLicenciaConduccion'].setValue(this.setFormat(this.conductor.conductor.fechaLicenciaConduccion));
    this.form.controls['idArl'].setValue(this.conductor.conductor.seguridad_social[0].id);
    this.form.controls['idEps'].setValue(this.conductor.conductor.seguridad_social[1].id);
    this.form.controls['idAfp'].setValue(this.conductor.conductor.seguridad_social[2].id);
    this.form.controls['jornada'].setValue(this.conductor.jornada);
    this.form.controls['consecutivo'].setValue(this.conductor.consecutivo);
    this.form.controls['fechaUltimaRefrendacion'].setValue(this.setFormat(this.conductor.fechaUltimaRefrendacion));
    this.form.controls['cedula'].disable();
    this.img = environment.apiImg + this.conductor.conductor.fotoURL;
  }
  setFormat(fecha: string | Date) {
    if (!fecha) return '';
    return moment(fecha).format('YYYY/MM/DD');
  }
  transformar(fecha: any) {
    return moment(fecha).utc().format('YYYY-MM-DD')
  }
  addimg(event: any) {
    if (event.target.files.length === 0) return;
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) return this.loading.error('Solo se permite subir imagenes');
    if (event.target.files[0].size > 2000000) return this.loading.error('Imagen muy grande para subir');
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.imgsubir = event.target.files[0];
      this.img = reader.result!.toString();
      return;
    }
    this.input.nativeElement.disabled = true;
  }
  abrirImg () {
    this.input.nativeElement.disabled = false;
    this.input.nativeElement.click()
  }
  tomarFoto() {
    const _dialogRef = this.dialog.open(ModalTomarFotoComponent, {});
    _dialogRef.afterClosed().subscribe(result => {
      if (result.html) this.img = result.html.toString();
      if (result.file) this.imgsubir = result.file;
    });
  }
  cargarData() {
    this.aC.obtenerAFPARLEPS().subscribe({
      next: (data: LoadParametrosSelects) => {
        this.EPSs = data.data.EPS;
        this.ARLs = data.data.ARL;
        this.AFPs = data.data.AFP;
      }
    })
  }
  _refrendar() {
    this.refrendar.emit();
  }
  next() {
    this.form.markAllAsTouched();
    if ( this.form.valid ) this.validarCampos1()
    else this.validarCampos2();
  }
  validarCampos1() {
    var fechaActual = new Date();
    var fechaNacimiento = new Date(moment(this.form.controls['fechaNacimiento'].value).format('YYYY-MM-DD'));
    var fechaLicenciaConduccion = new Date(moment(this.form.controls['fechaLicenciaConduccion'].value).format('YYYY-MM-DD'));
    if (this.img == '') this.loading.error('Por favor, sube o captura una foto con la webcam.');
    else if (fechaActual.getTime() <= fechaNacimiento.getTime()) this.loading.error('Fecha de nacimiento mayor a la fecha actual, por favor ingresa una fecha válida.');
    else if (fechaActual.getTime() > fechaLicenciaConduccion.getTime()) this.loading.error('Licencia de conducción vencida, por favor ingresa una fecha válida.');
    else {
      if (this.id) this.form.controls['cedula'].enable();
      this.saveForm.emit({ 
        ...this.form.value,
        fechaNacimiento: moment(this.form.controls['fechaNacimiento'].value).format('DD/MM/YYYY'),
        fechaLicenciaConduccion: moment(this.form.controls['fechaLicenciaConduccion'].value).format('DD/MM/YYYY'),
        fechaUltimaRefrendacion: moment(this.form.controls['fechaUltimaRefrendacion'].value).format('DD/MM/YYYY'),
        foto: this.imgsubir 
      });
      if (this.id) this.form.controls['cedula'].disable();
    }
  }
  validarCampos2() {
    if      (!this.form.controls['cedula'].valid && !this.id)      this.loading.error('Por favor, ingresa el número de cédula del conductor.');
    else if (!this.form.controls['nombres'].valid)                 this.loading.error('Por favor, ingresa los nombres del conductor.');
    else if (!this.form.controls['apellidos'].valid)               this.loading.error('Por favor, ingresa los apellidos del conductor.');
    else if (!this.form.controls['fechaNacimiento'].valid)         this.loading.error('Por favor, ingresa la fecha de nacimiento del conductor.');
    else if (!this.form.controls['tipoSangre'].valid)              this.loading.error('Por favor, seleccione el tipo de sangre del conductor.');
    else if (!this.form.controls['rh'].valid)                      this.loading.error('Por favor, seleccione el tipo de sangre del conductor.');
    else if (!this.form.controls['sexo'].valid)                    this.loading.error('Por favor, seleccione el sexo.');
    else if (!this.form.controls['estadoCivil'].valid)             this.loading.error('Por favor, seleccione el estado civil.');
    else if (!this.form.controls['direccion'].valid)               this.loading.error('Por favor, ingrese la dirección del conductor.');
    else if (!this.form.controls['barrio'].valid)                  this.loading.error('Por favor, ingresa el barrio del conductor.');
    else if (!this.form.controls['telefono'].valid)                this.loading.error('Por favor, ingrese el teléfono o celular del conductor.');
    else if (!this.form.controls['email'].valid)                   this.loading.error('Por favor, ingresa el email del conductor.');
    else if (!this.form.controls['categoriaPase'].valid)           this.loading.error('Por favor, seleccione la categoría de la licencia del conductor.');
    else if (!this.form.controls['fechaLicenciaConduccion'].valid) this.loading.error('Por favor, ingrese la fecha de vencimiento de la licencia del conductor');
    else if (!this.form.controls['idAfp'].valid)                   this.loading.error('Por favor, seleccione el fondo de pensiones del conductor.');
    else if (!this.form.controls['idArl'].valid)                   this.loading.error('Por favor, seleccione la ARL del conductor.');
    else if (!this.form.controls['idEps'].valid)                   this.loading.error('Por favor, seleccione la EPS del conductor.');
    else if (!this.form.controls['jornada'].valid)                 this.loading.error('Por favor, seleccione la jornada del conductor.');
  }
}
