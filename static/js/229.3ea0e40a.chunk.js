"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[229],{229:function(n,t,r){r.r(t),r.d(t,{Reviews:function(){return k}});var e,a,c,u,i=r(861),s=r(439),o=r(757),p=r.n(o),f=r(689),x=r(791),v=r(299),d=r(168),h=r(444),l=h.ZP.ul(e||(e=(0,d.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n  padding: 0;\n"]))),w=h.ZP.li(a||(a=(0,d.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),Z=h.ZP.p(c||(c=(0,d.Z)(["\n  font-weight: 700;\n  padding: 0 10px;\n"]))),b=h.ZP.p(u||(u=(0,d.Z)(["\n  padding: 0 10px;\n"]))),g=r(184),m=function(n){var t=n.reviews;return(0,g.jsx)(l,{children:t.map((function(n){var t=n.author,r=n.id,e=n.content;return(0,g.jsxs)(w,{children:[(0,g.jsx)(Z,{children:t}),(0,g.jsx)(b,{children:e})]},r)}))})},k=function(){var n=(0,f.UO)().movieId,t=(0,x.useState)(),r=(0,s.Z)(t,2),e=r[0],a=r[1];return(0,x.useEffect)((function(){var t=function(){var t=(0,i.Z)(p().mark((function t(){var r;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,v.tx)(n);case 2:r=t.sent,a(r);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,g.jsx)(g.Fragment,{children:e&&(0,g.jsx)(m,{reviews:e})})}},299:function(n,t,r){r.d(t,{Df:function(){return o},TP:function(){return f},tx:function(){return v},z1:function(){return p},zv:function(){return x}});var e=r(861),a=r(757),c=r.n(a),u=r(912),i="e57746b2e4fe98cb5cc839cb405a15f1",s="https://api.themoviedb.org/3",o=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"/search/movie?api_key=").concat(i,"&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=229.3ea0e40a.chunk.js.map