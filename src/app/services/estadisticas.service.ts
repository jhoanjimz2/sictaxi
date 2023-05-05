import { Injectable } from '@angular/core';
import { ConexionService } from './conexion.service';
import { HttpClient } from "@angular/common/http";
import { ActualizarPerfilUsuario, ActualizarUsuario, CambiarPassword, GuardarAsociacion, GuardarEmpresa, ReqConductoresConQuejas, ReqEstadisticaConductores, ReqGrafComentarios } from '../interfaces';

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
  getGraficaComentarios(data: ReqGrafComentarios) {
    return this.postAuth('/getGraphComentariosCalificaciones', data);
  }
  getGraficaCalificaciones(params: { fechaInicial: string, fechaFinal: string }) {
    return this.getAuth('/getGraphCalificaciones',params);
  }
  getConductoresConQuejas(data: ReqEstadisticaConductores) {
    return this.postAuth('/getEstadisticaConductoresConQuejas', data);
  }
  getConductoresBienCalificados(data: ReqEstadisticaConductores) {
    return this.postAuth('/getEstadisticaConductoresBienCalificados', data);
  }
  getDataQuejas(idVinculacion: number) {
    let params = { idVinculacion };
    return this.getAuth('/getDataQuejas', params);
  }
  getDataQuejasTramitadas(idVinculacion: number) {
    let params = { idVinculacion };
    return this.getAuth('/getDataQuejasTramitadas', params);
  }
  getDataBuenasCalificaciones(idVinculacion: number) {
    let params = { idVinculacion };
    return this.getAuth('/getDataBuenasCalificaciones', params);
  }
  getDataDocumentosVencidos(page: number) {
    let params = { ciudad: 'Santa Marta', page };
    return this.getAuth('/getDataDocumentosVencidos', params);
  }
  getExcelDocumentoVencidos(page: number) {
    let params = { ciudad: 'SantaMarta', page };
    return this.getAuthExcel('/exportDocumentoVencidos', params)
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
  descargarPdfProfile(idConductor: number) {
    let params = { ciudad: 'SantaMarta' };
    return this.postAuthPDF('/fichaConductorPDF', { idConductor } ,params)
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



  //QUEJAS
  getConductoresConQuejasPaginado(page: number, data: ReqConductoresConQuejas) {
    let params = { page }
    return this.postAuth('/getConductoresConQuejas', data ,params);
  }
  bloquearConductor(id: number) {
    console.log(id)
    let data = { id }
    return this.postAuth('/vinculacionBloquear', data);
  }
  desbloquearConductor(id: number) {
    let data = { id }
    return this.postAuth('/vinculacionDesbloquear', data);
  }
  tramitarQuejas(id: number) {
    let data = { id }
    return this.postAuth('/processComplaintsVinculacion', data);
  }
  //QUEJAS


  //CONDUCTORES
  getConductoresGeneral(page: number, cedula: string) {
    let params = { ciudad: 'SantaMarta', page, cedula };
    return this.getAuth('/getDataConductoresGeneral', params);
  }
  getExcelConductoresListadoGeneral() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuthExcel('/exportConductoresListadoGeneral', params)
  }
  //CONDUCTORES



  //USUARIOS
  getListUsers() {
    return this.getAuth('/listUsers');
  }
  getDataUser(id: number) {
    let data = { id }
    return this.postAuth('/getProfileUserById', data);
  }
  eliminarUser(id: number) {
    let data = { id }
    return this.postAuth('/deleteUser', data);
  }
  updateUser(data: ActualizarUsuario) {
    return this.postAuth('/update', data);
  }
  crearUser(data: ActualizarUsuario) {
    return this.postAuth('/register', data);
  }
  getEmpresas() {
    return this.getAuth('/getEmpresas');
  }
  //USUARIOS


  //PERFIL DE USUARIO
  getPerfilUsuario() {
    return this.getAuth('/getProfileUser');
  }
  editarPerfilUsuario(data: ActualizarPerfilUsuario) {
    return this.postAuth('/updateUser', data);
  }
  cambiarContrasena(data: CambiarPassword) {
    return this.postAuth('/changePassword ', data);
  }
  cambiarContrasenaInit(pass: string) {
    let data = { pass }
    return this.postAuth('/changesolicitarPass', data);
  }
  //PERFIL DE USUARIO


  //PARQUE AUTOMOTOR
  getVehiculosGeneral(page: number) {
    let params = { ciudad: 'SantaMarta', page };
    return this.getAuth('/getDataVehiculosGeneral', params);
  }
  //PARQUE AUTOMOTOR
 
}