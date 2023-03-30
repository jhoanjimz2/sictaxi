import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private _token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zaWN0YXhpLmdvdi5jby9hcGkvbG9naW4iLCJpYXQiOjE2ODAxNzg1NTgsImV4cCI6MTY4MDE4MjE1OCwibmJmIjoxNjgwMTc4NTU4LCJqdGkiOiI5d0VzcW9uWWFMTFBQYWUxIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.irjnDauuoqY7Q0uf2gB30NY_m_SjbmQq-pCBRpmWyOQ';
  get token() { return this._token; }
  set token(value) { this._token = value; }

  constructor(private http: HttpClient) {}

  get(ruta: string, fromObject?: any) {
    let headers = new HttpHeaders({ 'Authorization': `Bearer ${this.token}` });
    let params = new HttpParams({ fromObject });
    return this.http.get(environment.api + ruta, { headers, params }).pipe(
      map((data: any) => { 
        return data; 
      })
    );
  }

}
