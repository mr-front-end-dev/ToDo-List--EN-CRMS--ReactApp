(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{26:function(n,e,t){"use strict";t.r(e);var r,o,i,c,a,d,l,s,u,b,h,j,f,x,g,m,p,O,k,v,y,w,D,S,T=t(1),C=t.n(T),M=t(12),z=t.n(M),G=t(4),A=t(3),N=t(2),I=N.d.form(r||(r=Object(A.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-gap: 20px;\n\n  @media (max-width: ","px) {\n      grid-template-columns: 1fr;\n  }\n"])),(function(n){return n.theme.breakpoint.mobileMax414})),E=N.d.input(o||(o=Object(A.a)(["\n  padding: 20px; \n  border: 1px solid ",";\n\n  @media (max-width: ","px) {\n    width: 75vw;\n    font-size: 14px;\n    text-align: center;\n  }\n"])),(function(n){return n.theme.color.lightGrey}),(function(n){return n.theme.breakpoint.mobileMax360})),F=N.d.button(i||(i=Object(A.a)(["\n  padding: 20px; \n  color: ","; \n  background-color: ","; \n  border: none;\n  transition: color 0.3s;\n\n  @media (max-width: ","px) {\n      width: 75vw;\n      font-size: 20px;\n      text-align: center;\n  }\n\n  &:hover {\n    filter: brightness(110%);\n    transform: scale(1.1);\n  }\n\n  &:active {\n    filter: brightness(120%);\n  }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.crimson}),(function(n){return n.theme.mobileMax360})),H=t(0),B=function(n){var e=n.addNewTask,t=Object(T.useState)(""),r=Object(G.a)(t,2),o=r[0],i=r[1],c=Object(T.useRef)(null);return Object(H.jsxs)(I,{onSubmit:function(n){n.preventDefault();var t=o.trim();t&&(e(t),i(""),c.current.focus())},children:[Object(H.jsx)(E,{ref:c,value:o,type:"text",placeholder:"What is there to do?",onChange:function(n){var e=n.target;return i(e.value)},required:!0}),Object(H.jsx)(F,{children:"Add new task"})]})},J=N.d.ul(c||(c=Object(A.a)(["\n  list-style: none;\n  margin: 0; \n  padding: 0; \n"]))),L=N.d.li(a||(a=Object(A.a)(["\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  grid-gap: 10px;\n  align-items: center;\n  padding: 10px; \n  border-bottom: 1px solid ","; \n\n  ","\n"])),(function(n){return n.theme.color.lightGrey}),(function(n){return n.hidden&&Object(N.c)(d||(d=Object(A.a)(["\n    display: none;\n  "])))})),P=N.d.span(l||(l=Object(A.a)(["\n  ","\n"])),(function(n){return n.done&&Object(N.c)(s||(s=Object(A.a)(["\n    text-decoration: line-through;\n  "])))})),R=N.d.button(u||(u=Object(A.a)(["\n  border: none; \n  color: ","; \n  font-size: 22px;\n  width: 30px; \n  height: 30px; \n  padding: 0; \n  transition: filter 0.3s;\n\n   "," \n\n  ","\n\n  &:hover {\n    filter: brightness(110%);\n  }\n\n  &:active {\n    filter: brightness(120%);\n  }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.toggleDone&&Object(N.c)(b||(b=Object(A.a)(["\n    background-color: ","; \n  "])),(function(n){return n.theme.color.deepskyblue}))}),(function(n){return n.remove&&Object(N.c)(h||(h=Object(A.a)(["\n    background-color: ",";\n  "])),(function(n){return n.theme.color.crimson}))})),U=function(n){var e=n.tasks,t=n.hideDone,r=n.removeTask,o=n.toggleTaskDone;return Object(H.jsx)(J,{children:e.map((function(n){return Object(H.jsxs)(L,{hidden:n.done&&t,children:[Object(H.jsx)(R,{toggleDone:!0,onClick:function(){return o(n.id)},children:n.done?"\u2714":""}),Object(H.jsxs)(P,{done:n.done,children:[n.id," - ",n.content]}),Object(H.jsx)(R,{remove:!0,onClick:function(){return r(n.id)},children:"\ud83d\uddd1"})]},n.id)}))})},_=N.d.div(j||(j=Object(A.a)(["\n  text-align: right;\n  font-family: monospace;\n  color:",";\n  background-color: ",";\n  font-size: 16px;\n  padding: 20px;\n"])),(function(n){return n.theme.color.crimson}),(function(n){return n.theme.color.white})),q=function(n){return n.toLocaleString(void 0,{weekday:"long",hour:"2-digit",minute:"2-digit",second:"2-digit",day:"numeric",month:"long"})},W=function(){var n=Object(T.useState)(new Date),e=Object(G.a)(n,2),t=e[0],r=e[1];return Object(T.useEffect)((function(){var n=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(n)}}),[]),Object(H.jsxs)(_,{children:["Today is"," ",q(t)]})},K=N.d.section(f||(f=Object(A.a)(["\n  background-color: ",";\n  padding: 20px;\n  cursor: context-menu;\n"])),(function(n){return n.theme.color.white})),Q=N.d.a(x||(x=Object(A.a)(["\n  cursor: context-menu;\n"]))),V=N.d.button(g||(g=Object(A.a)(["\n  margin: 5px;\n  padding: 8px;\n  cursor: context-menu;\n  border-style: none;\n  background-color: ",";\n  color: ",";\n\n  &:hover {\n    filter: brightness(110%);\n  }\n\n  &:active {\n    filter: brightness(120%);\n  }\n\n  ","\n\n  &:hover {\n    filter: brightness(110%);\n  }\n\n  &:active {\n    filter: brightness(120%);\n  }\n"])),(function(n){return n.theme.color.crimson}),(function(n){return n.theme.color.white}),(function(n){return n.deepSkyBlue&&Object(N.c)(m||(m=Object(A.a)(["\n    background-color: ",";\n    color: ",";\n  "])),(function(n){return n.theme.color.deepskyblue}),(function(n){return n.theme.color.white}))})),X=function(){return Object(H.jsxs)(K,{children:[Object(H.jsx)(W,{}),Object(H.jsx)(Q,{href:"#",children:Object(H.jsx)(V,{children:"RU"})}),Object(H.jsx)(Q,{href:"#",children:Object(H.jsx)(V,{children:"DE"})}),Object(H.jsx)(Q,{href:"#",children:Object(H.jsx)(V,{children:"ES"})}),Object(H.jsx)(Q,{href:"#",children:Object(H.jsx)(V,{children:"PL"})}),Object(H.jsx)(Q,{href:"#",children:Object(H.jsx)(V,{children:"UA"})}),Object(H.jsx)(Q,{href:"#",children:Object(H.jsx)(V,{deepSkyBlue:!0,children:"\ud83c\udf13"})})]})},Y=N.d.div(p||(p=Object(A.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),Z=N.d.button(O||(O=Object(A.a)(["\n  background-color: transparent;\n  color: ",";\n  border: none;\n  margin: 0 0 0 20px;\n  border-bottom: 1px solid transparent;\n  transition: filter 0.3s;\n\n  @media (max-width: ","px) {\n      flex-basis: 100%;\n      margin: 10px;\n  }\n\n  &:hover {\n    filter: brightness(110%);\n  }\n\n  &:active {\n    filter: brightness(120%);\n  }\n  \n  &:disabled {\n    color: ","\n  }\n"])),(function(n){return n.theme.color.deepskyblue}),(function(n){return n.theme.breakpoint.mobileMax414}),(function(n){return n.theme.color.lightSlateGrey})),$=function(n){var e=n.tasks,t=n.hideDone,r=n.toggleHideDone,o=n.setAllDone;return Object(H.jsx)(Y,{children:e.length>0&&Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)(Z,{onClick:r,children:[t?"Show":"Hide"," completed tasks"]}),Object(H.jsx)(Z,{onClick:o,disabled:e.every((function(n){return n.done})),children:"Complete all tasks"})]})})},nn=N.d.section(k||(k=Object(A.a)(["\n  margin: 10px 0;\n  background: ",";  \n  box-shadow: 0 0 30px ","; \n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.lightGrey})),en=N.d.header(v||(v=Object(A.a)(["\n  border-bottom: 1px solid ","; \n  display: grid;\n  grid-template-columns: auto auto;\n  grid-gap: 20px;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px; \n\n  @media (max-width: ","px) {\n    grid-template-columns: 1fr;\n  }\n"])),(function(n){return n.theme.color.lightGrey}),(function(n){return n.theme.breakpoint.mobileMax414})),tn=N.d.h2(y||(y=Object(A.a)(["\n  padding: 10px;\n  color: ",";\n  font-size: 30px;\n  margin: 0;\n  text-align: left;\n"])),(function(n){return n.theme.color.deepskyblue})),rn=N.d.div(w||(w=Object(A.a)(["\n  padding: 20px;\n\n  @media (max-width: ","px) {\n    padding: 15px;\n  }\n"])),(function(n){return n.theme.breakpoint.mobileMax360})),on=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return Object(H.jsxs)(nn,{children:[Object(H.jsxs)(en,{children:[Object(H.jsx)(tn,{children:e}),r]}),Object(H.jsx)(rn,{children:t})]})},cn=N.d.h2(D||(D=Object(A.a)(["\n  padding: 10px;\n  color: ",";\n  font-size: 30px;\n  margin: 0;\n  text-align: left;\n"])),(function(n){return n.theme.color.deepskyblue})),an=function(n){var e=n.title;return Object(H.jsx)("header",{children:Object(H.jsx)(cn,{children:e})})},dn=N.d.div(S||(S=Object(A.a)(["\n  max-width: 900px;\n  padding: 20px; \n  margin: 0 auto; \n"]))),ln=function(n){var e=n.children;return Object(H.jsx)(dn,{children:e})},sn=t(16),un=t(6),bn=function(){var n=localStorage.getItem("tasks");return n?JSON.parse(n):[]};var hn,jn=function(){var n=Object(T.useState)(!1),e=Object(G.a)(n,2),t=e[0],r=e[1],o=function(){var n=Object(T.useState)(bn),e=Object(G.a)(n,2),t=e[0],r=e[1];return Object(T.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(t))}),[t]),{tasks:t,removeTask:function(n){r((function(e){return e.filter((function(e){return e.id!==n}))}))},toggleTaskDone:function(n){r((function(e){return e.map((function(e){return e.id===n?Object(un.a)(Object(un.a)({},e),{},{done:!e.done}):e}))}))},setAllDone:function(){r((function(n){return n.map((function(n){return Object(un.a)(Object(un.a)({},n),{},{done:!0})}))}))},addNewTask:function(n){r((function(e){return[].concat(Object(sn.a)(e),[{content:n,done:!1,id:e.length?e[e.length-1].id+1:1}])}))}}}(),i=o.tasks,c=o.removeTask,a=o.toggleTaskDone,d=o.setAllDone,l=o.addNewTask;return Object(H.jsxs)(ln,{children:[Object(H.jsx)(X,{}),Object(H.jsx)(an,{title:"To-do list"}),Object(H.jsx)(on,{title:"Add new Task",body:Object(H.jsx)(B,{addNewTask:l})}),Object(H.jsx)(on,{title:"To-do list",body:Object(H.jsx)(U,{tasks:i,hideDone:t,removeTask:c,toggleTaskDone:a}),extraHeaderContent:Object(H.jsx)($,{tasks:i,hideDone:t,toggleHideDone:function(){r((function(n){return!n}))},setAllDone:d})}),Object(H.jsx)("section",{className:"section section__stats",children:Object(H.jsx)("div",{})})]})},fn=Object(N.b)(hn||(hn=Object(A.a)(["\n  html {\n    box-sizing: border-box;\n  }\n\n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n\n  .body {\n    font-family: 'Montserrat', sans-serif;\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.color.lightGrey})),xn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),r(n),o(n),i(n),c(n)}))};z.a.render(Object(H.jsx)(C.a.StrictMode,{children:Object(H.jsxs)(N.a,{theme:{color:{white:"#fff",black:"#000",deepskyblue:"#00bfff",crimson:"#ec365b",lightSlateGrey:"#778899",lightGrey:"#d3d3d3"},breakpoint:{mobileMax360:360,mobileMax414:414}},children:[Object(H.jsx)(fn,{}),Object(H.jsx)(jn,{})]})}),document.getElementById("root")),xn()}},[[26,1,2]]]);
//# sourceMappingURL=main.05b06dcf.chunk.js.map