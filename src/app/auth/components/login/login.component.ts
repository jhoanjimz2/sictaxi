import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login, ResponseLogin } from '../../interfaces/interfaces';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  styles: [
    ` .container {  max-width: 100%;  padding-left: 0px; padding-right: 0px; }
      .c-w { color: white; } `
  ]
})
export class LoginComponent {

  login: Login = new Login();
  errorCredentials: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  resetpassword(){
    var divLogin = (<HTMLDivElement>document.getElementById("contenorLogin"));
    divLogin.setAttribute("class","container throubles");
  }
  loginback(){
    var divLogin = (<HTMLDivElement>document.getElementById("contenorLogin"));
    divLogin.setAttribute("class","container");
  }
  sendMail(e: any) {
    var divsendEmail = (<HTMLDivElement>document.getElementById("contenedorResetEmail"));
    divsendEmail.setAttribute("class","reset loading");
    this.auth.sendEmail(e.target.children[0].value).subscribe( (data: any) => {
      var divResetEmail = (<HTMLDivElement>document.getElementById("contenedorResetEmail"));
      divResetEmail.setAttribute("class","reset done");
      setTimeout(()=>{
        var divLogin = (<HTMLDivElement>document.getElementById("contenorLogin"));
        divResetEmail.setAttribute("class","reset");
        divLogin.setAttribute("class","container");
      },2500); 
    }, error => {   
      var divResetEmail = (<HTMLDivElement>document.getElementById("contenedorResetEmail"));
      divResetEmail.setAttribute("class","reset error");
      setTimeout(()=>{
        divResetEmail.setAttribute("class","reset");   
      },2500); 
    });
  }
  onLogin(){
    document.querySelector('#contenorLogin > .form')!.setAttribute("class","form loading");
    this.auth.login(this.login).subscribe({
      next: (data: ResponseLogin) => {
        this.auth.isloggedIn=true;
        this.errorCredentials=false;
        localStorage.setItem('user',JSON.stringify(data.user));
        localStorage.setItem('token',JSON.stringify(data.token));
        if(data.user.rol=="Secretaria"){
          this.router.navigate(["secretaria"]);
        }else if(data.user.rol==="Empresa" || data.user.rol==="Auxiliar"  || data.user.rol==="Superadministrador"){
          this.router.navigate(["empresa"]);
        }else if(data.user.rol==="Innlab"){
          this.router.navigate(["indicators"]);
        }
      },
      error: (msg: any) => {
        console.log(msg);
        localStorage.clear();
        this.auth.isloggedIn = false;
        this.errorCredentials = true;
        document.querySelector('#contenorLogin > .form')!.setAttribute("class","form");
      }
    })
  }



}
