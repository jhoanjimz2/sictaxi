import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {
  show: boolean = false;

  formulario: FormGroup = this.fb.group({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private loading: LoadingService,
    private fb: FormBuilder,
    private aS: AuthService,
    private router: Router
  ) {}
  olvi() {
    var divLogin = (<HTMLDivElement>document.getElementById("contenedor-login"));
    divLogin.setAttribute("class","throubles");
  }

  login() {
    this.loading.show();
    this.aS.login(
      this.formulario.controls['email'].value,
      this.formulario.controls['password'].value
    ).subscribe({
      next: (data: any) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.user.rol);
        localStorage.setItem('user', JSON.stringify(data.user));
        if (localStorage.getItem('role') == 'Secretaria') {
          this.router.navigateByUrl('/secretaria');
        } else {
          this.router.navigateByUrl('/empresa');
        }
      }, 
      error: (data: any) => {
        this.loading.error('Credenciales invalidas');
        this.loading.hide();
      }
    })
  }
}
