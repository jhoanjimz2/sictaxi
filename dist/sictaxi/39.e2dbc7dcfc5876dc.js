"use strict";(self.webpackChunksictaxi=self.webpackChunksictaxi||[]).push([[39],{7039:(C,x,a)=>{a.r(x),a.d(x,{TaxisRegistradosModule:()=>Z});var o=a(6895),u=a(5197),t=a(1571),d=a(4471),m=a(8273),c=a(2574),_=a(8569),r=a(557);function l(n,g){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA()()),2&n){const e=g.$implicit;t.xp6(2),t.Oqu(e.nombreEmpresa),t.xp6(2),t.Oqu(e.placa),t.xp6(2),t.Oqu(e.modelo),t.xp6(2),t.Oqu(e.marca),t.xp6(2),t.Oqu(e.nombrePropietario),t.xp6(2),t.Oqu(e.cedulaPropietario)}}function i(n,g){if(1&n){const e=t.EpF();t.TgZ(0,"app-paginacion",16),t.NdJ("paginar",function(f){t.CHM(e);const E=t.oxw();return t.KtG(E.pagina(f))}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("cantidad",e.totalPages)("focus",e.paginaActual)}}const h=[{path:"",component:(()=>{class n{constructor(e,p,f){this.loading=e,this.download=p,this.eS=f,this.totalPages=0,this.paginaActual=0,this.pagina({pagina:1})}pagina({pagina:e}){this.loading.show(),this.paginaActual=e,this.eS.getTaxisRegistrados(e).subscribe({next:p=>{this.totalPages=p.pages,this.taxis=p.data,this.loading.hide()},error:p=>{this.loading.hide(),this.loading.error(p.error.message)}})}exportar(){this.loading.show(),this.eS.getExcelTaxisRegistrados().subscribe({next:e=>{this.download.download(e,"Taxis Registrados")},error:e=>{this.loading.hide(),this.loading.error(e.error.message)}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.b),t.Y36(m.K),t.Y36(c.P))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-taxis-registrados"]],decls:29,vars:2,consts:[[1,"contenedor"],[1,"row"],[1,"col-6"],[1,"titulo"],[1,"col-6","flex-end"],[3,"export"],[1,"row","mt-20","pb-80"],[1,"col"],[1,"table"],[1,"ptlr"],[1,"ptrr"],[1,"h-10"],[1,"bw"],[4,"ngFor","ngForOf"],[1,"footer-paginacion"],[3,"cantidad","focus","paginar",4,"ngIf"],[3,"cantidad","focus","paginar"]],template:function(e,p){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"label",3),t._uU(4,"Taxis registrados"),t.qZA()(),t.TgZ(5,"div",4)(6,"app-export-excel",5),t.NdJ("export",function(){return p.exportar()}),t.qZA()()(),t.TgZ(7,"div",6)(8,"div",7)(9,"table",8)(10,"thead")(11,"tr")(12,"th",9),t._uU(13,"Empresa"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Placa"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Modelo"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Marca"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Nombre propietario"),t.qZA(),t.TgZ(22,"th",10),t._uU(23,"C\xe9dula propietario"),t.qZA()()(),t._UZ(24,"div",11),t.TgZ(25,"tbody",12),t.YNc(26,l,13,6,"tr",13),t.qZA()()()(),t.TgZ(27,"div",14),t.YNc(28,i,1,2,"app-paginacion",15),t.qZA()()),2&e&&(t.xp6(26),t.Q6J("ngForOf",p.taxis),t.xp6(2),t.Q6J("ngIf",p.totalPages))},dependencies:[o.sg,o.O5,_.s,r.$],styles:[".contenedor[_ngcontent-%COMP%]{padding:15px 20px;height:100%}.titulo[_ngcontent-%COMP%]{font-size:25px;font-weight:700;color:#000;margin-left:20px}.flex-end[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.mt-20[_ngcontent-%COMP%]{margin-top:20px}.encabezado[_ngcontent-%COMP%]{background:white;border-radius:0 20px 0 0!important;padding-top:10px;padding-bottom:10px;width:100%}thead[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 4px 17px #00000026;border-top-right-radius:30px!important;border-top-left-radius:30px!important;margin-bottom:20px}tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none;padding:20px;font-size:14px}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px 20px;font-size:14px}.ptlr[_ngcontent-%COMP%]{border-top-left-radius:30px!important}.ptrr[_ngcontent-%COMP%]{border-top-right-radius:30px!important}.h-10[_ngcontent-%COMP%]{height:10px;width:100%}.bw[_ngcontent-%COMP%]{background:white;box-shadow:0 4px 17px #00000026}"]}),n})()}];let T=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.Bz.forChild(h),u.Bz]}),n})();var M=a(4466);let Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[o.ez,T,M.m]}),n})()},8273:(C,x,a)=>{a.d(x,{K:()=>t});var o=a(1571),u=a(4471);let t=(()=>{class d{constructor(c){this.loading=c}download(c,_){const r=c.type,l=[];l.push(c);const i=window.URL.createObjectURL(new Blob(l,{type:r})),s=document.createElement("a");s.href=i,s.setAttribute("download",_),document.body.appendChild(s),s.click(),this.loading.hide()}}return d.\u0275fac=function(c){return new(c||d)(o.LFG(u.b))},d.\u0275prov=o.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},557:(C,x,a)=>{a.d(x,{$:()=>_});var o=a(1571),u=a(6895),t=a(1561),d=a(4859),m=a(7446);function c(r,l){if(1&r){const i=o.EpF();o.TgZ(0,"button",6),o.NdJ("click",function(){const T=o.CHM(i).index,M=o.oxw();return o.KtG(M.exportarPag(T+1))}),o._uU(1),o.qZA()}if(2&r){const i=l.index;o.xp6(1),o.hij("Parte ",i+1,"")}}let _=(()=>{class r{constructor(){this.export=new o.vpe,this.exportMultiple=0}exportar(){this.export.emit()}exportarPag(i){this.export.emit(i)}get arr(){return new Array(this.exportMultiple)}}return r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-export-excel"]],inputs:{exportMultiple:"exportMultiple"},outputs:{export:"export"},decls:11,vars:11,consts:[[1,"opc",3,"hidden","click"],[3,"src"],["mat-button","",1,"opc",3,"matMenuTriggerFor","hidden"],[3,"hidden"],["menu","matMenu"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],["mat-menu-item","",3,"click"]],template:function(i,s){if(1&i&&(o.TgZ(0,"button",0),o.NdJ("click",function(){return s.exportar()}),o._uU(1," Exportar a Excel "),o._UZ(2,"img",1),o.ALo(3,"imagenes"),o.qZA(),o.TgZ(4,"button",2),o._uU(5," Exportar a Excel "),o._UZ(6,"img",1),o.ALo(7,"imagenes"),o.qZA(),o.TgZ(8,"mat-menu",3,4),o.YNc(10,c,2,1,"button",5),o.qZA()),2&i){const h=o.MAs(9);o.Q6J("hidden",s.exportMultiple),o.xp6(2),o.Q6J("src",o.lcZ(3,7,"assets/excel.svg"),o.LSH),o.xp6(2),o.Q6J("matMenuTriggerFor",h)("hidden",!s.exportMultiple),o.xp6(2),o.Q6J("src",o.lcZ(7,9,"assets/excel.svg"),o.LSH),o.xp6(2),o.Q6J("hidden",!s.exportMultiple),o.xp6(2),o.Q6J("ngForOf",s.arr)}},dependencies:[u.sg,t.VK,t.OP,t.p6,d.lW,m.z],styles:[".opc[_ngcontent-%COMP%]{padding:10px 30px;background-color:#fff;border:none;border-radius:25px;font-size:14px;font-weight:700;margin-left:20px;box-shadow:0 4px 17px #00000026}.opc[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;margin-left:5px}"]}),r})()}}]);