import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarSecretariaGuard implements CanActivate, CanLoad {

  constructor( 
    private authService: AuthService,
    private router: Router
  ) {}


  canActivate(): Observable<boolean> | boolean {
    return this.authService.validarSecre().pipe(
      tap( valid => {
        if (!valid) this.init();
      })
    );
  }
  canLoad(): Observable<boolean> | boolean {
    return this.authService.validarSecre().pipe(
      tap( valid => {
        if (!valid) this.init();
      })
    );
  }
  init() {
    this.router.navigateByUrl('/auth');
    localStorage.clear();
  }
}
