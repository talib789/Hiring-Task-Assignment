(this["webpackJsonpreact-hooks-dog-api"]=this["webpackJsonpreact-hooks-dog-api"]||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),s=n(18),o=n.n(s),i=(n(25),n(6)),l=n(11),u=n(2),j=(n(26),n(27),function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)(""),l=Object(i.a)(o,2),u=l[0],j=l[1];return Object(a.jsxs)("div",{className:"auth-form-container",children:[Object(a.jsx)("h2",{children:"Login"}),Object(a.jsxs)("form",{className:"login-form",onSubmit:function(e){e.preventDefault(),console.log(r)},children:[Object(a.jsx)("label",{htmlFor:"email",children:"email"}),Object(a.jsx)("input",{value:r,onChange:function(e){return s(e.target.value)},type:"email",placeholder:"youremail@gmail.com",id:"email",name:"email"}),Object(a.jsx)("label",{htmlFor:"password",children:"password"}),Object(a.jsx)("input",{value:u,onChange:function(e){return j(e.target.value)},type:"password",placeholder:"********",id:"password",name:"password"}),Object(a.jsx)("button",{type:"submit",children:"Log In"})]}),Object(a.jsx)("button",{className:"link-btn",onClick:function(){return e.onFormSwitch("register")},children:"Don't have an account? Register here."})]})}),b=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)(""),l=Object(i.a)(o,2),u=l[0],j=l[1],b=Object(c.useState)(""),d=Object(i.a)(b,2),h=d[0],m=d[1];return Object(a.jsxs)("div",{className:"auth-form-container",children:[Object(a.jsx)("h2",{children:"Register"}),Object(a.jsxs)("form",{className:"register-form",onSubmit:function(e){e.preventDefault(),console.log(r)},children:[Object(a.jsx)("label",{htmlFor:"name",children:"Full name"}),Object(a.jsx)("input",{value:h,name:"name",onChange:function(e){return m(e.target.value)},id:"name",placeholder:"full Name"}),Object(a.jsx)("label",{htmlFor:"email",children:"email"}),Object(a.jsx)("input",{value:r,onChange:function(e){return s(e.target.value)},type:"email",placeholder:"youremail@gmail.com",id:"email",name:"email"}),Object(a.jsx)("label",{htmlFor:"password",children:"password"}),Object(a.jsx)("input",{value:u,onChange:function(e){return j(e.target.value)},type:"password",placeholder:"********",id:"password",name:"password"}),Object(a.jsx)("button",{type:"submit",children:"Log In"})]}),Object(a.jsx)("button",{className:"link-btn",onClick:function(){return e.onFormSwitch("login")},children:"Already have an account? Login here."})]})},d=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light p-3",children:Object(a.jsx)(l.b,{className:"navbar-brand",to:"/",children:"Doggo API"})})})},h=n(10),m=n.n(h),O=n(16),p=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),l=o[0],u=o[1],j=function(){var e=Object(O.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u("https://dog.ceo/api/breeds/image/random"),e.next=3,fetch(l);case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)(Object(O.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:case"end":return e.stop()}}),e)})))),Object(a.jsx)("div",{className:"w-100 d-flex justify-content-center",children:Object(a.jsx)("img",{className:"d-flex justify-content-center",src:n.message,alt:""})})};var f=function(){var e=Object(c.useState)("login"),t=Object(i.a)(e,2),n=t[0],r=t[1],s=function(e){r(e)};return Object(a.jsxs)("div",{className:"App",children:["login"===n?Object(a.jsx)(j,{onFormSwitch:s}):Object(a.jsx)(b,{onFormSwitch:s}),Object(a.jsxs)(l.a,{children:[Object(a.jsx)(d,{}),Object(a.jsx)(u.c,{children:Object(a.jsx)(u.a,{path:"/",component:p})})]})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),g()}},[[34,1,2]]]);
//# sourceMappingURL=main.de27ff4a.chunk.js.map