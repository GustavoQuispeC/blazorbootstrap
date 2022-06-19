"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[8351],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},b=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,i=t.originalType,s=t.parentName,m=r(t,["components","mdxType","originalType","parentName"]),b=p(n),d=l,h=b["".concat(s,".").concat(d)]||b[d]||c[d]||i;return n?a.createElement(h,o(o({ref:e},m),{},{components:n})):a.createElement(h,o({ref:e},m))}));function d(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=n.length,o=new Array(i);o[0]=b;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r.mdxType="string"==typeof t?t:l,o[1]=r;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2227:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return c}});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),o=["components"],r={sidebar_label:"Tabs",sidebar_position:12},s="Tabs",p={unversionedId:"components/tabs",id:"components/tabs",title:"Tabs",description:"Documentation and examples for how to use BlazorBootstrap's Tabs components.",source:"@site/docs/components/tabs.md",sourceDirName:"components",slug:"/components/tabs",permalink:"/docs/components/tabs",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/components/tabs.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_label:"Tabs",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Preload",permalink:"/docs/components/preload"},next:{title:"Toasts",permalink:"/docs/components/toasts"}},m={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Tabs",id:"tabs-1",level:3},{value:"Fade effect",id:"fade-effect",level:3},{value:"Title with icon",id:"title-with-icon",level:3},{value:"Disable Tab",id:"disable-tab",level:3},{value:"Pills",id:"pills",level:3},{value:"Callback Events",id:"callback-events",level:3},{value:"Tab",id:"tab",level:2},{value:"Parameters",id:"parameters-1",level:3}],b={toc:c};function d(t){var e=t.components,n=(0,l.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tabs"},"Tabs"),(0,i.kt)("p",null,"Documentation and examples for how to use BlazorBootstrap's ",(0,i.kt)("code",null,"Tabs")," components."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Descritpion"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ChildContent"),(0,i.kt)("td",{parentName:"tr",align:null},"RenderFragment"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the content to be rendered inside this."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EnableFadeEffect"),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets the tabs fade effect."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NavStyle"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NavStyle")),(0,i.kt)("td",{parentName:"tr",align:null},"Get or sets the nav style."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NavStyle.Tabs"))))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"tabs-1"},"Tabs"),(0,i.kt)("img",{src:"https://i.imgur.com/ranwriJ.png",alt:"Tabs - Examples"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml"},'<Tabs>\n    <Tab Title="Home" IsActive="true">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Home tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Profile">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Profile tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Contact">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Contact tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n</Tabs>\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/tabs#examples"},"See demo here.")),(0,i.kt)("h3",{id:"fade-effect"},"Fade effect"),(0,i.kt)("p",null,"To make tabs fade in, add ",(0,i.kt)("inlineCode",{parentName:"p"},'EnableFadeEffect="true"'),". The first tab pane must also have ",(0,i.kt)("inlineCode",{parentName:"p"},'IsActive="true"')," to make the initial content visible."),(0,i.kt)("img",{src:"https://i.imgur.com/ranwriJ.png",alt:"Tabs - Fade effect"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{1, 2}","{1,":!0,"2}":!0},'<Tabs EnableFadeEffect="true">\n    <Tab Title="Home" IsActive="true">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Home tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Profile">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Profile tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Contact">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Contact tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n</Tabs>\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/tabs#fade-effect"},"See demo here.")),(0,i.kt)("h3",{id:"title-with-icon"},"Title with icon"),(0,i.kt)("img",{src:"https://i.imgur.com/KelXx6Z.png",alt:"Tabs - Title with icon"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{3-5,13-15,23-25}","{3-5,13-15,23-25}":!0},'<Tabs EnableFadeEffect="true">\n    <Tab IsActive="true">\n        <TitleTemplate>\n            <Icon Name="IconName.HouseFill" /> Home\n        </TitleTemplate>\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Home tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab>\n        <TitleTemplate>\n            <Icon Name="IconName.PersonFill" /> Profile\n        </TitleTemplate>\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Profile tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab>\n        <TitleTemplate>\n            <Icon Name="IconName.PhoneFill" /> Contact\n        </TitleTemplate>\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Contact tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n</Tabs>\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/tabs#title-with-icon"},"See demo here.")),(0,i.kt)("h3",{id:"disable-tab"},"Disable Tab"),(0,i.kt)("img",{src:"https://i.imgur.com/TCG6gCz.png",alt:"Tabs - Disable Tab"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{16}","{16}":!0},'<Tabs EnableFadeEffect="true">\n    <Tab Title="Home" IsActive="true">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Home tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Profile">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Profile tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Projects" Disabled="true">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Projects tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Contact">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Contact tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n</Tabs>\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/tabs#disable-tab"},"See demo here.")),(0,i.kt)("h3",{id:"pills"},"Pills"),(0,i.kt)("img",{src:"https://i.imgur.com/IyRJ0PS.png",alt:"Tabs - Pills"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{1}","{1}":!0},'<Tabs EnableFadeEffect="true" NavStyle="NavStyle.Pills">\n    <Tab Title="Home" IsActive="true">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Home tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Profile">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Profile tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Contact">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Contact tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n</Tabs>\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/tabs#pills"},"See demo here.")),(0,i.kt)("h3",{id:"callback-events"},"Callback Events"),(0,i.kt)("p",null,"When showing a new tab, the events fire in the following order:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"OnHiding")," (on the current active tab)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"OnShowing")," (on the to-be-shown tab)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"OnHidden")," (on the previous active tab, the same one as for the ",(0,i.kt)("inlineCode",{parentName:"li"},"OnHiding")," event)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"OnShown")," (on the newly-active just-shown tab, the same one as for the ",(0,i.kt)("inlineCode",{parentName:"li"},"OnShowing")," event)")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If no tab was already active, then the ",(0,i.kt)("inlineCode",{parentName:"p"},"OnHiding")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"OnHidden")," events will not be fired."))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/tabs#events"},"See demo here.")),(0,i.kt)("h2",{id:"tab"},"Tab"),(0,i.kt)("h3",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Descritpion"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Title"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets the tab title."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TitleTemplate"),(0,i.kt)("td",{parentName:"tr",align:null},"RenderFragment"),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets the tab title template."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Content"),(0,i.kt)("td",{parentName:"tr",align:null},"RenderFragment"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the content to be rendered inside the tab."),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"IsActive"),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets the active tab."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets the disabled."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"false")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Title")," or ",(0,i.kt)("strong",{parentName:"p"},"TitleTemplate")," is required."))))}d.isMDXComponent=!0}}]);