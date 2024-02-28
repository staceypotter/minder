"use strict";(self.webpackChunkstacklok=self.webpackChunkstacklok||[]).push([[6100],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var r=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=c(i),d=a,h=f["".concat(s,".").concat(d)]||f[d]||p[d]||n;return i?r.createElement(h,l(l({ref:t},u),{},{components:i})):r.createElement(h,l({ref:t},u))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,l=new Array(n);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[f]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<n;c++)l[c]=i[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},78245:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=i(87462),a=(i(67294),i(3905));const n={title:"Artifact Signature",sidebar_position:90},l="Artifact signature verification",o={unversionedId:"ref/rules/artifact_signature",id:"ref/rules/artifact_signature",title:"Artifact Signature",description:"The following rule type is available for checking that an artifact has a valid signature",source:"@site/docs/ref/rules/artifact_signature.md",sourceDirName:"ref/rules",slug:"/ref/rules/artifact_signature",permalink:"/ref/rules/artifact_signature",draft:!1,tags:[],version:"current",sidebarPosition:90,frontMatter:{title:"Artifact Signature",sidebar_position:90},sidebar:"minder",previous:{title:"Presence of a License File",permalink:"/ref/rules/license"},next:{title:"REST API Documentation",permalink:"/ref/api"}},s={},c=[{value:"<code>artifact_signature</code> - Verifies that an artifact has a valid signature",id:"artifact_signature---verifies-that-an-artifact-has-a-valid-signature",level:2},{value:"Entity",id:"entity",level:2},{value:"Type",id:"type",level:2},{value:"Rule Parameters",id:"rule-parameters",level:2},{value:"Rule Definition Options",id:"rule-definition-options",level:2}],u={toc:c},f="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(f,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"artifact-signature-verification"},"Artifact signature verification"),(0,a.kt)("p",null,"The following rule type is available for checking that an artifact has a valid signature\nand its provenance conforms to a policy."),(0,a.kt)("h2",{id:"artifact_signature---verifies-that-an-artifact-has-a-valid-signature"},(0,a.kt)("inlineCode",{parentName:"h2"},"artifact_signature")," - Verifies that an artifact has a valid signature"),(0,a.kt)("p",null,"This rule allows you to verify that an artifact was signed and that the signature is valid."),(0,a.kt)("h2",{id:"entity"},"Entity"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"artifact"))),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"artifact_signature"))),(0,a.kt)("h2",{id:"rule-parameters"},"Rule Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tags")," - the tags that should be checked for signatures. If not specified, all tags will be checked. If specified, the artifact must be tagged with all of the specified tags in order to be checked."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tags_regex")," - a regular expression specifying the tags that should be checked for signatures. If not specified, all tags will be checked. If specified, the artifact must be tagged with a tag that matches the regular expression in order to be checked."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," - the name of the artifact that should be checked for signatures. If not specified, all artifacts will be checked.")),(0,a.kt)("p",null,"It is an error to specify both ",(0,a.kt)("inlineCode",{parentName:"p"},"tags")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tags_regex"),"."),(0,a.kt)("h2",{id:"rule-definition-options"},"Rule Definition Options"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"artifact_signature")," rule has the following options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"is_signed")," (bool): Whether the artifact is signed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"is_verified")," (bool): Whether the artifact's signature could be verified"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"repository")," (string): The repository that the artifact was built from"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"branch")," (string): The branch that the artifact was built from"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"signer_identity")," (string): The identity of the signer of the artifact, e.g. a workflow name like ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-image-build-push.yml")," for GitHub workflow signatures or an email address"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"runner_environment")," (string): The environment that the artifact was built in, i.e. hosted-runner or self-hosted-runner. Set to ",(0,a.kt)("inlineCode",{parentName:"li"},"github-hosted")," to check for artifacts built on a GitHub-hosted runner."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cert_issuer")," (string): The issuer of the certificate used to sign the artifact, i.e. ",(0,a.kt)("inlineCode",{parentName:"li"},"https://token.actions.githubusercontent.com")," for GitHub Actions")))}p.isMDXComponent=!0}}]);