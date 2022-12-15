"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[7796],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>b});var a=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r,a,o={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=a.createContext({}),p=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,n=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=p(r),b=o,d=u["".concat(s,".").concat(b)]||u[b]||m[b]||n;return r?a.createElement(d,l(l({ref:e},c),{},{components:r})):a.createElement(d,l({ref:e},c))}));function b(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=r.length,l=new Array(n);l[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var p=2;p<n;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7815:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var a=r(7462),o=(r(7294),r(3905));const n={title:"Blazor Bootstrap v1.3.0",authors:{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067"},tags:["v1.3.0","blazor","blazorbootstrap","blazor-bootstrap","blazorswitch"]},l=void 0,i={permalink:"/blog/2022/12/15/blazorbootstrap-1.3.0",editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/blog/blog/2022-12-15-blazorbootstrap-1.3.0.md",source:"@site/blog/2022-12-15-blazorbootstrap-1.3.0.md",title:"Blazor Bootstrap v1.3.0",description:"We are excited to release 1.3.0, with new Switch component, and more examples!!!",date:"2022-12-15T00:00:00.000Z",formattedDate:"December 15, 2022",tags:[{label:"v1.3.0",permalink:"/blog/tags/v-1-3-0"},{label:"blazor",permalink:"/blog/tags/blazor"},{label:"blazorbootstrap",permalink:"/blog/tags/blazorbootstrap"},{label:"blazor-bootstrap",permalink:"/blog/tags/blazor-bootstrap"},{label:"blazorswitch",permalink:"/blog/tags/blazorswitch"}],readingTime:.345,hasTruncateMarker:!0,authors:[{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067",imageURL:"https://avatars.githubusercontent.com/u/2337067"}],frontMatter:{title:"Blazor Bootstrap v1.3.0",authors:{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067",imageURL:"https://avatars.githubusercontent.com/u/2337067"},tags:["v1.3.0","blazor","blazorbootstrap","blazor-bootstrap","blazorswitch"]},nextItem:{title:"Blazor Bootstrap v1.2.0",permalink:"/blog/2022/12/12/blazorbootstrap-1.2.0"}},s={authorsImageUrls:[void 0]},p=[{value:"What&#39;s changed",id:"whats-changed",level:2},{value:"Demos site updates",id:"demos-site-updates",level:2},{value:"Links",id:"links",level:2}],c={toc:p};function m(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are excited to release 1.3.0, with new Switch component, and more examples!!!"),(0,o.kt)("b",null,"Blazor Switch component"),(0,o.kt)("img",{src:"https://i.imgur.com/ALKzreq.png",alt:"Blazor Bootstrap: Blazor Switch component"}),(0,o.kt)("h2",{id:"whats-changed"},"What's changed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"New ",(0,o.kt)("inlineCode",{parentName:"li"},"Switch")," component")),(0,o.kt)("h2",{id:"demos-site-updates"},"Demos site updates"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"New examples for 'Blazor Switch Component'"),(0,o.kt)("li",{parentName:"ul"},"Updates to 'Blazor Auto Complete Component' examples")),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://demos.getblazorbootstrap.com/"},"Demo Website - Blazor WebAssembly")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://demos.blazorbootstrap.com/"},"Demo Website - Blazor Server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://getblazorbootstrap.com/docs/forms/switch"},"Blazor Switch Documentation"))))}m.isMDXComponent=!0}}]);