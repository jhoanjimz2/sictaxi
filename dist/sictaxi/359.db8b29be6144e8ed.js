"use strict";(self.webpackChunksictaxi=self.webpackChunksictaxi||[]).push([[359],{7359:(Z,f,r)=>{r.r(f),r.d(f,{EmpresasAutorizadasModule:()=>U});var n=r(6895),h=r(5197),c=r(5412),t=r(1571),x=r(4471),g=r(2574);let _=(()=>{class o{constructor(e,a,s,m){this.dialogRef=e,this.data=a,this.loading=s,this.eS=m}eliminar(){this.loading.show(),this.eS.eliminarEmpresa(this.data.id).subscribe({next:e=>{this.loading.hide(),this.loading.exito("Empresa eliminada con \xe9xito"),this.dialogRef.close()},error:e=>{this.loading.hide(),this.loading.error("Error al eliminar empresa")}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.so),t.Y36(c.WI),t.Y36(x.b),t.Y36(g.P))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-modal-eliminar-empresa"]],decls:11,vars:1,consts:[[1,"contenedor"],[1,"pt-20"],[1,"pb-20","centrar"],[1,"b-b",3,"click"],[3,"src"],[1,"w-20"],["mat-dialog-close","",1,"b-w"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label"),t._uU(3,"\xbfEstas seguro que deseas eliminar esta empresa?"),t.qZA()(),t.TgZ(4,"div",2)(5,"button",3),t.NdJ("click",function(){return a.eliminar()}),t._UZ(6,"img",4),t._uU(7,"Eliminar"),t.qZA(),t._UZ(8,"div",5),t.TgZ(9,"button",6),t._uU(10,"Cancelar"),t.qZA()()()),2&e&&(t.xp6(6),t.Q6J("src","assets/guardar.svg",t.LSH))},dependencies:[c.ZT],styles:[".contenedor[_ngcontent-%COMP%]{width:100%;height:100%;display:grid;justify-content:center;align-items:center}.div[_ngcontent-%COMP%]{text-align:center}label[_ngcontent-%COMP%]{font-size:25px;font-weight:700;color:#000}.b-w[_ngcontent-%COMP%]{background-color:#fff;border:2px solid rgba(0,0,0,.3764705882)}.b-b[_ngcontent-%COMP%]{background-color:#8dd7f7;border:2px solid #8dd7f7}.b-b[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:15px;margin-right:10px}button[_ngcontent-%COMP%]{border:none;font-size:14px;font-weight:700;color:#000;padding:2px 20px;border-radius:25px}.w-20[_ngcontent-%COMP%]{width:20px}.pt-20[_ngcontent-%COMP%]{padding-top:20px}.pb-20[_ngcontent-%COMP%]{padding-bottom:20px}.centrar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"]}),o})();var i=r(433);let u=(()=>{class o{constructor(e,a,s,m,C){this.dialogRef=e,this.data=a,this.fb=s,this.loading=m,this.eS=C,this.form=this.fb.group({nit:new i.NI("",[i.kI.required]),razon:new i.NI("",[i.kI.required]),direccion:new i.NI("",[i.kI.required]),telefono:new i.NI("",[i.kI.required]),email:new i.NI("",[i.kI.required,i.kI.email]),representante:new i.NI("",[i.kI.required])}),a.id&&this.cargarInfo()}cargarInfo(){this.loading.show(),this.eS.getEmpresaAutorizada(this.data.id).subscribe({next:e=>{this.loading.hide(),this.form.controls.nit.setValue(e.nit),this.form.controls.razon.setValue(e.razonSocial),this.form.controls.direccion.setValue(e.direccion),this.form.controls.telefono.setValue(e.telefono),this.form.controls.email.setValue(e.email),this.form.controls.representante.setValue(e.nombreRepresentante)},error:e=>{this.loading.hide(),this.loading.error("Error al cargar los datos de la empresa"),this.dialogRef.close()}})}guardar(){if(this.form.invalid)return this.form.markAllAsTouched();let e={};e.id=this.data.id,e.nit=this.form.controls.nit.value,e.email=this.form.controls.email.value,e.telefono=this.form.controls.telefono.value,e.direccion=this.form.controls.direccion.value,e.razonSocial=this.form.controls.razon.value,e.nombreRepresentante=this.form.controls.representante.value,this.loading.show(),this.eS.guardarEmpresa(e).subscribe({next:a=>{this.loading.hide(),this.dialogRef.close(),this.loading.exito(this.data.id?"Cambios aplicados con \xe9xito":"Empresa creada con \xe9xito")},error:a=>{this.loading.hide(),this.loading.error("Error al actualizar los datos de la empresa")}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.so),t.Y36(c.WI),t.Y36(i.qu),t.Y36(x.b),t.Y36(g.P))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-modal-crear-empresa"]],decls:41,vars:4,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],[1,"contenedor"],[1,"row"],[1,"col"],[1,"titulo"],[1,"row","mt-10"],[1,"col-6"],[1,"subtitulo"],["type","text","formControlName","nit",1,"input"],["type","text","formControlName","razon",1,"input"],["type","text","formControlName","direccion",1,"input"],["type","text","formControlName","telefono",1,"input"],["type","email","formControlName","email",1,"input"],["type","text","formControlName","representante",1,"input"],[1,"row","mt-30"],[1,"col","flex-end"],["type","submit",1,"b-b",3,"disabled"],[3,"src"],[1,"w-20"],["mat-dialog-close","","type","button",1,"b-w"]],template:function(e,a){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return a.guardar()}),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"Nit"),t.qZA(),t._UZ(10,"input",8),t.qZA(),t.TgZ(11,"div",6)(12,"label",7),t._uU(13,"Raz\xf3n social"),t.qZA(),t._UZ(14,"input",9),t.qZA()(),t.TgZ(15,"div",5)(16,"div",6)(17,"label",7),t._uU(18,"Direcci\xf3n"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"div",6)(21,"label",7),t._uU(22,"Tel\xe9fono/celular"),t.qZA(),t._UZ(23,"input",11),t.qZA()(),t.TgZ(24,"div",5)(25,"div",6)(26,"label",7),t._uU(27,"E-mail"),t.qZA(),t._UZ(28,"input",12),t.qZA(),t.TgZ(29,"div",6)(30,"label",7),t._uU(31,"Nombre representante"),t.qZA(),t._UZ(32,"input",13),t.qZA()(),t.TgZ(33,"div",14)(34,"div",15)(35,"button",16),t._UZ(36,"img",17),t._uU(37,"Guardar"),t.qZA(),t._UZ(38,"div",18),t.TgZ(39,"button",19),t._uU(40,"Cancelar"),t.qZA()()()()()),2&e&&(t.Q6J("formGroup",a.form),t.xp6(5),t.hij(" ",a.data.id?"Editar Empresa":"Crear empresa"," "),t.xp6(30),t.Q6J("disabled",!a.form.valid),t.xp6(1),t.Q6J("src","assets/guardar.svg",t.LSH))},dependencies:[c.ZT,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".contenedor[_ngcontent-%COMP%]{width:100%;height:100%;padding:30px}.titulo[_ngcontent-%COMP%]{font-size:25px;font-weight:700;color:#000;margin-left:20px}.mt-10[_ngcontent-%COMP%]{margin-top:10px}.mt-30[_ngcontent-%COMP%]{margin-top:30px}.subtitulo[_ngcontent-%COMP%]{font-size:15px;font-weight:700;color:#000;margin-left:20px}.input[_ngcontent-%COMP%]{width:100%;background-color:#fff;border:2px solid #EFEFEF;padding-left:20px;border-radius:20px;height:28px;font-size:12px}.b-w[_ngcontent-%COMP%]{background-color:#fff;border:2px solid rgba(0,0,0,.3764705882)}.b-b[_ngcontent-%COMP%]{background-color:#8dd7f7;border:2px solid #8dd7f7}.b-b[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:15px;margin-right:10px}button[_ngcontent-%COMP%]{height:30px;border:none;font-size:14px;font-weight:700;color:#000;padding:2px 20px;border-radius:25px}.w-20[_ngcontent-%COMP%]{width:20px}.flex-end[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}"]}),o})();var p=r(8273),d=r(8569),b=r(557),M=r(7446);function E(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"div",14),t._UZ(3,"img",6),t.ALo(4,"imagenes"),t.qZA(),t.TgZ(5,"div",15)(6,"label",16),t._uU(7),t.qZA(),t.TgZ(8,"label",17),t._uU(9,"NIT : "),t.TgZ(10,"span"),t._uU(11),t.qZA()(),t.TgZ(12,"label",17),t._uU(13,"Direccion: "),t.TgZ(14,"span"),t._uU(15),t.qZA()(),t.TgZ(16,"label",17),t._uU(17,"Telefono : "),t.TgZ(18,"span"),t._uU(19),t.qZA()(),t.TgZ(20,"label",17),t._uU(21,"email : "),t.TgZ(22,"span"),t._uU(23),t.qZA()()(),t.TgZ(24,"div",18)(25,"button",19),t.NdJ("click",function(){const m=t.CHM(e).$implicit,C=t.oxw();return t.KtG(C.editar(m.id))}),t._uU(26,"Editar "),t._UZ(27,"img",6),t.ALo(28,"imagenes"),t.qZA(),t._UZ(29,"div"),t.TgZ(30,"button",20),t.NdJ("click",function(){const m=t.CHM(e).$implicit,C=t.oxw();return t.KtG(C.eliminar(m.id))}),t._uU(31,"Eliminar "),t._UZ(32,"img",6),t.ALo(33,"imagenes"),t.qZA()()()()}if(2&o){const e=l.$implicit;t.xp6(3),t.Q6J("src",t.lcZ(4,8,e.logo),t.LSH),t.xp6(4),t.Oqu(e.nombreEmpresa),t.xp6(4),t.Oqu(e.nit),t.xp6(4),t.Oqu(e.direccion),t.xp6(4),t.Oqu(e.telefono),t.xp6(4),t.Oqu(e.email),t.xp6(4),t.Q6J("src",t.lcZ(28,10,"assets/editar.svg"),t.LSH),t.xp6(5),t.Q6J("src",t.lcZ(33,12,"assets/eliminar.svg"),t.LSH)}}function v(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"app-paginacion",21),t.NdJ("paginar",function(s){t.CHM(e);const m=t.oxw();return t.KtG(m.pagina(s))}),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("cantidad",e.totalPages)("focus",e.paginaActual)}}const O=[{path:"",component:(()=>{class o{constructor(e,a,s,m){this.loading=e,this.dialog=a,this.eS=s,this.download=m,this.totalPages=0,this.paginaActual=0,this.pagina({pagina:1})}pagina({pagina:e},a=!0){this.paginaActual=e,a&&this.loading.show(),this.eS.getEmpresasAutorizadas(e).subscribe({next:s=>{this.totalPages=s.pages,this.empresas=s.data,this.loading.hide()},error:s=>{this.loading.hide(),this.loading.error(s.error.message)}})}exportar(){this.loading.show(),this.eS.getExcelEmpresasAutorizadas().subscribe({next:e=>{this.download.download(e,"Empresas Autorizadas")},error:e=>{this.loading.hide(),this.loading.error(e.error.message)}})}editar(e){this.dialog.open(u,{data:{id:e},height:"378.5px",width:"800px"}).afterClosed().subscribe(s=>{this.pagina({pagina:this.paginaActual},!1)})}eliminar(e){this.dialog.open(_,{data:{id:e},height:"150px",width:"800px"}).afterClosed().subscribe(s=>{this.pagina({pagina:this.paginaActual},!1)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(x.b),t.Y36(c.uw),t.Y36(g.P),t.Y36(p.K))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-empresas-autorizadas"]],decls:15,vars:5,consts:[[1,"contenedor-20"],[1,"row","pl-50"],[1,"col-6","flex-start"],[1,"title"],[1,"col-6","flex-end"],[1,"opc",3,"click"],[3,"src"],[3,"export"],[1,"row","pb-80"],["class","col-6 mt-20",4,"ngFor","ngForOf"],[1,"footer-paginacion"],[3,"cantidad","focus","paginar",4,"ngIf"],[1,"col-6","mt-20"],[1,"card-empresa"],[1,"imagen"],[1,"text"],[1,"titulo"],[1,"incisos"],[1,"botones"],[1,"b1",3,"click"],[1,"b2",3,"click"],[3,"cantidad","focus","paginar"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"label",3),t._uU(4,"Empresas"),t.qZA()(),t.TgZ(5,"div",4)(6,"button",5),t.NdJ("click",function(){return a.editar(null)}),t._uU(7," Nueva empresa "),t._UZ(8,"img",6),t.ALo(9,"imagenes"),t.qZA(),t.TgZ(10,"app-export-excel",7),t.NdJ("export",function(){return a.exportar()}),t.qZA()()(),t.TgZ(11,"div",8),t.YNc(12,E,34,14,"div",9),t.qZA(),t.TgZ(13,"div",10),t.YNc(14,v,1,2,"app-paginacion",11),t.qZA()()),2&e&&(t.xp6(8),t.Q6J("src",t.lcZ(9,3,"assets/empresa.svg"),t.LSH),t.xp6(4),t.Q6J("ngForOf",a.empresas),t.xp6(2),t.Q6J("ngIf",a.totalPages))},dependencies:[n.sg,n.O5,d.s,b.$,M.z],styles:[".contenedor-20[_ngcontent-%COMP%]{padding:15px 20px;height:100%}.pl-50[_ngcontent-%COMP%]{padding:0 50px}.mt-20[_ngcontent-%COMP%]{margin-top:20px}.flex-start[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start}.flex-end[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end}.opc[_ngcontent-%COMP%]{padding:10px 30px;background-color:#fff;border:none;border-radius:25px;font-size:14px;font-weight:700;margin-left:20px;box-shadow:0 4px 17px #00000026}.opc[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;margin-left:5px}.card-empresa[_ngcontent-%COMP%]{width:100%;border-radius:25px;background-color:#fff;padding:10px 20px;box-shadow:0 4px 17px #00000026;display:flex;justify-content:center;align-items:center}.imagen[_ngcontent-%COMP%]{width:50px;display:flex;justify-content:center;align-items:center}.imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:25px;object-fit:cover;box-shadow:0 4px 17px #00000026}.text[_ngcontent-%COMP%]{width:calc(100% - 163px);display:grid;padding-left:20px}.botones[_ngcontent-%COMP%]{width:113px!important;display:grid;justify-content:center;align-items:center}.botones[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:10px}.botones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;font-size:13px;padding:2px 15px;font-weight:300;border-radius:25px;color:#fff;transition:all .2s ease-in-out;width:113px!important}.botones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:10px;margin-left:5px}.botones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#000!important;font-size:13px;transform:translateY(-3px)}.b1[_ngcontent-%COMP%]{background-color:#8dd7f7}.b2[_ngcontent-%COMP%]{background-color:#f30f28}.b1[_ngcontent-%COMP%]:hover, .b2[_ngcontent-%COMP%]:hover{background-color:#fff25c}.titulo[_ngcontent-%COMP%]{font-size:15px;font-weight:700;color:#000;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.incisos[_ngcontent-%COMP%]{font-size:14px;font-weight:400;color:#000}.incisos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;font-weight:300;color:#00000090}"]}),o})()}];let P=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[h.Bz.forChild(O),h.Bz]}),o})();var A=r(5503),w=r(7023),T=r(4466);let U=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[n.ez,P,A.D,T.m,w.q]}),o})()},8273:(Z,f,r)=>{r.d(f,{K:()=>c});var n=r(1571),h=r(4471);let c=(()=>{class t{constructor(g){this.loading=g}download(g,_){const i=g.type,u=[];u.push(g);const p=window.URL.createObjectURL(new Blob(u,{type:i})),d=document.createElement("a");d.href=p,d.setAttribute("download",_),document.body.appendChild(d),d.click(),this.loading.hide()}}return t.\u0275fac=function(g){return new(g||t)(n.LFG(h.b))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},557:(Z,f,r)=>{r.d(f,{$:()=>_});var n=r(1571),h=r(6895),c=r(1561),t=r(4859),x=r(7446);function g(i,u){if(1&i){const p=n.EpF();n.TgZ(0,"button",6),n.NdJ("click",function(){const M=n.CHM(p).index,E=n.oxw();return n.KtG(E.exportarPag(M+1))}),n._uU(1),n.qZA()}if(2&i){const p=u.index;n.xp6(1),n.hij("Parte ",p+1,"")}}let _=(()=>{class i{constructor(){this.export=new n.vpe,this.exportMultiple=0}exportar(){this.export.emit()}exportarPag(p){this.export.emit(p)}get arr(){return new Array(this.exportMultiple)}}return i.\u0275fac=function(p){return new(p||i)},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-export-excel"]],inputs:{exportMultiple:"exportMultiple"},outputs:{export:"export"},decls:11,vars:11,consts:[[1,"opc",3,"hidden","click"],[3,"src"],["mat-button","",1,"opc",3,"matMenuTriggerFor","hidden"],[3,"hidden"],["menu","matMenu"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],["mat-menu-item","",3,"click"]],template:function(p,d){if(1&p&&(n.TgZ(0,"button",0),n.NdJ("click",function(){return d.exportar()}),n._uU(1," Exportar a Excel "),n._UZ(2,"img",1),n.ALo(3,"imagenes"),n.qZA(),n.TgZ(4,"button",2),n._uU(5," Exportar a Excel "),n._UZ(6,"img",1),n.ALo(7,"imagenes"),n.qZA(),n.TgZ(8,"mat-menu",3,4),n.YNc(10,g,2,1,"button",5),n.qZA()),2&p){const b=n.MAs(9);n.Q6J("hidden",d.exportMultiple),n.xp6(2),n.Q6J("src",n.lcZ(3,7,"assets/excel.svg"),n.LSH),n.xp6(2),n.Q6J("matMenuTriggerFor",b)("hidden",!d.exportMultiple),n.xp6(2),n.Q6J("src",n.lcZ(7,9,"assets/excel.svg"),n.LSH),n.xp6(2),n.Q6J("hidden",!d.exportMultiple),n.xp6(2),n.Q6J("ngForOf",d.arr)}},dependencies:[h.sg,c.VK,c.OP,c.p6,t.lW,x.z],styles:[".opc[_ngcontent-%COMP%]{padding:10px 30px;background-color:#fff;border:none;border-radius:25px;font-size:14px;font-weight:700;margin-left:20px;box-shadow:0 4px 17px #00000026}.opc[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;margin-left:5px}"]}),i})()}}]);