(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{55:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(0),a=n.n(c),r=n(25),i=n.n(r),o=n(8),j=n(2);var l=function(e){return Object(s.jsx)("span",{children:"Router test"})},m=n(15),u=n(26),b=n.n(u);n(55);var d=function(e){var t=e.id,n=e.year,c=e.title,a=e.summary,r=e.poster,i=e.genres;return Object(s.jsx)(o.b,{to:{pathname:"movie/".concat(t),state:{year:n,title:c,summary:a,poster:r,genres:i}},children:Object(s.jsxs)("div",{className:"movies__movie",children:[Object(s.jsx)("img",{src:r,alt:c,title:c}),Object(s.jsxs)("div",{className:"movie_text_data",children:[Object(s.jsx)("h3",{className:"movie__title",children:c}),Object(s.jsx)("h5",{className:"movie__year",children:n}),Object(s.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(s.jsx)("li",{className:"movie__genres__genre",children:e},t)}))}),Object(s.jsxs)("p",{className:"movie__summary",children:[a.slice(0,200),"..."]})]})]})})},h=function(){var e=Object(c.useState)(!0),t=Object(m.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),i=Object(m.a)(r,2),o=i[0],j=i[1];return Object(c.useEffect)((function(){return b.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating").then((function(e){j(e.data.data.movies),a(!1)})),function(){return a(!0)}}),[]),Object(s.jsx)("section",{className:"container",children:n?Object(s.jsx)("div",{className:"loader_text",children:Object(s.jsx)("span",{children:"Loading.."})}):Object(s.jsx)("div",{className:"movies",children:o.map((function(e){return Object(s.jsx)(d,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})},p=n(28),O=n(29),v=n(31),x=n(30),_=function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(s.jsx)("h1",{children:e.state.title}):null}}]),n}(a.a.Component);var f=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(o.b,{to:"/",children:"Home"}),Object(s.jsx)("span",{children:"  "}),Object(s.jsx)(o.b,{to:"/about",children:"about"})]})};var y=function(){return Object(s.jsxs)(o.a,{children:[Object(s.jsx)(f,{}),Object(s.jsx)(j.a,{path:"/",exact:!0,component:h}),Object(s.jsx)(j.a,{path:"/about",exact:!0,component:l}),Object(s.jsx)(j.a,{path:"/movie/:id",exact:!0,component:_})]})};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.09968456.chunk.js.map