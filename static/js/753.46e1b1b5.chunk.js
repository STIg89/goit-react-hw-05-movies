"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[753],{174:function(n,t,r){r.d(t,{O:function(){return l}});var e,a,c,i=r(168),o=r(444),u=o.ZP.div(e||(e=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding-bottom: 40px;\n"]))),s=o.ZP.div(a||(a=(0,i.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.3s;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  &:hover {\n    transform: scale(1.05);\n    transition: 300ms linear;\n    box-shadow: 4px 4px 6px 0px rgba(0, 0, 0, 0.9);\n  }\n\n  > a {\n    text-decoration: none;\n  }\n\n  img {\n    max-width: 400px;\n  }\n"]))),p=o.ZP.p(c||(c=(0,i.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n  font-weight: 700;\n  text-align: center;\n"]))),f=r(87),x=r(689),d=r(184),l=function(n){var t=n.movies,r=(0,x.TH)();return(0,d.jsx)(u,{children:t.map((function(n){var t=n.poster_path,e=n.title,a=n.id;return(0,d.jsx)(s,{children:(0,d.jsxs)(f.rU,{to:"/movies/".concat(a),state:{from:r},children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t),alt:e}),(0,d.jsx)(p,{children:e})]})},a)}))})}},753:function(n,t,r){r.r(t),r.d(t,{Movies:function(){return P}});var e,a,c,i,o,u=r(861),s=r(439),p=r(757),f=r.n(p),x=r(791),d=r(174),l=r(168),v=r(444),m=r(128),h=v.ZP.div(e||(e=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),g=v.ZP.form(a||(a=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n"]))),b=v.ZP.input(c||(c=(0,l.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n"]))),Z=v.ZP.button(i||(i=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: 4px;\n  width: 40px;\n"]))),y=(0,v.ZP)(m.G4C)(o||(o=(0,l.Z)(["\n  display: block;\n  width: 20px;\n  height: 20px;\n  right: 6px;\n"]))),w=r(184),k=function(n){var t=n.onSubmit,r=(0,x.useState)(""),e=(0,s.Z)(r,2),a=e[0],c=e[1],i=function(){return c("")};return(0,w.jsx)(h,{children:(0,w.jsxs)(g,{onSubmit:function(n){n.preventDefault(),t(a),i()},children:[(0,w.jsx)(b,{type:"text",value:a,autocomplete:"off",autoFocus:!0,placeholder:"Search movies...",onChange:function(n){return c(n.target.value)}}),(0,w.jsx)(Z,{type:"submit",children:(0,w.jsx)(y,{})})]})})},j=r(299),_=r(87),P=function(){var n,t=(0,x.useState)(null),r=(0,s.Z)(t,2),e=r[0],a=r[1],c=(0,_.lr)(),i=(0,s.Z)(c,2),o=i[0],p=i[1],l=null!==(n=o.get("query"))&&void 0!==n?n:"";(0,x.useEffect)((function(){if(l){var n=function(){var n=(0,u.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,j.z1)(l);case 2:t=n.sent,a(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}}),[l]);return(0,w.jsxs)("main",{children:[(0,w.jsx)(k,{onSubmit:function(n){p({query:n})}}),e&&(0,w.jsx)(d.O,{movies:e})]})}},299:function(n,t,r){r.d(t,{Df:function(){return s},TP:function(){return f},tx:function(){return d},z1:function(){return p},zv:function(){return x}});var e=r(861),a=r(757),c=r.n(a),i=r(912),o="e57746b2e4fe98cb5cc839cb405a15f1",u="https://api.themoviedb.org/3",s=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=753.46e1b1b5.chunk.js.map