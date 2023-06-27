import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConductorBxC, GetConductorIDVinculacion } from 'src/app/interfaces';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-info-complementaria',
  templateUrl: './info-complementaria.component.html',
  styleUrls: ['./info-complementaria.component.scss']
})
export class InfoComplementariaComponent implements OnChanges {
  @Output() refrendar: EventEmitter<any> = new EventEmitter();
  @Output() saveForm: EventEmitter<any> = new EventEmitter();
  @Input() conductor!: GetConductorIDVinculacion;
  @Input() conductorBxC!: ConductorBxC;
  @Input() id = '';
  @Input() form!: FormGroup;
  
  constructor(
    private loading: LoadingService,
    private fb: FormBuilder
  ) {}
  ngOnChanges() {
    if ( this.conductor ) this.cargarDatos();
    if ( this.conductorBxC ) this.rellenar();
  }
  rellenar() {
    this.form.controls['parentescoJefeHogar'].setValue(this.conductorBxC.parentescoJefeHogar);
    this.form.controls['numeroHijos'].setValue(this.conductorBxC.numeroHijos);
    this.form.controls['personasCargo'].setValue(this.conductorBxC.personasCargo);
    this.form.controls['nivelEducativoAlcanzado'].setValue(this.conductorBxC.nivelEducativoAlcanzado);
    this.form.controls['estudia'].setValue(this.conductorBxC.estudia);
    this.form.controls['tipoDiscapacidad'].setValue(this.conductorBxC.tipoDiscapacidad);
    this.form.controls['taxistaOcacional'].setValue(this.conductorBxC.taxistaOcacional);
    this.form.controls['tiempoComoConductor'].setValue(this.conductorBxC.tiempoComoConductor);
    this.form.controls['conductorLaborUnidad'].setValue(this.conductorBxC.conductorLaborUnidad);
    this.form.controls['ingresosAproxConductor'].setValue(this.conductorBxC.ingresosAproxConductor);
    this.form.controls['otraLabor'].setValue(this.conductorBxC.otraLabor);
    this.form.controls['ingresosOtraLabor'].setValue(this.conductorBxC.ingresosOtraLabor);
    this.form.controls['tiempoOtraLabor'].setValue(this.conductorBxC.tiempoOtraLabor);
    this.form.controls['otraLaborUnidad'].setValue(this.conductorBxC.otraLaborUnidad);
    this.form.controls['estratoSocioEconomico'].setValue(this.conductorBxC.estratoSocioEconomico);
    this.form.controls['tipoVivienda'].setValue(this.conductorBxC.tipoVivienda);
    this.form.controls['luz'].setValue(this.conductorBxC.luz);
    this.form.controls['agua'].setValue(this.conductorBxC.agua);
    this.form.controls['gas'].setValue(this.conductorBxC.gas);
    this.form.controls['alcantarillado'].setValue(this.conductorBxC.alcantarillado);
    this.form.controls['recoleccionBasura'].setValue(this.conductorBxC.recoleccionBasura);
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
      this.saveForm.emit({ ...this.form.value });
    } else this.loading.error('Todos los campos son obligatorios');
  }
  _refrendar() {
    this.refrendar.emit();
  }

}
