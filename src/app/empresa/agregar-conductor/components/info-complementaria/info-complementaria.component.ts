import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GetConductorIDVinculacion } from 'src/app/interfaces';

@Component({
  selector: 'app-info-complementaria',
  templateUrl: './info-complementaria.component.html',
  styleUrls: ['./info-complementaria.component.scss']
})
export class InfoComplementariaComponent implements OnChanges {
  @Output() next: EventEmitter<any> = new EventEmitter();
  @Output() refrendar: EventEmitter<any> = new EventEmitter();
  @Output() formulario: EventEmitter<any> = new EventEmitter();
  @Output() activar: EventEmitter<any> = new EventEmitter();
  @Input() conductor!: GetConductorIDVinculacion;
  @Input() id = '';

  form: FormGroup = this.fb.group({
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
  constructor(
    private fb: FormBuilder
  ) {}
  ngOnChanges() {
    if ( this.conductor ) {
      this.cargarDatos();
    }
  }
  otraLab() {
    if ( this.form.controls['otraLabor'].value == '1' ) {
      this.form.controls['ingresosOtraLabor'].setValidators([Validators.required]);
      this.form.controls['tiempoOtraLabor'].setValidators([Validators.required]);
      this.form.controls['otraLaborUnidad'].setValidators([Validators.required]);
    } else {
      this.form.controls['ingresosOtraLabor'].clearValidators();
      this.form.controls['tiempoOtraLabor'].clearValidators();
      this.form.controls['otraLaborUnidad'].clearValidators();
      this.form.controls['ingresosOtraLabor'].updateValueAndValidity();
      this.form.controls['tiempoOtraLabor'].updateValueAndValidity();
      this.form.controls['otraLaborUnidad'].updateValueAndValidity();
    }
  }
  cargarDatos() {
    this.form.controls['parentescoJefeHogar'].setValue(this.conductor.conductor.parentescoJefeHogar);
    this.form.controls['numeroHijos'].setValue(this.conductor.conductor.numeroHijos);
    this.form.controls['personasCargo'].setValue(this.conductor.conductor.personasCargo);
    this.form.controls['nivelEducativoAlcanzado'].setValue(this.conductor.conductor.nivelEducativoAlcanzado);
    this.form.controls['estudia'].setValue(this.conductor.conductor.estudia);
    this.form.controls['tipoDiscapacidad'].setValue(this.conductor.conductor.tipoDiscapacidad);
    this.form.controls['taxistaOcacional'].setValue(this.conductor.conductor.taxistaOcacional);
    this.form.controls['tiempoComoConductor'].setValue(this.conductor.conductor.tiempoComoConductor);
    this.form.controls['conductorLaborUnidad'].setValue(this.conductor.conductor.conductorLaborUnidad);
    this.form.controls['ingresosAproxConductor'].setValue(this.conductor.conductor.ingresosAproxConductor);
    this.form.controls['otraLabor'].setValue(this.conductor.conductor.otraLabor);
    this.form.controls['ingresosOtraLabor'].setValue(this.conductor.conductor.ingresosOtraLabor);
    this.form.controls['tiempoOtraLabor'].setValue(this.conductor.conductor.tiempoOtraLabor);
    this.form.controls['otraLaborUnidad'].setValue(this.conductor.conductor.otraLaborUnidad);
    this.form.controls['estratoSocioEconomico'].setValue(this.conductor.conductor.estratoSocioEconomico);
    this.form.controls['tipoVivienda'].setValue(this.conductor.conductor.tipoVivienda);
    this.form.controls['luz'].setValue(this.conductor.conductor.luz);
    this.form.controls['agua'].setValue(this.conductor.conductor.agua);
    this.form.controls['gas'].setValue(this.conductor.conductor.gas);
    this.form.controls['alcantarillado'].setValue(this.conductor.conductor.alcantarillado);
    this.form.controls['recoleccionBasura'].setValue(this.conductor.conductor.recoleccionBasura);
  }
  _next() {
    this.form.markAllAsTouched();
    if ( this.form.valid ) {
      this.next.emit(3);
      this.formulario.emit({ ...this.form.value });
      this.activar.emit();
    }
  }
  _refrendar() {
    this.refrendar.emit();
  }

}
