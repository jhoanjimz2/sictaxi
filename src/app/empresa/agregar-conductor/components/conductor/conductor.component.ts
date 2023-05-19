import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { GetConductorIDVinculacion, LoadParametrosSelects, Param } from 'src/app/interfaces';
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
  @Output() next: EventEmitter<any> = new EventEmitter();
  @Output() refrendar: EventEmitter<any> = new EventEmitter();
  @Output() formulario: EventEmitter<any> = new EventEmitter();
  @Output() activar: EventEmitter<any> = new EventEmitter();
  @Input() conductor!: GetConductorIDVinculacion;
  @Input() id = '';

  img: string = '';
  imgsubir!:File;

  EPSs: Param[] = [];
  ARLs: Param[] = [];
  AFPs: Param[] = [];

  form: FormGroup = this.fb.group({
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

  constructor(
    private loading: LoadingService,
    private aC: AddConductorService,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.cargarData();
  }
  ngOnChanges() {
    if ( this.conductor ) {
      this.cargarDatos();
    }
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
  cargarDatos() {
    this.form.controls['cedula'].setValue(this.conductor.conductor.cedula);
    this.form.controls['nombres'].setValue(this.conductor.conductor.nombres);
    this.form.controls['apellidos'].setValue(this.conductor.conductor.apellidos);
    this.form.controls['fechaNacimiento'].setValue(this.conductor.conductor.fechaNacimiento);
    this.form.controls['tipoSangre'].setValue(this.conductor.conductor.tipoSangre);
    this.form.controls['rh'].setValue(this.conductor.conductor.rh);
    this.form.controls['sexo'].setValue(this.conductor.conductor.sexo);
    this.form.controls['estadoCivil'].setValue(this.conductor.conductor.estadoCivil);
    this.form.controls['direccion'].setValue(this.conductor.conductor.direccion);
    this.form.controls['barrio'].setValue(this.conductor.conductor.barrio);
    this.form.controls['telefono'].setValue(this.conductor.conductor.telefono);
    this.form.controls['email'].setValue(this.conductor.conductor.email);
    this.form.controls['categoriaPase'].setValue(this.conductor.conductor.categoriaPase);
    this.form.controls['fechaLicenciaConduccion'].setValue(this.conductor.conductor.fechaLicenciaConduccion);
    this.form.controls['idArl'].setValue(this.conductor.conductor.seguridad_social[0].id);
    this.form.controls['idEps'].setValue(this.conductor.conductor.seguridad_social[1].id);
    this.form.controls['idAfp'].setValue(this.conductor.conductor.seguridad_social[2].id);
    this.form.controls['jornada'].setValue(this.conductor.jornada);
    this.form.controls['consecutivo'].setValue(this.conductor.consecutivo);
    this.form.controls['fechaUltimaRefrendacion'].setValue(this.conductor.fechaUltimaRefrendacion);
    this.form.controls['cedula'].disable();
    this.img = environment.apiImg + this.conductor.conductor.fotoURL;
  }
  _next() {
    this.form.markAllAsTouched();
    if ( this.form.valid ) {
      this.next.emit(2);
      this.form.controls['cedula'].enable();
      this.formulario.emit({ ...this.form.value, foto: this.imgsubir });
      this.form.controls['cedula'].disable();
      this.activar.emit();
    }
  }
  _refrendar() {
    this.refrendar.emit();
  }
}
