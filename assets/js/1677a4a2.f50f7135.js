"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[94026],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=d(n),c=r,b=p["".concat(s,".").concat(c)]||p[c]||u[c]||i;return n?a.createElement(b,l(l({ref:t},m),{},{components:n})):a.createElement(b,l({ref:t},m))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58034:(e,t,n)=>{n.d(t,{ZP:()=>p});var a=n(87462),r=n(67294),i=n(3905),l=n(72389);function o(e){let{children:t,fallback:n}=e;return(0,l.Z)()?r.createElement(r.Fragment,null,t?.()):n??null}n(73935);function s(){let e=document.getElementById("divCarbonAd");return e&&(e.replaceChildren(),setTimeout((()=>{let t=document.getElementById("_carbonads_js");t&&t.remove(),t=document.createElement("script"),t.async=!0,t.id="_carbonads_js",t.src=`//cdn.carbonads.com/carbon.js?serve=CWYICKJI&placement=docsblazorbootstrapcom&ms=${(new Date).getUTCMilliseconds()}`,t.type="text/javascript",t.onerror=function(){console.error(`An error occurred while loading the script: ${source}`)},t&&e.appendChild(t)}),5e3)),null}const d={toc:[]},m="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{id:"divCarbonAd"}),(0,i.kt)(o,{fallback:null,mdxType:"BrowserOnly"},(()=>(0,i.kt)(s,{mdxType:"RenderAd"}))))}p.isMDXComponent=!0},13372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),i=n(58034);const l={title:"Blazor Date Input Component",description:'Blazor Bootstrap `DateInput` component is constructed using an HTML input of `type="date"` which limits user input based on pre-defined parameters. This component enables users to input a date using a text box with validation or a special date picker interface.',image:"https://i.imgur.com/1mVjqQv.png",sidebar_label:"Date Input",sidebar_position:3},o="Blazor Date Input",s={unversionedId:"forms/date-input",id:"forms/date-input",title:"Blazor Date Input Component",description:'Blazor Bootstrap `DateInput` component is constructed using an HTML input of `type="date"` which limits user input based on pre-defined parameters. This component enables users to input a date using a text box with validation or a special date picker interface.',source:"@site/docs/04-forms/date-input.mdx",sourceDirName:"04-forms",slug:"/forms/date-input",permalink:"/forms/date-input",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/04-forms/date-input.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Blazor Date Input Component",description:'Blazor Bootstrap `DateInput` component is constructed using an HTML input of `type="date"` which limits user input based on pre-defined parameters. This component enables users to input a date using a text box with validation or a special date picker interface.',image:"https://i.imgur.com/1mVjqQv.png",sidebar_label:"Date Input",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Currency Input",permalink:"/forms/currency-input"},next:{title:"Number Input",permalink:"/forms/number-input"}},d={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"Events",id:"events",level:2},{value:"Examples",id:"examples",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Generic type",id:"generic-type",level:3},{value:"Enable min and max",id:"enable-min-and-max",level:3},{value:"Disable",id:"disable",level:3},{value:"Validations",id:"validations",level:3},{value:"Events: ValueChanged",id:"events-valuechanged",level:3},{value:"Restrict the date field based on the entry in another date field",id:"restrict-the-date-field-based-on-the-entry-in-another-date-field",level:3}],p={toc:m},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blazor-date-input"},"Blazor Date Input"),(0,r.kt)("p",null,"Blazor Bootstrap ",(0,r.kt)("inlineCode",{parentName:"p"},"DateInput")," component is constructed using an HTML input of ",(0,r.kt)("inlineCode",{parentName:"p"},'type="date"')," which limits user input based on pre-defined parameters. This component enables users to input a date using a text box with validation or a special date picker interface."),(0,r.kt)(i.ZP,{mdxType:"CarbonAd"}),(0,r.kt)("img",{src:"https://i.imgur.com/1mVjqQv.png",alt:"Blazor Bootstrap: Date Input Component"}),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AutoComplete"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Indicates whether the DateInput can complete the values automatically by the browser."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.5.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Disabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the disabled."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.5.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EnableMinMax"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Determines whether to restrict the user input to Min and Max range. If true, restricts the user input between the Min and Max range. Else accepts the user input."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.5.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Max"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TValue"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},'Gets or sets the max. Max ignored if EnableMinMax="false".'),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.5.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Min"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TValue"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},'Gets or sets the min. Min ignored if EnableMinMax="false".'),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.5.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Placeholder"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string?"),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the placeholder."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.5.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TValue"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the value."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.5.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ValueExpression"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Expression<Func<TValue>>")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the expression"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.6.0")))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Disable"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Disables date input."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.5.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Enable"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enables date input."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.5.0")))),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ValueChanged"),(0,r.kt)("td",{parentName:"tr",align:"left"},"This event fired on every user keystroke that changes the ",(0,r.kt)("inlineCode",{parentName:"td"},"DateInput")," value.")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,r.kt)("admonition",{title:"NOTE",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The input UI generally varies from browser to browser. In unsupported browsers, the control degrades gracefully to ",(0,r.kt)("inlineCode",{parentName:"p"},'type="text"'),".")),(0,r.kt)("img",{src:"https://i.imgur.com/1mVjqQv.png",alt:"Blazor Bootstrap: Date Input Component - Basic usage"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <DateInput TValue="DateOnly" @bind-Value="@date1" Placeholder="Enter Date" />\n</div>\n<div class="mb-3">Entered date: @date1</div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"@code {\n    private DateOnly date1 = DateOnly.FromDateTime(DateTime.Now.AddDays(1));\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/form/date-input#basic-usage"},"See demo here")),(0,r.kt)("h3",{id:"generic-type"},"Generic type"),(0,r.kt)("p",null,"The Blazor Bootstrap DateInput component supports several data types: ",(0,r.kt)("inlineCode",{parentName:"p"},"DateOnly"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DateOnly?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime?"),". This allows flexible component usage to accommodate various data types in Blazor applications."),(0,r.kt)("p",null,"In the below example, TValue is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"DateOnly"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DateOnly?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime?"),"."),(0,r.kt)("img",{src:"https://i.imgur.com/KyyqyNf.png",alt:"Blazor Bootstrap: Date Input Component - Generic type"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <strong>DateOnly</strong>:\n</div>\n<div class="mb-3">\n    <DateInput TValue="DateOnly" @bind-Value="@date1" Placeholder="Enter Date" />\n</div>\n<div class="mb-3">Entered date: @date1</div>\n\n<div class="mb-3">\n    <strong>DateOnly?</strong>:\n</div>\n<div class="mb-3">\n    <DateInput TValue="DateOnly?" @bind-Value="@date2" Placeholder="Enter Date" />\n</div>\n<div class="mb-3">Entered date: @date2</div>\n\n<div class="mb-3">\n    <strong>DateTime</strong>:\n</div>\n<div class="mb-3">\n    <DateInput TValue="DateTime" @bind-Value="@date3" Placeholder="Enter Date" />\n</div>\n<div class="mb-3">Entered date: @date3</div>\n\n<div class="mb-3">\n    <strong>DateTime?</strong>:\n</div>\n<div class="mb-3">\n    <DateInput TValue="DateTime?" @bind-Value="@date4" Placeholder="Enter Date" />\n</div>\n<div class="mb-3">Entered date: @date4</div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},"@code {\n    private DateOnly date1 = DateOnly.FromDateTime(DateTime.Now.AddMonths(3));\n    private DateOnly? date2;\n    private DateTime date3 = DateTime.Now.AddMonths(3);\n    private DateTime? date4;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/form/date-input#generic-type"},"See demo here")),(0,r.kt)("h3",{id:"enable-min-and-max"},"Enable min and max"),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},'EnableMinMax="true"')," and set the ",(0,r.kt)("inlineCode",{parentName:"p"},"Min")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Max")," parameters to restrict the user input between the Min and Max range."),(0,r.kt)("img",{src:"https://i.imgur.com/rZpYrFL.png",alt:"Blazor Bootstrap: Date Input Component - Enable min and max"}),(0,r.kt)("admonition",{title:"NOTE",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If the user tries to enter a number in the ",(0,r.kt)("b",null,"DateInput")," field which is out of range, then it will override with Min or Max value based on the context.\nIf the user input is less than the Min value, then it will override with the Min value.\nIf the user input exceeds the Max value, it will override with the Max value.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <strong>DateOnly</strong>:\n</div>\n<div class="mb-3">\n    <DateInput TValue="DateOnly" @bind-Value="@date1" EnableMinMax="true" Min="@min1" Max="@max1" Placeholder="Enter Date" />\n</div>\n<div class="mb-3">Min date: @min1</div>\n<div class="mb-3">Max date: @max1</div>\n<div class="mb-3">Entered date: @date1</div>\n\n<div class="mb-3">\n    <strong>DateOnly?</strong>:\n</div>\n<div class="mb-3">\n    <DateInput TValue="DateOnly?" @bind-Value="@date2" EnableMinMax="true" Min="@min2" Max="@max2" Placeholder="Enter Date" />\n</div>\n<div class="mb-3">Min date: @min2</div>\n<div class="mb-3">Max date: @max2</div>\n<div class="mb-3">Entered date: @date2</div>\n\n<div class="mb-3">\n    <strong>DateTime</strong>:\n</div>\n<div class="mb-3">\n    <DateInput TValue="DateTime" @bind-Value="@date3" EnableMinMax="true" Min="@min3" Max="@max3" Placeholder="Enter Date" />\n</div>\n<div class="mb-3">Min date: @min3</div>\n<div class="mb-3">Max date: @max3</div>\n<div class="mb-3">Entered date: @date3</div>\n\n<div class="mb-3">\n    <strong>DateTime?</strong>:\n</div>\n<div class="mb-3">\n    <DateInput TValue="DateTime?" @bind-Value="@date4" EnableMinMax="true" Min="@min4" Max="@max4" Placeholder="Enter Date" />\n</div>\n<div class="mb-3">Min date: @min4</div>\n<div class="mb-3">Max date: @max4</div>\n<div class="mb-3">Entered date: @date4</div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},"@code {\n    private DateTime date = DateTime.Now.AddMonths(3);\n    private DateTime min = DateTime.Now.AddMonths(-1);\n    private DateTime max = DateTime.Now.AddYears(1);\n\n    private DateOnly date1, min1, max1;\n    private DateOnly? date2, min2, max2;\n    private DateTime date3, min3, max3;\n    private DateTime? date4, min4, max4;\n\n    protected override void OnInitialized()\n    {\n        date1 = DateOnly.FromDateTime(date);\n        min1 = DateOnly.FromDateTime(min);\n        max1 = DateOnly.FromDateTime(max);\n\n        date2 = null;\n        min2 = DateOnly.FromDateTime(min);\n        max2 = DateOnly.FromDateTime(max);\n\n        date3 = DateTime.Now.AddMonths(3);\n        min3 = min;\n        max3 = max;\n\n        date4 = null;\n        min4 = min;\n        max4 = max;\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/form/date-input#enable-max-min"},"See demo here")),(0,r.kt)("h3",{id:"disable"},"Disable"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("b",null,"Disabled")," parameter to disable the DateInput."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{4,9-11} showLineNumbers","{4,9-11}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <DateInput TValue="DateOnly"\n               @bind-Value="@date1"\n               Disabled="@disabled"\n               Placeholder="Enter Date" />\n</div>\n<div class="mb-3">Entered date: @date1</div>\n\n<Button Color="ButtonColor.Primary" @onclick="Enable"> Enable </Button>\n<Button Color="ButtonColor.Secondary" @onclick="Disable"> Disable </Button>\n<Button Color="ButtonColor.Warning" @onclick="Toggle"> Toggle </Button>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{3,5,7,9} showLineNumbers","{3,5,7,9}":!0,showLineNumbers:!0},"@code {\n    private DateOnly date1 = DateOnly.FromDateTime(DateTime.Now);\n    private bool disabled = true;\n\n    private void Enable() => disabled = false;\n\n    private void Disable() => disabled = true;\n\n    private void Toggle() => disabled = !disabled;\n}\n")),(0,r.kt)("p",null,"Also, use ",(0,r.kt)("strong",{parentName:"p"},"Enable()")," and ",(0,r.kt)("strong",{parentName:"p"},"Disable()")," methods to enable and disable the DateInput."),(0,r.kt)("admonition",{title:"NOTE",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Do not use both the ",(0,r.kt)("strong",{parentName:"p"},"Disabled")," parameter and ",(0,r.kt)("strong",{parentName:"p"},"Enable()")," & ",(0,r.kt)("strong",{parentName:"p"},"Disable()")," methods.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{2,9-10} showLineNumbers","{2,9-10}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <DateInput @ref="dateInput"\n               TValue="DateOnly"\n               @bind-Value="@date1"\n               Placeholder="Enter Date" />\n</div>\n<div class="mb-3">Entered date: @date1</div>\n\n<Button Color="ButtonColor.Secondary" @onclick="Disable"> Disable </Button>\n<Button Color="ButtonColor.Primary" @onclick="Enable"> Enable </Button>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{2,6,8} showLineNumbers","{2,6,8}":!0,showLineNumbers:!0},"@code {\n    private DateInput<DateOnly> dateInput = default!;\n\n    private DateOnly date1 = DateOnly.FromDateTime(DateTime.Now);\n\n    private void Disable() => dateInput.Disable();\n\n    private void Enable() => dateInput.Enable();\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/form/date-input#disable"},"See demo here")),(0,r.kt)("h3",{id:"validations"},"Validations"),(0,r.kt)("p",null,"Like any other blazor input component, ",(0,r.kt)("inlineCode",{parentName:"p"},"DateInput")," component supports validations. Use the Use the ",(0,r.kt)("strong",{parentName:"p"},"DataAnnotations")," to validate the user input before submitting the form. In the below example, we used the ",(0,r.kt)("inlineCode",{parentName:"p"},"Required")," attributes."),(0,r.kt)("img",{src:"https://i.imgur.com/V4SWntV.png",alt:"Blazor Bootstrap: Date Input Component - Validations"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'@using System.ComponentModel.DataAnnotations\n\n<style>\n    .valid.modified:not([type=checkbox]) {\n        outline: 1px solid #26b050;\n    }\n\n    .invalid {\n        outline: 1px solid red;\n    }\n\n    .validation-message {\n        color: red;\n    }\n</style>\n\n<EditForm EditContext="@editContext" OnValidSubmit="HandleOnValidSubmit">\n    <DataAnnotationsValidator />\n\n    <div class="form-group row mb-3">\n        <label class="col-md-2 col-form-label">Invoice Date: <span class="text-danger">*</span></label>\n        <div class="col-md-10">\n            <DateInput TValue="DateOnly?" @bind-Value="invoice.InvoiceDate" />\n            <ValidationMessage For="@(() => invoice.InvoiceDate)" />\n        </div>\n    </div>\n\n    <div class="form-group row mb-3">\n        <label class="col-md-2 col-form-label">Customer Name: <span class="text-danger">*</span></label>\n        <div class="col-md-10">\n            <InputText class="form-control" @bind-Value="invoice.CustomerName" Placeholder="Enter Customer Name" />\n            <ValidationMessage For="@(() => invoice.CustomerName)" />\n        </div>\n    </div>\n\n    <div class="row">\n        <div class="col-md-12 text-right">\n            <Button Type="ButtonType.Button" Color="ButtonColor.Secondary" Class="float-end" @onclick="ResetForm">Reset</Button>\n            <Button Type="ButtonType.Submit" Color="ButtonColor.Success" Class="float-end me-2">Submit</Button>\n        </div>\n    </div>\n</EditForm>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'@code {\n    private Invoice invoice = new();\n    private EditContext editContext;\n\n    protected override void OnInitialized()\n    {\n        editContext = new EditContext(invoice);\n        base.OnInitialized();\n    }\n\n    public void HandleOnValidSubmit()\n    {\n        Console.WriteLine($"Invoice Date: {invoice.InvoiceDate}");\n        Console.WriteLine($"Customer Name: {invoice.CustomerName}");\n    }\n\n    private void ResetForm()\n    {\n        invoice = new();\n        editContext = new EditContext(invoice);\n    }\n\n    public class Invoice\n    {\n        [Required(ErrorMessage = "Invoice Date required.")]\n        public DateOnly? InvoiceDate { get; set; }\n\n        [Required(ErrorMessage = "Customer Name required.")]\n        public string CustomerName { get; set; }\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/form/date-input#validations"},"See demo here")),(0,r.kt)("h3",{id:"events-valuechanged"},"Events: ValueChanged"),(0,r.kt)("p",null,"This event fires on every user keystroke/selection that changes the ",(0,r.kt)("inlineCode",{parentName:"p"},"DateInput")," value."),(0,r.kt)("img",{src:"https://i.imgur.com/3OFrZJX.png",alt:"Blazor Bootstrap: Date Input Component - Events: ValueChanged"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <DateInput TValue="DateOnly" Value="date1" ValueExpression="() => date1" ValueChanged="(value) => DateChanged(value)" />\n</div>\n<div class="mb-3">Changed date: @date1</div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},"@code {\n    private DateOnly date1 = DateOnly.FromDateTime(DateTime.Now);\n\n    private void DateChanged(DateOnly dateOnly)\n    {\n        date1 = dateOnly;    \n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/form/date-input#event-value-changed"},"See demo here")),(0,r.kt)("h3",{id:"restrict-the-date-field-based-on-the-entry-in-another-date-field"},"Restrict the date field based on the entry in another date field"),(0,r.kt)("p",null,"One common scenario is that the date fields are restricted based on the entry in another date field.\nIn the example below, we restrict the course end time based on the selection of course start date."),(0,r.kt)("img",{src:"https://i.imgur.com/bCXn1vE.png",width:"450",alt:"Blazor Bootstrap:- Date Input Component - Restrict the date field based on the entry in another date field"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},"@using System.ComponentModel.DataAnnotations\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},"<style>\n    .valid.modified:not([type=checkbox]) {\n        outline: 1px solid #26b050;\n    }\n\n    .invalid {\n        outline: 1px solid red;\n    }\n\n    .validation-message {\n        color: red;\n    }\n</style>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{17-18,28-30} showLineNumbers","{17-18,28-30}":!0,showLineNumbers:!0},'<EditForm EditContext="@editContext" OnValidSubmit="HandleValidSubmit" novalidate>\n    <DataAnnotationsValidator />\n\n    <div class="form-group row mb-3">\n        <label class="col-md-2 col-form-label">Course Name: <span class="text-danger">*</span></label>\n        <div class="col-md-10">\n            <InputText class="form-control" @bind-Value="onlineCourseForm.CourseName" />\n            <ValidationMessage For="@(() => onlineCourseForm.CourseName)" />\n        </div>\n    </div>\n\n    <div class="form-group row mb-3">\n        <label class="col-md-2 col-form-label">Start Date: <span class="text-danger">*</span></label>\n        <div class="col-md-10">\n            <DateInput TValue="DateTime?"\n                       Value="onlineCourseForm.StartDate"\n                       ValueExpression="() => onlineCourseForm.StartDate"\n                       ValueChanged="(value) => StartDateChanged(value)" />\n            <ValidationMessage For="@(() => onlineCourseForm.StartDate)" />\n        </div>\n    </div>\n\n    <div class="form-group row mb-3">\n        <label class="col-md-2 col-form-label">End Date: <span class="text-danger">*</span></label>\n        <div class="col-md-10">\n            <DateInput @ref="endDateInput" TValue="DateTime?"\n                       @bind-Value="onlineCourseForm.EndDate"\n                       EnableMinMax="true"\n                       Min="courseMinDate"\n                       Max="courseMaxDate"\n                       Disabled="true" />\n            <ValidationMessage For="@(() => onlineCourseForm.EndDate)" />\n        </div>\n    </div>\n\n    <div class="row">\n        <div class="col-md-12 text-right">\n            <Button Type="ButtonType.Button" Color="ButtonColor.Secondary" Class="float-end" @onclick="ResetForm">Reset</Button>\n            <Button Type="ButtonType.Submit" Color="ButtonColor.Success" Class="float-end me-2">Submit</Button>\n        </div>\n    </div>\n</EditForm>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{23-25,32-34} showLineNumbers","{23-25,32-34}":!0,showLineNumbers:!0},'@code {\n    DateInput<DateTime?> endDateInput = default!;\n\n    private OnlineCourseForm onlineCourseForm = new();\n    private EditContext editContext;\n\n    private DateTime? courseMinDate;\n    private DateTime? courseMaxDate;\n\n    [Inject] ToastService _toastService { get; set; }\n\n    protected override void OnInitialized()\n    {\n        editContext = new EditContext(onlineCourseForm);\n        base.OnInitialized();\n    }\n\n    private void StartDateChanged(DateTime? startDate)\n    {\n        if (startDate is null || !startDate.HasValue)\n        {\n            onlineCourseForm.StartDate = null;\n            onlineCourseForm.EndDate = null;\n            courseMinDate = null;\n            courseMaxDate = null;\n            endDateInput.Disable();\n\n            return;\n        }\n\n        onlineCourseForm.StartDate = startDate;\n        onlineCourseForm.EndDate = null;\n        courseMinDate = startDate.Value;\n        courseMaxDate = startDate.Value.AddDays(5);\n        endDateInput.Enable();\n    }\n\n    public void HandleValidSubmit()\n    {\n        var toastMessage = new ToastMessage\n        (\n            type: ToastType.Success,\n            iconName: IconName.Check2All,\n            title: "Success!",\n            helpText: $"{DateTime.Now.ToLocalTime()}",\n            message: "Online course schedule created."\n        );\n        _toastService.Notify(toastMessage);\n    }\n\n    private void ResetForm()\n    {\n        onlineCourseForm = new();\n        editContext = new EditContext(onlineCourseForm);\n    }\n\n    public class OnlineCourseForm\n    {\n        [Required(ErrorMessage = "Course Name required.")]\n        public string CourseName { get; set; }\n\n        [Required(ErrorMessage = "Start Date required.")]\n        public DateTime? StartDate { get; set; }\n\n        [Required(ErrorMessage = "End Date required.")]\n        public DateTime? EndDate { get; set; }\n    }\n}\n')))}c.isMDXComponent=!0}}]);