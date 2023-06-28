(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n,a=c(10),s=c.n(a),r=c(5),o=c(19),l=c(8),i=c(17),d=c(18),u=function(e){return{type:"currentTodo/SET",payload:e}},j=function(){return{type:"currentTodo/REMOVE"}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/REMOVE":return null;case"currentTodo/SET":return t.payload;default:return e}},h=c(4);!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(n||(n={}));var O={query:"",status:n.ALL},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/SET_CLEAR":return Object(h.a)(Object(h.a)({},e),{},{query:""});case"filter/SET_QUERY":return Object(h.a)(Object(h.a)({},e),{},{query:t.payload});case"filter/SET_STATUS":return Object(h.a)(Object(h.a)({},e),{},{status:t.payload});default:return e}},x=function(e){return{type:"filter/SET_QUERY",payload:e}},m=function(e){return{type:"filter/SET_STATUS",payload:e}},p=function(){return{type:"filter/SET_CLEAR"}},v=c(15),y=function(e){return{type:"todos/SET",payload:e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case"todos/SET":return Object(v.a)(n);case"todos/ADD":return[].concat(Object(v.a)(e),[n]);case"todos/REMOVE":return e.filter((function(e){return e.id!==n.id}));default:return e}},T=Object(l.combineReducers)({currentTodo:b,filter:f,todos:N}),g=Object(l.createStore)(T,Object(i.composeWithDevTools)(Object(l.applyMiddleware)(d.a))),E=c(11),S=c(3),w=c(7),k=c.n(w),C=c(0),L=(c(28),c(29),c(12)),A=c.n(L),_=r.b,R=r.c,D=c(1),M=function(e){var t=e.todos,c=_(),n=R((function(e){return e.currentTodo}));return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(D.jsx)("thead",{children:Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{children:"#"}),Object(D.jsx)("th",{children:Object(D.jsx)("span",{className:"icon",children:Object(D.jsx)("i",{className:"fas fa-check"})})}),Object(D.jsx)("th",{children:"Title"}),Object(D.jsx)("th",{children:" "})]})}),Object(D.jsx)("tbody",{children:t.map((function(e){var t=(null===n||void 0===n?void 0:n.id)===e.id;return Object(D.jsxs)("tr",{"data-cy":"todo",className:A()({"has-background-info-light":t}),children:[Object(D.jsx)("td",{className:"is-vcentered",children:e.id}),Object(D.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(D.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(D.jsx)("i",{className:"fas fa-check"})})}),Object(D.jsx)("td",{className:"is-vcentered is-expanded",children:Object(D.jsx)("p",{className:A()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(D.jsx)("td",{className:"has-text-right is-vcentered",children:Object(D.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(u(e))},children:Object(D.jsx)("span",{className:"icon",children:Object(D.jsx)("i",{className:A()("far",{"fa-eye":!t,"fa-eye-slash":t})})})})})]},e.id)}))})]})})},q=function(){var e=_(),t=R((function(e){return e.filter})),c=t.query,n=t.status;return Object(D.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(D.jsx)("p",{className:"control",children:Object(D.jsx)("span",{className:"select",children:Object(D.jsxs)("select",{"data-cy":"statusSelect",value:n,onChange:function(t){e(m(t.target.value))},children:[Object(D.jsx)("option",{value:"all",children:"All"}),Object(D.jsx)("option",{value:"active",children:"Active"}),Object(D.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(D.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(D.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(t){e(x(t.target.value))}}),Object(D.jsx)("span",{className:"icon is-left",children:Object(D.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(D.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:c&&Object(D.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return e(p())}})})]})]})},I=(c(31),function(){return Object(D.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(D.jsx)("div",{className:"Loader__content"})})});function V(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var P=function(){var e=Object(C.useState)(null),t=Object(S.a)(e,2),c=t[0],n=t[1],a=Object(C.useState)(!0),s=Object(S.a)(a,2),r=s[0],o=s[1],l=Object(C.useState)(!1),i=Object(S.a)(l,2),d=i[0],u=i[1],b=_(),h=R((function(e){return e.currentTodo}));return Object(C.useEffect)((function(){var e=function(){var e=Object(E.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(!0),e.prev=1,!h){e.next=8;break}return e.next=5,c=h.userId,V("/users/".concat(c));case 5:t=e.sent,n(t),o(!1);case 8:e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),u(!0),o(!1);case 14:case"end":return e.stop()}var c}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[h]),Object(D.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(D.jsx)("div",{className:"modal-background"}),r?Object(D.jsx)(I,{}):Object(D.jsxs)("div",{className:"modal-card",children:[Object(D.jsxs)("header",{className:"modal-card-head",children:[Object(D.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===h||void 0===h?void 0:h.id)}),Object(D.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return b(j())}})]}),Object(D.jsxs)("div",{className:"modal-card-body",children:[Object(D.jsx)("p",{className:"block","data-cy":"modal-title",children:null===h||void 0===h?void 0:h.title}),d&&Object(D.jsx)("h2",{style:{color:"red"},children:"An error occured while user loading"}),Object(D.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==h&&void 0!==h&&h.completed?Object(D.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(D.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(D.jsx)("a",{href:"mailto:".concat(null===c||void 0===c?void 0:c.email),children:null===c||void 0===c?void 0:c.name})]})]})]})]})},U=function(){var e=Object(r.b)(),t=R((function(e){return e.todos})),c=R((function(e){return e.currentTodo})),a=R((function(e){return e.filter})),s=a.query,o=a.status,l=Object(C.useState)(!0),i=Object(S.a)(l,2),d=i[0],u=i[1],j=Object(C.useState)(!1),b=Object(S.a)(j,2),h=b[0],O=b[1];Object(C.useEffect)((function(){var t=function(){var t=Object(E.a)(k.a.mark((function t(){var c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.prev=1,t.next=4,V("/todos");case 4:c=t.sent,e(y(c)),u(!1),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),O(!0),u(!1);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[]);var f=Object(C.useMemo)((function(){return s.length||o!==n.ALL?t.filter((function(e){var t=e.title,c=e.completed,a=t.toLowerCase(),r=s.toLowerCase();switch(o){case n.COMPLETED:return c&&a.includes(r);case n.ACTIVE:return!c&&a.includes(r);default:return a.includes(r)}})):t}),[t,o,s]);return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("div",{className:"section",children:Object(D.jsx)("div",{className:"container",children:Object(D.jsxs)("div",{className:"box",children:[Object(D.jsx)("h1",{className:"title",children:"Todos:"}),Object(D.jsx)("div",{className:"block",children:Object(D.jsx)(q,{})}),Object(D.jsxs)("div",{className:"block",children:[d&&Object(D.jsx)(I,{}),h?Object(D.jsx)("p",{children:"Cant download todos"}):Object(D.jsx)(M,{todos:f})]})]})})}),c&&Object(D.jsx)(P,{})]})},B=function(){return Object(D.jsx)(r.a,{store:g,children:Object(D.jsx)(o.a,{children:Object(D.jsx)(U,{})})})};s.a.render(Object(D.jsx)(B,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.05201af8.chunk.js.map