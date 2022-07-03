"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[518],{6592:function(e,a,t){t.r(a),t.d(a,{default:function(){return h}});var n=t(8152),r=t(2791),s=t(5984),i=t(5264),l=t(4903),c="AddContactPage_addContactThumb__1-LEN",u="AddContactPage_inputForm__F1XTT",o="AddContactPage_label__nsALt",d="AddContactPage_inputArea__Tg0I1",m="AddContactPage_addContactBtnThumb__qScqG",p="AddContactPage_addContactBtn__SAhzs",_=t(3329);function h(){var e=(0,r.useState)(""),a=(0,n.Z)(e,2),t=a[0],h=a[1],f=(0,r.useState)(""),g=(0,n.Z)(f,2),x=g[0],b=g[1],v=(0,l.wY)().data,j=(0,l.Tn)(),N=(0,n.Z)(j,1)[0],C=(0,s.x0)(),w=(0,s.x0)(),y=function(e){var a=e.target,t=a.name,n=a.value;switch(t){case"name":h(n);break;case"number":b(n);break;default:return}},A=function(){h(""),b("")};return(0,_.jsx)("div",{className:c,children:(0,_.jsxs)("form",{className:u,onSubmit:function(e){var a;e.preventDefault(),a={name:t,number:x},v&&v.flatMap((function(e){return e.name})).includes(a.name)?i.Notify.failure("".concat(a.name," is already in your contacts.")):N(a),i.Notify.success("Woww! New contact is added)"),A()},children:[(0,_.jsx)("label",{className:o,children:(0,_.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,id:C,className:d,value:t,placeholder:"Input contact's name",onChange:y})}),(0,_.jsx)("label",{className:o,children:(0,_.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,id:w,className:d,value:x,placeholder:"Input contact's number",onChange:y})}),(0,_.jsx)("div",{className:m,children:(0,_.jsx)("button",{type:"submit",className:p,children:"Add contact"})})]})})}},3305:function(e,a,t){t.r(a),t.d(a,{default:function(){return g}});var n=t(8535),r=t(4808),s="FilterForm_filterInputArea__f8-Xp",i="FilterForm_filterForm__D+jvC",l=t(3329),c=function(){var e=(0,n.v9)((function(e){return e.filter.filter})),a=(0,n.I0)();return(0,l.jsx)("div",{className:i,children:(0,l.jsx)("label",{children:(0,l.jsx)("input",{type:"text",name:"filterInput",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0,className:s,value:e,placeholder:"Find contacts by name",onChange:function(e){return a((0,r.M)(e.target.value))}})})})},u=t(4903),o=t(8152),d="ContactsListItem_tableRaw__-jF2w",m="ContactsListItem_tableData__WcwBD",p="ContactsListItem_deleteBtn__vvGG1",_=function(e){var a=e.name,t=e.number,n=e.id,r=(0,u.Nt)(),s=(0,o.Z)(r,1)[0];return(0,l.jsxs)("tr",{className:d,children:[(0,l.jsx)("td",{className:m,children:a}),(0,l.jsx)("td",{className:m,children:t}),(0,l.jsx)("td",{className:m,children:(0,l.jsx)("button",{className:p,type:"button",onClick:function(){return s(n)},children:"Delete"})})]})},h=t(2791),f=function(){var e=(0,n.v9)((function(e){return e.filter.filter})),a=(0,u.wY)().data,t=(0,h.useMemo)((function(){return a&&a.filter((function(a){return a.name.toLocaleLowerCase().includes(e.toLocaleLowerCase())})).sort((function(e,a){return e.name.localeCompare(a.name)}))}),[e,a]);return(0,l.jsx)("div",{children:(0,l.jsx)("table",{children:(0,l.jsx)("tbody",{children:t&&t.map((function(e){var a=e.id,t=e.name,n=e.number;return(0,l.jsx)(_,{name:t,number:n,id:a},a)}))})})})};function g(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(f,{})]})}},365:function(e,a,t){t.r(a),t.d(a,{default:function(){return h}});var n=t(8152),r=t(2791),s=t(1405),i=t(5984),l=t(6191),c="LoginPage_loginThumb__99PBW",u="LoginPage_inputForm__FG+P4",o="LoginPage_label__HiYrP",d="LoginPage_inputArea__YRP3B",m="LoginPage_addContactBtnThumb__ZaBcG",p="LoginPage_loginBtn__67GGZ",_=t(3329);function h(){var e=(0,r.useState)(""),a=(0,n.Z)(e,2),t=a[0],h=a[1],f=(0,r.useState)(""),g=(0,n.Z)(f,2),x=g[0],b=g[1],v=(0,s.I0)(),j=function(e){var a=e.target,t=a.name,n=a.value;switch(t){case"email":return h(n);case"password":return b(n);default:return}},N=function(){h(""),b("")},C={email:(0,i.x0)(),password:(0,i.x0)()};return(0,_.jsx)("div",{className:c,children:(0,_.jsxs)("form",{className:u,onSubmit:function(e){e.preventDefault(),v((0,l.x4)({email:t,password:x})),N()},children:[(0,_.jsx)("label",{className:o,children:(0,_.jsx)("input",{type:"email",name:"email",id:C.email,required:!0,className:d,value:t,placeholder:"Input your email",onChange:j})}),(0,_.jsx)("label",{className:o,children:(0,_.jsx)("input",{type:"password",name:"password",id:C.password,required:!0,className:d,value:x,placeholder:"Input your password",onChange:j})}),(0,_.jsx)("div",{className:m,children:(0,_.jsx)("button",{type:"submit",className:p,children:"Login"})})]})})}},9155:function(e,a,t){t.r(a),t.d(a,{default:function(){return _}});var n=t(8152),r=t(2791),s=t(1405),i=t(6191),l="RegisterPage_registerThumb__vBX46",c="RegisterPage_inputForm__+VJCs",u="RegisterPage_label__mOHlp",o="RegisterPage_inputArea__0jbAz",d="RegisterPage_addContactBtnThumb__IFp9g",m="RegisterPage_registerBtn__Z08I-",p=t(3329);function _(){var e=(0,r.useState)(""),a=(0,n.Z)(e,2),t=a[0],_=a[1],h=(0,r.useState)(""),f=(0,n.Z)(h,2),g=f[0],x=f[1],b=(0,r.useState)(""),v=(0,n.Z)(b,2),j=v[0],N=v[1],C=(0,s.I0)(),w=function(e){var a=e.target,t=a.name,n=a.value;switch(t){case"name":return _(n);case"email":return x(n);case"password":return N(n);default:return}},y=function(){_(""),x(""),N("")};return(0,p.jsx)("div",{className:l,children:(0,p.jsxs)("form",{className:c,onSubmit:function(e){e.preventDefault(),C((0,i.z2)({name:t,email:g,password:j})),y()},children:[(0,p.jsx)("label",{className:u,children:(0,p.jsx)("input",{type:"text",name:"name",required:!0,className:o,value:t,placeholder:"Input your name",onChange:w})}),(0,p.jsx)("label",{className:u,children:(0,p.jsx)("input",{type:"email",name:"email",required:!0,className:o,value:g,placeholder:"Input your email",onChange:w})}),(0,p.jsx)("label",{className:u,children:(0,p.jsx)("input",{type:"password",name:"password",required:!0,className:o,value:j,placeholder:"Input your password",onChange:w})}),(0,p.jsx)("div",{className:d,children:(0,p.jsx)("button",{type:"submit",className:m,children:"Register"})})]})})}},5984:function(e,a,t){t.d(a,{x0:function(){return n}});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,a){return e+=(a&=63)<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=ContactsPage.aa945f41.chunk.js.map