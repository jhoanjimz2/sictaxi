"use strict";(self.webpackChunksictaxi=self.webpackChunksictaxi||[]).push([[383],{7383:(q,g,s)=>{s.r(g),s.d(g,{ParametrosModule:()=>R});var u=s(6895),p=s(5197),e=s(1571),d=s(433),c=s(2574),m=s(4471);let f=(()=>{class n{constructor(t,o,a,i){this.eS=t,this.loading=o,this.location=a,this.fb=i,this.formulario=this.fb.group({maximoNumero:new d.NI("",[d.kI.required]),mensajedeBloqueo:new d.NI("",[d.kI.required]),bloquearInicio:new d.NI("",[d.kI.required]),conductoresXVehiculo:new d.NI("",[d.kI.required])}),this.cargarParametros()}cargarParametros(){this.loading.show(),this.eS.getLoadParameters().subscribe({next:t=>{this.initData(t),this.loading.hide()},error:()=>{this.loading.hide(),this.location.back(),this.loading.error("Error carga parametros, comuniquese con el administrador de la base de datos")}})}initData(t){this.formulario.controls.maximoNumero.setValue(t.maximousuariosempresa),this.formulario.controls.mensajedeBloqueo.setValue(t.mensajebloqueo),this.formulario.controls.bloquearInicio.setValue(t.bloqueariniciosesion),this.formulario.controls.conductoresXVehiculo.setValue(t.vehiculosXconductores)}guardar(){this.loading.show();let t={};t.id=JSON.parse(localStorage.getItem("user")).id,t.bloqueariniciosesion=this.formulario.controls.bloquearInicio.value,t.maximousuariosempresa=this.formulario.controls.maximoNumero.value,t.mensajebloqueo=this.formulario.controls.mensajedeBloqueo.value,t.vehiculosXconductores=this.formulario.controls.conductoresXVehiculo.value,this.eS.updateParametros(t).subscribe({next:o=>{this.loading.hide(),this.loading.exito("Parametros actualizados")},error:()=>{this.loading.hide(),this.loading.error("Error carga parametros, comuniquese con el administrador de la base de datos")}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c.P),e.Y36(m.b),e.Y36(u.Ye),e.Y36(d.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-inputs-parametros"]],decls:34,vars:6,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row","mt-20"],[1,"col"],[1,"card-parametros","sombra"],[1,"col-4"],[1,"subtitulo"],["type","text","formControlName","maximoNumero",1,"input"],["type","text","formControlName","mensajedeBloqueo",1,"input"],["type","text","formControlName","bloquearInicio",1,"input"],[3,"value"],["type","number","formControlName","conductoresXVehiculo",1,"input"],[1,"row","mt-40"],[1,"content-buttons"],[1,"sombra","bg-b",3,"disabled"],[3,"src"],[1,"separador"],[1,"sombra","bg-r",3,"routerLink"]],template:function(t,o){1&t&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return o.guardar()}),e.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",1)(5,"div",4)(6,"label",5),e._uU(7,"M\xe1ximo n\xfamero de usuarios para empresas"),e.qZA(),e._UZ(8,"input",6),e.qZA(),e.TgZ(9,"div",4)(10,"label",5),e._uU(11,"Mensaje de bloqueo de inicio de sesi\xf3n"),e.qZA(),e._UZ(12,"input",7),e.qZA(),e.TgZ(13,"div",4)(14,"label",5),e._uU(15,"Bloquear inicio de sesi\xf3n a las empresas"),e.qZA(),e.TgZ(16,"select",8)(17,"option",9),e._uU(18,"Si"),e.qZA(),e.TgZ(19,"option",9),e._uU(20,"No"),e.qZA()()()(),e.TgZ(21,"div",1)(22,"div",4)(23,"label",5),e._uU(24,"Veh\xedculos por CONDUCTOR"),e.qZA(),e._UZ(25,"input",10),e.qZA()(),e.TgZ(26,"div",11)(27,"div",12)(28,"button",13),e._UZ(29,"img",14),e._uU(30,"Guardar todo"),e.qZA(),e._UZ(31,"div",15),e.TgZ(32,"button",16),e._uU(33,"Cancelar"),e.qZA()()()()()()()),2&t&&(e.Q6J("formGroup",o.formulario),e.xp6(17),e.Q6J("value","1"),e.xp6(2),e.Q6J("value","2"),e.xp6(9),e.Q6J("disabled",!o.formulario.valid),e.xp6(1),e.Q6J("src","assets/guardar.svg",e.LSH),e.xp6(3),e.Q6J("routerLink","/secretaria/buscar-conductores"))},dependencies:[p.rH,d._Y,d.YN,d.Kr,d.Fj,d.wV,d.EJ,d.JJ,d.JL,d.sg,d.u],styles:[".mt-20[_ngcontent-%COMP%]{margin-top:20px}.card-parametros[_ngcontent-%COMP%]{width:100%;padding:30px;background-color:#fff;border-radius:25px}.subtitulo[_ngcontent-%COMP%]{font-size:14px;font-weight:700;color:#000;margin-left:20px}.input[_ngcontent-%COMP%]{width:100%;background-color:#fff;border:2px solid #EFEFEF;padding-left:20px;border-radius:20px;height:28px;font-size:12px}.content-buttons[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center}.separador[_ngcontent-%COMP%]{width:20px}.mt-40[_ngcontent-%COMP%]{margin-top:40px}.bg-b[_ngcontent-%COMP%]{background-color:#8dd7f7}.bg-y[_ngcontent-%COMP%]{background-color:#fff25c}button[_ngcontent-%COMP%]{padding:5px 20px;height:30px;background-color:#fff;border-radius:25px;border:none;font-size:14px;font-weight:700;color:#000;transition:all .2s ease-in-out}button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:15px;margin-right:10px}"]}),n})();var l=s(5412);let h=(()=>{class n{constructor(t,o,a,i){this.dialogRef=t,this.data=o,this.eS=a,this.loading=i}guardar(){this.data.id?this.editar():this.nuevo()}editar(){let t;if("MAR"==this.data.action)t=this.eS.updateMarca(this.data.texto,this.data.id);else if("AFP"==this.data.action)t=this.eS.updateSeguridadSocial(this.data.texto,this.data.id);else if("ARL"==this.data.action)t=this.eS.updateSeguridadSocial(this.data.texto,this.data.id);else if("EPS"==this.data.action)t=this.eS.updateSeguridadSocial(this.data.texto,this.data.id);else{if("ASE"!=this.data.action)return;t=this.eS.updateAseguradora(this.data.texto,this.data.id)}this.loading.show(),t.subscribe({next:()=>{this.loading.hide(),this.dialogRef.close(!0),this.loading.exito("Editado con exito")},error:()=>{this.loading.hide(),this.dialogRef.close(),this.loading.error("Error al editar, comuniquese con el administrador de la base de datos")}})}nuevo(){let t;this.loading.show(),"MAR"==this.data.action&&(t=this.eS.nuevaMarca(this.data.texto)),"AFP"==this.data.action&&(t=this.eS.nuevaSeguridadSocial(this.data.texto,"AFP")),"ARL"==this.data.action&&(t=this.eS.nuevaSeguridadSocial(this.data.texto,"ARL")),"EPS"==this.data.action&&(t=this.eS.nuevaSeguridadSocial(this.data.texto,"EPS")),"ASE"==this.data.action&&(t=this.eS.nuevaAseguradora(this.data.texto)),t.subscribe({next:()=>{this.loading.hide(),this.dialogRef.close(!0),this.loading.exito("Creado con exito")},error:()=>{this.loading.hide(),this.dialogRef.close(),this.loading.error("Error al crear, comuniquese con el administrador de la base de datos")}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.so),e.Y36(l.WI),e.Y36(c.P),e.Y36(m.b))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-modal-crear-parametro"]],decls:18,vars:14,consts:[[1,"contenedor"],[1,"row"],[1,"col"],[1,"titulo"],[1,"row","mt-10"],[1,"col-6"],[1,"subtitulo"],["type","text","placeholder","Ingresa el nombre",1,"input",3,"ngModel","ngModelChange"],[1,"row","mt-30"],[1,"col","flex-end"],[1,"b-b",3,"disabled","click"],[3,"src"],[1,"w-20"],["mat-dialog-close","","type","button",1,"b-w"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"label",3),e._uU(4),e.qZA()()(),e.TgZ(5,"div",4)(6,"div",5)(7,"label",6),e._uU(8),e.qZA(),e.TgZ(9,"input",7),e.NdJ("ngModelChange",function(i){return o.data.texto=i}),e.qZA()()(),e.TgZ(10,"div",8)(11,"div",9)(12,"button",10),e.NdJ("click",function(){return o.guardar()}),e._UZ(13,"img",11),e._uU(14,"Guardar"),e.qZA(),e._UZ(15,"div",12),e.TgZ(16,"button",13),e._uU(17,"Cancelar"),e.qZA()()()()),2&t&&(e.xp6(4),e.gL8(" ",o.data.id?"Editar":"Nueva"," ","EPS"==o.data.action?"EPS":void 0," ","ARL"==o.data.action?"ARL":void 0," ","AFP"==o.data.action?"AFP":void 0," ","ASE"==o.data.action?"Aseguradora":void 0," ","MAR"==o.data.action?"Marca":void 0," "),e.xp6(4),e.xDo(" ","EPS"==o.data.action?"EPS":void 0," ","ARL"==o.data.action?"ARL":void 0," ","AFP"==o.data.action?"AFP":void 0," ","ASE"==o.data.action?"Aseguradora":void 0," ","MAR"==o.data.action?"Marca":void 0," "),e.xp6(1),e.Q6J("ngModel",o.data.texto),e.xp6(3),e.Q6J("disabled",o.data.texto.length<1),e.xp6(1),e.Q6J("src","assets/guardar.svg",e.LSH))},dependencies:[l.ZT,d.Fj,d.JJ,d.On],styles:[".contenedor[_ngcontent-%COMP%]{width:100%;height:100%;padding:30px}.titulo[_ngcontent-%COMP%]{font-size:25px;font-weight:700;color:#000}.mt-10[_ngcontent-%COMP%]{margin-top:10px}.mt-30[_ngcontent-%COMP%]{margin-top:30px}.subtitulo[_ngcontent-%COMP%]{font-size:15px;font-weight:700;color:#000;margin-left:20px}.input[_ngcontent-%COMP%]{width:100%;background-color:#fff;border:2px solid #EFEFEF;padding-left:20px;border-radius:20px;height:28px;font-size:12px}.b-w[_ngcontent-%COMP%]{background-color:#fff;border:2px solid rgba(0,0,0,.3764705882)}.b-b[_ngcontent-%COMP%]{background-color:#8dd7f7;border:2px solid #8dd7f7}.b-b[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:15px;margin-right:10px}button[_ngcontent-%COMP%]{border:none;font-size:14px;font-weight:700;color:#000;padding:2px 20px;border-radius:25px;height:30px}.w-20[_ngcontent-%COMP%]{width:20px}.flex-end[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}"]}),n})(),_=(()=>{class n{constructor(t,o,a,i){this.dialogRef=t,this.data=o,this.eS=a,this.loading=i}eliminar(){let t;if("MAR"==this.data.action)t=this.eS.eliminarMarca(this.data.id);else if("AFP"==this.data.action)t=this.eS.eliminarSeguridadSocial(this.data.id);else if("ARL"==this.data.action)t=this.eS.eliminarSeguridadSocial(this.data.id);else if("EPS"==this.data.action)t=this.eS.eliminarSeguridadSocial(this.data.id);else{if("ASE"!=this.data.action)return;t=this.eS.eliminarAseguradora(this.data.id)}this.loading.show(),t.subscribe({next:()=>{this.loading.hide(),this.dialogRef.close(!0),this.loading.exito("Eliminado con exito")},error:()=>{this.loading.hide(),this.dialogRef.close(),this.loading.error("Error al eliminar, comuniquese con el administrador de la base de datos")}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.so),e.Y36(l.WI),e.Y36(c.P),e.Y36(m.b))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-modal-eliminar-parametro"]],decls:10,vars:5,consts:[[1,"contenedor"],[1,"pb-20"],[1,"centrar"],[1,"b-b",3,"click"],[1,"w-20"],["mat-dialog-close","",1,"b-w"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label"),e._uU(3),e.qZA()(),e.TgZ(4,"div",2)(5,"button",3),e.NdJ("click",function(){return o.eliminar()}),e._uU(6,"Elminar"),e.qZA(),e._UZ(7,"div",4),e.TgZ(8,"button",5),e._uU(9,"Cancelar"),e.qZA()()()),2&t&&(e.xp6(3),e.xDo(" \xbf Seguro que desea eliminar esta ","EPS"==o.data.action?"EPS":void 0," ","ARL"==o.data.action?"ARL":void 0," ","AFP"==o.data.action?"AFP":void 0," ","ASE"==o.data.action?"Aseguradora":void 0," ","MAR"==o.data.action?"Marca":void 0," ? "))},dependencies:[l.ZT],styles:[".contenedor[_ngcontent-%COMP%]{width:100%;height:100%;display:grid;padding:40px;justify-content:center;align-items:center}.div[_ngcontent-%COMP%]{text-align:center}label[_ngcontent-%COMP%]{font-size:25px;font-weight:700;color:#000}.b-w[_ngcontent-%COMP%]{background-color:#fff;border:2px solid rgba(0,0,0,.3764705882)}.b-b[_ngcontent-%COMP%]{background-color:#8dd7f7;border:2px solid #8DD7F7}.b-b[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:15px;margin-right:10px}button[_ngcontent-%COMP%]{border:none;font-size:14px;font-weight:700;color:#000;padding:2px 20px;border-radius:25px}.w-20[_ngcontent-%COMP%]{width:20px}.pt-20[_ngcontent-%COMP%]{padding-top:20px}.pb-20[_ngcontent-%COMP%]{padding-bottom:20px}.centrar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"]}),n})(),P=(()=>{class n{constructor(t){this.dialog=t,this.edit=new e.vpe,this.delete=new e.vpe}editar(t,o,a){this.edit.emit({action:t,id:o,texto:a})}eliminar(t,o){this.delete.emit({action:t,id:o})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.uw))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-edit-add-delete"]],inputs:{action:"action",id:"id",texto:"texto"},outputs:{edit:"edit",delete:"delete"},decls:4,vars:3,consts:[[1,"contenedor"],[3,"src","click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"img",1),e.NdJ("click",function(){return o.editar(o.action,o.id,o.texto)}),e.qZA(),e.TgZ(2,"img",1),e.NdJ("click",function(){return o.editar(o.action,null,"")}),e.qZA(),e.TgZ(3,"img",1),e.NdJ("click",function(){return o.eliminar(o.action,o.id)}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("src","assets/editar2.svg",e.LSH),e.xp6(1),e.Q6J("src","assets/mas.svg",e.LSH),e.xp6(1),e.Q6J("src","assets/menos.svg",e.LSH))},styles:[".contenedor[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center;margin-top:5px}.contenedor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:15px;margin-left:10px;cursor:pointer}"]}),n})();function A(n,r){if(1&n&&(e.TgZ(0,"option",6),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.nombre)}}function b(n,r){if(1&n&&(e.TgZ(0,"option",6),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.nombre)}}function C(n,r){if(1&n&&(e.TgZ(0,"option",6),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.nombre)}}function M(n,r){if(1&n&&(e.TgZ(0,"option",6),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.nombre)}}function S(n,r){if(1&n&&(e.TgZ(0,"option",6),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.marca)}}let x=(()=>{class n{constructor(t,o){this.eS=t,this.dialog=o,this.formulario={EPS:"",ARL:"",AFP:"",ASEGURADORA:"",MARCA:""},this.marcas=[],this.EPSs=[],this.ARLs=[],this.AFPs=[],this.aseguradoras=[],this.cargarParametros()}cargarParametros(){this.eS.obtenerMarcas().subscribe({next:t=>{this.marcas=t}}),this.eS.obtenerAFPARLEPS().subscribe({next:t=>{this.EPSs=t.data.EPS,this.ARLs=t.data.ARL,this.AFPs=t.data.AFP}}),this.eS.obtenerAseguradoras().subscribe({next:t=>{this.aseguradoras=t}})}get EPS(){return this.EPSs.find(t=>t.id==this.formulario.EPS)?.nombre||""}get ARL(){return this.ARLs.find(t=>t.id==this.formulario.ARL)?.nombre||""}get AFP(){return this.AFPs.find(t=>t.id==this.formulario.AFP)?.nombre||""}get ASEGURADORA(){return this.aseguradoras.find(t=>t.id==this.formulario.ASEGURADORA)?.nombre||""}get MARCA(){return this.marcas.find(t=>t.id==this.formulario.MARCA)?.marca||""}editar(t){this.dialog.open(h,{data:t,width:"800px"}).afterClosed().subscribe(a=>{a&&this.cargarParametros()})}eliminar(t){this.dialog.open(_,{data:t}).afterClosed().subscribe(a=>{a&&this.cargarParametros()})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c.P),e.Y36(l.uw))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-selects-parametros"]],decls:41,vars:25,consts:[[1,"row","mt-20"],[1,"col"],[1,"card-parametros","sombra"],[1,"col-4"],[1,"subtitulo"],["type","text",1,"input",3,"ngModel","ngModelChange"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[3,"action","id","texto","edit","delete"],[1,"row","mt-40"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",0)(4,"div",3)(5,"label",4),e._uU(6,"EPS"),e.qZA(),e.TgZ(7,"select",5),e.NdJ("ngModelChange",function(i){return o.formulario.EPS=i}),e._UZ(8,"option",6),e.YNc(9,A,2,2,"option",7),e.qZA(),e.TgZ(10,"app-edit-add-delete",8),e.NdJ("edit",function(i){return o.editar(i)})("delete",function(i){return o.eliminar(i)}),e.qZA()(),e.TgZ(11,"div",3)(12,"label",4),e._uU(13,"ARL"),e.qZA(),e.TgZ(14,"select",5),e.NdJ("ngModelChange",function(i){return o.formulario.ARL=i}),e._UZ(15,"option",6),e.YNc(16,b,2,2,"option",7),e.qZA(),e.TgZ(17,"app-edit-add-delete",8),e.NdJ("edit",function(i){return o.editar(i)})("delete",function(i){return o.eliminar(i)}),e.qZA()(),e.TgZ(18,"div",3)(19,"label",4),e._uU(20,"AFP"),e.qZA(),e.TgZ(21,"select",5),e.NdJ("ngModelChange",function(i){return o.formulario.AFP=i}),e._UZ(22,"option",6),e.YNc(23,C,2,2,"option",7),e.qZA(),e.TgZ(24,"app-edit-add-delete",8),e.NdJ("edit",function(i){return o.editar(i)})("delete",function(i){return o.eliminar(i)}),e.qZA()()(),e.TgZ(25,"div",0)(26,"div",3)(27,"label",4),e._uU(28,"Aseguradora"),e.qZA(),e.TgZ(29,"select",5),e.NdJ("ngModelChange",function(i){return o.formulario.ASEGURADORA=i}),e._UZ(30,"option",6),e.YNc(31,M,2,2,"option",7),e.qZA(),e.TgZ(32,"app-edit-add-delete",8),e.NdJ("edit",function(i){return o.editar(i)})("delete",function(i){return o.eliminar(i)}),e.qZA()(),e.TgZ(33,"div",3)(34,"label",4),e._uU(35,"Marca"),e.qZA(),e.TgZ(36,"select",5),e.NdJ("ngModelChange",function(i){return o.formulario.MARCA=i}),e._UZ(37,"option",6),e.YNc(38,S,2,2,"option",7),e.qZA(),e.TgZ(39,"app-edit-add-delete",8),e.NdJ("edit",function(i){return o.editar(i)})("delete",function(i){return o.eliminar(i)}),e.qZA()()(),e._UZ(40,"div",9),e.qZA()()()),2&t&&(e.xp6(7),e.Q6J("ngModel",o.formulario.EPS),e.xp6(2),e.Q6J("ngForOf",o.EPSs),e.xp6(1),e.Q6J("action","EPS")("id",o.formulario.EPS)("texto",o.EPS),e.xp6(4),e.Q6J("ngModel",o.formulario.ARL),e.xp6(2),e.Q6J("ngForOf",o.ARLs),e.xp6(1),e.Q6J("action","ARL")("id",o.formulario.ARL)("texto",o.ARL),e.xp6(4),e.Q6J("ngModel",o.formulario.AFP),e.xp6(2),e.Q6J("ngForOf",o.AFPs),e.xp6(1),e.Q6J("action","AFP")("id",o.formulario.AFP)("texto",o.AFP),e.xp6(5),e.Q6J("ngModel",o.formulario.ASEGURADORA),e.xp6(2),e.Q6J("ngForOf",o.aseguradoras),e.xp6(1),e.Q6J("action","ASE")("id",o.formulario.ASEGURADORA)("texto",o.ASEGURADORA),e.xp6(4),e.Q6J("ngModel",o.formulario.MARCA),e.xp6(2),e.Q6J("ngForOf",o.marcas),e.xp6(1),e.Q6J("action","MAR")("id",o.formulario.MARCA)("texto",o.MARCA))},dependencies:[u.sg,P,d.YN,d.Kr,d.EJ,d.JJ,d.On],styles:[".contenedor[_ngcontent-%COMP%]{padding:15px 20px;height:100%}.mt-20[_ngcontent-%COMP%]{margin-top:20px}.mt-40[_ngcontent-%COMP%]{margin-top:40px}.titulo[_ngcontent-%COMP%]{font-size:25px;font-weight:700;color:#000;margin-left:20px}.card-parametros[_ngcontent-%COMP%]{width:100%;padding:30px;background-color:#fff;border-radius:25px}.subtitulo[_ngcontent-%COMP%]{font-size:14px;font-weight:700;color:#000;margin-left:20px}.input[_ngcontent-%COMP%]{width:100%;background-color:#fff;border:2px solid #EFEFEF;padding-left:20px;border-radius:20px;height:28px;font-size:12px}.separador[_ngcontent-%COMP%]{width:20px}.content-buttons[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center}button[_ngcontent-%COMP%]{padding:5px 20px;height:30px;background-color:#fff;border-radius:25px;border:none;font-size:14px;font-weight:700;color:#000;transition:all .2s ease-in-out}button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:15px;margin-right:10px}.bg-b[_ngcontent-%COMP%]{background-color:#8dd7f7}.bg-y[_ngcontent-%COMP%]{background-color:#fff25c}"]}),n})();const Z=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-parametros"]],decls:7,vars:0,consts:[[1,"contenedor"],[1,"row"],[1,"col"],[1,"titulo"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"label",3),e._uU(4,"Par\xe1metros"),e.qZA()()(),e._UZ(5,"app-selects-parametros")(6,"app-inputs-parametros"),e.qZA())},dependencies:[f,x],styles:[".contenedor[_ngcontent-%COMP%]{padding:15px 20px;height:100%}.titulo[_ngcontent-%COMP%]{font-size:25px;font-weight:700;color:#000;margin-left:20px}"]}),n})()}];let v=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.Bz.forChild(Z),p.Bz]}),n})();var O=s(4466),T=s(5503),E=s(7023);let R=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.ez,v,O.m,T.D,E.q,d.UX,d.u5]}),n})()}}]);