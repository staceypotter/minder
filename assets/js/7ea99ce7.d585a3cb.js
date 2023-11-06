"use strict";(self.webpackChunkstacklok=self.webpackChunkstacklok||[]).push([[866],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),f=i,m=s["".concat(p,".").concat(f)]||s[f]||c[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},63614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const o={title:"Dependabot",sidebar_position:30},a="Dependabot Rule",l={unversionedId:"ref/rules/dependabot",id:"ref/rules/dependabot",title:"Dependabot",description:"The following rule type is available for Dependabot.",source:"@site/docs/ref/rules/dependabot.md",sourceDirName:"ref/rules",slug:"/ref/rules/dependabot",permalink:"/ref/rules/dependabot",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Dependabot",sidebar_position:30},sidebar:"minder",previous:{title:"Activity Score",permalink:"/ref/rules/activity"},next:{title:"Code Scanning",permalink:"/ref/rules/code_scanning"}},p={},d=[{value:"<code>dependabot_configured</code> - Verifies that Dependabot is configured for the repository",id:"dependabot_configured---verifies-that-dependabot-is-configured-for-the-repository",level:2},{value:"Entity",id:"entity",level:3},{value:"Type",id:"type",level:3},{value:"Rule parameters",id:"rule-parameters",level:3},{value:"Rule definition options",id:"rule-definition-options",level:3}],u={toc:d},s="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dependabot-rule"},"Dependabot Rule"),(0,i.kt)("p",null,"The following rule type is available for Dependabot."),(0,i.kt)("h2",{id:"dependabot_configured---verifies-that-dependabot-is-configured-for-the-repository"},(0,i.kt)("inlineCode",{parentName:"h2"},"dependabot_configured")," - Verifies that Dependabot is configured for the repository"),(0,i.kt)("p",null,"This rule allows you to monitor if Dependabot is enabled for automated dependency updates for repositories.\nIt is recommended that repositories have some form of automated dependency updates enabled\nto ensure that vulnerabilities are not introduced into the codebase."),(0,i.kt)("h3",{id:"entity"},"Entity"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repository"))),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dependabot_configured"))),(0,i.kt)("h3",{id:"rule-parameters"},"Rule parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"None")),(0,i.kt)("h3",{id:"rule-definition-options"},"Rule definition options"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"dependabot_configured")," rule supports the following options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"package_ecosystem (string)")," - The package ecosystem to check for updates",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The package ecosystem that the rule applies to. For example, ",(0,i.kt)("inlineCode",{parentName:"li"},"gomod"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"npm"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"docker"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"github-actions"),", etc."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"schedule_interval (string)")," - The interval at which to check for updates",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The interval that the rule should be evaluated. For example, ",(0,i.kt)("inlineCode",{parentName:"li"},"daily"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"weekly"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"monthly"),", etc."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apply_if_file (string)")," - Optional. The file to check for to determine if the rule should be applied ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If specified, the rule will only be evaluated if the given file exists. This is useful for rules that are only applicable to certain types of repositories.")))))}c.isMDXComponent=!0}}]);