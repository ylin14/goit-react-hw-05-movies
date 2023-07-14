"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[379],{379:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var n=t(433),a=t(683),u=t(861),s=t(439),c=t(757),i=t.n(c),o=t(791),f=t(87),p="searchbar_searchbar__SZasF",m="searchbar_form__oFrip",l="searchbar_button__RJllU",v="searchbar_buttonLabel__CvMad",h="searchbar_input__ogUTl",d=t(184);function _(e){var r=e.onSubmit,t=(0,o.useState)(""),n=(0,s.Z)(t,2),a=n[0],u=n[1];return(0,d.jsx)("header",{className:p,children:(0,d.jsxs)("form",{className:m,onSubmit:function(e){e.preventDefault(),r(a),u("")},children:[(0,d.jsx)("button",{type:"submit",className:l,children:(0,d.jsx)("span",{className:v,children:"Search"})}),(0,d.jsx)("input",{name:"query",value:a,className:h,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(e){var r=e.target.value;u(r)},required:!0})]})})}var g=(0,o.memo)(_),x=t(486),b=t(809);var Z=function(){var e=(0,o.useState)({movies:[],isLoading:!1,error:null}),r=(0,s.Z)(e,2),t=r[0],c=r[1],p=(0,f.lr)(),m=(0,s.Z)(p,2),l=m[0],v=m[1],h=l.get("query");(0,o.useEffect)((function(){var e=function(){var e=(0,u.Z)(i().mark((function e(){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=2;break}return e.abrupt("return");case 2:return c((function(e){return(0,a.Z)((0,a.Z)({},e),{},{isLoading:!0,error:null})})),e.next=5,(0,b.fO)(h);case 5:r=e.sent,t=r.results;try{c((function(e){return(0,a.Z)((0,a.Z)({},e),{},{isLoading:!1,movies:(0,n.Z)(t)})}))}catch(k){c((function(r){return(0,a.Z)((0,a.Z)({},r),{},{isLoading:!1,error:k.message})}))}case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[h]);var _=(0,o.useCallback)((function(e){v({query:e}),c((function(e){return(0,a.Z)((0,a.Z)({},e),{},{movies:[]})}))}),[c,v]),Z=t.movies,w=t.isLoading,k=t.error;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g,{onSubmit:_}),w&&(0,d.jsx)("p",{children:"Loading..."}),k&&(0,d.jsx)("p",{children:k}),Boolean(Z.length)&&(0,d.jsx)(x.Z,{items:Z})]})};var w=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(Z,{})})}},486:function(e,r,t){t.d(r,{Z:function(){return m}});var n=t(683),a=t(689),u=t(87),s="moviesItem_item__tLNZn",c="moviesItem_image__8ayOv",i="moviesItem_title__wZtIN",o=t(184);var f=function(e){var r=e.original_name,t=e.original_title,n=e.id,a=e.poster_path,f=e.from,p=a?"https://image.tmdb.org/t/p/w500".concat(a):"https://sd.keepcalms.com/i/keep-calm-poster-not-found.png",m=r||t;return(0,o.jsx)("li",{className:s,children:(0,o.jsxs)(u.rU,{state:{from:f},to:"/movies/".concat(n),children:[(0,o.jsx)("img",{src:p,alt:m,className:c}),(0,o.jsx)("p",{className:i,children:m})]})},n)},p="moviesList_list__NRykM";var m=function(e){var r=e.items,t=(0,a.TH)(),u=r.map((function(e){return(0,o.jsx)(f,(0,n.Z)((0,n.Z)({},e),{},{from:t}),e.id)}));return(0,o.jsx)("ul",{className:p,children:u})}},809:function(e,r,t){t.d(r,{fO:function(){return o},t2:function(){return i},tx:function(){return p},wW:function(){return c},zv:function(){return f}});var n=t(861),a=t(757),u=t.n(a),s=t(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"48e59f58a9185405f58e5b1089c8261f"}}),c=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/trending/movie/week");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r),{params:{language:"en - US"}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n,a,c=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:1,e.next=3,s.get("/search/movie",{params:{page:t,language:"en - US",include_adult:!1,query:r}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=379.01486a34.chunk.js.map