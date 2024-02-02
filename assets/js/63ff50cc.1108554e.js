"use strict";(self.webpackChunkstacklok=self.webpackChunkstacklok||[]).push([[1820],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,k=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},87990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Run the Server",sidebar_position:10},i="Run a minder server",l={unversionedId:"run_minder_server/run_the_server",id:"run_minder_server/run_the_server",title:"Run the Server",description:"Minder is platform, comprising of a controlplane, a CLI, a database and an identity provider.",source:"@site/docs/run_minder_server/run_the_server.md",sourceDirName:"run_minder_server",slug:"/run_minder_server/run_the_server",permalink:"/run_minder_server/run_the_server",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Run the Server",sidebar_position:10},sidebar:"minder",previous:{title:"Adding users to your project",permalink:"/how-to/add_users_to_project"},next:{title:"Configure OAuth Provider",permalink:"/run_minder_server/config_oauth"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Download the latest release",id:"download-the-latest-release",level:2},{value:"Build from source",id:"build-from-source",level:2},{value:"Clone the repository",id:"clone-the-repository",level:3},{value:"Build the application",id:"build-the-application",level:3},{value:"Database creation",id:"database-creation",level:2},{value:"Using a container",id:"using-a-container",level:3},{value:"Create the database",id:"create-the-database",level:3},{value:"Identity Provider",id:"identity-provider",level:2},{value:"Using a container",id:"using-a-container-1",level:3},{value:"Social login",id:"social-login",level:3},{value:"Create a GitHub OAuth Application for Social Login",id:"create-a-github-oauth-application-for-social-login",level:4},{value:"Enable GitHub login",id:"enable-github-login",level:4},{value:"OpenFGA",id:"openfga",level:2},{value:"Using a container",id:"using-a-container-2",level:3},{value:"Create the model",id:"create-the-model",level:3},{value:"Create token key passphrase",id:"create-token-key-passphrase",level:2},{value:"Configure the Repository Provider",id:"configure-the-repository-provider",level:2},{value:"Updating the Webhook Configuration",id:"updating-the-webhook-configuration",level:2},{value:"Run the application",id:"run-the-application",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-a-minder-server"},"Run a minder server"),(0,r.kt)("p",null,"Minder is platform, comprising of a controlplane, a CLI, a database and an identity provider."),(0,r.kt)("p",null,"The control plane runs two endpoints, a gRPC endpoint and a HTTP endpoint."),(0,r.kt)("p",null,"Minder is controlled and managed via the CLI application ",(0,r.kt)("inlineCode",{parentName:"p"},"minder"),"."),(0,r.kt)("p",null,"PostgreSQL is used as the database."),(0,r.kt)("p",null,"Keycloak is used as the identity provider."),(0,r.kt)("p",null,"There are two methods to get started with Minder, either by downloading the\nlatest release, building from source or (quickest) using the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose"),"\nfile."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://golang.org/doc/install"},"Go 1.20")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/download/"},"PostgreSQL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.keycloak.org/guides"},"Keycloak"))),(0,r.kt)("h2",{id:"download-the-latest-release"},"Download the latest release"),(0,r.kt)("p",null,"[stub for when we cut a first release]"),(0,r.kt)("h2",{id:"build-from-source"},"Build from source"),(0,r.kt)("p",null,"Alternatively, you can build from source."),(0,r.kt)("h3",{id:"clone-the-repository"},"Clone the repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:stacklok/minder.git\n")),(0,r.kt)("h3",{id:"build-the-application"},"Build the application"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make build\n")),(0,r.kt)("p",null,"This will create two binaries, ",(0,r.kt)("inlineCode",{parentName:"p"},"bin/minder-server")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bin/minder"),"."),(0,r.kt)("p",null,"You may now copy these into a location on your path, or run them directly from the ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," directory."),(0,r.kt)("p",null,"You will also need a configuration file. You can copy the example configuration file from ",(0,r.kt)("inlineCode",{parentName:"p"},"configs/server-config.yaml.example")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"$(PWD)/server-config.yaml"),"."),(0,r.kt)("p",null,"If you prefer to use a different file name or location, you can specify this using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--config"),"\nflag, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"minder-server --config /file/path/server-config.yaml serve")," when you later run the application."),(0,r.kt)("h2",{id:"database-creation"},"Database creation"),(0,r.kt)("p",null,"Minder requires a PostgreSQL database to be running. You can install this locally, or use a container."),(0,r.kt)("p",null,"Should you install locally, you will need to set certain configuration options in your ",(0,r.kt)("inlineCode",{parentName:"p"},"server-config.yaml")," file, to reflect your local database configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'database:\n  dbhost: "localhost"\n  dbport: 5432\n  dbuser: postgres\n  dbpass: postgres\n  dbname: minder\n  sslmode: disable\n')),(0,r.kt)("h3",{id:"using-a-container"},"Using a container"),(0,r.kt)("p",null,"A simple way to get started is to use the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d postgres\n")),(0,r.kt)("h3",{id:"create-the-database"},"Create the database"),(0,r.kt)("p",null,"Once you have a running database, you can create the database using the ",(0,r.kt)("inlineCode",{parentName:"p"},"minder-server")," CLI tool or via the ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make migrateup\n")),(0,r.kt)("p",null,"or:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"minder-server migrate up\n")),(0,r.kt)("h2",{id:"identity-provider"},"Identity Provider"),(0,r.kt)("p",null,"Minder requires a Keycloak instance to be running. You can install this locally, or use a container."),(0,r.kt)("p",null,"Should you install locally, you will need to configure the client on Keycloak.\nYou will need the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'A Keycloak realm named "stacklok" with event saving turned on for the "Delete account" event.'),(0,r.kt)("li",{parentName:"ul"},"A registered public client with the redirect URI ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost/*"),". This is used for the minder CLI."),(0,r.kt)("li",{parentName:"ul"},"A registered confidential client with a service account that can manage users and view events. This is used for the minder server.")),(0,r.kt)("p",null,"You will also need to set certain configuration options in your ",(0,r.kt)("inlineCode",{parentName:"p"},"server-config.yaml")," file, to reflect your local Keycloak configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"identity:\n  server:\n    issuer_url: http://localhost:8081\n    client_id: minder-server\n    client_secret: secret\n")),(0,r.kt)("p",null,"Similarly, for the CLI ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"identity:\n  cli:\n    issuer_url: http://localhost:8081\n    client_id: minder-cli\n")),(0,r.kt)("h3",{id:"using-a-container-1"},"Using a container"),(0,r.kt)("p",null,"A simple way to get started is to use the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d keycloak\n")),(0,r.kt)("h3",{id:"social-login"},"Social login"),(0,r.kt)("p",null,"Once you have a Keycloak instance running locally, you can set up GitHub authentication."),(0,r.kt)("h4",{id:"create-a-github-oauth-application-for-social-login"},"Create a GitHub OAuth Application for Social Login"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/settings/profile"},"GitHub Developer Settings")),(0,r.kt)("li",{parentName:"ol"},'Select "Developer Settings" from the left hand menu'),(0,r.kt)("li",{parentName:"ol"},'Select "OAuth Apps" from the left hand menu'),(0,r.kt)("li",{parentName:"ol"},'Select "New OAuth App"'),(0,r.kt)("li",{parentName:"ol"},"Enter the following details:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Application Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"Stacklok Identity Provider")," (or any other name you like)"),(0,r.kt)("li",{parentName:"ul"},"Homepage URL: ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:8081")," or the URL you specified as the ",(0,r.kt)("inlineCode",{parentName:"li"},"issuer_url")," in your ",(0,r.kt)("inlineCode",{parentName:"li"},"server-config.yaml")),(0,r.kt)("li",{parentName:"ul"},"Authorization callback URL: ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:8081/realms/stacklok/broker/github/endpoint")))),(0,r.kt)("li",{parentName:"ol"},'Select "Register Application"'),(0,r.kt)("li",{parentName:"ol"},"Generate a client secret")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"github oauth2 page",src:n(1965).Z,width:"1282",height:"2402"})),(0,r.kt)("h4",{id:"enable-github-login"},"Enable GitHub login"),(0,r.kt)("p",null,"Using the client ID and client secret you created above, enable GitHub login your local Keycloak instance by running the\nfollowing command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make KC_GITHUB_CLIENT_ID=<client_id> KC_GITHUB_CLIENT_SECRET=<client_secret> github-login\n")),(0,r.kt)("h2",{id:"openfga"},"OpenFGA"),(0,r.kt)("p",null,"Minder requires a OpenFGA instance to be running. You can install this locally, or use a container."),(0,r.kt)("p",null,"Should you install locally, you will need to set certain configuration options in your ",(0,r.kt)("inlineCode",{parentName:"p"},"server-config.yaml")," file, to reflect your local OpenFGA configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"authz:\n   api_url: http://localhost:8082\n   store_name: minder\n   auth:\n      # Set to token for production\n      method: none\n")),(0,r.kt)("h3",{id:"using-a-container-2"},"Using a container"),(0,r.kt)("p",null,"A simple way to get started is to use the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d openfga\n")),(0,r.kt)("h3",{id:"create-the-model"},"Create the model"),(0,r.kt)("p",null,"Once you have a running OpenFGA instance, you can create the model using the ",(0,r.kt)("inlineCode",{parentName:"p"},"minder-server")," CLI tool or via the ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make migrateup\n")),(0,r.kt)("p",null,"or:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"minder-server migrate up\n")),(0,r.kt)("h2",{id:"create-token-key-passphrase"},"Create token key passphrase"),(0,r.kt)("p",null,"Create a token key passphrase that is used when storing the provider's token in the database. "),(0,r.kt)("p",null,"The default configuration expects these keys to be in a directory named ",(0,r.kt)("inlineCode",{parentName:"p"},".ssh"),", relative to where you run the ",(0,r.kt)("inlineCode",{parentName:"p"},"minder-server")," binary.\nStart by creating the ",(0,r.kt)("inlineCode",{parentName:"p"},".ssh")," directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir .ssh\n")),(0,r.kt)("p",null,"You can create the passphrase using the ",(0,r.kt)("inlineCode",{parentName:"p"},"openssl")," CLI tool."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl rand -base64 32 > .ssh/token_key_passphrase\n")),(0,r.kt)("p",null,"If your key lives in a directory other than ",(0,r.kt)("inlineCode",{parentName:"p"},".ssh"),", you can specify the location of the key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"server-config.yaml")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'auth:\n   token_key: "./.ssh/token_key_passphrase"\n')),(0,r.kt)("h2",{id:"configure-the-repository-provider"},"Configure the Repository Provider"),(0,r.kt)("p",null,"At this point, you should have the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A running PostgreSQL database, with the ",(0,r.kt)("inlineCode",{parentName:"li"},"minder")," database created"),(0,r.kt)("li",{parentName:"ul"},"A running Keycloak instance"),(0,r.kt)("li",{parentName:"ul"},"A GitHub OAuth application configured for social login using Keycloak")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prior to running the application"),", you need to configure your repository provider. Currently, Minder only supports GitHub.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/run_minder_server/config_oauth"},"Configure Repository Provider")," for more information."),(0,r.kt)("h2",{id:"updating-the-webhook-configuration"},"Updating the Webhook Configuration"),(0,r.kt)("p",null,"Minder requires a webhook to be configured on the repository provider. Currently, Minder only supports GitHub.\nThe webhook allows GitHub to notify Minder when certain events occur in your repositories.\nTo configure the webhook, Minder needs to be accessible from the internet. If you are running the server locally, you\ncan use a service like ",(0,r.kt)("a",{parentName:"p",href:"https://ngrok.com/"},"ngrok")," to expose your local server to the internet."),(0,r.kt)("p",null,"Here are the steps to configure the webhook:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Expose your local server:")," If you are running the server locally, start ngrok or a similar service to expose your\nlocal server to the internet. Note down the URL provided by ngrok (it will look something like ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<random-hash>.ngrok.io"),").\nMake sure to expose the port that Minder is running on (by default, this is port ",(0,r.kt)("inlineCode",{parentName:"p"},"8080"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Update the Minder configuration:")," Open your ",(0,r.kt)("inlineCode",{parentName:"p"},"server-config.yaml")," file and update the ",(0,r.kt)("inlineCode",{parentName:"p"},"webhook-config")," section with\nthe ngrok URL Minder is running on. The ",(0,r.kt)("inlineCode",{parentName:"p"},"external_webhook_url")," should point to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v1/webhook/github"),"\nendpoint on your Minder server, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"external_ping_url")," should point to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v1/health")," endpoint. The ",(0,r.kt)("inlineCode",{parentName:"p"},"webhook_secret"),"\nshould match the secret configured in the GitHub webhook (under ",(0,r.kt)("inlineCode",{parentName:"p"},"github.payload_secret"),")."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'webhook-config:\n    external_webhook_url: "https://<ngrok-url>/api/v1/webhook/github"\n    external_ping_url: "https://<ngrok-url>/api/v1/health"\n    webhook_secret: "your-password" # Should match the secret configured in the GitHub webhook (github.payload_secret)\n')),(0,r.kt)("p",null,"After these steps, your Minder server should be ready to receive webhook events from GitHub, and add webhooks to repositories."),(0,r.kt)("h2",{id:"run-the-application"},"Run the application"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"minder-server serve\n")),(0,r.kt)("p",null,"If the application is configured using ",(0,r.kt)("inlineCode",{parentName:"p"},"docker compose"),", you need to modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"server-config.yaml")," file to reflect the database host url."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'database:\n  dbhost: "postgres" # Changed from localhost to postgres\n  dbport: 5432\n  dbuser: postgres\n  dbpass: postgres\n  dbname: minder\n  sslmode: disable\n')),(0,r.kt)("p",null,"After configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"server-config.yaml"),", you can run the application using ",(0,r.kt)("inlineCode",{parentName:"p"},"docker compose"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up -d minder\n")),(0,r.kt)("p",null,"The application will be available on ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080")," and gRPC on ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:8090"),"."))}c.isMDXComponent=!0},1965:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/minder-social-login-github-bbd3fc6f7764a859d6d8a637ca834d08.png"}}]);