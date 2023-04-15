import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {


  _loading: boolean = false;
  get loading(): boolean { return this._loading; }
  set loading(value: boolean) { this._loading = value; }

  show() {
    this.loading = true;
  }
  hide() {
    this.loading = false;
  }

  error(message: string) {
    Swal.fire('Error', message, 'error');
  }
  exito(message: string) {
    Swal.fire('Exito', message, 'success');
  }
  info(message: string) {
    Swal.fire('', message, 'info');
  }

}
