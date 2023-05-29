import { Injectable } from '@angular/core';
import { ConexionService } from './conexion.service';
import { HttpClient } from '@angular/common/http';
import { UpdateProfileEmpresa } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PerfilEmpresaService  extends ConexionService {

  constructor(private _http: HttpClient) { super(_http); }

  getCompany() {
    return this.getAuth('/getCompany');
  }
  updateCompanyPhoto(data: UpdateProfileEmpresa) {
    return this.postAuthImg('/updateCompanyPhoto', data);
  }

}
