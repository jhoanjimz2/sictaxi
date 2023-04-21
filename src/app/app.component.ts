import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComentariosService } from './services/comentarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sictaxi';
  constructor(
    private router: Router,
    private cS: ComentariosService
  ) {
    this.cS.cargarComentarios();
    if (localStorage.getItem('role') == 'Secretaria') {
      this.router.navigateByUrl('/secretaria');
    } else {
      this.router.navigateByUrl('/empresa');
    }
  }
}
