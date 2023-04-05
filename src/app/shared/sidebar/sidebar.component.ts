import { Component } from '@angular/core';
import { ItemSidebar, Usuario } from 'src/app/interfaces';
import { secretaria, empresa } from '../../../assets/data/sidebar';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  items!: ItemSidebar[];

  user: Usuario = JSON.parse(localStorage.getItem('user')!);

  constructor(
    private aS: AuthService,
    private loading: LoadingService,
    private router: Router
  ) {
    if( this.user.rol == 'Secretaria' ) this.items = secretaria;
    else this.items = empresa;
  }
  logout() {
    this.loading.show();
    this.aS.logout().subscribe({
      next: (data: any) => {
        this.loading.hide();
        this.loading.exito(data.response);
        localStorage.clear();
        this.router.navigateByUrl('/auth');
      },
      error: (error: any) => {
        this.loading.hide();
        console.log(error);
      }
    });
  }
  
}
