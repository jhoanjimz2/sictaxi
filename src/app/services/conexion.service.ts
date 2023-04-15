import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  api: string = 'https://api.sictaxi.gov.co/api';

  constructor(private http: HttpClient) {}

  get(ruta: string) {
    return this.http.get(this.api + ruta).pipe(
      map((data: any) => { 
        return data; 
      })
    );
  }
  getAuth(ruta: string, fromObject?: any) {
    let params = new HttpParams({ fromObject });
    let headers = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` });
    return this.http.get(this.api + ruta, { headers, params }).pipe(
      map((data: any) => { 
        return data; 
      })
    );
  }
  getAuthExcel(ruta: string, fromObject?: any) {
    let params = new HttpParams({ fromObject });
    let headers = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` });
    return this.http.get(this.api + ruta, { headers, params, responseType: 'blob' as 'json' }).pipe(
      map((data: any) => { 
        return data; 
      })
    );
  }
  post(ruta: string, data?: any ,fromObject?: any) {
    let params = new HttpParams({ fromObject });
    return this.http.post(this.api + ruta, data,{ params }).pipe(
      map((data: any) => { 
        return data; 
      })
    );
  }
  postAuth(ruta: string, data?: any ,fromObject?: any) {
    let params = new HttpParams({ fromObject });
    let headers = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` });
    return this.http.post(this.api + ruta, data, { headers, params }).pipe(
      map((data: any) => { 
        return data; 
      })
    );
  }

}
