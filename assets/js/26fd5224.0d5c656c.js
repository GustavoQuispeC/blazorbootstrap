"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[1682],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>m});var a=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function n(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var d=a.createContext({}),h=function(e){var t=a.useContext(d),l=t;return e&&(l="function"==typeof e?e(t):n(n({},t),e)),l},c=function(e){var t=h(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var l=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=h(l),m=r,u=s["".concat(d,".").concat(m)]||s[m]||p[m]||o;return l?a.createElement(u,n(n({ref:t},c),{},{components:l})):a.createElement(u,n({ref:t},c))}));function m(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=l.length,n=new Array(o);n[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,n[1]=i;for(var h=2;h<o;h++)n[h]=l[h];return a.createElement.apply(null,n)}return a.createElement.apply(null,l)}s.displayName="MDXCreateElement"},8936:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var a=l(7462),r=(l(7294),l(3905));const o={title:"Blazor Placeholder Component",description:"Use Blazor Bootstrap loading placeholders for your components or pages to indicate something may still be loading.",image:"https://i.imgur.com/Mw13qfX.png",sidebar_label:"Placeholders",sidebar_position:12},n="Blazor Placeholders",i={unversionedId:"components/placeholders",id:"components/placeholders",title:"Blazor Placeholder Component",description:"Use Blazor Bootstrap loading placeholders for your components or pages to indicate something may still be loading.",source:"@site/docs/components/placeholders.md",sourceDirName:"components",slug:"/components/placeholders",permalink:"/docs/components/placeholders",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/components/placeholders.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Blazor Placeholder Component",description:"Use Blazor Bootstrap loading placeholders for your components or pages to indicate something may still be loading.",image:"https://i.imgur.com/Mw13qfX.png",sidebar_label:"Placeholders",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Pagination",permalink:"/docs/components/pagination"},next:{title:"Preload",permalink:"/docs/components/preload"}},d={},h=[{value:"PlaceholderContainer Parameters",id:"placeholdercontainer-parameters",level:2},{value:"Placeholder Parameters",id:"placeholder-parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Placeholders",id:"placeholders",level:3},{value:"Width",id:"width",level:3},{value:"Color",id:"color",level:3},{value:"Sizing",id:"sizing",level:3},{value:"Animation",id:"animation",level:3}],c={toc:h};function p(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blazor-placeholders"},"Blazor Placeholders"),(0,r.kt)("p",null,"Use Blazor Bootstrap loading placeholders for your components or pages to indicate something may still be loading."),(0,r.kt)("h2",{id:"placeholdercontainer-parameters"},"PlaceholderContainer Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Descritpion"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Animation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PlaceholderAnimation")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the placeholder animation."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PlaceholderAnimation.Glow"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ChildContent"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RenderFragment")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the content to be rendered inside this."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"placeholder-parameters"},"Placeholder Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Descritpion"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Width"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PlaceholderWidth")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the placeholder width."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"PlaceholderWidth.Col1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Color"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PlaceholderColor")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the placeholder color."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"PlaceholderColor.None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Size"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PlaceholderSize")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets or sets the placeholder size."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"PlaceholderSize.None")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"placeholders"},"Placeholders"),(0,r.kt)("img",{src:"https://i.imgur.com/Mw13qfX.png",alt:"Placeholders - Example"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<PlaceholderContainer Animation="PlaceholderAnimation.Glow">\n    <Placeholder Width="PlaceholderWidth.Col7" />\n    <Placeholder Width="PlaceholderWidth.Col9" />\n    <Placeholder Width="PlaceholderWidth.Col6" />\n    <Placeholder Width="PlaceholderWidth.Col7" />\n</PlaceholderContainer>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/placeholders#examples"},"See demo here.")),(0,r.kt)("h3",{id:"width"},"Width"),(0,r.kt)("p",null,"You can change the width through ",(0,r.kt)("inlineCode",{parentName:"p"},"PlaceholderWidth"),", width utilities, or inline styles."),(0,r.kt)("img",{src:"https://i.imgur.com/JcLisSd.png",alt:"Placeholders - Width Example"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Placeholder Width="PlaceholderWidth.Col6" />\n<Placeholder Class="w-75" />\n<Placeholder Style="width: 25%;" />\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/placeholders#width"},"See demo here.")),(0,r.kt)("h3",{id:"color"},"Color"),(0,r.kt)("p",null,"By default, the placeholder uses currentColor. This can be overridden with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Color")," property of type enum."),(0,r.kt)("img",{src:"https://i.imgur.com/g8m05MQ.png",alt:"Placeholders - Color Example"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Placeholder Width="PlaceholderWidth.Col12" />\n<Placeholder Width="PlaceholderWidth.Col12" Color="PlaceholderColor.Primary" />\n<Placeholder Width="PlaceholderWidth.Col12" Color="PlaceholderColor.Secondary" />\n<Placeholder Width="PlaceholderWidth.Col12" Color="PlaceholderColor.Success" />\n<Placeholder Width="PlaceholderWidth.Col12" Color="PlaceholderColor.Danger" />\n<Placeholder Width="PlaceholderWidth.Col12" Color="PlaceholderColor.Warning" />\n<Placeholder Width="PlaceholderWidth.Col12" Color="PlaceholderColor.Info" />\n<Placeholder Width="PlaceholderWidth.Col12" Color="PlaceholderColor.Light" />\n<Placeholder Width="PlaceholderWidth.Col12" Color="PlaceholderColor.Dark" />\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/placeholders#color"},"See demo here.")),(0,r.kt)("h3",{id:"sizing"},"Sizing"),(0,r.kt)("p",null,"The size of placeholders are based on the typographic style of the parent element. Customize them with ",(0,r.kt)("inlineCode",{parentName:"p"},"Size")," property of type enum."),(0,r.kt)("img",{src:"https://i.imgur.com/udkkloE.png",alt:"Placeholders - Sizing Example"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Placeholder Width="PlaceholderWidth.Col12" />\n<Placeholder Width="PlaceholderWidth.Col12" Size="PlaceholderSize.Large" />\n<Placeholder Width="PlaceholderWidth.Col12" Size="PlaceholderSize.Small" />\n<Placeholder Width="PlaceholderWidth.Col12" Size="PlaceholderSize.ExtraSmall" />\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/placeholders#sizing"},"See demo here.")),(0,r.kt)("h3",{id:"animation"},"Animation"),(0,r.kt)("p",null,"Animate placeholders with ",(0,r.kt)("inlineCode",{parentName:"p"},"PlaceholderAnimation.Glow")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"PlaceholderAnimation.Wave")," to better convey the perception of something being actively loaded."),(0,r.kt)("img",{src:"https://i.imgur.com/loMuJzD.png",alt:"Placeholders - Animation Example"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<PlaceholderContainer Animation="PlaceholderAnimation.Glow">\n    <Placeholder Width="PlaceholderWidth.Col12" />\n    <Placeholder Width="PlaceholderWidth.Col12" Size="PlaceholderSize.Large" />\n    <Placeholder Width="PlaceholderWidth.Col12" Size="PlaceholderSize.Small" />\n    <Placeholder Width="PlaceholderWidth.Col12" Size="PlaceholderSize.ExtraSmall" />\n</PlaceholderContainer>\n\n<br />\n<br />\n\n<PlaceholderContainer Animation="PlaceholderAnimation.Wave">\n    <Placeholder Width="PlaceholderWidth.Col12" />\n    <Placeholder Width="PlaceholderWidth.Col12" Size="PlaceholderSize.Large" />\n    <Placeholder Width="PlaceholderWidth.Col12" Size="PlaceholderSize.Small" />\n    <Placeholder Width="PlaceholderWidth.Col12" Size="PlaceholderSize.ExtraSmall" />\n</PlaceholderContainer>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/placeholders#animation"},"See demo here.")))}p.isMDXComponent=!0}}]);