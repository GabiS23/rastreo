"use strict";(self.webpackChunkrsoli=self.webpackChunkrsoli||[]).push([[991],{1991:($,g,r)=>{r.r(g),r.d(g,{ParametrosModule:()=>X});var h=r(8583),f=r(9731),u=r(4445),U=r(8259),p=r.n(U),d=r(3013),s=r(665),t=r(3018),c=r(225),Z=r(2340),T=r(1841);let v=(()=>{class o{constructor(e){this.http=e,this.baseURL="",this.token="",this.headers_token={}}actualizar_accesos(){this.baseURL=Z.N.apiUrl+"/parametros/",this.token=JSON.parse(localStorage.getItem("accesos")||"{}").access_token,this.headers_token={headers:{"content-type":"aplication/json","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+this.token}}}get_departamentos(){return this.actualizar_accesos(),this.http.get(this.baseURL+"lista_departamento",this.headers_token)}post_departamentos(e){this.actualizar_accesos();const a=JSON.stringify(e);return console.log(a),this.http.post(this.baseURL+"post_departamento",a,this.headers_token)}eliminar_departamento(e){return this.actualizar_accesos(),this.http.get(this.baseURL+"eliminar_departamento/"+e,this.headers_token)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(T.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var C=r(4207),y=r(9309),_=r(3928);function N(o,n){1&o&&(t.TgZ(0,"span",15),t._uU(1,"*"),t.qZA())}function L(o,n){1&o&&(t.TgZ(0,"span",16),t._UZ(1,"i",17),t.qZA())}function D(o,n){1&o&&(t.TgZ(0,"span",18),t._uU(1," M\xe1ximo caracteres permitidos 20 "),t.qZA())}let b=(()=>{class o{constructor(e,a){this.bsModalRef=e,this.departamento_servicio=a,this.titulo="",this.departamento=new u.Q}ngOnInit(){this.IniciarFormulario()}IniciarFormulario(){this.form_departamento=new s.cw({nombre_departamento:new s.NI(this.departamento.nombre_departamento,[s.kI.required,s.kI.maxLength(20)])})}GuardarDepartamento(){this.loading("Guardando datos"),console.log(this.departamento.nombre_departamento);let e=this.departamento;e.nombre_departamento=this.form_departamento.value.nombre_departamento.trim(),e.id_departamento=this.departamento.id_departamento,this.departamento_servicio.post_departamentos(e).subscribe(a=>{this.closeLoading(),JSON.parse(JSON.stringify(a)).mensaje[0]?this.error("Error!!",JSON.parse(JSON.stringify(a)).mensaje[0]):this.bsModalRef.hide()},a=>{this.closeLoading(),this.error("Error","Verifique su conexion a internet"),console.log(a)})}loading(e){p().fire({title:e,html:"Cargando",allowOutsideClick:!1,didOpen:()=>{p().showLoading()}})}closeLoading(){p().close()}error(e,a){p().fire({icon:"error",title:e,text:a,didClose:()=>{}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.UZ),t.Y36(v))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-modal-departamento"]],inputs:{titulo:"titulo",departamento:"departamento"},features:[t._Bn([d.ez])],decls:18,vars:6,consts:[[1,"modal-header",2,"border-top","4px solid #007bff !important"],[1,"modal-title","pull-left"],["pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button-rounded","p-button-danger","p-button-outlined",3,"click"],[3,"formGroup","submit"],[1,"modal-body",2,"padding","20px 40px 20px 40px"],[1,"row"],[2,"margin","0px","padding","0px"],["style","color: red;",4,"ngIf"],["style","color: green;",4,"ngIf"],["type","text","pInputText","","formControlName","nombre_departamento"],["class"," form-error text-danger small",4,"ngIf"],[1,"modal-footer"],[2,"padding-left","2px"],["pButton","","pRipple","","type","submit","label","Guardar",1,"p-button-raised",3,"disabled"],["pButton","","pRipple","","type","button","label","Cancelar",1,"p-button-raised","p-button-danger",3,"click"],[2,"color","red"],[2,"color","green"],[1,"fas","fa-check",2,"width","10px"],[1,"form-error","text-danger","small"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"h4",1),t._uU(2),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return a.bsModalRef.hide()}),t.qZA(),t.qZA(),t.TgZ(4,"form",3),t.NdJ("submit",function(){return a.GuardarDepartamento()}),t.TgZ(5,"div",4),t.TgZ(6,"div",5),t.TgZ(7,"label",6),t.YNc(8,N,2,0,"span",7),t.YNc(9,L,2,0,"span",8),t._uU(10," Nombre departamento "),t.qZA(),t._UZ(11,"input",9),t.YNc(12,D,2,0,"span",10),t.qZA(),t.qZA(),t.TgZ(13,"div",11),t.TgZ(14,"div",12),t._UZ(15,"button",13),t.qZA(),t.TgZ(16,"div"),t.TgZ(17,"button",14),t.NdJ("click",function(){return a.bsModalRef.hide()}),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Oqu(a.titulo),t.xp6(2),t.Q6J("formGroup",a.form_departamento),t.xp6(4),t.Q6J("ngIf",a.form_departamento.controls.nombre_departamento.errors),t.xp6(1),t.Q6J("ngIf",!a.form_departamento.controls.nombre_departamento.errors),t.xp6(3),t.Q6J("ngIf",null==a.form_departamento.controls.nombre_departamento.errors?null:a.form_departamento.controls.nombre_departamento.errors.maxlength),t.xp6(3),t.Q6J("disabled",a.form_departamento.invalid))},directives:[C.Hq,y.H,s._Y,s.JL,s.sg,h.O5,s.Fj,_.o,s.JJ,s.u],styles:[""]}),o})();var x=r(7965),m=r(222),A=r(9287);const S=["dt"];function I(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",2),t.TgZ(1,"div",11),t.TgZ(2,"button",12),t.NdJ("click",function(){return t.CHM(e),t.oxw().FormularioDepartamento(0)}),t._UZ(3,"i",13),t.qZA(),t.TgZ(4,"button",14),t.NdJ("click",function(){return t.CHM(e),t.oxw().FormularioDepartamento(-1)}),t._UZ(5,"i",15),t.qZA(),t.TgZ(6,"button",16),t.NdJ("click",function(){return t.CHM(e),t.oxw().EliminarDepartamento()}),t._UZ(7,"i",17),t.qZA(),t.qZA(),t.TgZ(8,"div",18),t.TgZ(9,"span",19),t._UZ(10,"i",20),t.TgZ(11,"input",21),t.NdJ("input",function(i){return t.CHM(e),t.oxw(),t.MAs(8).filterGlobal(i.target.value,"contains")}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(2),t.Q6J("hidden",e.sesion),t.xp6(4),t.Q6J("hidden",e.sesion)}}function G(o,n){1&o&&(t.TgZ(0,"tr"),t.TgZ(1,"th"),t._uU(2,"Nro"),t.qZA(),t.TgZ(3,"th",22),t._uU(4,"Nombre"),t._UZ(5,"p-sortIcon",23),t.qZA(),t.TgZ(6,"th",22),t._uU(7,"Usuario reg"),t._UZ(8,"p-sortIcon",24),t.qZA(),t.TgZ(9,"th",22),t._uU(10,"Fecha reg"),t._UZ(11,"p-sortIcon",25),t.qZA(),t.TgZ(12,"th",22),t._uU(13,"Fecha mod"),t._UZ(14,"p-sortIcon",26),t.qZA(),t.TgZ(15,"th",22),t._uU(16,"Usuario mod"),t._UZ(17,"p-sortIcon",27),t.qZA(),t.qZA())}function w(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"tr",28),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw().seleccionarDepartamento(l)}),t.TgZ(1,"td",29),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.qZA()}if(2&o){const e=n.$implicit,a=n.rowIndex;t.xp6(2),t.Oqu(a+1),t.xp6(2),t.Oqu(e.nombre_departamento),t.xp6(2),t.Oqu(e.id_usuario_reg),t.xp6(2),t.Oqu(e.fecha_reg),t.xp6(2),t.Oqu(e.fecha_mod),t.xp6(2),t.Oqu(e.id_usuario_mod)}}function F(o,n){1&o&&(t.TgZ(0,"tr"),t.TgZ(1,"td",30),t._uU(2,"No hay datos para mostrar "),t.qZA(),t.qZA())}const J=function(){return["nombre_departamento"]};let M=(()=>{class o{constructor(e,a,i){this.departamento_servicio=e,this.messageService=a,this.modalService=i,this.lista_departamentos=[],this.departamento_seleccionado=new u.Q,this.loading=!0,this.sesion=!1}ngOnInit(){this.GetDepartamentos(),this.sesion=JSON.parse(localStorage.getItem("accesos")||"{}").sesion}GetDepartamentos(){this.departamento_servicio.get_departamentos().subscribe(e=>{this.loading=!1,this.lista_departamentos=JSON.parse(JSON.stringify(e)).departamentos,console.log("ver res ",this.lista_departamentos)})}FormularioDepartamento(e){var a,i;if(this.BorrarToast(),0==e){let l=new u.Q;this.modalRef=this.modalService.show(b),this.modalRef.content.titulo="Nuevo departamento",this.modalRef.content.departamento=l,null===(a=this.modalRef.onHide)||void 0===a||a.subscribe(q=>{this.GetDepartamentos()})}else 0==this.departamento_seleccionado.id_departamento?this.messageService.add({severity:"warn",summary:"Alerta",detail:"Seleccione un departamento para editar"}):(this.modalRef=this.modalService.show(b),this.modalRef.content.titulo="Editar departamento",this.modalRef.content.departamento=this.departamento_seleccionado,this.modalRef.content.IniciarFormulario(),null===(i=this.modalRef.onHide)||void 0===i||i.subscribe(l=>{this.GetDepartamentos()}))}EliminarDepartamento(){this.BorrarToast(),this.departamento_seleccionado.id_departamento?p().fire({title:"\xbfEsta segur@?",text:"No podra revertir esta acci\xf3n!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"SI, Eliminar!",cancelButtonText:"Cancelar"}).then(e=>{e.isConfirmed&&(this.loading_alert("Eliminando"),this.departamento_servicio.eliminar_departamento(this.departamento_seleccionado.id_departamento).subscribe(a=>{this.closeLoading_alert(),this.GetDepartamentos()}))}):this.messageService.add({severity:"warn",summary:"Alerta",detail:"Seleccione un departamento para eliminar"})}seleccionarDepartamento(e){this.BorrarToast(),this.departamento_seleccionado=e,this.messageService.add({severity:"info",summary:"Departamento seleccionado",detail:this.departamento_seleccionado.nombre_departamento.toString()})}BorrarToast(){this.messageService.clear()}loading_alert(e){p().fire({title:e,html:"Cargando",allowOutsideClick:!1,didOpen:()=>{p().showLoading()}})}closeLoading_alert(){p().close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(v),t.Y36(d.ez),t.Y36(c.tT))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-lista-departamento"]],viewQuery:function(e,a){if(1&e&&t.Gf(S,5),2&e){let i;t.iGM(i=t.CRH())&&(a.table=i.first)}},features:[t._Bn([d.ez])],decls:13,vars:9,consts:[[1,"fondo_componente",2,"padding","20px","box-shadow","0 2px 0px 0 rgb(0 0 0 / 12%), inset 0 -1px 0 0 #dadce0"],[2,"padding","50px"],[1,"row"],[1,"col-lg-12"],[1,"tarjeta-titulo"],["dataKey","id_rol","styleClass","p-datatable-lista_departamentos",3,"value","rows","loading","paginator","filterDelay","responsive","globalFilterFields","rowHover"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"col-lg-6",2,"padding","0px","margin","0px"],["pTooltip","Nuevo","tooltipPosition","top","type","button",1,"btn","IconoEfecto","transparente",3,"hidden","click"],[1,"pi","pi-file-o","imgzoom",2,"color","#3699FF"],["pTooltip","Editar","tooltipPosition","top","type","button",1,"btn","IconoEfecto","transparente",3,"click"],[1,"far","fa-edit","imgzoom",2,"color","#3CA934"],["pTooltip","Eliminar","tooltipPosition","top","type","button",1,"btn","IconoEfecto","transparente",3,"hidden","click"],[1,"far","fa-trash-alt","bg","imgzoom",2,"color","#F64E60"],[1,"col-lg-6","d-flex","justify-content-end"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Buscar",2,"border-radius","15px","height","100%","height","100%",3,"input"],["pSortableColumn","departamento"],["field","nombre_departamento"],["field","id_usuario_reg"],["field","fecha_reg"],["field","fecha_mod"],["field","id_usuario_mod"],[3,"click"],["scope","persw"],["colspan","6"]],template:function(e,a){1&e&&(t._UZ(0,"p-toast"),t.TgZ(1,"div",0),t.TgZ(2,"div",1),t.TgZ(3,"div",2),t.TgZ(4,"div",3),t.TgZ(5,"p",4),t._uU(6," Lista de departamentos "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"p-table",5,6),t.YNc(9,I,12,2,"ng-template",7),t.YNc(10,G,18,0,"ng-template",8),t.YNc(11,w,13,6,"ng-template",9),t.YNc(12,F,3,0,"ng-template",10),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(7),t.Q6J("value",a.lista_departamentos)("rows",10)("loading",a.loading)("paginator",!0)("filterDelay",0)("responsive",!0)("globalFilterFields",t.DdM(8,J))("rowHover",!0))},directives:[x.FN,m.iA,d.jx,A.u,_.o,m.lQ,m.fz],styles:[""]}),o})();class O{constructor(){this.id_gestion=0,this.nombre_gestion="",this.fecha_reg="",this.fecha_mod="",this.id_usuario_reg=0,this.id_usuario_mod=0}}let R=(()=>{class o{constructor(e){this.http=e,this.baseURL="",this.token="",this.headers_token={}}actualizar_accesos(){this.baseURL=Z.N.apiUrl+"/parametros/",this.token=JSON.parse(localStorage.getItem("accesos")||"{}").access_token,this.headers_token={headers:{"content-type":"aplication/json","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+this.token}}}get_gestiones(){return this.actualizar_accesos(),this.http.get(this.baseURL+"lista_gestion",this.headers_token)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(T.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const k=["dt"];function z(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",2),t.TgZ(1,"div",11),t.TgZ(2,"button",12),t._UZ(3,"i",13),t.qZA(),t.TgZ(4,"button",14),t._UZ(5,"i",15),t.qZA(),t.TgZ(6,"button",16),t._UZ(7,"i",17),t.qZA(),t.qZA(),t.TgZ(8,"div",18),t.TgZ(9,"span",19),t._UZ(10,"i",20),t.TgZ(11,"input",21),t.NdJ("input",function(i){return t.CHM(e),t.oxw(),t.MAs(8).filterGlobal(i.target.value,"contains")}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(2),t.Q6J("hidden",e.sesion),t.xp6(4),t.Q6J("hidden",e.sesion)}}function B(o,n){1&o&&(t.TgZ(0,"tr"),t.TgZ(1,"th"),t._uU(2,"Nro"),t.qZA(),t.TgZ(3,"th",22),t._uU(4,"Nombre"),t._UZ(5,"p-sortIcon",23),t.qZA(),t.TgZ(6,"th",22),t._uU(7,"Usuario reg"),t._UZ(8,"p-sortIcon",24),t.qZA(),t.TgZ(9,"th",22),t._uU(10,"Fecha reg"),t._UZ(11,"p-sortIcon",25),t.qZA(),t.TgZ(12,"th",22),t._uU(13,"Fecha mod"),t._UZ(14,"p-sortIcon",26),t.qZA(),t.TgZ(15,"th",22),t._uU(16,"Usuario mod"),t._UZ(17,"p-sortIcon",27),t.qZA(),t.qZA())}function E(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"tr",28),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw().SeleccionarGestion(l)}),t.TgZ(1,"td",29),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.qZA()}if(2&o){const e=n.$implicit,a=n.rowIndex;t.xp6(2),t.Oqu(a+1),t.xp6(2),t.Oqu(e.nombre_gestion),t.xp6(2),t.Oqu(e.id_usuario_reg),t.xp6(2),t.Oqu(e.fecha_reg),t.xp6(2),t.Oqu(e.fecha_mod),t.xp6(2),t.Oqu(e.id_usuario_mod)}}function Y(o,n){1&o&&(t.TgZ(0,"tr"),t.TgZ(1,"td",30),t._uU(2,"No hay datos para mostrar "),t.qZA(),t.qZA())}const Q=function(){return["nombre_gestion"]},H=[{path:"lista_departamento",component:M},{path:"lista_gestion",component:(()=>{class o{constructor(e,a,i){this.gestion_servicio=e,this.messageService=a,this.modalService=i,this.lista_gestiones=[],this.gestion_seleccionado=new O,this.loading=!0,this.sesion=!1}ngOnInit(){this.GetGestiones(),this.sesion=JSON.parse(localStorage.getItem("accesos")||"{}").sesion}GetGestiones(){this.gestion_servicio.get_gestiones().subscribe(e=>{this.loading=!1,this.lista_gestiones=JSON.parse(JSON.stringify(e)).gestiones})}SeleccionarGestion(e){this.BorrarToast(),this.gestion_seleccionado=e,this.messageService.add({severity:"info",summary:"Gestion seleccionado",detail:this.gestion_seleccionado.nombre_gestion.toString()})}BorrarToast(){this.messageService.clear()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(R),t.Y36(d.ez),t.Y36(c.tT))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-lista-gestion"]],viewQuery:function(e,a){if(1&e&&t.Gf(k,5),2&e){let i;t.iGM(i=t.CRH())&&(a.table=i.first)}},features:[t._Bn([d.ez])],decls:13,vars:9,consts:[[1,"fondo_componente",2,"padding","20px","box-shadow","0 2px 0px 0 rgb(0 0 0 / 12%), inset 0 -1px 0 0 #dadce0"],[2,"padding","50px"],[1,"row"],[1,"col-lg-12"],[1,"tarjeta-titulo"],["dataKey","id_rol","styleClass","p-datatable-lista_gestion",3,"value","rows","loading","paginator","filterDelay","responsive","globalFilterFields","rowHover"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"col-lg-6",2,"padding","0px","margin","0px"],["pTooltip","Nuevo","tooltipPosition","top","type","button",1,"btn","IconoEfecto","transparente",3,"hidden"],[1,"pi","pi-file-o","imgzoom",2,"color","#3699FF"],["pTooltip","Editar","tooltipPosition","top","type","button",1,"btn","IconoEfecto","transparente"],[1,"far","fa-edit","imgzoom",2,"color","#3CA934"],["pTooltip","Eliminar","tooltipPosition","top","type","button",1,"btn","IconoEfecto","transparente",3,"hidden"],[1,"far","fa-trash-alt","bg","imgzoom",2,"color","#F64E60"],[1,"col-lg-6","d-flex","justify-content-end"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Buscar",2,"border-radius","15px","height","100%","height","100%",3,"input"],["pSortableColumn","gestion"],["field","nombre_gestion"],["field","id_usuario_reg"],["field","fecha_reg"],["field","fecha_mod"],["field","id_usuario_mod"],[3,"click"],["scope","persw"],["colspan","6"]],template:function(e,a){1&e&&(t._UZ(0,"p-toast"),t.TgZ(1,"div",0),t.TgZ(2,"div",1),t.TgZ(3,"div",2),t.TgZ(4,"div",3),t.TgZ(5,"p",4),t._uU(6," Lista de gestion "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"p-table",5,6),t.YNc(9,z,12,2,"ng-template",7),t.YNc(10,B,18,0,"ng-template",8),t.YNc(11,E,13,6,"ng-template",9),t.YNc(12,Y,3,0,"ng-template",10),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(7),t.Q6J("value",a.lista_gestiones)("rows",10)("loading",a.loading)("paginator",!0)("filterDelay",0)("responsive",!0)("globalFilterFields",t.DdM(8,Q))("rowHover",!0))},directives:[x.FN,m.iA,d.jx,A.u,_.o,m.lQ,m.fz],styles:[""]}),o})()},{path:"**",redirectTo:"/shared/slider",pathMatch:"full"}];let j=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[f.Bz.forChild(H)],f.Bz]}),o})();var P=r(3227);let X=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[c.tT],imports:[[h.ez,j,P.W,c.zk.forRoot(),s.u5,s.UX]]}),o})()}}]);