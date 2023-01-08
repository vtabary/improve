"use strict";(self.webpackChunkimprove=self.webpackChunkimprove||[]).push([[50],{9050:(ge,dt,I)=>{function S(e){return Array.isArray?Array.isArray(e):"[object Array]"===X(e)}function E(e){return"string"==typeof e}function U(e){return"number"==typeof e}function V(e){return"object"==typeof e}function M(e){return null!=e}function K(e){return!e.trim().length}function X(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}I.d(dt,{n:()=>$});const q=Object.prototype.hasOwnProperty;class At{constructor(t){this._keys=[],this._keyMap={};let s=0;t.forEach(n=>{let r=tt(n);s+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,s+=r.weight}),this._keys.forEach(n=>{n.weight/=s})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function tt(e){let t=null,s=null,n=null,r=1,c=null;if(E(e)||S(e))n=e,t=et(e),s=B(e);else{if(!q.call(e,"name"))throw new Error("Missing name property in key");const i=e.name;if(n=i,q.call(e,"weight")&&(r=e.weight,r<=0))throw new Error((e=>`Property 'weight' in key '${e}' must be a positive integer`)(i));t=et(i),s=B(i),c=e.getFn}return{path:t,id:s,weight:r,src:n,getFn:c}}function et(e){return S(e)?e:e.split(".")}function B(e){return S(e)?e.join("."):e}var f={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,useExtendedSearch:!1,getFn:function Lt(e,t){let s=[],n=!1;const r=(c,i,h)=>{if(M(c))if(i[h]){const o=c[i[h]];if(!M(o))return;if(h===i.length-1&&(E(o)||U(o)||function xt(e){return!0===e||!1===e||function Mt(e){return V(e)&&null!==e}(e)&&"[object Boolean]"==X(e)}(o)))s.push(function mt(e){return null==e?"":function pt(e){if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)}(o));else if(S(o)){n=!0;for(let l=0,d=o.length;l<d;l+=1)r(o[l],i,h+1)}else i.length&&r(o,i,h+1)}else s.push(c)};return r(e,E(t)?t.split("."):t,0),n?s:s[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};const vt=/[^ ]+/g;class Q{constructor({getFn:t=f.getFn,fieldNormWeight:s=f.fieldNormWeight}={}){this.norm=function wt(e=1,t=3){const s=new Map,n=Math.pow(10,t);return{get(r){const c=r.match(vt).length;if(s.has(c))return s.get(c);const i=1/Math.pow(c,.5*e),h=parseFloat(Math.round(i*n)/n);return s.set(c,h),h},clear(){s.clear()}}}(s,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,E(this.docs[0])?this.docs.forEach((t,s)=>{this._addString(t,s)}):this.docs.forEach((t,s)=>{this._addObject(t,s)}),this.norm.clear())}add(t){const s=this.size();E(t)?this._addString(t,s):this._addObject(t,s)}removeAt(t){this.records.splice(t,1);for(let s=t,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(t,s){return t[this._keysMap[s]]}size(){return this.records.length}_addString(t,s){if(!M(t)||K(t))return;let n={v:t,i:s,n:this.norm.get(t)};this.records.push(n)}_addObject(t,s){let n={i:s,$:{}};this.keys.forEach((r,c)=>{let i=r.getFn?r.getFn(t):this.getFn(t,r.path);if(M(i))if(S(i)){let h=[];const u=[{nestedArrIndex:-1,value:i}];for(;u.length;){const{nestedArrIndex:o,value:l}=u.pop();if(M(l))if(E(l)&&!K(l)){let d={v:l,i:o,n:this.norm.get(l)};h.push(d)}else S(l)&&l.forEach((d,g)=>{u.push({nestedArrIndex:g,value:d})})}n.$[c]=h}else if(E(i)&&!K(i)){let h={v:i,n:this.norm.get(i)};n.$[c]=h}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function st(e,t,{getFn:s=f.getFn,fieldNormWeight:n=f.fieldNormWeight}={}){const r=new Q({getFn:s,fieldNormWeight:n});return r.setKeys(e.map(tt)),r.setSources(t),r.create(),r}function Ct(e,{getFn:t=f.getFn,fieldNormWeight:s=f.fieldNormWeight}={}){const{keys:n,records:r}=e,c=new Q({getFn:t,fieldNormWeight:s});return c.setKeys(n),c.setIndexRecords(r),c}function k(e,{errors:t=0,currentLocation:s=0,expectedLocation:n=0,distance:r=f.distance,ignoreLocation:c=f.ignoreLocation}={}){const i=t/e.length;if(c)return i;const h=Math.abs(n-s);return r?i+h/r:h?1:i}const O=32;function Rt(e){let t={};for(let s=0,n=e.length;s<n;s+=1){const r=e.charAt(s);t[r]=(t[r]||0)|1<<n-s-1}return t}class nt{constructor(t,{location:s=f.location,threshold:n=f.threshold,distance:r=f.distance,includeMatches:c=f.includeMatches,findAllMatches:i=f.findAllMatches,minMatchCharLength:h=f.minMatchCharLength,isCaseSensitive:u=f.isCaseSensitive,ignoreLocation:o=f.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:r,includeMatches:c,findAllMatches:i,minMatchCharLength:h,isCaseSensitive:u,ignoreLocation:o},this.pattern=u?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(g,m)=>{this.chunks.push({pattern:g,alphabet:Rt(g),startIndex:m})},d=this.pattern.length;if(d>O){let g=0;const m=d%O,p=d-m;for(;g<p;)l(this.pattern.substr(g,O),g),g+=O;if(m){const x=d-O;l(this.pattern.substr(x),x)}}else l(this.pattern,0)}searchIn(t){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(t=t.toLowerCase()),this.pattern===t){let p={isMatch:!0,score:0};return n&&(p.indices=[[0,t.length-1]]),p}const{location:r,distance:c,threshold:i,findAllMatches:h,minMatchCharLength:u,ignoreLocation:o}=this.options;let l=[],d=0,g=!1;this.chunks.forEach(({pattern:p,alphabet:x,startIndex:b})=>{const{isMatch:L,score:T,indices:R}=function bt(e,t,s,{location:n=f.location,distance:r=f.distance,threshold:c=f.threshold,findAllMatches:i=f.findAllMatches,minMatchCharLength:h=f.minMatchCharLength,includeMatches:u=f.includeMatches,ignoreLocation:o=f.ignoreLocation}={}){if(t.length>O)throw new Error("Pattern length exceeds max of 32.");const l=t.length,d=e.length,g=Math.max(0,Math.min(n,d));let m=c,p=g;const x=h>1||u,b=x?Array(d):[];let L;for(;(L=e.indexOf(t,p))>-1;){let y=k(t,{currentLocation:L,expectedLocation:g,distance:r,ignoreLocation:o});if(m=Math.min(y,m),p=L+l,x){let w=0;for(;w<l;)b[L+w]=1,w+=1}}p=-1;let T=[],R=1,j=l+d;const de=1<<l-1;for(let y=0;y<l;y+=1){let w=0,C=j;for(;w<C;)k(t,{errors:y,currentLocation:g+C,expectedLocation:g,distance:r,ignoreLocation:o})<=m?w=C:j=C,C=Math.floor((j-w)/2+w);j=C;let ut=Math.max(1,g-C+1),G=i?d:Math.min(g+C,d)+l,N=Array(G+2);N[G+1]=(1<<y)-1;for(let _=G;_>=ut;_-=1){let P=_-1,ft=s[e.charAt(P)];if(x&&(b[P]=+!!ft),N[_]=(N[_+1]<<1|1)&ft,y&&(N[_]|=(T[_+1]|T[_])<<1|1|T[_+1]),N[_]&de&&(R=k(t,{errors:y,currentLocation:P,expectedLocation:g,distance:r,ignoreLocation:o}),R<=m)){if(m=R,p=P,p<=g)break;ut=Math.max(1,2*g-p)}}if(k(t,{errors:y+1,currentLocation:g,expectedLocation:g,distance:r,ignoreLocation:o})>m)break;T=N}const H={isMatch:p>=0,score:Math.max(.001,R)};if(x){const y=function Ot(e=[],t=f.minMatchCharLength){let s=[],n=-1,r=-1,c=0;for(let i=e.length;c<i;c+=1){let h=e[c];h&&-1===n?n=c:!h&&-1!==n&&(r=c-1,r-n+1>=t&&s.push([n,r]),n=-1)}return e[c-1]&&c-n>=t&&s.push([n,c-1]),s}(b,h);y.length?u&&(H.indices=y):H.isMatch=!1}return H}(t,p,x,{location:r+b,distance:c,threshold:i,findAllMatches:h,minMatchCharLength:u,includeMatches:n,ignoreLocation:o});L&&(g=!0),d+=T,L&&R&&(l=[...l,...R])});let m={isMatch:g,score:g?d/this.chunks.length:1};return g&&n&&(m.indices=l),m}}class v{constructor(t){this.pattern=t}static isMultiMatch(t){return rt(t,this.multiRegex)}static isSingleMatch(t){return rt(t,this.singleRegex)}search(){}}function rt(e,t){const s=e.match(t);return s?s[1]:null}class it extends v{constructor(t,{location:s=f.location,threshold:n=f.threshold,distance:r=f.distance,includeMatches:c=f.includeMatches,findAllMatches:i=f.findAllMatches,minMatchCharLength:h=f.minMatchCharLength,isCaseSensitive:u=f.isCaseSensitive,ignoreLocation:o=f.ignoreLocation}={}){super(t),this._bitapSearch=new nt(t,{location:s,threshold:n,distance:r,includeMatches:c,findAllMatches:i,minMatchCharLength:h,isCaseSensitive:u,ignoreLocation:o})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class ct extends v{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n,s=0;const r=[],c=this.pattern.length;for(;(n=t.indexOf(this.pattern,s))>-1;)s=n+c,r.push([n,s-1]);const i=!!r.length;return{isMatch:i,score:i?0:1,indices:r}}}const Z=[class Tt extends v{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const s=t===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}},ct,class $t extends v{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const s=t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}},class kt extends v{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const s=!t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}},class jt extends v{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const s=!t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}},class Ft extends v{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const s=t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[t.length-this.pattern.length,t.length-1]}}},class Nt extends v{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const n=-1===t.indexOf(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}},it],ot=Z.length,Pt=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Qt=new Set([it.type,ct.type]),D=[];function W(e,t){for(let s=0,n=D.length;s<n;s+=1){let r=D[s];if(r.condition(e,t))return new r(e,t)}return new nt(e,t)}const J=e=>!(!e.$and&&!e.$or),ht=e=>({$and:Object.keys(e).map(t=>({[t]:e[t]}))});function at(e,t,{auto:s=!0}={}){const n=r=>{let c=Object.keys(r);const i=(e=>!!e.$path)(r);if(!i&&c.length>1&&!J(r))return n(ht(r));if((e=>!S(e)&&V(e)&&!J(e))(r)){const u=i?r.$path:c[0],o=i?r.$val:r[u];if(!E(o))throw new Error((e=>`Invalid value for key ${e}`)(u));const l={keyId:B(u),pattern:o};return s&&(l.searcher=W(o,t)),l}let h={children:[],operator:c[0]};return c.forEach(u=>{const o=r[u];S(o)&&o.forEach(l=>{h.children.push(n(l))})}),h};return J(e)||(e=ht(e)),n(e)}function zt(e,t){const s=e.matches;t.matches=[],M(s)&&s.forEach(n=>{if(!M(n.indices)||!n.indices.length)return;const{indices:r,value:c}=n;let i={indices:r,value:c};n.key&&(i.key=n.key.src),n.idx>-1&&(i.refIndex=n.idx),t.matches.push(i)})}function Ht(e,t){t.score=e.score}let lt=(()=>{class e{constructor(s,n={},r){this.options={...f,...n},this._keyStore=new At(this.options.keys),this.setCollection(s,r)}setCollection(s,n){if(this._docs=s,n&&!(n instanceof Q))throw new Error("Incorrect 'index' type");this._myIndex=n||st(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(s){!M(s)||(this._docs.push(s),this._myIndex.add(s))}remove(s=(()=>!1)){const n=[];for(let r=0,c=this._docs.length;r<c;r+=1){const i=this._docs[r];s(i,r)&&(this.removeAt(r),r-=1,c-=1,n.push(i))}return n}removeAt(s){this._docs.splice(s,1),this._myIndex.removeAt(s)}getIndex(){return this._myIndex}search(s,{limit:n=-1}={}){const{includeMatches:r,includeScore:c,shouldSort:i,sortFn:h,ignoreFieldNorm:u}=this.options;let o=E(s)?E(this._docs[0])?this._searchStringList(s):this._searchObjectList(s):this._searchLogical(s);return function Jt(e,{ignoreFieldNorm:t=f.ignoreFieldNorm}){e.forEach(s=>{let n=1;s.matches.forEach(({key:r,norm:c,score:i})=>{const h=r?r.weight:null;n*=Math.pow(0===i&&h?Number.EPSILON:i,(h||1)*(t?1:c))}),s.score=n})}(o,{ignoreFieldNorm:u}),i&&o.sort(h),U(n)&&n>-1&&(o=o.slice(0,n)),function Gt(e,t,{includeMatches:s=f.includeMatches,includeScore:n=f.includeScore}={}){const r=[];return s&&r.push(zt),n&&r.push(Ht),e.map(c=>{const{idx:i}=c,h={item:t[i],refIndex:i};return r.length&&r.forEach(u=>{u(c,h)}),h})}(o,this._docs,{includeMatches:r,includeScore:c})}_searchStringList(s){const n=W(s,this.options),{records:r}=this._myIndex,c=[];return r.forEach(({v:i,i:h,n:u})=>{if(!M(i))return;const{isMatch:o,score:l,indices:d}=n.searchIn(i);o&&c.push({item:i,idx:h,matches:[{score:l,value:i,norm:u,indices:d}]})}),c}_searchLogical(s){const n=at(s,this.options),r=(u,o,l)=>{if(!u.children){const{keyId:g,searcher:m}=u,p=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(o,g),searcher:m});return p&&p.length?[{idx:l,item:o,matches:p}]:[]}const d=[];for(let g=0,m=u.children.length;g<m;g+=1){const x=r(u.children[g],o,l);if(x.length)d.push(...x);else if("$and"===u.operator)return[]}return d},i={},h=[];return this._myIndex.records.forEach(({$:u,i:o})=>{if(M(u)){let l=r(n,u,o);l.length&&(i[o]||(i[o]={idx:o,item:u,matches:[]},h.push(i[o])),l.forEach(({matches:d})=>{i[o].matches.push(...d)}))}}),h}_searchObjectList(s){const n=W(s,this.options),{keys:r,records:c}=this._myIndex,i=[];return c.forEach(({$:h,i:u})=>{if(!M(h))return;let o=[];r.forEach((l,d)=>{o.push(...this._findMatches({key:l,value:h[d],searcher:n}))}),o.length&&i.push({idx:u,item:h,matches:o})}),i}_findMatches({key:s,value:n,searcher:r}){if(!M(n))return[];let c=[];if(S(n))n.forEach(({v:i,i:h,n:u})=>{if(!M(i))return;const{isMatch:o,score:l,indices:d}=r.searchIn(i);o&&c.push({score:l,key:s,value:i,idx:h,norm:u,indices:d})});else{const{v:i,n:h}=n,{isMatch:u,score:o,indices:l}=r.searchIn(i);u&&c.push({score:o,key:s,value:i,norm:h,indices:l})}return c}}return e.version="6.6.2",e.createIndex=st,e.parseIndex=Ct,e.config=f,e})();lt.parseQuery=at,function Dt(...e){D.push(...e)}(class Zt{constructor(t,{isCaseSensitive:s=f.isCaseSensitive,includeMatches:n=f.includeMatches,minMatchCharLength:r=f.minMatchCharLength,ignoreLocation:c=f.ignoreLocation,findAllMatches:i=f.findAllMatches,location:h=f.location,threshold:u=f.threshold,distance:o=f.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:r,findAllMatches:i,ignoreLocation:c,location:h,threshold:u,distance:o},this.pattern=s?t:t.toLowerCase(),this.query=function Bt(e,t={}){return e.split("|").map(s=>{let n=s.trim().split(Pt).filter(c=>c&&!!c.trim()),r=[];for(let c=0,i=n.length;c<i;c+=1){const h=n[c];let u=!1,o=-1;for(;!u&&++o<ot;){const l=Z[o];let d=l.isMultiMatch(h);d&&(r.push(new l(d,t)),u=!0)}if(!u)for(o=-1;++o<ot;){const l=Z[o];let d=l.isSingleMatch(h);if(d){r.push(new l(d,t));break}}}return r})}(this.pattern,this.options)}static condition(t,s){return s.useExtendedSearch}searchIn(t){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;t=r?t:t.toLowerCase();let c=0,i=[],h=0;for(let u=0,o=s.length;u<o;u+=1){const l=s[u];i.length=0,c=0;for(let d=0,g=l.length;d<g;d+=1){const m=l[d],{isMatch:p,indices:x,score:b}=m.search(t);if(!p){h=0,c=0,i.length=0;break}c+=1,h+=b,n&&(Qt.has(m.constructor.type)?i=[...i,...x]:i.push(x))}if(c){let d={isMatch:!0,score:h/c};return n&&(d.indices=i),d}}return{isMatch:!1,score:1}}});var a=I(8256),A=I(433),Ut=I(7579),Vt=I(4482),Xt=I(5403),qt=I(8421),te=I(5032),z=I(6895),se=I(9199),ne=I(6123);const re=["item"];function ie(e,t){1&e&&a.GkF(0)}const ce=function(e,t,s){return{item:e,index:t,$implicit:s}};function oe(e,t){if(1&e&&(a.TgZ(0,"li",13),a.YNc(1,ie,1,0,"ng-container",14),a.qZA()),2&e){const s=t.$implicit,n=t.index,r=a.oxw(2);a.xp6(1),a.Q6J("ngTemplateOutlet",r.itemComponent)("ngTemplateOutletContext",a.kEZ(2,ce,s,n,s))}}function he(e,t){if(1&e&&(a.TgZ(0,"ul",11),a.YNc(1,oe,2,6,"li",12),a.qZA()),2&e){const s=a.oxw();a.xp6(1),a.Q6J("ngForOf",s.currentList)}}function ae(e,t){1&e&&a._uU(0,"Aucun r\xe9sultat")}const le=[[["","title",""]],[["","bottomContent",""]]],ue=function(){return[".."]};class ${constructor(t){this.cdr=t,this.list=[],this.searchKeys=[],this.currentList=[],this.form=new A.cw({search:new A.NI(null,A.kI.required)}),this.destroy$=new Ut.x}ngOnInit(){this.form.valueChanges.pipe(function ee(e){return(0,Vt.e)((t,s)=>{(0,qt.Xf)(e).subscribe((0,Xt.x)(s,()=>s.complete(),te.Z)),!s.closed&&t.subscribe(s)})}(this.destroy$)).subscribe(()=>{this.onSearch(),this.cdr.detectChanges()})}ngOnChanges(t){!t.searchKeys&&!t.list||(this.fuse=new lt(this.list,{keys:this.searchKeys}),this.onSearch())}ngOnDestroy(){this.destroy$.next(void 0)}onSearch(){this.currentList=this.fuse&&this.form.value.search?this.fuse.search(this.form.value.search).map(t=>t.item)||[]:[...this.list]}}$.\u0275fac=function(t){return new(t||$)(a.Y36(a.sBO))},$.\u0275cmp=a.Xpm({type:$,selectors:[["improve-list"]],contentQueries:function(t,s,n){if(1&t&&a.Suo(n,re,5,a.Rgc),2&t){let r;a.iGM(r=a.CRH())&&(s.itemComponent=r.first)}},inputs:{list:"list",searchKeys:"searchKeys"},features:[a.TTD],ngContentSelectors:["[title]","[bottomContent]"],decls:16,vars:5,consts:[["title",""],["content",""],[1,"h-full","flex","flex-col"],[1,"w-full",3,"formGroup","ngSubmit"],["type","text","formControlName","search","placeholder","Recherche",1,"w-full","border-x-0","border-t-0","bg-gray-50","placeholder:text-gray-700"],[1,"grow","overflow-y-auto","overflow-x-hidden"],["class","divide-y divide-gray-200 mx-2",4,"ngIf","ngIfElse"],["noResult",""],["bottomContent",""],["buttons",""],[1,"grow","text-center",3,"routerLink"],[1,"divide-y","divide-gray-200","mx-2"],["class","py-4 px-2",4,"ngFor","ngForOf"],[1,"py-4","px-2"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,s){if(1&t&&(a.F$t(le),a.TgZ(0,"improve-layout-with-buttons"),a.ynx(1,0),a.Hsn(2),a.BQk(),a.ynx(3,1),a.TgZ(4,"div",2)(5,"form",3),a.NdJ("ngSubmit",function(){return s.onSearch()}),a._UZ(6,"input",4),a.qZA(),a.TgZ(7,"div",5),a.YNc(8,he,2,1,"ul",6),a.qZA()(),a.YNc(9,ae,1,0,"ng-template",null,7,a.W1O),a.BQk(),a.ynx(11,8),a.Hsn(12,1),a.BQk(),a.ynx(13,9),a.TgZ(14,"a",10),a._uU(15,"Retour"),a.qZA(),a.BQk(),a.qZA()),2&t){const n=a.MAs(10);a.xp6(5),a.Q6J("formGroup",s.form),a.xp6(3),a.Q6J("ngIf",s.itemComponent&&s.currentList.length>0)("ngIfElse",n),a.xp6(6),a.Q6J("routerLink",a.DdM(4,ue))}},dependencies:[z.sg,z.O5,z.tP,se.rH,A._Y,A.Fj,A.JJ,A.JL,A.sg,A.u,ne.M],changeDetection:0})}}]);