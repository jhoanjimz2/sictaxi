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
    if( localStorage.getItem('role') == 'empresa' ) return of(true); 
    return of(false);
  }
  validarSecre(): Observable<boolean> {
    if( localStorage.getItem('role') == 'secretaria' ) return of(true); 
    return of(false);
  }

}
