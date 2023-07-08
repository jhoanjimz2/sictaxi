import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      if (parseInt(this.form.controls['tiempoComoConductor'].value) <= 0) this.loading.error('Por favor, ingrese el tiempo valido como conductor');
      else if (this.form.controls['otraLabor'].value == "1") {
        if (parseInt(this.form.controls['tiempoOtraLabor'].value) <= 0) this.loading.error('Por favor, ingrese el tiempo valido realizando la otra labor.');
        else this.saveForm.emit({ ...this.form.value });
      }
      else this.saveForm.emit({ ...this.form.value });
    }
    else this.validarCampos2();
  }
  _refrendar() {
    this.refrendar.emit();
  }
  validarCampos2() {
    if      (!this.form.controls['parentescoJefeHogar'].valid)     this.loading.error('Por favor, seleccione el parentesco con el jefe del hogar.');
    else if (!this.form.controls['numeroHijos'].valid)             this.loading.error('Por favor, ingrese el número de hijos.');
    else if (!this.form.controls['personasCargo'].valid)           this.loading.error('Por favor, ingrese las personas a cargo.');
    else if (!this.form.controls['nivelEducativoAlcanzado'].valid) this.loading.error('Por favor, seleccione el nivel educativo alcanzado.');
    else if (!this.form.controls['estudia'].valid)                 this.loading.error('Por favor, seleccione si el conductor estudia o no.');
    else if (!this.form.controls['tipoDiscapacidad'].valid)        this.loading.error('Por favor, seleccione el tipo de discapacidad.');
    else if (!this.form.controls['taxistaOcacional'].valid)        this.loading.error('Por favor, seleccione si el conductor es taxista ocacional o no.');
    else if (!this.form.controls['tiempoComoConductor'].valid)     this.loading.error('Por favor, ingrese el tiempo como conductor');
    else if (!this.form.controls['conductorLaborUnidad'].valid)    this.loading.error('Por favor, seleccione la unidad de tiempo como conductor');
    else if (!this.form.controls['ingresosAproxConductor'].valid)  this.loading.error('Por favor, seleccione los ingresos aproximados como conductor.');
    else if (!this.form.controls['otraLabor'].valid)               this.loading.error('Por favor, seleccione si el conductor realiza otra labor.');
    else if (!this.form.controls['ingresosOtraLabor'].valid)       this.loading.error('Por favor, seleccione los ingresos aproximados realizando la otra labor.');
    else if (!this.form.controls['tiempoOtraLabor'].valid)         this.loading.error('Por favor, ingrese el tiempo realizando la otra labor.');
    else if (!this.form.controls['otraLaborUnidad'].valid)         this.loading.error('Por favor, seleccione la unidad de tiempo con la otra labor');
    else if (!this.form.controls['estratoSocioEconomico'].valid)   this.loading.error('Por favor, seleccione el estrato socioeconómico.');
    else if (!this.form.controls['tipoVivienda'].valid)            this.loading.error('Por favor, seleccione el tipo de vivienda.');
    else if (!this.form.controls['luz'].valid)                     this.loading.error('Por favor, seleccione si tiene servicio de luz .');
    else if (!this.form.controls['agua'].valid)                    this.loading.error('Por favor, seleccione si tiene servicio de agua.');
    else if (!this.form.controls['gas'].valid)                     this.loading.error('Por favor, seleccione si tiene servicio de gas.');
    else if (!this.form.controls['alcantarillado'].valid)          this.loading.error('Por favor, seleccione ti tiene servicio de alcantarillado.');
    else if (!this.form.controls['recoleccionBasura'].valid)       this.loading.error('Por favor, seleccione si tiene servicio de recolección de basura.');
  }

}
