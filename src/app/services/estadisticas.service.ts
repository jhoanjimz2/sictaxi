import { Injectable } from '@angular/core';
import { ConexionService } from './conexion.service';
import { HttpClient } from "@angular/common/http";
import { ActualizarPerfilUsuario, ActualizarUsuario, CambiarPassword, GuardarAsociacion, GuardarEmpresa, ReqConductoresConQuejas, ReqEstadisticaConductores, ReqGrafComentarios, UpdateParametros } from '../interfaces';

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
  cambiarContrasenaInit(pass: any) {
    let data = { pass }
    return this.postAuth('/changesolicitarPass', data);
  }
  cambiarImgDePerfil(id: string, image: File) {
    let data = { id, image }
    return this.postAuthImg('/updateProfileUser', data);
  }
  //PERFIL DE USUARIO


  //PARQUE AUTOMOTOR
  getVehiculosGeneral(page: number, filtro: string) {
    let params = { ciudad: 'SantaMarta', page, filtro };
    return this.getAuth('/getDataVehiculosGeneral', params);
  }
  cancelarMatricula(placa: string) {
    let data = { placa }
    return this.postAuth('/cancelarMatricula', data);
  }
  getParqueAutomotorExcel() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuthExcel('/exportParqueAutomotorExcel', params)
  }
  //PARQUE AUTOMOTOR


  //INCIDENCIAS
  getObservaciones(page: number) {
    let params = { ciudad: 'SantaMarta', page };
    return this.getAuth('/getListObservaciones', params);
  }
  //INCIDENCIAS

  //PARAMETROS
  getLoadParameters() {
    return this.getAuth('/loadParameters');
  }
  updateParametros(data: UpdateParametros) {
    return this.postAuth('/updateParameters', data);
  }
  obtenerMarcas() {
    return this.getAuth('/obtenerMarcas');
  }
  nuevaMarca(name: string) {
    let data = { name }
    return this.postAuth('/nuevaMarca', data);
  }
  obtenerAFPARLEPS() {
    return this.getAuth('/getListadoobtenerSeguridadSocial');
  }
  obtenerAseguradoras() {
    return this.getAuth('/obtenerAseguradoras');
  }
  nuevaSeguridadSocial(name: string, type: string) {
    let data = { name, type }
    return this.postAuth('/nuevaSeguridadSocial', data);
  }
  nuevaAseguradora(name: string) {
    let data = { name }
    return this.postAuth('/nuevaAseguradora', data);
  }
  updateAseguradora(nombre: string, id: string) {
    let data = { nombre, id }
    return this.postAuth('/updateAseguradora', data);
  }
  updateSeguridadSocial(nombre: string, id: string) {
    let data = { nombre, id }
    return this.postAuth('/updateSeguridadSocial', data);
  }
  updateMarca(nombre: string, id: string) {
    let data = { nombre, id }
    return this.postAuth('/updateMarca', data);
  }
  eliminarSeguridadSocial(id: string) {
    let data = { id }
    return this.postAuth('/eliminarSeguridadSocial', data);
  }
  eliminarAseguradora(id: string) {
    let data = { id }
    return this.postAuth('/eliminarAseguradora', data);
  }
  eliminarMarca(id: string) {
    let data = { id }
    return this.postAuth('/eliminarMarca', data);
  }
  //PARAMETROS
 
}