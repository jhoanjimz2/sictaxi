"use strict";(self.webpackChunksictaxi=self.webpackChunksictaxi||[]).push([[85],{2085:(P,s,o)=>{o.r(s),o.d(s,{IncidenciasModule:()=>C});var c=o(6895),l=o(5197),n=o(1571),d=o(4471),p=o(2574),r=o(8569);function g(t,e){if(1&t&&(n.TgZ(0,"div",8)(1,"div",9)(2,"div",10)(3,"label",11),n._uU(4),n.qZA(),n._UZ(5,"br"),n.TgZ(6,"label",11),n._uU(7),n.qZA(),n._UZ(8,"br"),n.TgZ(9,"label",12),n._uU(10),n.qZA()(),n.TgZ(11,"div",13)(12,"label"),n._uU(13),n.qZA()()()()),2&t){const i=e.$implicit;n.xp6(4),n.Oqu(i.nombres+" "+i.apellidos),n.xp6(3),n.Oqu(i.razonSocial),n.xp6(3),n.Oqu(i.observacion),n.xp6(3),n.Oqu(i.fechaRegistro)}}function u(t,e){if(1&t){const i=n.EpF();n.TgZ(0,"app-paginacion",14),n.NdJ("paginar",function(M){n.CHM(i);const O=n.oxw();return n.KtG(O.pagina(M))}),n.qZA()}if(2&t){const i=n.oxw();n.Q6J("cantidad",i.totalPages)("focus",i.paginaActual)}}const f=[{path:"",component:(()=>{class t{constructor(i,a){this.loading=i,this.eS=a,this.totalPages=1,this.paginaActual=1,this.alertas=[],this.pagina({pagina:1})}pagina({pagina:i}){this.loading.show(),this.paginaActual=i,this.eS.getObservaciones(i).subscribe({next:a=>{this.alertas=a.data,this.totalPages=a.pages,this.loading.hide()},error:a=>{this.totalPages=1,this.alertas=[],this.loading.hide(),this.loading.error(a.error.message)}})}}return t.\u0275fac=function(i){return new(i||t)(n.Y36(d.b),n.Y36(p.P))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-incidencias"]],decls:9,vars:2,consts:[[1,"contenedor"],[1,"row"],[1,"col"],[1,"titulo"],[1,"row","pb-80"],["class","col-12",4,"ngFor","ngForOf"],[1,"footer-paginacion"],[3,"cantidad","focus","paginar",4,"ngIf"],[1,"col-12"],[1,"card-incidencias","sombra"],[1,"w-80"],[1,"label1"],[1,"label2"],[1,"w-20"],[3,"cantidad","focus","paginar"]],template:function(i,a){1&i&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"label",3),n._uU(4,"Alertas"),n.qZA()()(),n.TgZ(5,"div",4),n.YNc(6,g,14,4,"div",5),n.qZA(),n.TgZ(7,"div",6),n.YNc(8,u,1,2,"app-paginacion",7),n.qZA()()),2&i&&(n.xp6(6),n.Q6J("ngForOf",a.alertas),n.xp6(2),n.Q6J("ngIf",a.totalPages))},dependencies:[c.sg,c.O5,r.s],styles:[".contenedor[_ngcontent-%COMP%]{padding:15px 20px;height:100%}.mt-20[_ngcontent-%COMP%]{margin-top:20px}.titulo[_ngcontent-%COMP%]{font-size:25px;font-weight:700;color:#000;margin-left:20px}.card-incidencias[_ngcontent-%COMP%]{width:100%;padding:20px 50px;background-color:#fff;border-radius:25px;margin-top:20px;display:flex}.w-80[_ngcontent-%COMP%]{width:80%;line-height:1}.w-80[_ngcontent-%COMP%]   .label1[_ngcontent-%COMP%]{font-size:13px;font-weight:700;color:#000}.w-80[_ngcontent-%COMP%]   .label2[_ngcontent-%COMP%]{font-size:15px;font-weight:700;color:#00000080}.w-20[_ngcontent-%COMP%]{width:20%;display:flex;justify-content:flex-end;align-items:center}.w-20[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:13px;font-weight:700;color:#000}"]}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[l.Bz.forChild(f),l.Bz]}),t})();var h=o(4466),x=o(7023),v=o(5503);let C=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[c.ez,m,h.m,x.q,v.D]}),t})()}}]);