"use strict";(self.webpackChunkimprove=self.webpackChunkimprove||[]).push([[658],{9658:(F,d,c)=>{c.r(d),c.d(d,{SoundsModule:()=>J});var m=c(9808),f=c(8914),e=c(1223);let h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.ez]]}),t})();var p=c(6342),g=c(1562);let C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["improve-themes-home"]],decls:7,vars:0,consts:[["title",""],["content",""],[1,"ui-card-container"],["routerLink","/sounds/list",1,"ui-card-link"]],template:function(n,s){1&n&&(e.TgZ(0,"improve-layout"),e.ynx(1,0),e._uU(2,"Sons"),e.BQk(),e.ynx(3,1),e.TgZ(4,"div",2)(5,"a",3),e._uU(6,"Liste compl\xe8te"),e.qZA()(),e.BQk(),e.qZA())},directives:[g.$,p.yS],styles:[""],changeDetection:0}),t})();var v=c(2375),_=c(9050);function T(t,o){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"span",1),e._uU(2),e.TgZ(3,"button",2),e.NdJ("click",function(){return e.CHM(n),e.oxw().play$.emit()}),e._uU(4," Lire "),e.qZA()(),e.TgZ(5,"a",3),e._uU(6,"Source"),e.qZA(),e.BQk()}if(2&t){const n=e.oxw();e.xp6(2),e.hij("",n.item.label," "),e.xp6(3),e.Q6J("href",n.item.source,e.LSH)}}let x=(()=>{class t{constructor(){this.item=null,this.play$=new e.vpe}get askPlay(){return this.play$.asObservable()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["improve-sounds-item"]],inputs:{item:"item"},outputs:{askPlay:"askPlay"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"font-medium","block","p-2"],["type","button",1,"ui-link",3,"click"],["target","_blank",1,"text-gray-400","block",3,"href"]],template:function(n,s){1&n&&e.YNc(0,T,7,2,"ng-container",0),2&n&&e.Q6J("ngIf",s.item)},directives:[m.O5],styles:["[_nghost-%COMP%]{display:contents}"]}),t})();function y(t,o,n,s,r,i,u){try{var l=t[i](u),a=l.value}catch(B){return void n(B)}l.done?o(a):Promise.resolve(a).then(s,r)}const S=["player"];function Z(t,o){if(1&t&&e._UZ(0,"source",2),2&t){const n=o.$implicit;e.Q6J("src",n.url,e.LSH)("type",n.type)}}let M=(()=>{class t{constructor(){this.sources=[],this.sourceChange$=new e.vpe}get sourceChange(){return this.sourceChange$.asObservable()}ngOnChanges(n){!n.sources||this.sourceChange$.emit(this)}play(){var n=this;return function P(t){return function(){var o=this,n=arguments;return new Promise(function(s,r){var i=t.apply(o,n);function u(a){y(i,s,r,u,l,"next",a)}function l(a){y(i,s,r,u,l,"throw",a)}u(void 0)})}}(function*(){var s,r;null===(s=n.player)||void 0===s||s.nativeElement.load(),yield null===(r=n.player)||void 0===r?void 0:r.nativeElement.play()})()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["improve-audio-player"]],contentQueries:function(n,s,r){if(1&n&&e.Suo(r,S,5,e.SBq),2&n){let i;e.iGM(i=e.CRH())&&(s.player=i.first)}},inputs:{sources:"sources"},outputs:{sourceChange:"sourceChange"},features:[e.TTD],decls:4,vars:1,consts:[["controls","",1,"w-full"],[3,"src","type",4,"ngFor","ngForOf"],[3,"src","type"]],template:function(n,s){1&n&&(e.TgZ(0,"audio",0),e.YNc(1,Z,1,2,"source",1),e.TgZ(2,"span"),e._uU(3,"Lecture impossible"),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("ngForOf",s.sources))},directives:[m.sg],styles:[""]}),t})();function A(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"improve-sounds-item",6),e.NdJ("askPlay",function(){const i=e.CHM(n).item;return e.oxw().onPlay(i)}),e.qZA()}2&t&&e.Q6J("item",o.item)}const k=function(){return["label"]},L=[{path:"",component:C},{path:"list",component:(()=>{class t{constructor(n,s){this.sounds=n,this.cdr=s,this.list=[],this.sources=[]}ngOnInit(){this.list=this.sounds.list()}onPlay(n){this.sources=[{url:n.url,type:"audio/mpeg"}],this.cdr.detectChanges()}onSourceChange(n){n.play()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(v.dP),e.Y36(e.sBO))},t.\u0275cmp=e.Xpm({type:t,selectors:[["improve-themes-list"]],decls:8,vars:4,consts:[[3,"list","searchKeys"],["title",""],["item",""],["bottomContent",""],[3,"sources","sourceChange"],["player",""],[3,"item","askPlay"]],template:function(n,s){1&n&&(e.TgZ(0,"improve-list",0),e.ynx(1,1),e._uU(2,"Liste des sons"),e.BQk(),e.YNc(3,A,1,1,"ng-template",null,2,e.W1O),e.ynx(5,3),e.TgZ(6,"improve-audio-player",4,5),e.NdJ("sourceChange",function(i){return s.onSourceChange(i)}),e.qZA(),e.BQk(),e.qZA()),2&n&&(e.Q6J("list",s.list)("searchKeys",e.DdM(3,k)),e.xp6(6),e.Q6J("sources",s.sources))},directives:[_.n,x,M],styles:[""],changeDetection:0}),t})()}];let Q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[p.Bz.forChild(L)],p.Bz]}),t})(),J=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.ez,f.m,Q,h]]}),t})()}}]);