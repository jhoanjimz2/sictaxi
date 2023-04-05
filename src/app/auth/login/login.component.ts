import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(
    private aS: AuthService,
    private router: Router
  ) {}

  login() {
    // this.aS.login('85462968', 'buentaxi2023').subscribe({
    this.aS.login().subscribe({
      next: (data: any) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.user.rol);
        localStorage.setItem('user', JSON.stringify(data.user));
        if (localStorage.getItem('role') == 'Secretaria') {
          this.router.navigateByUrl('/secretaria');
        } else {
          this.router.navigateByUrl('/empresa');
        }
      }
    })
  }

}
