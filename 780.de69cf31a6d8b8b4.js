"use strict";(self.webpackChunkimprove=self.webpackChunkimprove||[]).push([[780],{3780:(_,a,r)=>{r.r(a),r.d(a,{ClassesModule:()=>L});var u=r(9808),l=r(2382),d=r(5207),c=r(6342),t=r(1223),m=r(4974),p=r(6123);function f(e,n){1&e&&(t.TgZ(0,"span",9),t._uU(1,"Le libell\xe9 est requis et doit \xeatre unique."),t.qZA())}const g=e=>n=>e.some(s=>0===s.toUpperCase().localeCompare((n.value||"").toUpperCase()))?{labelMustBeUnique:{message:"Label is already used"}}:null;let C=(()=>{class e{constructor(s,o){this.classes=s,this.router=o,this.form=new l.cw({label:new l.NI(null,[l.kI.required,l.kI.minLength(3),g(this.classes.list())])})}onSubmit(){console.log(this.form.errors,this.form.valid),this.form.valid&&(this.classes.add(this.form.value.label),this.router.navigateByUrl("/classes"))}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(m.o),t.Y36(c.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["improve-classes-add"]],decls:14,vars:2,consts:[[1,"h-full","w-full",3,"formGroup","ngSubmit"],["title",""],["content",""],[1,"p-4"],["type","text","formControlName","label"],["class","text-red-700",4,"ngIf"],["buttons",""],["routerLink","/classes",1,"grow","text-center"],["type","submit",1,"grow","text-center","ui-link"],[1,"text-red-700"]],template:function(s,o){if(1&s&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(1,"improve-layout-with-buttons"),t.ynx(2,1),t._uU(3,"Ajouter une classe"),t.BQk(),t.ynx(4,2),t.TgZ(5,"div",3),t._uU(6," Label "),t._UZ(7,"input",4),t.YNc(8,f,2,0,"span",5),t.qZA(),t.BQk(),t.ynx(9,6),t.TgZ(10,"a",7),t._uU(11,"Retour"),t.qZA(),t.TgZ(12,"button",8),t._uU(13,"Ajouter"),t.qZA(),t.BQk(),t.qZA()()),2&s){let i;t.Q6J("formGroup",o.form),t.xp6(8),t.Q6J("ngIf",(null==(i=o.form.get("label"))?null:i.dirty)&&(null==(i=o.form.get("label"))?null:i.errors))}},directives:[l._Y,l.JL,l.sg,p.M,l.Fj,l.JJ,l.u,u.O5,c.yS],styles:[""]}),e})();var y=r(9804);function v(e,n){1&e&&(t.TgZ(0,"span",11),t._uU(1,"(courant)"),t.qZA())}function x(e,n){if(1&e){const s=t.EpF();t.TgZ(0,"li",8)(1,"button",9),t.NdJ("click",function(){const T=t.CHM(s).$implicit;return t.oxw(2).onSelectCurrent(T)}),t._uU(2),t.qZA(),t.YNc(3,v,2,0,"span",10),t.qZA()}if(2&e){const s=n.$implicit,o=t.oxw().ngIf;t.xp6(2),t.hij(" ",s," "),t.xp6(1),t.Q6J("ngIf",o===s)}}function h(e,n){if(1&e&&(t.TgZ(0,"ul",6),t.YNc(1,x,4,2,"li",7),t.qZA()),2&e){const s=t.oxw();t.xp6(1),t.Q6J("ngForOf",s.classList)}}const Z=[{path:"",component:(()=>{class e{constructor(s,o){this.currentClass=o,this.classList=[],this.currentClass$=o.change,this.classList=s.list()}onSelectCurrent(s){this.currentClass.set(s)}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(m.o),t.Y36(y.u))},e.\u0275cmp=t.Xpm({type:e,selectors:[["improve-list"]],decls:10,vars:3,consts:[["title",""],["content",""],[1,"px-2"],["class","divide-y divide-gray-200",4,"ngIf"],["buttons",""],["routerLink","/classes/add",1,"grow","text-center","ui-link"],[1,"divide-y","divide-gray-200"],["class","py-4 px-2",4,"ngFor","ngForOf"],[1,"py-4","px-2"],["type","button",1,"ui-link","mr-1",3,"click"],["class","text-gray-200",4,"ngIf"],[1,"text-gray-200"]],template:function(s,o){1&s&&(t.TgZ(0,"improve-layout-with-buttons"),t.ynx(1,0),t._uU(2,"Liste des classes"),t.BQk(),t.ynx(3,1),t.TgZ(4,"div",2),t.YNc(5,h,2,1,"ul",3),t.ALo(6,"async"),t.qZA(),t.BQk(),t.ynx(7,4),t.TgZ(8,"a",5),t._uU(9,"Ajouter un cours"),t.qZA(),t.BQk(),t.qZA()),2&s&&(t.xp6(5),t.Q6J("ngIf",t.lcZ(6,1,o.currentClass$)))},directives:[p.M,u.O5,u.sg,c.yS],pipes:[u.Ov],styles:[""]}),e})()},{path:"add",component:C}];let A=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.Bz.forChild(Z)],c.Bz]}),e})(),L=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.ez,A,l.UX,d.m8]]}),e})()}}]);