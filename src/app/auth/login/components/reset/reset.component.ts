import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {

  formulario: FormGroup = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(
    private loading: LoadingService,
    private fb: FormBuilder,
    private aS: AuthService
  ) {}
  back() {
    var divLogin = (<HTMLDivElement>document.getElementById("contenedor-login"));
    divLogin.setAttribute("class","backe");
  }
  enviar() {
    this.loading.show();
    this.aS.reset(this.formulario.controls['email'].value).subscribe({
      next: (data: any) => {
        var span = (<HTMLDivElement>document.getElementById("notice-ok"));
        span.setAttribute("class","on");
        setTimeout(() => {
          var divLogin = (<HTMLDivElement>document.getElementById("contenedor-login"));
          span.setAttribute("class","off");
          divLogin.setAttribute("class","backe");
        },2500); 
        this.loading.hide();
        this.formulario.reset();
      }, 
      error: (data: any) => {
        var span = (<HTMLDivElement>document.getElementById("notice-error"));
        span.setAttribute("class","on");
        setTimeout(() => span.setAttribute("class","off"),2500); 
        this.loading.hide();
      }
    })
  }
}
