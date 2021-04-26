(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(7),s=(n(0),n(87)),b={title:"User"},l={unversionedId:"api/user",id:"api/user",isDocsHomePage:!1,title:"User",description:"User accounts are used to identify people. They are also used to obtain tokens to use with the Azuma API.",source:"@site/docs/api/user.md",sourceDirName:"api",slug:"/api/user",permalink:"/api/user",version:"current",frontMatter:{title:"User"},sidebar:"docs",previous:{title:"Overview",permalink:"/api/overview"}},i=[{value:"Register User",id:"register-user",children:[{value:"Request",id:"request",children:[]},{value:"Response",id:"response",children:[]},{value:"Possible Errors",id:"possible-errors",children:[]}]},{value:"Login User",id:"login-user",children:[{value:"Request",id:"request-1",children:[]},{value:"Response",id:"response-1",children:[]},{value:"Possible Errors",id:"possible-errors-1",children:[]}]},{value:"Update User",id:"update-user",children:[{value:"Request",id:"request-2",children:[]},{value:"Response",id:"response-2",children:[]},{value:"Possible Errors",id:"possible-errors-2",children:[]}]}],o={toc:i};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"User accounts are used to identify people. They are also used to obtain tokens to use with the Azuma API."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "Uuid", // "ee8e77d9-290e-4bb9-84a1-c2b7efb338df"\n  "name": "String", // "azuma"\n  "created_at": "Timestamp" // "2021-03-28T14:39:40.063095Z"\n}\n')),Object(s.b)("h2",{id:"register-user"},"Register User"),Object(s.b)("p",null,"This route is used to create a new user and get a session token for it."),Object(s.b)("h3",{id:"request"},"Request"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"POST /user/register")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "String", // "azuma"\n  "password": "String" // "neo"\n}\n')),Object(s.b)("h3",{id:"response"},"Response"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "token": "Uuid" // "318cd399-f47f-478f-8d09-c9c414c3750d"\n}\n')),Object(s.b)("h3",{id:"possible-errors"},"Possible Errors"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Code"),Object(s.b)("th",{parentName:"tr",align:null},"Message"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"409 Conflict"),Object(s.b)("td",{parentName:"tr",align:null},"ALREADY_EXISTS"),Object(s.b)("td",{parentName:"tr",align:null},"This user already exists. Are you trying to ",Object(s.b)("a",{parentName:"td",href:"#login-user"},"login"),"?")))),Object(s.b)("h2",{id:"login-user"},"Login User"),Object(s.b)("p",null,"This route is used to get a session token for a user that has already been created."),Object(s.b)("h3",{id:"request-1"},"Request"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"POST /user/login")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "String", // "azuma"\n  "password": "String" // "neo"\n}\n')),Object(s.b)("h3",{id:"response-1"},"Response"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "token": "Uuid" // "c3b6f0b1-4a81-4ec8-800e-a2ad39f4d56e"\n}\n')),Object(s.b)("h3",{id:"possible-errors-1"},"Possible Errors"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Code"),Object(s.b)("th",{parentName:"tr",align:null},"Message"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"403 Forbidden"),Object(s.b)("td",{parentName:"tr",align:null},"FORBIDDEN"),Object(s.b)("td",{parentName:"tr",align:null},"The login credentials were incorrect.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"404 Not Found"),Object(s.b)("td",{parentName:"tr",align:null},"NOT_FOUND"),Object(s.b)("td",{parentName:"tr",align:null},"This user does not exist, are you trying to ",Object(s.b)("a",{parentName:"td",href:"#register-user"},"register"),"?")))),Object(s.b)("h2",{id:"update-user"},"Update User"),Object(s.b)("p",null,"This route is used to update the current user."),Object(s.b)("h3",{id:"request-2"},"Request"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"PATCH /user/update")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "String?", // "azumax"\n  "password": "String?" // "neox"\n}\n')),Object(s.b)("h3",{id:"response-2"},"Response"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "Uuid", // "ee8e77d9-290e-4bb9-84a1-c2b7efb338df"\n  "name": "String", // "azumax"\n  "created_at": "Timestamp" // "2021-03-28T14:39:40.063095Z"\n}\n')),Object(s.b)("h3",{id:"possible-errors-2"},"Possible Errors"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Code"),Object(s.b)("th",{parentName:"tr",align:null},"Message"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"409 Conflict"),Object(s.b)("td",{parentName:"tr",align:null},"ALREADY_EXISTS"),Object(s.b)("td",{parentName:"tr",align:null},"This username is already taken.")))))}c.isMDXComponent=!0}}]);