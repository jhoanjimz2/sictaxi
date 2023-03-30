import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sictaxi';
  constructor(private router: Router) {
    localStorage.setItem('token', 'true');
    localStorage.setItem('role', 'secretaria');
    if (localStorage.getItem('role') == 'empresa') this.router.navigateByUrl('/empresa');
    else this.router.navigateByUrl('/secretaria');
  }
}
