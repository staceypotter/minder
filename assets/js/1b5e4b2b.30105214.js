"use strict";(self.webpackChunkstacklok=self.webpackChunkstacklok||[]).push([[4993],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35944:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={id:"profile_introduction",title:"Profile Introduction",sidebar_position:1,slug:"/profile_introduction",displayed_sidebar:"mediator"},a="Profile Introduction",l={unversionedId:"profile_engine/profile_introduction",id:"profile_engine/profile_introduction",title:"Profile Introduction",description:"Mediator allows you to define profiles for your software supply chain.",source:"@site/docs/profile_engine/profile_introduction.md",sourceDirName:"profile_engine",slug:"/profile_introduction",permalink:"/profile_introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"profile_introduction",title:"Profile Introduction",sidebar_position:1,slug:"/profile_introduction",displayed_sidebar:"mediator"},sidebar:"mediator",previous:{title:"Register Repositories",permalink:"/register_repos"},next:{title:"Manage profiles and violations",permalink:"/manage_profiles"}},p={},s=[],c={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"profile-introduction"},"Profile Introduction"),(0,o.kt)("p",null,"Mediator allows you to define profiles for your software supply chain."),(0,o.kt)("p",null,"The anatomy of a profile is the profile itself, which outlines the rules to be\nchecked, the rule types, and the evaluation engine."),(0,o.kt)("p",null,"As of time of writing, mediator supports the following evaluation engines:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.openprofileagent.org/"},"Open Profile Agent"))," (OPA) profile language."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://jqlang.github.io/jq/"},"JQ"))," - a lightweight and flexible command-line JSON processor.")),(0,o.kt)("p",null,"Each engine is designed to be extensible, allowing you to integrate your own\nlogic and processes."),(0,o.kt)("p",null,"Please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stacklok/mediator/tree/main/examples"},"examples")," directory for examples of profiles, and ",(0,o.kt)("a",{parentName:"p",href:"/manage_profiles"},"Manage Profiles")," for more details on how to set up profiles and rule types."))}f.isMDXComponent=!0}}]);