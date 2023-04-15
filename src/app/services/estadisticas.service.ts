import { Injectable } from '@angular/core';
import { ConexionService } from './conexion.service';
import { HttpClient } from "@angular/common/http";
import { GuardarAsociacion, GuardarEmpresa } from '../interfaces';

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


  //EMPRESAS AUTORIZADAS
  getEmpresasAutorizadas(page: number) {
    let params = { ciudad: 'SantaMarta', page };
    return this.getAuth('/getDataEmpresas', params);
  }
  getExcelEmpresasAutorizadas() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuthExcel('/exportCompaniesExcel', params)
  }
  getEmpresaAutorizada(id: number) {
    let params = { ciudad: 'SantaMarta' };
    return this.postAuth('/cargarEmpresa', { id }, params);
  }
  guardarEmpresa(data: GuardarEmpresa) {
    let params = { ciudad: 'SantaMarta' };
    return this.postAuth('/guardarEmpresa', data, params);
  }
  eliminarEmpresa(id: number) {
    let params = { ciudad: 'SantaMarta' };
    return this.postAuth('/eliminarEmpresa', { id }, params);
  }
  //EMPRESAS AUTORIZADAS




  //TAXIS REGISTRADOS
  getTaxisRegistrados(page: number) {
    let params = { ciudad: 'SantaMarta', page };
    return this.getAuth('/getDataTaxisRegistrados', params);
  }
  getExcelTaxisRegistrados() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuthExcel('/exportRegisterTaxisExcel', params)
  }
  //TAXIS REGISTRADOS



  //TAXIS SOAT VENCIDO
  getTaxisSoatVencido(page: number) {
    let params = { ciudad: 'SantaMarta', page };
    return this.getAuth('/getDataTaxisSoatVencido', params);
  }
  getExcelTaxiSoatVencidoExcel() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuthExcel('/exportTaxiSoatVencidoExcel', params)
  }
  //TAXIS SOAT VENCIDO



  //TAXIS TARJETA DE OPERACION
  getTaxisTarjetaOperaciónVigente(page: number) {
    let params = { ciudad: 'SantaMarta', page };
    return this.getAuth('/getDataTaxisTarjetaOperaciónVigente', params);
  }
  getExcelTaxiTarjetaOperacionVigenteExcel() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuthExcel('/exportTaxiTarjetaOperacionVigenteExcel', params)
  }
  //TAXIS TARJETA DE OPERACION



  //TAXIS CHATARRIZADOS
  getTaxisChatarrizados(page: number) {
    let params = { ciudad: 'SantaMarta', page };
    return this.getAuth('/getDataTaxisChatarrizados', params);
  }
  getExcelChatarrizadosTaxiExcel() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuthExcel('/exportChatarrizadosTaxiExcel', params)
  }
  //TAXIS CHATARRIZADOS



  //ASOCIACIONES
  getAsociaciones(page: number) {
    let params = { ciudad: 'SantaMarta', page };
    return this.getAuth('/getDataasociaciones', params);
  }
  getExcelAsociacionesExcel() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuthExcel('/exportAsociacionesExcel', params)
  }
  getAsociacion(id: number) {
    let params = { ciudad: 'SantaMarta' };
    return this.postAuth('/cargarAsociacion', { id }, params);
  }
  guardarAsociacion(data: GuardarAsociacion) {
    let params = { ciudad: 'SantaMarta' };
    return this.postAuth('/guardarAsociacion', data, params);
  }
  eliminarAsociacion(id: number) {
    let params = { ciudad: 'SantaMarta' };
    return this.postAuth('/eliminarAsociacion', { id }, params);
  }
  //ASOCIACIONES



  //TAXISTAS REGISTRADOS
  getTaxistasRegistrados(page: number) {
    let params = { ciudad: 'SantaMarta', page };
    return this.getAuth('/getDataConductoresRegistrados', params);
  }
  getExcelConductoresRegistradosExcel() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuthExcel('/exportConductoresRegistradosExcel', params)
  }
  getPerfilConductor(idConductor: number) {
    let params = { ciudad: 'SantaMarta' };
    return this.postAuth('/searchVehiculoConductorByVinculacion', { idConductor } ,params)
  }
  //TAXISTAS REGISTRADOS


  
  //TAXISTAS SIN LICENCIA
  getTaxistasSinLicencia(page: number) {
    let params = { ciudad: 'SantaMarta', page };
    return this.getAuth('/getDataConductoresSinLicencia', params);
  }
  getExcelConductoresSinLicenciaExcel() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuthExcel('/exportConductoresSinLicenciaExcel', params)
  }
  //TAXISTAS SIN LICENCIA


  
  //TAXISTAS SIN REFRENDAR
  getTaxistasSinRefrendar(page: number) {
    let params = { ciudad: 'SantaMarta', page };
    return this.getAuth('/getDataConductoresSinRefrendar', params);
  }
  getExcelConductoresSinRefrendarExcel() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuthExcel('/exportConductoresSinRefrendarExcel', params)
  }
  //TAXISTAS SIN REFRENDAR

 
}