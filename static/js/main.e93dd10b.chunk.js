(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{52:function(e,n,t){"use strict";t.r(n);var r,c,o,i,a,s,d,l,u,b,j,h,f,x,p,O,m,g,k,v,y,w,S,D,T,C,E,R=t(0),M=t.n(R),A=t(20),L=t.n(A),I=t(4),B=t(8),G=t(5),N=Object(I.b)(r||(r=Object(G.a)(["\n  html {\n    box-sizing: border-box;\n  }\n\n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n\n  .body {\n    font-family: 'Montserrat', sans-serif;\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.color.lightGrey})),z=t(22),F=t(18),U=I.d.form(c||(c=Object(G.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-gap: 20px;\n\n  @media (max-width: ","px) {\n      grid-template-columns: 1fr;\n  }\n"])),(function(e){return e.theme.breakpoint.mobileMax414})),P=I.d.button(o||(o=Object(G.a)(["\n  padding: 20px; \n  color: ","; \n  background-color: ","; \n  border: none;\n  transition: color 0.3s;\n\n  @media (max-width: ","px) {\n      width: 75vw;\n      font-size: 20px;\n      text-align: center;\n  }\n\n  &:hover {\n    filter: brightness(110%);\n    transform: scale(1.1);\n  }\n\n  &:active {\n    filter: brightness(120%);\n  }\n"])),(function(e){return e.theme.color.white}),(function(e){return e.theme.color.crimson}),(function(e){return e.theme.mobileMax360})),H=t(32),J="tasks",q=function(e){return localStorage.setItem(J,JSON.stringify(e))},W=Object(F.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(J))||[],hideDone:!1},reducers:{addTask:function(e,n){var t=e.tasks,r=n.payload;t.push(r)},toggleHideDone:function(e){e.hideDone=!e.hideDone},toggleTaskDone:function(e,n){var t=e.tasks,r=n.payload,c=t.findIndex((function(e){return e.id===r}));t[c].done=!t[c].done},removeTask:function(e,n){var t=e.tasks,r=n.payload,c=t.findIndex((function(e){return e.id===r}));t.splice(c,1)},setAllDone:function(e){var n,t=e.tasks,r=Object(H.a)(t);try{for(r.s();!(n=r.n()).done;){n.value.done=!0}}catch(c){r.e(c)}finally{r.f()}},fetchExampleTasks:function(e){e.loading=!0},fetchExampleTasksSuccess:function(e,n){var t=n.payload;e.tasks=t,e.loading=!1},fetchExampleTasksError:function(e){e.loading=!1}}}),Y=W.actions,K=Y.addTask,Q=Y.toggleHideDone,V=Y.toggleTaskDone,X=Y.removeTask,Z=Y.setAllDone,$=Y.fetchExampleTasks,_=Y.fetchExampleTasksSuccess,ee=Y.fetchExampleTasksError,ne=function(e){return e.tasks},te=function(e){return ne(e).tasks},re=function(e){return ne(e).hideDone},ce=function(e){return 0===te(e).length},oe=function(e){return te(e).every((function(e){return e.done}))},ie=W.reducer,ae=I.d.input(i||(i=Object(G.a)(["\n  padding: 20px; \n  border: 1px solid ",";\n\n  @media (max-width: ","px) {\n    width: 75vw;\n    font-size: 14px;\n    text-align: center;\n  }\n"])),(function(e){return e.theme.color.lightGrey}),(function(e){return e.theme.breakpoint.mobileMax360})),se=t(2),de=function(){var e=Object(R.useState)(""),n=Object(z.a)(e,2),t=n[0],r=n[1],c=Object(R.useRef)(null),o=Object(B.b)();return Object(se.jsxs)(U,{onSubmit:function(e){e.preventDefault();var n=t.trim();n&&(o(K({content:n,done:!1,id:Object(F.c)()})),r(""),c.current.focus())},children:[Object(se.jsx)(ae,{ref:c,value:t,type:"text",placeholder:"What is there to do?",onChange:function(e){var n=e.target;return r(n.value)},required:!0}),Object(se.jsx)(P,{children:"Add new task"})]})},le=I.d.ul(a||(a=Object(G.a)(["\n  list-style: none;\n  margin: 0; \n  padding: 0; \n"]))),ue=I.d.li(s||(s=Object(G.a)(["\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  grid-gap: 10px;\n  align-items: center;\n  padding: 10px; \n  border-bottom: 1px solid ","; \n\n  ","\n"])),(function(e){return e.theme.color.lightGrey}),(function(e){return e.hidden&&Object(I.c)(d||(d=Object(G.a)(["\n    display: none;\n  "])))})),be=I.d.button(l||(l=Object(G.a)(["\n  border: none; \n  color: ","; \n  font-size: 22px;\n  width: 30px; \n  height: 30px; \n  padding: 0; \n  transition: filter 0.3s;\n\n   "," \n\n  ","\n\n  &:hover {\n    filter: brightness(110%);\n  }\n\n  &:active {\n    filter: brightness(120%);\n  }\n"])),(function(e){return e.theme.color.white}),(function(e){return e.toggleDone&&Object(I.c)(u||(u=Object(G.a)(["\n    background-color: ","; \n  "])),(function(e){return e.theme.color.deepSkyBlue}))}),(function(e){return e.remove&&Object(I.c)(b||(b=Object(G.a)(["\n    background-color: ",";\n  "])),(function(e){return e.theme.color.crimson}))})),je=I.d.span(j||(j=Object(G.a)(["\n  ","\n"])),(function(e){return e.done&&Object(I.c)(h||(h=Object(G.a)(["\n    text-decoration: line-through;\n  "])))})),he=I.d.a(f||(f=Object(G.a)(["\n  color: ",";\n  text-decoration: none;\n  \n  &:hover {\n    border-bottom: 1px solid;\n  }\n  "])),(function(e){return e.theme.color.white})),fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:":id"},n=e.id;return"/tasks/".concat(n)},xe="search",pe=t(7),Oe=function(e){var n=Object(pe.h)();return new URLSearchParams(n.search).get(e)},me=function(){var e=Oe(xe),n=Object(B.c)((function(n){return function(e,n){var t=te(e);return n&&""!==n.trim()?t.filter((function(e){return e.content.toUpperCase().includes(n.trim().toUpperCase())})):t}(n,e)})),t=Object(B.c)(re),r=Object(B.b)();return Object(se.jsx)(le,{children:n.map((function(e){return Object(se.jsxs)(ue,{hidden:e.done&&t,children:[Object(se.jsx)(be,{toggleDone:!0,onClick:function(){return r(V(e.id))},children:e.done?"\u2714":""}),Object(se.jsx)(je,{done:e.done,children:Object(se.jsx)(he,{to:fe({id:e.id}),children:e.content})}),Object(se.jsx)(be,{remove:!0,onClick:function(){return r(X(e.id))},children:"\ud83d\uddd1"})]},e.id)}))})},ge=I.d.div(x||(x=Object(G.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),ke=I.d.button(p||(p=Object(G.a)(["\n  background-color: transparent;\n  color: ",";\n  border: none;\n  margin: 0 0 0 20px;\n  border-bottom: 1px solid transparent;\n  transition: filter 0.3s;\n\n  @media (max-width: ","px) {\n      flex-basis: 100%;\n      margin: 10px;\n  }\n\n  &:hover {\n    filter: brightness(110%);\n  }\n\n  &:active {\n    filter: brightness(120%);\n  }\n\n  &:disabled {\n    color: ","\n  }\n"])),(function(e){return e.theme.color.deepSkyBlue}),(function(e){return e.theme.breakpoint.mobileMax414}),(function(e){return e.theme.color.lightSlateGrey})),ve=function(){var e=Object(B.c)(ce),n=Object(B.c)(oe),t=Object(B.c)(re),r=Object(B.b)();return Object(se.jsxs)(ge,{children:[Object(se.jsx)(ke,{onClick:function(){return r($())},children:"Download sample tasks"}),!e&&Object(se.jsxs)(se.Fragment,{children:[Object(se.jsxs)(ke,{onClick:function(){return r(Q())},children:[t?"Show":"Hide"," completed tasks"]}),Object(se.jsx)(ke,{onClick:function(){return r(Z())},disabled:n,children:"Complete all tasks"})]})]})},ye=I.d.div(O||(O=Object(G.a)(["\n  text-align: right;\n  font-family: monospace;\n  color:",";\n  background-color: ",";\n  font-size: 16px;\n  padding: 20px;\n"])),(function(e){return e.theme.color.crimson}),(function(e){return e.theme.color.white})),we=function(e){return e.toLocaleString(void 0,{weekday:"long",hour:"2-digit",minute:"2-digit",second:"2-digit",day:"numeric",month:"long"})},Se=function(){var e=Object(R.useState)(new Date),n=Object(z.a)(e,2),t=n[0],r=n[1];return Object(R.useEffect)((function(){var e=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(e)}}),[]),Object(se.jsxs)(ye,{children:["Today is"," ",we(t)]})},De=I.d.section(m||(m=Object(G.a)(["\n  background-color: ",";\n  padding: 20px;\n  cursor: context-menu;\n"])),(function(e){return e.theme.color.white})),Te=I.d.a(g||(g=Object(G.a)(["\n  cursor: context-menu;\n"]))),Ce=I.d.button(k||(k=Object(G.a)(["\n  margin: 5px;\n  padding: 8px;\n  cursor: context-menu;\n  border-style: none;\n  background-color: ",";\n  color: ",";\n\n  &:hover {\n    filter: brightness(110%);\n  }\n\n  &:active {\n    filter: brightness(120%);\n  }\n\n  ","\n\n  &:hover {\n    filter: brightness(110%);\n  }\n\n  &:active {\n    filter: brightness(120%);\n  }\n"])),(function(e){return e.theme.color.crimson}),(function(e){return e.theme.color.white}),(function(e){return e.deepSkyBlue&&Object(I.c)(v||(v=Object(G.a)(["\n    background-color: ",";\n    color: ",";\n  "])),(function(e){return e.theme.color.deepSkyBlue}),(function(e){return e.theme.color.white}))})),Ee=function(){return Object(se.jsxs)(De,{children:[Object(se.jsx)(Se,{}),Object(se.jsx)(Te,{href:"ToDo-List--DE-CRMS--ReactApp",children:Object(se.jsx)(Ce,{children:"DE"})}),Object(se.jsx)(Te,{href:"ToDo-List--ES-CRMS--ReactApp",children:Object(se.jsx)(Ce,{children:"ES"})}),Object(se.jsx)(Te,{href:"ToDo-List--RU-CRMS--ReactApp",children:Object(se.jsx)(Ce,{children:"RU"})}),Object(se.jsx)(Te,{href:"ToDo-List--PL-CRMS--ReactApp",children:Object(se.jsx)(Ce,{children:"PL"})}),Object(se.jsx)(Te,{href:"ToDo-List--UA-CRMS--ReactApp",children:Object(se.jsx)(Ce,{children:"UA"})}),Object(se.jsx)(Te,{href:"#",children:Object(se.jsx)(Ce,{deepSkyBlue:!0,children:"\ud83c\udf13"})})]})},Re=I.d.section(y||(y=Object(G.a)(["\n  margin: 10px 0;\n  background: ",";  \n  box-shadow: 0 0 30px ","; \n"])),(function(e){return e.theme.color.white}),(function(e){return e.theme.color.lightGrey})),Me=I.d.header(w||(w=Object(G.a)(["\n  border-bottom: 1px solid ","; \n  display: grid;\n  grid-template-columns: auto auto;\n  grid-gap: 20px;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px; \n\n  @media (max-width: ","px) {\n    grid-template-columns: 1fr;\n  }\n"])),(function(e){return e.theme.color.lightGrey}),(function(e){return e.theme.breakpoint.mobileMax414})),Ae=I.d.h2(S||(S=Object(G.a)(["\n  padding: 10px;\n  color: ",";\n  font-size: 30px;\n  margin: 0;\n  text-align: left;\n"])),(function(e){return e.theme.color.deepSkyBlue})),Le=I.d.div(D||(D=Object(G.a)(["\n  padding: 20px;\n  background-color: ",";\n\n  @media (max-width: ","px) {\n    padding: 15px;\n  }\n"])),(function(e){return e.theme.color.lightSlateGrey}),(function(e){return e.theme.breakpoint.mobileMax360})),Ie=function(e){var n=e.title,t=e.body,r=e.extraHeaderContent;return Object(se.jsxs)(Re,{children:[Object(se.jsxs)(Me,{children:[Object(se.jsx)(Ae,{children:n}),r]}),Object(se.jsx)(Le,{children:t})]})},Be=I.d.h2(T||(T=Object(G.a)(["\n  padding: 10px;\n  color: ",";\n  font-size: 30px;\n  margin: 0;\n  text-align: left;\n"])),(function(e){return e.theme.color.deepSkyBlue})),Ge=function(e){var n=e.title;return Object(se.jsx)("header",{children:Object(se.jsx)(Be,{children:n})})},Ne=I.d.div(C||(C=Object(G.a)(["\n  max-width: 900px;\n  padding: 20px; \n  margin: 0 auto; \n"]))),ze=function(e){var n=e.children;return Object(se.jsx)(Ne,{children:n})},Fe=I.d.div(E||(E=Object(G.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n"]))),Ue=function(){var e=Oe(xe),n=function(){var e=Object(pe.h)(),n=Object(pe.g)();return function(t){var r=t.key,c=t.value,o=new URLSearchParams(e.search);void 0===c?o.delete(r):o.set(r,c);var i=o.toString();n.push("".concat(e.pathname,"?").concat(i))}}();return Object(se.jsx)(Fe,{children:Object(se.jsx)(ae,{placeholder:"Filter tasks",value:e||"",onChange:function(e){var t=e.target;n({key:xe,value:""!==t.value.trim()?t.value:void 0})}})})};var Pe=function(){return Object(se.jsxs)(ze,{children:[Object(se.jsx)(Ee,{}),Object(se.jsx)(Ge,{title:"ToDo list"}),Object(se.jsx)(Ie,{title:"Add new task",body:Object(se.jsx)(de,{})}),Object(se.jsx)(Ie,{title:"Search engine",body:Object(se.jsx)(Ue,{})}),Object(se.jsx)(Ie,{title:"ToDo list",body:Object(se.jsx)(me,{}),extraHeaderContent:Object(se.jsx)(ve,{})})]})};var He,Je,qe,We=function(){var e=Object(pe.i)().id,n=Object(B.c)((function(n){return function(e,n){return te(e).find((function(e){return e.id===n}))}(n,e)}));return Object(se.jsxs)(ze,{children:[Object(se.jsx)(Ge,{title:"Task details"}),Object(se.jsx)(Ie,{title:n?n.content:"Not found the task \ud83d\ude22",body:!!n&&Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)("strong",{children:"Completed:"})," ",n.done?"Yes":"No"]})})]})},Ye=function(){return Object(se.jsxs)(ze,{children:[Object(se.jsx)(Ge,{title:"About the author"}),Object(se.jsx)(Ie,{title:"Nikita Rysiev",body:Object(se.jsxs)("p",{contentEditable:!0,children:[Object(se.jsx)("p",{children:"you can edit the text below"}),Object(se.jsx)("p",{children:"Hej! My name a Nick, and I am a beginner Junior Front-End (React) Developer and \ud83d\udc76 Junior Manual Software Tester with introduction to automation. My native language is Russian, but I learn and practice more English language, Polish and some German."}),Object(se.jsx)("p",{children:"Now I try to study software testing and some coding of simple web applications."}),Object(se.jsx)("p",{children:"I want to know coding and speaking English very well to be useful in the labor market."})]})})]})},Ke=t(17),Qe="link-active",Ve=Object(I.d)(Ke.b).attrs((function(){return{activeClassName:Qe}}))(He||(He=Object(G.a)(["\n  color: ",";\n  text-decoration: none;\n\n  &."," {\n    font-weight: bold;\n  }\n\n  &:hover {\n    border-bottom: 1px solid;\n  }\n"])),(function(e){return e.theme.color.white}),Qe),Xe=I.d.ul(Je||(Je=Object(G.a)(["\n  background: ",";\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  list-style: none;\n"])),(function(e){return e.theme.color.deepSkyBlue})),Ze=I.d.li(qe||(qe=Object(G.a)(["\n  margin: 20px;\n"]))),$e=function(){return Object(se.jsxs)("nav",{children:[Object(se.jsx)(Xe,{children:Object(se.jsx)(Ze,{children:Object(se.jsx)(Ve,{to:"/tasks",children:"Tasks"})})}),Object(se.jsx)(Xe,{children:Object(se.jsx)(Ze,{children:Object(se.jsx)(Ve,{to:"/author",children:"About the author"})})})]})},_e=function(){return Object(se.jsxs)(Ke.a,{children:[Object(se.jsx)($e,{}),Object(se.jsxs)(pe.d,{children:[Object(se.jsx)(pe.b,{path:fe(),children:Object(se.jsx)(We,{})}),Object(se.jsx)(pe.b,{path:"/tasks",children:Object(se.jsx)(Pe,{})}),Object(se.jsx)(pe.b,{path:"/author",children:Object(se.jsx)(Ye,{})}),Object(se.jsx)(pe.b,{children:Object(se.jsx)(pe.a,{to:"/tasks"})})]})]})},en=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,53)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),o(e),i(e)}))},nn=t(35),tn=t(11),rn=t.n(tn),cn=t(13),on=t(34),an=function(){var e=Object(on.a)(rn.a.mark((function e(){var n;return rn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/ToDo-List--EN-CRMS--ReactApp/exampleTasks.json");case 2:return(n=e.sent).ok||new Error(n.statusText),e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),sn=rn.a.mark(un),dn=rn.a.mark(bn),ln=rn.a.mark(jn);function un(){var e;return rn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(cn.c)(1e3);case 3:return n.next=5,Object(cn.b)(an);case 5:return e=n.sent,n.next=8,Object(cn.d)(_(e));case 8:n.next=16;break;case 10:return n.prev=10,n.t0=n.catch(0),n.next=14,Object(cn.d)(ee());case 14:return n.next=16,Object(cn.b)(alert,"Something went wrong!");case 16:case"end":return n.stop()}}),sn,null,[[0,10]])}function bn(){var e;return rn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(cn.e)(te);case 2:return e=n.sent,n.next=5,Object(cn.b)(q,e);case 5:case"end":return n.stop()}}),dn)}function jn(){return rn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(cn.g)($.type,un);case 2:return e.next=4,Object(cn.f)("*",bn);case 4:case"end":return e.stop()}}),ln)}var hn=rn.a.mark(fn);function fn(){return rn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(cn.a)([jn()]);case 2:case"end":return e.stop()}}),hn)}var xn=Object(nn.a)(),pn=Object(F.a)({reducer:{tasks:ie},middleware:[xn]});xn.run(fn);var On=pn;L.a.render(Object(se.jsx)(M.a.StrictMode,{children:Object(se.jsx)(B.a,{store:On,children:Object(se.jsxs)(I.a,{theme:{color:{white:"#fff",black:"#000",deepSkyBlue:"#00bfff",crimson:"#ec365b",lightSlateGrey:"#778899",lightGrey:"#d3d3d3"},breakpoint:{mobileMax360:360,mobileMax414:414}},children:[Object(se.jsx)(N,{}),Object(se.jsx)(_e,{})]})})}),document.getElementById("root")),en()}},[[52,1,2]]]);
//# sourceMappingURL=main.e93dd10b.chunk.js.map