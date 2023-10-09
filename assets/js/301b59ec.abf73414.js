"use strict";(self.webpackChunkstacklok=self.webpackChunkstacklok||[]).push([[3947],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=p(r),m=i,u=f["".concat(c,".").concat(m)]||f[m]||d[m]||o;return r?n.createElement(u,l(l({ref:t},s),{},{components:r})):n.createElement(u,l({ref:t},s))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[f]="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9978:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const o={},l=void 0,a={unversionedId:"cli/medic_profile_create",id:"cli/medic_profile_create",title:"medic_profile_create",description:"medic profile create",source:"@site/docs/cli/medic_profile_create.md",sourceDirName:"cli",slug:"/cli/medic_profile_create",permalink:"/cli/medic_profile_create",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mediator",previous:{title:"medic_profile",permalink:"/cli/medic_profile"},next:{title:"medic_profile_delete",permalink:"/cli/medic_profile_delete"}},c={},p=[{value:"medic profile create",id:"medic-profile-create",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],s={toc:p},f="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"medic-profile-create"},"medic profile create"),(0,i.kt)("p",null,"Create a profile within a mediator control plane"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"The medic profile create subcommand lets you create new profiles for a project\nwithin a mediator control plane."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"medic profile create [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -f, --file string      Path to the YAML defining the profile (or - for stdin)\n  -h, --help             help for create\n  -p, --project string   Project to create the profile in\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --config string      Config file (default is $PWD/config.yaml)\n      --grpc-host string   Server host (default "staging.stacklok.dev")\n      --grpc-insecure      Allow establishing insecure connections\n      --grpc-port int      Server port (default 443)\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cli/medic_profile"},"medic profile"),"\t - Manage profiles within a mediator control plane")))}d.isMDXComponent=!0}}]);