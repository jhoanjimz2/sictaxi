import { Component } from '@angular/core';
import { Rutas } from '../../interfaces/interfaces-secretaria';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [ ` 
    aside header { height: 160px !important; }
    aside #footer { width: 100% }
    aside { background-color: #015a98; }
    aside #menu a { color: #fff; }
    aside header .arrow { fill: #fff; }
    aside #footer .innlab { color: #fff; }
    aside #footer .innlab .icon .thread-border { stroke: #fff; fill: #fff; }
    aside #footer .icon .lines path:not(.thread-border) { stroke: #fff; }
    aside #footer .icon circle { fill: #fff; }
    .liquid { fill: #fff !important; }
    .name { color: #fff; }
    .logout { color: #fff; }
  `]
})
export class SidebarComponent {

  rutas: Rutas[] = [
    { url: 'estadisticas', name: 'Estadísticas', img: '/assets/img/icons/secretaria/statistics.svg' },
    { url: 'quejas', name: 'Quejas', img: '/assets/img/icons/secretaria/complaints.svg' },
    { url: 'buscar-conductor', name: 'Buscar conductores', img: '/assets/img/icons/secretaria/search.svg' },
    { url: 'usuarios', name: 'Usuarios', img: '/assets/img/icons/secretaria/users.svg' },
    { url: 'perfil-usuario', name: 'Perfil de usuario', img: '/assets/img/icons/secretaria/user.svg' },
    { url: 'parque-automotor', name: 'Parque automotor', img: '/assets/img/icons/secretaria/car.svg' },
    { url: 'incidencias', name: 'Incidencias', img: '/assets/img/icons/secretaria/message.svg' },
    { url: 'parametros', name: 'Parametros', img: '/assets/img/icons/secretaria/parameters.svg' }
  ]

}
