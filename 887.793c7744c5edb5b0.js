"use strict";(self.webpackChunkimprove=self.webpackChunkimprove||[]).push([[887],{6887:(j,u,t)=>{t.r(u),t.d(u,{RolesModule:()=>m});var d=t(6895),p=t(8914),a=t(9199),r=t(2375);const c=n=>n[h(n.length)],h=n=>Math.floor(Math.random()*n);var o=t(8256),v=t(6123),f=t(1055),y=t(3285);class i{constructor(e,l){this.emotions=e,this.jobs=l,this.generate()}generate(){this.emotion=c(this.emotions.list()),this.job=c(this.jobs.list())}}i.\u0275fac=function(e){return new(e||i)(o.Y36(r.fj),o.Y36(r.eC))},i.\u0275cmp=o.Xpm({type:i,selectors:[["improve-role-random"]],decls:11,vars:2,consts:[["title",""],["content",""],[3,"item"],["buttons",""],["type","button",1,"ui-link","grow",3,"click"]],template:function(e,l){1&e&&(o.TgZ(0,"improve-layout-with-buttons"),o.ynx(1,0),o._uU(2,"Personnage al\xe9atoire"),o.BQk(),o.ynx(3,1),o._uU(4," M\xe9tier "),o._UZ(5,"improve-job-item",2),o._uU(6," Emotion "),o._UZ(7,"improve-emotions-item",2),o.BQk(),o.ynx(8,3),o.TgZ(9,"button",4),o.NdJ("click",function(){return l.generate()}),o._uU(10," G\xe9n\xe9rer un nouveau personnage "),o.qZA(),o.BQk(),o.qZA()),2&e&&(o.xp6(5),o.Q6J("item",l.job),o.xp6(2),o.Q6J("item",l.emotion))},dependencies:[v.M,f.P,y.P],styles:["[_nghost-%COMP%]{display:contents}"],changeDetection:0});const g=[{path:"",component:i}];class s{}s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[a.Bz.forChild(g),a.Bz]});var M=t(551),R=t(2233);class m{}m.\u0275fac=function(e){return new(e||m)},m.\u0275mod=o.oAB({type:m}),m.\u0275inj=o.cJS({imports:[d.ez,p.m,s,M.JobsModule,R.EmotionsModule]})}}]);