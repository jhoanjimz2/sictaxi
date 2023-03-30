import { Injectable } from '@angular/core';
import { ConexionService } from './conexion.service';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService extends ConexionService {

  constructor(private _http: HttpClient) { super(_http); }

  getCards() {
    let params = { ciudad: 'SantaMarta' };
    return this.get('/getCardDataSecretaria', params);
  }
  getModelos() {
    let params = { ciudad: 'SantaMarta' };
    return this.get('/getGraphModelCar', params);
  }
  getNivelEducativo() {
    let params = { ciudad: 'SantaMarta' };
    return this.get('/getGraphTaxistaNivelEducativo', params);
  }
  getNivelEstrato() {
    let params = { ciudad: 'SantaMarta' };
    return this.get('/getGraphTaxistaEstrato', params);
  }
 
}