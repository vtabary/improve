"use strict";(self.webpackChunkimprove=self.webpackChunkimprove||[]).push([[592],{1674:(I,u,i)=>{i.d(u,{d:()=>O});var t=i(1223),a=i(8499),s=i(1951),r=i(6123),m=i(9808),p=i(6342);const g=["item"];function d(e,o){1&e&&t.GkF(0)}const f=function(e,o){return{item:e,$implicit:o}};function C(e,o){if(1&e&&(t.ynx(0),t.YNc(1,d,1,0,"ng-container",10),t.BQk()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",n.itemComponent)("ngTemplateOutletContext",t.WLB(2,f,n.item,n.item))}}function x(e,o){1&e&&t._uU(0,"Aucune \xe9l\xe9ment disponible")}function h(e,o){if(1&e&&(t.TgZ(0,"div",7),t.YNc(1,C,2,5,"ng-container",8),t.YNc(2,x,1,0,"ng-template",null,9,t.W1O),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.item)}}function R(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){return t.CHM(n),t.oxw().onNewItem()}),t._uU(1," Nouveau "),t.qZA()}}const v=[[["","title",""]]],T=function(){return[".."]},E=["[title]"];let O=(()=>{class e{constructor(n,_,c){this.itemsHelper=n,this.currentClass=_,this.cdr=c,this.item=this.getRandom()}onNewItem(){this.item=this.getRandom(),this.cdr.detectChanges()}getRandom(){const n=this.itemsHelper.random(this.currentClass.get());return this.itemsHelper.setAsUsed(this.currentClass.get(),n.index),n.item}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(s.PJ),t.Y36(a.u9),t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["improve-random"]],contentQueries:function(n,_,c){if(1&n&&t.Suo(c,g,5,t.Rgc),2&n){let l;t.iGM(l=t.CRH())&&(_.itemComponent=l.first)}},features:[t._Bn([s.PJ])],ngContentSelectors:E,decls:10,vars:4,consts:[["title",""],["content",""],[1,"h-full","w-full","flex","items-center","justify-center"],["class","lg:text-2xl text-lg p-4",4,"ngIf"],["buttons",""],[1,"grow","text-center",3,"routerLink"],["class","ui-link grow","type","button",3,"click",4,"ngIf"],[1,"lg:text-2xl","text-lg","p-4"],[4,"ngIfNoItem","ngIf"],["noItem",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button",1,"ui-link","grow",3,"click"]],template:function(n,_){1&n&&(t.F$t(v),t.TgZ(0,"improve-layout-with-buttons"),t.ynx(1,0),t.Hsn(2),t.BQk(),t.ynx(3,1),t.TgZ(4,"div",2),t.YNc(5,h,4,1,"div",3),t.qZA(),t.BQk(),t.ynx(6,4),t.TgZ(7,"a",5),t._uU(8,"Retour"),t.qZA(),t.YNc(9,R,2,0,"button",6),t.BQk(),t.qZA()),2&n&&(t.xp6(5),t.Q6J("ngIf",_.itemComponent),t.xp6(2),t.Q6J("routerLink",t.DdM(3,T)),t.xp6(2),t.Q6J("ngIf",_.item))},directives:[r.M,m.O5,m.tP,p.yS],styles:["[_nghost-%COMP%]{display:contents}"],changeDetection:0}),e})()}}]);