"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[85313],{3905:(t,e,o)=>{o.d(e,{Zo:()=>u,kt:()=>h});var n=o(67294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function l(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)o=l[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)o=l[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var s=n.createContext({}),c=function(t){var e=n.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):r(r({},e),t)),o},u=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var o=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=c(o),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return o?n.createElement(h,r(r({ref:e},u),{},{components:o})):n.createElement(h,r({ref:e},u))}));function h(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=o.length,r=new Array(l);r[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[p]="string"==typeof t?t:a,r[1]=i;for(var c=2;c<l;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},58034:(t,e,o)=>{o.d(e,{ZP:()=>p});var n=o(87462),a=o(67294),l=o(3905),r=o(72389);function i(t){let{children:e,fallback:o}=t;return(0,r.Z)()?a.createElement(a.Fragment,null,e?.()):o??null}o(73935);function s(){let t=document.getElementById("divCarbonAd");return t&&(t.replaceChildren(),setTimeout((()=>{let e=document.getElementById("_carbonads_js");e&&e.remove(),e=document.createElement("script"),e.async=!0,e.id="_carbonads_js",e.src=`//cdn.carbonads.com/carbon.js?serve=CWYICKJI&placement=docsblazorbootstrapcom&ms=${(new Date).getUTCMilliseconds()}`,e.type="text/javascript",e.onerror=function(){console.error(`An error occurred while loading the script: ${source}`)},e&&t.appendChild(e)}),5e3)),null}const c={toc:[]},u="wrapper";function p(t){let{components:e,...o}=t;return(0,l.kt)(u,(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("div",{id:"divCarbonAd"}),(0,l.kt)(i,{fallback:null,mdxType:"BrowserOnly"},(()=>(0,l.kt)(s,{mdxType:"RenderAd"}))))}p.isMDXComponent=!0},59279:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=o(87462),a=(o(67294),o(3905)),l=o(58034);const r={title:"Blazor Callout Component",description:"Blazor Bootstrap callout component provides content presentation in a visually distinct manner.",image:"https://i.imgur.com/vmibzEu.png",sidebar_label:"Callout",sidebar_position:6},i="Blazor Callout",s={unversionedId:"components/callout",id:"components/callout",title:"Blazor Callout Component",description:"Blazor Bootstrap callout component provides content presentation in a visually distinct manner.",source:"@site/docs/05-components/callout.mdx",sourceDirName:"05-components",slug:"/components/callout",permalink:"/components/callout",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/05-components/callout.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Blazor Callout Component",description:"Blazor Bootstrap callout component provides content presentation in a visually distinct manner.",image:"https://i.imgur.com/vmibzEu.png",sidebar_label:"Callout",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Buttons",permalink:"/components/buttons"},next:{title:"Card",permalink:"/components/card"}},c={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Callout",id:"callout",level:3},{value:"Custom callout heading",id:"custom-callout-heading",level:3},{value:"Large text",id:"large-text",level:3}],p={toc:u},d="wrapper";function m(t){let{components:e,...o}=t;return(0,a.kt)(d,(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blazor-callout"},"Blazor Callout"),(0,a.kt)("p",null,"Blazor Bootstrap callout component provides content presentation in a visually distinct manner."),(0,a.kt)(l.ZP,{mdxType:"CarbonAd"}),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ChildContent"),(0,a.kt)("td",{parentName:"tr",align:"left"},"RenderFragment"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specifies the content to be rendered inside this.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Heading"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the callout heading.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("td",{parentName:"tr",align:"left"},"enum"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"CalloutType.Default")),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"Use ",(0,a.kt)("inlineCode",{parentName:"td"},"CalloutType.Default")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"CalloutType.Info")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"CalloutType.Warning")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"CalloutType.Danger")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"CalloutType.Tip"))))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"callout"},"Callout"),(0,a.kt)("img",{src:"https://i.imgur.com/vmibzEu.png",alt:"Blazor Bootstrap: Callout Component - Examples"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{1,5,9,13,17} showLineNumbers","{1,5,9,13,17}":!0,showLineNumbers:!0},'<Callout>\n    <strong>This is an default callout</strong>. Example text to show it in action. See <a href="https://getblazorbootstrap.com/docs/components/callout">callout documentation</a>.\n</Callout>\n\n<Callout Type="CalloutType.Danger">\n    <strong>This is an danger callout</strong>. Example text to show it in action. See <a href="https://getblazorbootstrap.com/docs/components/callout">callout documentation</a>.\n</Callout>\n\n<Callout Type="CalloutType.Warning">\n    <strong>This is an warning callout</strong>. Example text to show it in action. See <a href="https://getblazorbootstrap.com/docs/components/callout">callout documentation</a>.\n</Callout>\n\n<Callout Type="CalloutType.Info">\n    <strong>This is an info callout</strong>. Example text to show it in action. See <a href="https://getblazorbootstrap.com/docs/components/callout">callout documentation</a>.\n</Callout>\n\n<Callout Type="CalloutType.Tip">\n    <strong>This is an tip callout</strong>. Example text to show it in action. See <a href="https://getblazorbootstrap.com/docs/components/callout">callout documentation</a>.\n</Callout>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/callout#examples"},"See callout default demo here.")),(0,a.kt)("h3",{id:"custom-callout-heading"},"Custom callout heading"),(0,a.kt)("img",{src:"https://i.imgur.com/gaZkJqo.png",alt:"Blazor Bootstrap: Callout Component - Custom callout heading"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{1,5,9,13,17} showLineNumbers","{1,5,9,13,17}":!0,showLineNumbers:!0},'<Callout Heading="Important">\n    <strong>This is an default callout</strong>. Example text to show it in action. See <a href="https://getblazorbootstrap.com/docs/components/callout">callout documentation</a>.\n</Callout>\n\n<Callout Type="CalloutType.Danger" Heading="Important">\n    <strong>This is an danger callout</strong>. Example text to show it in action. See <a href="https://getblazorbootstrap.com/docs/components/callout">callout documentation</a>.\n</Callout>\n\n<Callout Type="CalloutType.Warning" Heading="Important">\n    <strong>This is an warning callout</strong>. Example text to show it in action. See <a href="https://getblazorbootstrap.com/docs/components/callout">callout documentation</a>.\n</Callout>\n\n<Callout Type="CalloutType.Info" Heading="Important">\n    <strong>This is an info callout</strong>. Example text to show it in action. See <a href="https://getblazorbootstrap.com/docs/components/callout">callout documentation</a>.\n</Callout>\n\n<Callout Type="CalloutType.Tip" Heading="Important">\n    <strong>This is an tip callout</strong>. Example text to show it in action. See <a href="https://getblazorbootstrap.com/docs/components/callout">callout documentation</a>.\n</Callout>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/callout#custom-callout-heading"},"See callout danger demo here.")),(0,a.kt)("h3",{id:"large-text"},"Large text"),(0,a.kt)("img",{src:"https://i.imgur.com/m4LeerM.png",alt:"Blazor Bootstrap: Callout Component - Large text"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Callout>\n    <h4>Conveying meaning to assistive technologies</h4>\n    <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies \u2013 such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code>.visually-hidden</code> class.</p>\n</Callout>\n\n<Callout Type="CalloutType.Danger">\n    <h4>Conveying meaning to assistive technologies</h4>\n    <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies \u2013 such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code>.visually-hidden</code> class.</p>\n</Callout>\n\n<Callout Type="CalloutType.Warning">\n    <h4>Conveying meaning to assistive technologies</h4>\n    <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies \u2013 such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code>.visually-hidden</code> class.</p>\n</Callout>\n\n<Callout Type="CalloutType.Info">\n    <h4>Conveying meaning to assistive technologies</h4>\n    <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies \u2013 such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code>.visually-hidden</code> class.</p>\n</Callout>\n\n<Callout Type="CalloutType.Tip">\n    <h4>Conveying meaning to assistive technologies</h4>\n    <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies \u2013 such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code>.visually-hidden</code> class.</p>\n</Callout>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/callout#large-text"},"See callout warning demo here.")))}m.isMDXComponent=!0}}]);