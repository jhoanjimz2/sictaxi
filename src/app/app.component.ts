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
    if (localStorage.getItem('role') == 'Secretaria') this.router.navigateByUrl('/secretaria');
    else this.router.navigateByUrl('/empresa');
  }
}
