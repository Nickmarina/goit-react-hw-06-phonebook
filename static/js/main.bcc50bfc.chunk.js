(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{46:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),i=n(13),o=n.n(i),s=n(6),l=n(20),b=n(8),j=n(9),u=n(21),d=n.n(u),m=n(15),O=n(24),h=n(4),f=Object(b.b)("contacts/add"),g=Object(b.b)("contacts/delete"),p=Object(b.b)("contacts/filter"),x={items:[],filter:""},v=Object(b.c)(x.items,(a={},Object(m.a)(a,f,(function(e,t){return[].concat(Object(O.a)(e),[t.payload])})),Object(m.a)(a,g,(function(e,t){return e.filter((function(e){return e.id!==t.payload.id}))})),a)),N=Object(b.c)(x.filter,Object(m.a)({},p,(function(e,t){return t.payload}))),y=Object(h.b)({items:v,filter:N}),C={key:"contacts",storage:d.a,whitelist:["items"]},k=Object(b.a)({reducer:Object(j.g)(C,y),middleware:Object(b.d)({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}})}),w=Object(j.h)(k),A=n(7),z=n(19),B=n(23),S=n.n(B),q=Object(A.a)({form:{display:"flex",flexDirection:"column",flex:1},title:{margin:0,padding:0,maginBottom:10,fontSize:20,color:"lightslategray"},input:{padding:5},btn:{width:150,marginTop:10,padding:5,backgroundColor:"paleturquoise"}}),D=n(2),J=function(){var e=q(),t=Object(s.b)(),n=Object(c.useState)(""),a=Object(z.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),l=Object(z.a)(o,2),b=l[0],j=l[1];return Object(D.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault();var n={id:S.a.generate(),name:r,number:b};t(f(n)),i(""),j("")},children:[Object(D.jsxs)("label",{children:[Object(D.jsx)("h3",{className:e.title,children:"Name"}),Object(D.jsx)("input",{className:e.input,type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:function(e){return i(e.target.value)}})]}),Object(D.jsxs)("label",{children:[Object(D.jsx)("h3",{className:e.title,children:"Number"}),Object(D.jsx)("input",{className:e.input,type:"tel",name:"number",value:b,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:function(e){return j(e.target.value)}})]}),Object(D.jsx)("button",{className:e.btn,type:"submit",children:"Add contact"})]})},L=Object(A.a)({list:{margin:0,padding:0,marginTop:20}}),Z=Object(A.a)({item:{marginBottom:5,fontWeight:600},span:{marginRight:10,fontWeight:400},btn:{color:"maroon",backgroundColor:"salmon"}}),M=function(e){var t=e.id,n=Z(),a=Object(s.c)(function(e){return function(t){return t.items.find((function(t){return t.id===e}))}}(t)),c=a.name,r=a.number;console.log(t);var i=Object(s.b)();return Object(D.jsxs)("li",{className:n.item,children:[c,": ",Object(D.jsx)("span",{className:n.span,children:r}),Object(D.jsx)("button",{className:n.btn,type:"button",onClick:function(){return i(g({id:t}))},children:"Delete"})]},t)},T=function(e){var t=e.filter.toLowerCase();return e.items.filter((function(e){return e.name.toLowerCase().includes(t)}))},W=function(){var e=L(),t=Object(s.c)(T);return Object(D.jsx)("ul",{className:e.list,children:t.map((function(e){var t=e.id;return Object(D.jsx)(M,{id:t},t)}))})},E=Object(A.a)({title:{margin:0,padding:0,maginBottom:10,color:"lightslategray"},input:{padding:5}}),F=function(){var e=E(),t=Object(s.b)();return Object(D.jsxs)("div",{children:[Object(D.jsx)("h4",{className:e.title,children:"Find contacts by name"}),Object(D.jsx)("input",{className:e.input,type:"text",onChange:function(e){return t(p(e.target.value))}})]})},I=Object(A.a)({container:{marginLeft:30}}),P=function(){var e=I();return Object(D.jsxs)("div",{className:e.container,children:[Object(D.jsx)("h1",{children:"Phonebook"}),Object(D.jsx)(J,{}),Object(D.jsx)("h2",{children:"Contacts"}),Object(D.jsx)(F,{}),Object(D.jsx)(W,{})]})};o.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(s.a,{store:k,children:Object(D.jsx)(l.a,{loading:null,persistor:w,children:Object(D.jsx)(P,{})})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.bcc50bfc.chunk.js.map