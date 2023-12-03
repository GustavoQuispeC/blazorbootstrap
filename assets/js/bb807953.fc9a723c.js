"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[24918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(n),u=l,k=p["".concat(d,".").concat(u)]||p[u]||c[u]||o;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:l,r[1]=i;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58034:(e,t,n)=>{n.d(t,{ZP:()=>p});var a=n(87462),l=n(67294),o=n(3905),r=n(72389);function i(e){let{children:t,fallback:n}=e;return(0,r.Z)()?l.createElement(l.Fragment,null,t?.()):n??null}n(73935);function d(){let e=document.getElementById("divCarbonAd");return e&&(e.replaceChildren(),setTimeout((()=>{let t=document.getElementById("_carbonads_js");t&&t.remove(),t=document.createElement("script"),t.async=!0,t.id="_carbonads_js",t.src=`//cdn.carbonads.com/carbon.js?serve=CWYICKJI&placement=docsblazorbootstrapcom&ms=${(new Date).getUTCMilliseconds()}`,t.type="text/javascript",t.onerror=function(){console.error(`An error occurred while loading the script: ${source}`)},t&&e.appendChild(t)}),5e3)),null}const s={toc:[]},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{id:"divCarbonAd"}),(0,o.kt)(i,{fallback:null,mdxType:"BrowserOnly"},(()=>(0,o.kt)(d,{mdxType:"RenderAd"}))))}p.isMDXComponent=!0},32344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>m});var a=n(87462),l=(n(67294),n(3905)),o=n(58034);const r={title:"Blazor Modal Component",description:"Use Blazor Bootstrap modal component to add dialogs to your site for lightboxes, user notifications, or completely custom content.",image:"https://i.imgur.com/tLiaEs6.jpg",sidebar_label:"Modal",sidebar_position:13},i="Blazor Modal",d={unversionedId:"components/modal",id:"components/modal",title:"Blazor Modal Component",description:"Use Blazor Bootstrap modal component to add dialogs to your site for lightboxes, user notifications, or completely custom content.",source:"@site/docs/05-components/modal.mdx",sourceDirName:"05-components",slug:"/components/modal",permalink:"/components/modal",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/05-components/modal.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Blazor Modal Component",description:"Use Blazor Bootstrap modal component to add dialogs to your site for lightboxes, user notifications, or completely custom content.",image:"https://i.imgur.com/tLiaEs6.jpg",sidebar_label:"Modal",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Grid",permalink:"/components/grid"},next:{title:"Offcanvas",permalink:"/components/offcanvas"}},s={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"Callback Events",id:"callback-events",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Examples",id:"examples",level:2},{value:"Modal",id:"modal",level:3},{value:"Dynamic component as modal",id:"dynamic-component-as-modal",level:3},{value:"Pass event callbacks to a dynamic component",id:"pass-event-callbacks-to-a-dynamic-component",level:3},{value:"Static backdrop",id:"static-backdrop",level:3},{value:"Scrolling long content",id:"scrolling-long-content",level:3},{value:"Vertically centered",id:"vertically-centered",level:3},{value:"Vertically centered and scrollable",id:"vertically-centered-and-scrollable",level:3},{value:"Optional sizes",id:"optional-sizes",level:3},{value:"Fullscreen Modal",id:"fullscreen-modal",level:3},{value:"Callback Events",id:"callback-events-1",level:3}],p={toc:m},c="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"blazor-modal"},"Blazor Modal"),(0,l.kt)("p",null,"Use Blazor Bootstrap modal component to add dialogs to your site for lightboxes, user notifications, or completely custom content."),(0,l.kt)(o.ZP,{mdxType:"CarbonAd"}),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Added Version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BodyCssClass"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Additional body CSS class."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BodyTemplate"),(0,l.kt)("td",{parentName:"tr",align:null},"RenderFragment"),(0,l.kt)("td",{parentName:"tr",align:null},"Body template."),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ChildContent"),(0,l.kt)("td",{parentName:"tr",align:null},"RenderFragment"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the content to be rendered inside the alert."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CloseOnEscape"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates whether the modal closes when escape key is pressed."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DialogCssClass"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Additional CSS class for the dialog (div.modal-dialog element)."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FooterCssClass"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Footer css class."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FooterTemplate"),(0,l.kt)("td",{parentName:"tr",align:null},"RenderFragment"),(0,l.kt)("td",{parentName:"tr",align:null},"Footer template."),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fullscreen"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ModalFullscreen")),(0,l.kt)("td",{parentName:"tr",align:null},"Fullscreen behavior of the modal."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ModalFullscreen.Disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HeaderTemplate"),(0,l.kt)("td",{parentName:"tr",align:null},"RenderFragment"),(0,l.kt)("td",{parentName:"tr",align:null},"Header template."),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HeaderCssClass"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Additional header CSS class."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IsScrollable"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows modal body scroll."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IsServiceModal"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates whether the modal is related to a modal service or not."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"1.9.4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IsVerticallyCentered"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Shows the modal vertically in the center."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ModalType"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ModalType")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets or sets the modal type."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ModalType.Light")),(0,l.kt)("td",{parentName:"tr",align:null},"1.9.5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Size"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ModalSize")),(0,l.kt)("td",{parentName:"tr",align:null},"Size of the modal."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ModalSize.Regular")),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ShowCloseButton"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates whether the modal shows close button in header."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TabIndex"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets or sets the tab index."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"1.6.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Title"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UseStaticBackdrop"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates whether the modal uses a static backdrop."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Added Version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ShowAsync"),(0,l.kt)("td",{parentName:"tr",align:null},"Opens a modal."),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ShowAsync<T",">","(string title, Dictionary<string, object",">"," parameters = null)"),(0,l.kt)("td",{parentName:"tr",align:null},"Opens a modal. T is component."),(0,l.kt)("td",{parentName:"tr",align:null},"1.4.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HideAsync"),(0,l.kt)("td",{parentName:"tr",align:null},"Hides a modal."),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")))),(0,l.kt)("admonition",{title:"Asynchronous methods and transitions",type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"All API methods are ",(0,l.kt)("strong",{parentName:"p"},"asynchronous")," and start a ",(0,l.kt)("strong",{parentName:"p"},"transition"),". They return to the caller as soon as the transition is started but ",(0,l.kt)("strong",{parentName:"p"},"before it ends"),". In addition, a method call on a ",(0,l.kt)("strong",{parentName:"p"},"transitioning component will be ignored"),".")),(0,l.kt)("h2",{id:"callback-events"},"Callback Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OnShowing"),(0,l.kt)("td",{parentName:"tr",align:null},"This event fires immediately when the show instance method is called.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OnShown"),(0,l.kt)("td",{parentName:"tr",align:null},"This event is fired when an offcanvas element has been made visible to the user (will wait for CSS transitions to complete).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OnHiding"),(0,l.kt)("td",{parentName:"tr",align:null},"This event is fired immediately when the hide method has been called.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OnHidden"),(0,l.kt)("td",{parentName:"tr",align:null},"This event is fired when an offcanvas element has been hidden from the user (will wait for CSS transitions to complete).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OnHidePrevented"),(0,l.kt)("td",{parentName:"tr",align:null},"This event is fired when the modal is shown, its backdrop is static and a click outside the modal or an escape key press is performed with the keyboard option or data-bs-keyboard set to false.")))),(0,l.kt)("h2",{id:"how-it-works"},"How it works"),(0,l.kt)("p",null,"Before getting started with BlazorBootstrap's modal component, be sure to read the following as our menu options have recently changed."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Modals are built with HTML, CSS, and JavaScript. They're positioned over everything else in the document and remove scroll from the ",(0,l.kt)("inlineCode",{parentName:"li"},"<body>")," so that modal content scrolls instead."),(0,l.kt)("li",{parentName:"ul"},'Clicking on the modal "backdrop" will automatically close the modal.'),(0,l.kt)("li",{parentName:"ul"},"BlazorBootstrap only supports one modal window at a time. Nested modals aren't supported as we believe them to be poor user experiences.")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"modal"},"Modal"),(0,l.kt)("p",null,"Clicking the ",(0,l.kt)("strong",{parentName:"p"},"Show Modal")," button below, the modal will slide down and fade in from the top of the page."),(0,l.kt)("img",{src:"https://i.imgur.com/aWbURjD.jpg",alt:"Blazor Modal Component"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Modal @ref="modal" Title="Modal title">\n    <BodyTemplate>\n        Modal body text goes here.\n    </BodyTemplate>\n    <FooterTemplate>\n        <Button Color="ButtonColor.Secondary" @onclick="OnHideModalClick">Close</Button>\n        <Button Color="ButtonColor.Primary">Save changes</Button>\n    </FooterTemplate>\n</Modal>\n\n<Button Color="ButtonColor.Primary" @onclick="OnShowModalClick">Show Modal</Button>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{2,6,11} showLineNumbers","{2,6,11}":!0,showLineNumbers:!0},"@code {\n    private Modal modal;\n\n    private async Task OnShowModalClick()\n    {\n        await modal?.ShowAsync();\n    }\n\n    private async Task OnHideModalClick()\n    {\n        await modal?.HideAsync();\n    }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/modals#examples"},"See demo here.")),(0,l.kt)("h3",{id:"dynamic-component-as-modal"},"Dynamic component as modal"),(0,l.kt)("p",null,"Render different components dynamically within the modal without iterating through possible types or using conditional logic.\nIf dynamically-rendered components have component parameters, pass them as an ",(0,l.kt)("inlineCode",{parentName:"p"},"IDictionary"),". The ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," is the parameter's name, and the ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," is the parameter's value."),(0,l.kt)("img",{src:"https://i.imgur.com/pzO4jaE.png",alt:"Blazor Modal Component - Dynamic component as modal"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{1,11-13} showLineNumbers","{1,11-13}":!0,showLineNumbers:!0},'<Modal @ref="modal" />\n\n<Button Color="ButtonColor.Primary" @onclick="OnShowModalClick">Show Employee Component</Button>\n\n@code {\n    private Modal modal = default!;\n    private string? message;\n\n    private async Task OnShowModalClick()\n    {\n        var parameters = new Dictionary<string, object>();\n        parameters.Add("EmployeeId", 321);\n        await modal.ShowAsync<EmployeeDemoComponent1>(title: "Employee Details", parameters: parameters);\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"EmployeeDemoComponent1.razor")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<div class="row">\n    <div class="col-5 col-md-3 text-end">Employee Id :</div>\n    <div class="col-7 col-md-9">@EmployeeId</div>\n</div>\n<div class="row">\n    <div class="col-5 col-md-3 text-end">First Name :</div>\n    <div class="col-7 col-md-9">@employee.FirstName</div>\n</div>\n<div class="row">\n    <div class="col-5 col-md-3 text-end">Last Name :</div>\n    <div class="col-7 col-md-9">@employee.LastName</div>\n</div>\n\n@code {\n    private Employee employee;\n\n    [Parameter] public int EmployeeId { get; set; }\n\n    protected override void OnInitialized()\n    {\n        // get employee with {EmployeeId} from DB\n\n        employee = new Employee { FirstName = "Vikram", LastName = "Reddy" };\n\n        base.OnInitialized();\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/modals#dynamic-component-as-modal"},"See demo here.")),(0,l.kt)("h3",{id:"pass-event-callbacks-to-a-dynamic-component"},"Pass event callbacks to a dynamic component"),(0,l.kt)("p",null,"Event callbacks ",(0,l.kt)("inlineCode",{parentName:"p"},"(EventCallback)")," can be passed in its parameter dictionary.\nIn the following parent component example, the ",(0,l.kt)("inlineCode",{parentName:"p"},"ShowDTMessage")," method assigns a string with the current time to ",(0,l.kt)("inlineCode",{parentName:"p"},"message"),", and the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"message")," is rendered. The parent component passes the callback method, ",(0,l.kt)("inlineCode",{parentName:"p"},"ShowDTMessage")," in the parameter dictionary:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"string")," key is the callback method's name, ",(0,l.kt)("inlineCode",{parentName:"li"},"OnClickCallback"),"."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"object")," value is created by ",(0,l.kt)("inlineCode",{parentName:"li"},"EventCallbackFactory.Create")," for the parent callback method, ",(0,l.kt)("inlineCode",{parentName:"li"},"ShowDTMessage"),".")),(0,l.kt)("img",{src:"https://i.imgur.com/dQMxYxw.png",alt:"Blazor Modal Component - Pass event callbacks to a dynamic component"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Modal @ref="modal" />\n\n<Button Color="ButtonColor.Primary" @onclick="OnShowModalClick">Show Employee Component</Button>\n\n<div class="mt-3">\n    @message\n</div>\n\n@code {\n    private Modal modal = default!;\n    private string? message;\n\n    private async Task OnShowModalClick()\n    {\n        var parameters = new Dictionary<string, object>();\n        parameters.Add("EmployeeId", 322);\n        parameters.Add("OnclickCallback", EventCallback.Factory.Create<MouseEventArgs>(this, ShowDTMessage));\n        await modal.ShowAsync<EmployeeDemoComponent2>(title: "Employee Details", parameters: parameters);\n    }\n\n    private void ShowDTMessage(MouseEventArgs e) => message = $"The current DT is: {DateTime.Now}.";\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"EmployeeDemoComponent2.razor")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<div class="row">\n    <div class="col-5 col-md-3 text-end">Employee Id :</div>\n    <div class="col-7 col-md-9">@EmployeeId</div>\n</div>\n<div class="row">\n    <div class="col-5 col-md-3 text-end">First Name :</div>\n    <div class="col-7 col-md-9">@employee.FirstName</div>\n</div>\n<div class="row">\n    <div class="col-5 col-md-3 text-end">Last Name :</div>\n    <div class="col-7 col-md-9">@employee.LastName</div>\n</div>\n\n<Button class="mt-3" Color="ButtonColor.Success" Type="ButtonType.Button" @onclick="OnClickCallback">\n    Trigger a Parent component method\n</Button>\n\n@code {\n    private Employee employee;\n\n    [Parameter] public int EmployeeId { get; set; }\n\n    [Parameter] public EventCallback<MouseEventArgs> OnClickCallback { get; set; }\n\n    protected override void OnInitialized()\n    {\n        // get employee with {EmployeeId} from DB\n\n        employee = new Employee { FirstName = "Sagar", LastName = "Reddy" };\n\n        base.OnInitialized();\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/modals#pass-event-callbacks-to-a-dynamic-component"},"See demo here.")),(0,l.kt)("h3",{id:"static-backdrop"},"Static backdrop"),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"UseStaticBackdrop")," is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", the modal will not close when clicking outside it. ",(0,l.kt)("inlineCode",{parentName:"p"},"CloseOnEscape")," should also be set to ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," to ignore the effect of pressing the Esc key and mimic the original behaviour of Bootstrap modal. Click the button below to try it."),(0,l.kt)("img",{src:"https://i.imgur.com/NeSfMIn.jpg",alt:"Blazor Modal Component - Static backdrop"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{1} showLineNumbers","{1}":!0,showLineNumbers:!0},'<Modal @ref="modal" title="Modal title" UseStaticBackdrop="true" CloseOnEscape="false">\n    <BodyTemplate>\n        I will not close if you click outside me. Don\'t even try to press escape key.\n    </BodyTemplate>\n    <FooterTemplate>\n        <Button Color="ButtonColor.Secondary" @onclick="OnHideModalClick">Close</Button>\n        <Button Color="ButtonColor.Primary">Understood</Button>\n    </FooterTemplate>\n</Modal>\n\n<Button Color="ButtonColor.Primary" @onclick="OnShowModalClick">Launch static backdrop modal</Button>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"@code {\n    private Modal modal;\n\n    private async Task OnShowModalClick()\n    {\n        await modal?.ShowAsync();\n    }\n\n    private async Task OnHideModalClick()\n    {\n        await modal?.HideAsync();\n    }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/modals#static-backdrop"},"See demo here.")),(0,l.kt)("h3",{id:"scrolling-long-content"},"Scrolling long content"),(0,l.kt)("p",null,"When modals become too long for the user\u2019s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean."),(0,l.kt)("img",{src:"https://i.imgur.com/7lrxeON.jpg",alt:"Blazor Modal Component - Scrolling long content"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{1} showLineNumbers","{1}":!0,showLineNumbers:!0},'<Modal @ref="modal" title="Modal title" IsScrollable="true">\n    <BodyTemplate>\n        <p style="margin-bottom: 100vh;">This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text the modal, we use an inline style set a minimum height, thereby extending the length of the overall modal and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport, scrolling will move the modal as needed.</p>\n        <p>This content should appear at the bottom after you scroll.</p>\n    </BodyTemplate>\n    <FooterTemplate>\n        <Button Color="ButtonColor.Secondary" @onclick="OnHideModalClick">Close</Button>\n        <Button Color="ButtonColor.Primary">Save changes</Button>\n    </FooterTemplate>\n</Modal>\n\n<Button Color="ButtonColor.Primary" @onclick="OnShowModalClick">Launch demo modal</Button>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"@code {\n    private Modal modal;\n\n    private async Task OnShowModalClick()\n    {\n        await modal?.ShowAsync();\n    }\n\n    private async Task OnHideModalClick()\n    {\n        await modal?.HideAsync();\n    }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/modals#scrolling-long-content"},"See demo here.")),(0,l.kt)("h3",{id:"vertically-centered"},"Vertically centered"),(0,l.kt)("p",null,"Add ",(0,l.kt)("inlineCode",{parentName:"p"},'IsVerticallyCentered="true"')," to vertically center the modal."),(0,l.kt)("img",{src:"https://i.imgur.com/tLiaEs6.jpg",alt:"Blazor Modal Component - Vertically centered"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{1} showLineNumbers","{1}":!0,showLineNumbers:!0},'<Modal @ref="modal" title="Modal title" IsVerticallyCentered="true">\n    <BodyTemplate>\n        This is a vertically centered modal.\n    </BodyTemplate>\n    <FooterTemplate>\n        <Button Color="ButtonColor.Secondary" @onclick="OnHideModalClick">Close</Button>\n        <Button Color="ButtonColor.Primary">Save changes</Button>\n    </FooterTemplate>\n</Modal>\n\n<Button Color="ButtonColor.Primary" @onclick="OnShowModalClick">Vertically centered modal</Button>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"@code {\n    private Modal modal;\n\n    private async Task OnShowModalClick()\n    {\n        await modal?.ShowAsync();\n    }\n\n    private async Task OnHideModalClick()\n    {\n        await modal?.HideAsync();\n    }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/modals#vertically-centered"},"See demo here.")),(0,l.kt)("h3",{id:"vertically-centered-and-scrollable"},"Vertically centered and scrollable"),(0,l.kt)("img",{src:"https://i.imgur.com/n0m4Fhq.jpg",alt:"Blazor Modal Component - Vertically centered and scrollable"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{1} showLineNumbers","{1}":!0,showLineNumbers:!0},'<Modal @ref="modal" title="Modal title" IsVerticallyCentered="true" IsScrollable="true">\n    <BodyTemplate>\n        <p style="margin-bottom: 100vh;">This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text the modal, we use an inline style set a minimum height, thereby extending the length of the overall modal and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport, scrolling will move the modal as needed.</p>\n        <p>This content should appear at the bottom after you scroll.</p>\n    </BodyTemplate>\n    <FooterTemplate>\n        <Button Color="ButtonColor.Secondary" @onclick="OnHideModalClick">Close</Button>\n        <Button Color="ButtonColor.Primary">Save changes</Button>\n    </FooterTemplate>\n</Modal>\n\n<Button Color="ButtonColor.Primary" @onclick="OnShowModalClick">Vertically centered scrollable modal</Button>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"@code {\n    private Modal modal;\n\n    private async Task OnShowModalClick()\n    {\n        await modal?.ShowAsync();\n    }\n\n    private async Task OnHideModalClick()\n    {\n        await modal?.HideAsync();\n    }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/modals#vertically-centered"},"See demo here.")),(0,l.kt)("h3",{id:"optional-sizes"},"Optional sizes"),(0,l.kt)("p",null,"Modals have three optional sizes. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports."),(0,l.kt)("img",{src:"https://i.imgur.com/5vKfJQC.jpg",alt:"Blazor Modal Component - Optional sizes"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{1,4,7} showLineNumbers","{1,4,7}":!0,showLineNumbers:!0},'<Modal @ref="xlModal" title="Extra large modal" Size="ModalSize.ExtraLarge">\n    <BodyTemplate>...</BodyTemplate>\n</Modal>\n<Modal @ref="lgModal" title="Large modal" Size="ModalSize.Large">\n    <BodyTemplate>...</BodyTemplate>\n</Modal>\n<Modal @ref="smModal" title="Small modal" Size="ModalSize.Small">\n    <BodyTemplate>...</BodyTemplate>\n</Modal>\n\n<Button Color="ButtonColor.Primary" @onclick="() => xlModal?.ShowAsync()">Extra large modal</Button>\n<Button Color="ButtonColor.Primary" @onclick="() => lgModal?.ShowAsync()">Large modal</Button>\n<Button Color="ButtonColor.Primary" @onclick="() => smModal?.ShowAsync()">Small modal</Button>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"@code {\n    private Modal xlModal;\n    private Modal lgModal;\n    private Modal smModal;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/modals#optional-sizes"},"See demo here.")),(0,l.kt)("h3",{id:"fullscreen-modal"},"Fullscreen Modal"),(0,l.kt)("img",{src:"https://i.imgur.com/3dFUzMz.jpg",alt:"Blazor Modal Component - Fullscreen Modal"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{1,4,7,10,13,16} showLineNumbers","{1,4,7,10,13,16}":!0,showLineNumbers:!0},'<Modal @ref="modal" title="Full screen" Fullscreen="ModalFullscreen.Always">\n    <BodyTemplate>...</BodyTemplate>\n</Modal>\n<Modal @ref="smModal" title="Full screen below sm" Fullscreen="ModalFullscreen.SmallDown">\n    <BodyTemplate>...</BodyTemplate>\n</Modal>\n<Modal @ref="mdModal" title="Full screen below md" Fullscreen="ModalFullscreen.MediumDown">\n    <BodyTemplate>...</BodyTemplate>\n</Modal>\n<Modal @ref="lgModal" title="Full screen below lg" Fullscreen="ModalFullscreen.LargeDown">\n    <BodyTemplate>...</BodyTemplate>\n</Modal>\n<Modal @ref="xlModal" title="Full screen below xl" Fullscreen="ModalFullscreen.ExtraLargeDown">\n    <BodyTemplate>...</BodyTemplate>\n</Modal>\n<Modal @ref="xxlModal" title="Full screen below xxl" Fullscreen="ModalFullscreen.ExtraExtraLargeDown">\n    <BodyTemplate>...</BodyTemplate>\n</Modal>\n\n<Button Color="ButtonColor.Primary" @onclick="() => modal?.ShowAsync()">Full screen</Button>\n<Button Color="ButtonColor.Primary" @onclick="() => smModal?.ShowAsync()">Full screen below sm</Button>\n<Button Color="ButtonColor.Primary" @onclick="() => mdModal?.ShowAsync()">Full screen below md</Button>\n<Button Color="ButtonColor.Primary" @onclick="() => lgModal?.ShowAsync()">Full screen below lg</Button>\n<Button Color="ButtonColor.Primary" @onclick="() => xlModal?.ShowAsync()">Full screen below xl</Button>\n<Button Color="ButtonColor.Primary" @onclick="() => xxlModal?.ShowAsync()">Full screen below xxl</Button>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"@code {\n    private Modal modal;\n    private Modal smModal;\n    private Modal mdModal;\n    private Modal lgModal;\n    private Modal xlModal;\n    private Modal xxlModal;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/modals#fullscreen-modal"},"See demo here.")),(0,l.kt)("h3",{id:"callback-events-1"},"Callback Events"),(0,l.kt)("p",null,"BlazorBootstrap's modal class exposes a few events for hooking into modal functionality."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{3-7} showLineNumbers","{3-7}":!0,showLineNumbers:!0},'<Modal @ref="modal"\n       title="Modal title"\n       OnShowing="OnModalShowingAsync"\n       OnShown="OnModalShownAsync"\n       OnHiding="OnModalHidingAsync"\n       OnHidden="OnModalHiddenAsync"\n       OnHidePrevented="OnModalHidePreventedAsync">\n\n    <BodyTemplate>\n        Modal body text goes here.\n    </BodyTemplate>\n\n    <FooterTemplate>\n        <Button Color="ButtonColor.Secondary" @onclick="OnHideModalClick">Close</Button>\n        <Button Color="ButtonColor.Primary">Save changes</Button>\n    </FooterTemplate>\n\n</Modal>\n\n<Button Color="ButtonColor.Primary" @onclick="OnShowModalClick">Show Modal</Button>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'@code {\n    private Modal modal;\n\n    private async Task OnModalShowingAsync()\n    {\n        await Task.Run(() => { Console.WriteLine("Event: Showing"); });\n    }\n\n    private async Task OnModalShownAsync()\n    {\n        await Task.Run(() => { Console.WriteLine("Event: Show"); });\n    }\n\n    private async Task OnModalHidingAsync()\n    {\n        await Task.Run(() => { Console.WriteLine("Event: Hiding"); });\n    }\n\n    private async Task OnModalHiddenAsync()\n    {\n        await Task.Run(() => { Console.WriteLine("Event: Hide"); });\n    }\n\n    private async Task OnModalHidePreventedAsync()\n    {\n        await Task.Run(() => { Console.WriteLine("Event: Hide Prevented"); });\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/modals#events"},"See demo here.")))}u.isMDXComponent=!0}}]);