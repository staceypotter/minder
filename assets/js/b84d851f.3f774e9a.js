"use strict";(self.webpackChunkstacklok=self.webpackChunkstacklok||[]).push([[1456],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),p=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),s=p(r),f=n,u=s["".concat(c,".").concat(f)]||s[f]||d[f]||o;return r?i.createElement(u,l(l({ref:t},m),{},{components:r})):i.createElement(u,l({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[s]="string"==typeof e?e:n,l[1]=a;for(var p=2;p<o;p++)l[p]=r[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6341:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var i=r(7462),n=(r(7294),r(3905));const o={},l=void 0,a={unversionedId:"cli/medic_profile",id:"cli/medic_profile",title:"medic_profile",description:"medic profile",source:"@site/docs/cli/medic_profile.md",sourceDirName:"cli",slug:"/cli/medic_profile",permalink:"/cli/medic_profile",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mediator",previous:{title:"medic_docs",permalink:"/cli/medic_docs"},next:{title:"medic_profile_create",permalink:"/cli/medic_profile_create"}},c={},p=[{value:"medic profile",id:"medic-profile",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],m={toc:p},s="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"medic-profile"},"medic profile"),(0,n.kt)("p",null,"Manage profiles within a mediator control plane"),(0,n.kt)("h3",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"The medic profile subcommands allows the management of profiles within\na mediator controlplane."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"medic profile [flags]\n")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  -h, --help   help for profile\n")),(0,n.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'      --config string      Config file (default is $PWD/config.yaml)\n      --grpc-host string   Server host (default "staging.stacklok.dev")\n      --grpc-insecure      Allow establishing insecure connections\n      --grpc-port int      Server port (default 443)\n')),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/cli/medic"},"medic"),"\t - Medic controls mediator via the control plane"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/cli/medic_profile_create"},"medic profile create"),"\t - Create a profile within a mediator control plane"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/cli/medic_profile_delete"},"medic profile delete"),"\t - Delete a profile within a mediator control plane"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/cli/medic_profile_get"},"medic profile get"),"\t - Get details for a profile within a mediator control plane"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/cli/medic_profile_list"},"medic profile list"),"\t - List profiles within a mediator control plane")))}d.isMDXComponent=!0}}]);