import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConexionService } from './conexion.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ConexionService {

  constructor( private _http: HttpClient ) {
    super(_http);
  }
  validarToken(): Observable<boolean> {
    if( localStorage.getItem('token') ) return of(true); 
    return of(false);
  }
  vaidarEmpre(): Observable<boolean> {
    if( localStorage.getItem('role') == 'Empresa' ) return of(true); 
    return of(false);
  }
  validarSecre(): Observable<boolean> {
    if( localStorage.getItem('role') == 'Secretaria' ) return of(true); 
    return of(false);
  }

  login(cedula: string, password: string) {
    let params = { ciudad: 'SantaMarta' };
    let data = { cedula, password };
    return this.post('/login', data, params);
  }
  logout() {
    return this.getAuth('/logout');
  }
  reset(email: string) {
    let data = { email };
    let params = { ciudad: 'SantaMarta' };
    return this.post('/emailresetpass', data, params);
  }

}
