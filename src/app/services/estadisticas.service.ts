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
    return this.getAuth('/getCardDataSecretaria', params);
  }
  getModelos() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuth('/getGraphModelCar', params);
  }
  getNivelEducativo() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuth('/getGraphTaxistaNivelEducativo', params);
  }
  getNivelEstrato() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuth('/getGraphTaxistaEstrato', params);
  }


  getEmpresasAutorizadas(page: number) {
    let params = { ciudad: 'SantaMarta', page };
    return this.getAuth('/getDataEmpresas', params);
  }
  getExcelEmpresasAutorizadas() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuthExcel('/exportCompaniesExcel', params)
  }

  getTaxisRegistrados(page: number) {
    let params = { ciudad: 'SantaMarta', page };
    return this.getAuth('/getDataTaxisRegistrados', params);
  }
  getExcelTaxisRegistrados() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuthExcel('/exportRegisterTaxisExcel', params)
  }

  getTaxisSoatVencido(page: number) {
    let params = { ciudad: 'SantaMarta', page };
    return this.getAuth('/getDataTaxisSoatVencido', params);
  }
  getExcelTaxiSoatVencidoExcel() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuthExcel('/exportTaxiSoatVencidoExcel', params)
  }

  getTaxisTarjetaOperaciónVigente(page: number) {
    let params = { ciudad: 'SantaMarta', page };
    return this.getAuth('/getDataTaxisTarjetaOperaciónVigente', params);
  }
  getExcelTaxiTarjetaOperacionVigenteExcel() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuthExcel('/exportTaxiTarjetaOperacionVigenteExcel', params)
  }

  getTaxisChatarrizados(page: number) {
    let params = { ciudad: 'SantaMarta', page };
    return this.getAuth('/getDataTaxisChatarrizados', params);
  }
  getExcelChatarrizadosTaxiExcel() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuthExcel('/exportChatarrizadosTaxiExcel', params)
  }

 
}