"use strict";(self.webpackChunkstacklok=self.webpackChunkstacklok||[]).push([[5351],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),p=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(r),u=n,f=s["".concat(c,".").concat(u)]||s[u]||d[u]||a;return r?i.createElement(f,o(o({ref:t},m),{},{components:r})):i.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},570:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=r(7462),n=(r(7294),r(3905));const a={},o=void 0,l={unversionedId:"cli/medic",id:"cli/medic",title:"medic",description:"medic",source:"@site/docs/cli/medic.md",sourceDirName:"cli",slug:"/cli/medic",permalink:"/cli/medic",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mediator",previous:{title:"Protocol Documentation",permalink:"/protodocs/proto"},next:{title:"medic_apply",permalink:"/cli/medic_apply"}},c={},p=[{value:"medic",id:"medic",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],m={toc:p},s="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"medic"},"medic"),(0,n.kt)("p",null,"Medic controls mediator via the control plane"),(0,n.kt)("h3",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"For more information about mediator, please visit:\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.stacklok.com/mediator/medic/overview.html"},"https://docs.stacklok.com/mediator/medic/overview.html")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'      --config string      Config file (default is $PWD/config.yaml)\n      --grpc-host string   Server host (default "staging.stacklok.dev")\n      --grpc-insecure      Allow establishing insecure connections\n      --grpc-port int      Server port (default 443)\n  -h, --help               help for medic\n')),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/cli/medic_apply"},"medic apply"),"\t - Appy a configuration to a mediator control plane"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/cli/medic_artifact"},"medic artifact"),"\t - Manage artifacts within a mediator control plane"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/cli/medic_auth"},"medic auth"),"\t - Authorize and manage accounts within a mediator control plane"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/cli/medic_completion"},"medic completion"),"\t - Generate the autocompletion script for the specified shell"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/cli/medic_docs"},"medic docs"),"\t - Generates documentation for the client"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/cli/medic_profile"},"medic profile"),"\t - Manage profiles within a mediator control plane"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/cli/medic_profile_status"},"medic profile_status"),"\t - Manage profile status within a mediator control plane"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/cli/medic_provider"},"medic provider"),"\t - Manage providers within a mediator control plane"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/cli/medic_repo"},"medic repo"),"\t - Manage repositories within a mediator control plane"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/cli/medic_rule_type"},"medic rule_type"),"\t - Manage rule types within a mediator control plane")))}d.isMDXComponent=!0}}]);