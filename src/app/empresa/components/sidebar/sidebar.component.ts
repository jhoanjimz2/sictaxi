import { Component } from '@angular/core';
import { Rutas } from '../../interfaces/interfaces-empresa';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [ ` 
    aside header { height: 160px !important; }
    aside #footer { width: 100% } 
  `]
})
export class SidebarComponent {

  rutas: Rutas[] = [
    { url: 'buscar-conductor', name: 'Buscar conductores', img: '/assets/img/icons/empresa/search_black.svg' },
    { url: 'agregar-conductor', name: 'Agregar conductor', img: '/assets/img/icons/empresa/add_user_black.svg' },
    { url: 'usuarios', name: 'Usuarios', img: '/assets/img/icons/empresa/users_black.svg' },
    { url: 'perfil-empresa', name: 'Perfil de la empresa', img: '/assets/img/icons/empresa/company_black.svg' },
    { url: 'perfil-usuario', name: 'Perfil de usuario', img: '/assets/img/icons/empresa/user_black.svg' },
    { url: 'fechas-vencidas', name: 'Fechas vencidas', img: '/assets/img/icons/empresa/caution_white_black.svg' },
    { url: 'parque-automotor', name: 'Parque automotor', img: '/assets/img/icons/empresa/car_black.svg' },
    { url: 'incidencias', name: 'Incidencias', img: '/assets/img/icons/empresa/message_black.svg' }
  ]

}
