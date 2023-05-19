import { Injectable } from '@angular/core';
import { ConexionService } from './conexion.service';
import { HttpClient } from '@angular/common/http';
import { AddCrearConductor } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AddConductorService extends ConexionService {

  constructor(private _http: HttpClient) { super(_http); }

  getConductor(idVinculacion: string) {
    let params = { idVinculacion };
    return this.getAuth('/getDataVinculacionConductor', params);
  }
  obtenerAFPARLEPS() {
    return this.getAuth('/getListadoobtenerSeguridadSocial');
  }
  obtenerMarcas() {
    return this.getAuth('/obtenerMarcas');
  }
  obtenerAseguradoras() {
    return this.getAuth('/obtenerAseguradoras');
  }
  obtenerAsociaciones() {
    return this.getAuth('/obtenerAsociaciones');
  }
  crearConductor(data: AddCrearConductor) {
    return this.postAuthImg('/addConductorVehiculo ', data);
  }
  getRefrendaciones(idVinculacion: string) {
    let data = { idVinculacion }
    return this.postAuth('/getRefrendaciones ', data);
  }
  refrendar(idVinculacion: string) {
    let data = { idVinculacion }
    return this.postAuth('/refrendar ', data);
  }
  desvincular(idVinculacion: number, clave: string) {
    let data = { idVinculacion, clave }
    return this.postAuth('/desvincular ', data);
  }

}
