"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[633],{6832:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",c=n.p+"static/media/Avengers_logo.9eaf219344d83362e830.png",a=n(184),s=function(){return(0,a.jsxs)("div",{className:"app__banner",children:[(0,a.jsx)("img",{src:r,alt:"Avengers"}),(0,a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,a.jsx)("br",{}),"Stay tuned!"]}),(0,a.jsx)("img",{src:c,alt:"Avengers logo"})]})}},9613:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n.p+"static/media/error.42292aa12b6bc303ce99.gif",c=n(184),a=function(){return(0,c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"Error!"})}},9500:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var r=n(4270),c=n(2982),a=n(885),s=n(2791),i=n(4304),o=n(1523),u=n(6983),l=n(5660),p=n(5896),m=n(9613),d=n(184),f=function(t,e,n){switch(t){case"waiting":return(0,d.jsx)(p.Z,{});case"loading":return n?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e,{}),(0,d.jsx)(p.Z,{})]}):null;case"confirmed":return(0,d.jsx)(e,{});case"error":return(0,d.jsx)(m.Z,{});default:throw new Error("Unexpected process state")}},h=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),n=e[0],r=e[1],p=(0,s.useState)(!1),m=(0,a.Z)(p,2),h=m[0],v=m[1],x=(0,s.useState)(210),g=(0,a.Z)(x,2),b=g[0],Z=g[1],j=(0,s.useState)(!1),w=(0,a.Z)(j,2),_=w[0],k=w[1],y=(0,i.Z)(),C=y.clearError,N=y.getAllComics,E=y.process,A=y.setProcess;(0,s.useEffect)((function(){T()}),[]);var S=function(t){var e=!1;t.length<8&&(e=!0),r((function(e){return[].concat((0,c.Z)(e),(0,c.Z)(t))})),v((function(t){return!1})),Z((function(t){return t+8})),k((function(t){return e}))},T=function(t){C(),v(!0),N(t).then(S).then((function(){return A("confirmed")}))};return(0,d.jsxs)("div",{className:"comics__list",children:[f(E,(function(){return function(t){console.log(t);var e=t.map((function(t,e){var n=t.id,r=t.thumbnail,c=t.title,a=t.price,s=r.includes("image_not_available")?"no_img":"";return(0,d.jsx)(u.Z,{timeout:500,classNames:"comics__item",children:(0,d.jsx)("li",{className:"comics__item",children:(0,d.jsxs)(o.rU,{to:"/comics/".concat(n),children:[(0,d.jsx)("img",{src:r,alt:c,className:"comics__item-img ".concat(s)}),(0,d.jsx)("div",{className:"comics__item-name",children:c}),(0,d.jsx)("div",{className:"comics__item-price",children:"".concat(a,"$")})]})},e)},t.id)}));return(0,d.jsx)("ul",{className:"comics__grid",children:(0,d.jsx)(l.Z,{component:null,children:e})})}(n)}),h),(0,d.jsx)("button",{style:{display:_?"none":"block"},disabled:h,onClick:function(){return T(b)},className:"button button__main button__long",children:(0,d.jsx)("div",{className:"inner",children:"load more"})})]})},v=n(6832),x=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(v.Z,{}),(0,d.jsxs)(r.q,{children:[(0,d.jsx)("meta",{name:"description",content:"There are described all of our comics"}),(0,d.jsx)("title",{children:"Comics list page"})]}),(0,d.jsx)(h,{})]})}},4304:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(4165),c=n(5861),a=n(885),s=n(2791),i=function(){var t=function(){var t=(0,s.useState)("waiting"),e=(0,a.Z)(t,2),n=e[0],i=e[1],o=(0,s.useCallback)(function(){var t=(0,c.Z)((0,r.Z)().mark((function t(e){var n,c,a,s,o,u=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",c=u.length>2&&void 0!==u[2]?u[2]:null,a=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},i("loading"),t.prev=4,t.next=7,fetch(e,{method:n,body:c,headers:a});case 7:if((s=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(s.status));case 10:return t.next=12,s.json();case 12:return o=t.sent,t.abrupt("return",o);case 16:throw t.prev=16,t.t0=t.catch(4),i("error"),t.t0;case 20:case"end":return t.stop()}}),t,null,[[4,16]])})));return function(e){return t.apply(this,arguments)}}(),[]);return{request:o,clearError:(0,s.useCallback)((function(){i("waiting")}),[]),process:n,setProcess:i}}(),e=t.request,n=t.clearError,i=t.process,o=t.setProcess,u="https://gateway.marvel.com:443/v1/public/",l="apikey=35589cb5e6aa216ba55754511e0d35a8",p=210,m=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){var n,c,a=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:p,t.next=3,e("".concat(u,"characters?limit=9&offset=").concat(n,"&").concat(l));case 3:return c=t.sent,t.abrupt("return",c.data.results.map(h));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(n){var c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"characters/").concat(n,"?").concat(l));case 2:return c=t.sent,t.abrupt("return",h(c.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(n){var c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"characters?nameStartsWith=").concat(n,"&").concat(l));case 2:return c=t.sent,t.abrupt("return",c.data.results.map(h));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){return{name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,id:t.id,comicsList:t.comics.items}},v=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){var n,c,a=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:p,t.next=3,e("".concat(u,"comics?noVariants=true&startYear=2021&limit=8&offset=").concat(n,"&").concat(l));case 3:return c=t.sent,t.abrupt("return",c.data.results.map(g));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(n){var c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"comics/").concat(n,"?").concat(l));case 2:return c=t.sent,t.abrupt("return",g(c.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(t){return{title:t.title,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,price:t.prices[0].price,id:t.id,pageCount:t.pageCount,language:t.textObjects[0]?t.textObjects[0].language:"No information"}};return{process:i,setProcess:o,clearError:n,getAllCharacters:m,getCharacter:d,getAllComics:v,getComic:x,getCharacterByName:f}}}}]);
//# sourceMappingURL=633.ca202ef7.chunk.js.map