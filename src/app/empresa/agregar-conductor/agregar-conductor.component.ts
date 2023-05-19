import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddCrearConductor, FormAddConductor1, FormAddConductor2, FormAddConductor3, GetConductorIDVinculacion } from 'src/app/interfaces';
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
  botones = { uno: true, dos: false, tres: false }
  form1!: FormAddConductor1;
  form2!: FormAddConductor2;
  form3!: FormAddConductor3;
  crearConductor: AddCrearConductor = {} as AddCrearConductor;

  constructor(
    private activatedRoute: ActivatedRoute,
    private loading: LoadingService,
    private location: Location,
    private aC: AddConductorService
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
  
  form(event: any, type: number) {
    if ( type == 1 ) this.form1 = event;
    else if ( type == 2 ) this.form2 = event;
    else this.form3 = event;
    this.crearConductor = { 
      ...this.form1, 
      ...this.form2, 
      ...this.form3,
      consecutivo        : this.conductor?.consecutivo? this.conductor.consecutivo : undefined,
      comparendosVigentes: undefined,
      clase              : undefined,
      capacidad          : undefined,
      tipoCombustible    : undefined,
    }
  }
  
  guardar() {
    this.editar();
  }

  nuevo() {}

  editar() {
    this.loading.show();
    this.aC.crearConductor(this.crearConductor).subscribe({
      next: (data: any) => {
        this.loading.exito('Perfil de taxista actualizado');
        this.loading.hide();
      }, error: () => {
        this.loading.hide();
        this.loading.error('Error data conductor, comuniquese con el administrador de la base de datos');
      }
    })
  }

}