(this["webpackJsonpspeed-typing-game"]=this["webpackJsonpspeed-typing-game"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),u=n.n(a),c=n(3),r=n.n(c),l=(n(9),n(1));var i=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(30),i=Object(l.a)(r,2),o=i[0],s=i[1],f=Object(a.useState)(!1),b=Object(l.a)(f,2),m=b[0],d=b[1],p=Object(a.useState)(0),j=Object(l.a)(p,2),O=j[0],g=j[1],E=Object(a.useRef)(null);return Object(a.useEffect)((function(){m&&o>0?setTimeout((function(){s((function(e){return e-1}))}),1e3):0===o&&(d(!1),g(function(e){return e.trim().split(" ").filter((function(e){return""!==e})).length}(n)))}),[o,m]),u.a.createElement("div",null,u.a.createElement("h1",null,"How fast do you type?"),u.a.createElement("textarea",{ref:E,onChange:function(e){var t=e.target.value;c(t)},value:n,disabled:!m}),u.a.createElement("h4",null,"Time remaining: ",o),u.a.createElement("button",{onClick:function(){d(!0),s(30),c(""),E.current.disabled=!1,E.current.focus()},disabled:m},"Start"),u.a.createElement("h1",null,"Word count: ",O))};r.a.render(u.a.createElement(i,null),document.getElementById("root"))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.b8111906.chunk.js.map