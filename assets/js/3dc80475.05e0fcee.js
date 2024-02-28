"use strict";(self.webpackChunkstacklok=self.webpackChunkstacklok||[]).push([[4411],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13313:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={title:"Adding users to your project",sidebar_position:100},a=void 0,l={unversionedId:"how-to/add_users_to_project",id:"how-to/add_users_to_project",title:"Adding users to your project",description:"Prerequisites",source:"@site/docs/how-to/add_users_to_project.md",sourceDirName:"how-to",slug:"/how-to/add_users_to_project",permalink:"/how-to/add_users_to_project",draft:!1,tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"Adding users to your project",sidebar_position:100},sidebar:"minder",previous:{title:"Using Minder with GitHub Advanced Security",permalink:"/how-to/using-minder-with-ghas"},next:{title:"Run the Server",permalink:"/run_minder_server/run_the_server"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Roles Overview",id:"roles-overview",level:2},{value:"Adding a user",id:"adding-a-user",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"minder")," CLI application"),(0,o.kt)("li",{parentName:"ul"},"A Stacklok account")),(0,o.kt)("h2",{id:"roles-overview"},"Roles Overview"),(0,o.kt)("p",null,"When incorporating a user into your project, it's crucial to assign them the appropriate role based on their responsibilities and required access levels.\nMinder currently offers the following roles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"viewer"),": Provides read-only access to the project. Users with this role can view associated resources such as enrolled repositories, rule types, and profiles."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"editor"),": Grants the same permissions as the viewer role, along with the ability to edit project resources, excluding the project itself and the list of providers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"admin"),": Grants administrator rights on the project. Users with this role have the same permissions as editor and can also modify the project and associated providers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"policy_writer"),": Allows users to create rule types and profiles."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"permissions_manager"),": Allows users to manage roles for other users within the project.")),(0,o.kt)("p",null,"You can also view the available roles and their descriptions by executing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"minder project role list\n")),(0,o.kt)("h2",{id:"adding-a-user"},"Adding a user"),(0,o.kt)("p",null,"To add a user to your project, follow these steps:"),(0,o.kt)("p",null,"1) Determine the User's Role: Decide the appropriate role for the user based on their responsibilities."),(0,o.kt)("p",null,"2) Execute the Command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"minder project role grant --sub user-id --role desired-role --project project-id\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"user-id")," with the unique identifier of the user you want to add."),(0,o.kt)("li",{parentName:"ul"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"desired-role")," with the chosen role for the user (e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"viewer"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"editor"),")."),(0,o.kt)("li",{parentName:"ul"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"project-id")," with the identifier of the project to which you want to add the user.")),(0,o.kt)("p",null,"You can then view all the project collaborators and their roles by executing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"minder project role grant list --project project-id\n")))}d.isMDXComponent=!0}}]);