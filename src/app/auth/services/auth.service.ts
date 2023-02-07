import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import { Login, ResponseLogin } from '../interfaces/interfaces';
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isloggedIn!:boolean;
  headers = new HttpHeaders()
  .append('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
  .append('Access-Control-Allow-Origin', '*');

  constructor(
    private http: HttpClient
  ) {}

  login(log: Login) {
    return this.http.post<ResponseLogin>(`${environment.api}/login`, log, { headers: this.headers }).pipe(
      map((data: ResponseLogin) => {
        return data;
      })
    );
  }
  sendEmail(email: string) {
    return this.http.post(`${environment.api}/emailresetpass`, {email}, { headers: this.headers }).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  
}
