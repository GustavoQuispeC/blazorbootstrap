"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[52912],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),m=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(n),g=a,f=c["".concat(s,".").concat(g)]||c[g]||d[g]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<r;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},58034:(e,t,n)=>{n.d(t,{ZP:()=>c});var o=n(87462),a=n(67294),r=n(3905),i=n(72389);function l(e){let{children:t,fallback:n}=e;return(0,i.Z)()?a.createElement(a.Fragment,null,t?.()):n??null}n(73935);function s(){let e=document.getElementById("divCarbonAd");return e&&(e.replaceChildren(),setTimeout((()=>{let t=document.getElementById("_carbonads_js");t&&t.remove(),t=document.createElement("script"),t.async=!0,t.id="_carbonads_js",t.src=`//cdn.carbonads.com/carbon.js?serve=CWYICKJI&placement=docsblazorbootstrapcom&ms=${(new Date).getUTCMilliseconds()}`,t.type="text/javascript",t.onerror=function(){console.error(`An error occurred while loading the script: ${source}`)},t&&e.appendChild(t)}),5e3)),null}const m={toc:[]},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{id:"divCarbonAd"}),(0,r.kt)(l,{fallback:null,mdxType:"BrowserOnly"},(()=>(0,r.kt)(s,{mdxType:"RenderAd"}))))}c.isMDXComponent=!0},31326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905)),r=n(58034);const i={title:"Blazor Confirm Dialog Component",description:"Use Blazor Bootstrap confirm dialog component if you want the user to verify or accept something.",image:"https://i.imgur.com/B5Hf85u.png",sidebar_label:"Confirm Dialog",sidebar_position:10},l="Blazor Confirm Dialog",s={unversionedId:"components/confirm-dialog",id:"components/confirm-dialog",title:"Blazor Confirm Dialog Component",description:"Use Blazor Bootstrap confirm dialog component if you want the user to verify or accept something.",source:"@site/docs/05-components/confirm-dialog.mdx",sourceDirName:"05-components",slug:"/components/confirm-dialog",permalink:"/components/confirm-dialog",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/05-components/confirm-dialog.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Blazor Confirm Dialog Component",description:"Use Blazor Bootstrap confirm dialog component if you want the user to verify or accept something.",image:"https://i.imgur.com/B5Hf85u.png",sidebar_label:"Confirm Dialog",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Collapse",permalink:"/components/collapse"},next:{title:"Dropdown",permalink:"/components/dropdown"}},m={},p=[{value:"Methods",id:"methods",level:2},{value:"ConfirmDialogOptions Properties",id:"confirmdialogoptions-properties",level:2},{value:"Examples",id:"examples",level:2},{value:"Confirm Dialog",id:"confirm-dialog",level:3},{value:"Dynamic component as confirm dialog",id:"dynamic-component-as-confirm-dialog",level:3},{value:"Change buttons text and color",id:"change-buttons-text-and-color",level:3},{value:"Optional sizes",id:"optional-sizes",level:3},{value:"Scrolling long content",id:"scrolling-long-content",level:3},{value:"Vertically centered",id:"vertically-centered",level:3}],c={toc:p},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blazor-confirm-dialog"},"Blazor Confirm Dialog"),(0,a.kt)("p",null,"Use Blazor Bootstrap confirm dialog component if you want the user to verify or accept something."),(0,a.kt)(r.ZP,{mdxType:"CarbonAd"}),(0,a.kt)("img",{src:"https://i.imgur.com/B5Hf85u.png",alt:"Blazor Bootstrap: Confirm Dialog component"}),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Return Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ShowAsync(string title, string message1, ConfirmDialogOptions confirmDialogOptions = null)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Task<bool",">"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Shows confirm dialog."),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.1.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ShowAsync(string title, string message1, string message2, ConfirmDialogOptions confirmDialogOptions = null)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Task<bool",">"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Shows confirm dialog."),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.1.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ShowAsync<T",">","(string title, Dictionary<string, object> parametres = null, ConfirmDialogOptions confirmDialogOptions = null)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Task<bool",">"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Shows confirm dialog. T is component."),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.1.0")))),(0,a.kt)("h2",{id:"confirmdialogoptions-properties"},"ConfirmDialogOptions Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"DialogCssClass"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"Additional CSS class for the dialog (div.modal-dialog element)."),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.1.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Dismissable"),(0,a.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"Adds a dismissable close button to the confirm dialog."),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.1.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"HeaderCssClass"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"Additional header CSS class (div.modal-header element)."),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.1.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"IsScrollable"),(0,a.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"Allows confirm dialog body to be scrollable."),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.1.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"IsVerticallyCentered"),(0,a.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"Shows the confirm dialog vertically in the center of the page."),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.1.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"NoButtonColor"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ButtonColor"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the 'No' button color."),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.1.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"NoButtonText"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the 'No' button text."),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.1.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Size"),(0,a.kt)("td",{parentName:"tr",align:"left"},"DialogSize"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ModalSize.Regular"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Size of the modal."),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.1.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"YesButtonColor"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ButtonColor"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ButtonColor.Primary"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the 'Yes' button color."),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.1.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"YesButtonText"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the 'Yes' button text."),(0,a.kt)("td",{parentName:"tr",align:"left"},"1.1.0")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"confirm-dialog"},"Confirm Dialog"),(0,a.kt)("img",{src:"https://i.imgur.com/B5Hf85u.png",alt:"Blazor Bootstrap: Confirm Dialog Component - Examples"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{1} showLineNumbers","{1}":!0,showLineNumbers:!0},'<ConfirmDialog @ref="dialog" />\n\n<Button Color="ButtonColor.Danger" @onclick="ShowConfirmationAsync"> Delete Employee </Button>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{2,6-9,11} showLineNumbers","{2,6-9,11}":!0,showLineNumbers:!0},'@code {\n    private ConfirmDialog dialog;\n\n    private async Task ShowConfirmationAsync()\n    {\n        var confirmation = await dialog.ShowAsync(\n            title: "Are you sure you want to delete this?",\n            message1: "This will delete the record. Once deleted can not be rolled back.",\n            message2: "Do you want to proceed?");\n\n        if (confirmation)\n        {\n            // do whatever\n        }\n        else\n        {\n            // do whatever\n        }\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/confirm-dialog#examples"},"See Confirm Dialog demo here.")),(0,a.kt)("h3",{id:"dynamic-component-as-confirm-dialog"},"Dynamic component as confirm dialog"),(0,a.kt)("p",null,"Render different components dynamically within the confirm dialog without iterating through possible types or using conditional logic."),(0,a.kt)("p",null,"If dynamically-rendered components have component parameters, pass them as an ",(0,a.kt)("inlineCode",{parentName:"p"},"IDictionary"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," is the parameter's name, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," is the parameter's value."),(0,a.kt)("p",null,"In the below example, we used ",(0,a.kt)("inlineCode",{parentName:"p"},"Toast Service")," to show the user confirmation."),(0,a.kt)("img",{src:"https://i.imgur.com/yNv7Wvw.png",alt:"Blazor Bootstrap: Confirm Dialog Component - Dynamic component as confirm dialog"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{1} showLineNumbers","{1}":!0,showLineNumbers:!0},'<ConfirmDialog @ref="dialog" />\n\n<Button Color="ButtonColor.Danger" @onclick="DeleteEmployeeAsync"> Delete Employee </Button>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{2,11,13} showLineNumbers","{2,11,13}":!0,showLineNumbers:!0},'@code {\n    private ConfirmDialog dialog;\n\n    [Inject] ToastService ToastService { get; set; }\n\n    private async Task DeleteEmployeeAsync()\n    {\n        var parameters = new Dictionary<string, object>();\n        parameters.Add("EmployeeId", 321);\n\n        var confirmation = await dialog.ShowAsync<EmployeeDemoComponent>("Are you sure you want to delete this employee?", parameters);\n\n        if (confirmation)\n        {\n            // call API to delete the employee\n            // show acknowledgment to the user\n            ToastService.Notify(new ToastMessage(ToastType.Success, $"Employee deleted successfully."));\n        }\n        else\n            ToastService.Notify(new ToastMessage(ToastType.Secondary, $"Delete action canceled."));\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"EmployeeDemoComponent.razor")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<div class="row">\n    <div class="col-5 col-md-3 text-end">Employee Id :</div>\n    <div class="col-7 col-md-9">@EmployeeId</div>\n</div>\n<div class="row">\n    <div class="col-5 col-md-3 text-end">First Name :</div>\n    <div class="col-7 col-md-9">@employee.FirstName</div>\n</div>\n<div class="row">\n    <div class="col-5 col-md-3 text-end">Last Name :</div>\n    <div class="col-7 col-md-9">@employee.LastName</div>\n</div>\n\n@code {\n    private Employee employee;\n\n    [Parameter] public int EmployeeId { get; set; }\n\n    protected override void OnInitialized()\n    {\n        // get employee with {EmployeeId} from DB\n\n        employee = new Employee { FirstName = "Vikram", LastName = "Reddy" };\n\n        base.OnInitialized();\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/confirm-dialog#dynamic-component-as-confirm-dialog"},"See Confirm Dialog demo here.")),(0,a.kt)("h3",{id:"change-buttons-text-and-color"},"Change buttons text and color"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfirmDialogOptions")," to change the text and color of the button."),(0,a.kt)("img",{src:"https://i.imgur.com/uH19DpG.png",alt:"Blazor Bootstrap: Confirm Dialog Component - Change buttons text and color"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<ConfirmDialog @ref="dialog" />\n\n<Button Color="ButtonColor.Primary" @onclick="ShowSaveConfirmationAsync"> Save Employee </Button>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'@code {\n    private ConfirmDialog dialog;\n\n    private async Task ShowSaveConfirmationAsync()\n    {\n        var options = new ConfirmDialogOptions\n            {\n                YesButtonText = "OK",\n                YesButtonColor = ButtonColor.Success,\n                NoButtonText = "CANCEL",\n                NoButtonColor = ButtonColor.Danger\n            };\n\n        var confirmation = await dialog.ShowAsync(\n            title: "Simple Confirm Dialog",\n            message1: "Do you want to proceed?",\n            confirmDialogOptions: options);\n\n        if (confirmation)\n        {\n            // do whatever\n        }\n        else\n        {\n            // do whatever\n        }\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/confirm-dialog#change-buttons-text-and-color"},"See Confirm Dialog demo here.")),(0,a.kt)("h3",{id:"optional-sizes"},"Optional sizes"),(0,a.kt)("p",null,"Confirm dialog have three optional sizes. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Confirm Dialog Component - Small Size")),(0,a.kt)("img",{src:"https://i.imgur.com/RHYTaee.png",alt:"Blazor Bootstrap: Confirm Dialog Component - Optional sizes - Small"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Confirm Dialog Component - Large Size")),(0,a.kt)("img",{src:"https://i.imgur.com/pojAFvk.png",alt:"Blazor Bootstrap: Confirm Dialog Component - Optional sizes - Large"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Confirm Dialog Component - Extra Large Size")),(0,a.kt)("img",{src:"https://i.imgur.com/PMz3lbn.png",alt:"Blazor Bootstrap: Confirm Dialog Component - Optional sizes - Extra Large"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<ConfirmDialog @ref="dialog" />\n\n<Button Color="ButtonColor.Primary" @onclick="() => ShowConfirmationAsync(DialogSize.Small)"> Small Confirm Dialog </Button>\n<Button Color="ButtonColor.Primary" @onclick="() => ShowConfirmationAsync(DialogSize.Large)"> Large Confirm Dialog </Button>\n<Button Color="ButtonColor.Primary" @onclick="() => ShowConfirmationAsync(DialogSize.ExtraLarge)"> Extra Large Confirm Dialog </Button>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'@code {\n    private ConfirmDialog dialog;\n\n    private async Task ShowConfirmationAsync(DialogSize size)\n    {\n        var options = new ConfirmDialogOptions { Size = size };\n\n        var confirmation = await dialog.ShowAsync(\n            title: "Simple Confirm Dialog",\n            message1: "Do you want to proceed?",\n            confirmDialogOptions: options);\n\n        if (confirmation)\n        {\n            // do whatever\n        }\n        else\n        {\n            // do whatever\n        }\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/confirm-dialog#optional-sizes"},"See Confirm Dialog demo here.")),(0,a.kt)("h3",{id:"scrolling-long-content"},"Scrolling long content"),(0,a.kt)("p",null,"When dialogs become too long for the user's viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean."),(0,a.kt)("img",{src:"https://i.imgur.com/8P6UejF.png",alt:"Blazor Bootstrap: Confirm Dialog Component - Scrolling long content"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<ConfirmDialog @ref="dialog" />\n\n<Button Color="ButtonColor.Primary" @onclick="ShowDialogAsync"> Launch Confirm Dialog </Button>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'@code {\n    private ConfirmDialog dialog;\n\n    private async Task ShowDialogAsync()\n    {\n        var confirmation = await dialog.ShowAsync<LongContentDemoComponent>(title: "Confirm dialog title");\n\n        if (confirmation)\n        {\n            // do whatever\n        }\n        else\n        {\n            // do whatever\n        }\n    }\n}\n')),(0,a.kt)("p",null,"You can also create a scrollable dialog that allows scroll the dialog body by updating ",(0,a.kt)("inlineCode",{parentName:"p"},'DialogOptions.IsScrollable="true"'),"."),(0,a.kt)("img",{src:"https://i.imgur.com/kJdSffq.png",alt:"Blazor Bootstrap: Confirm Dialog Component - Scrolling long content within the body"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<ConfirmDialog @ref="dialog" />\n\n<Button Color="ButtonColor.Primary" @onclick="ShowDialogAsync"> Launch Confirm Dialog </Button>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'@code {\n    private ConfirmDialog dialog;\n\n    private async Task ShowDialogAsync()\n    {\n        var options = new ConfirmDialogOptions { IsScrollable = true };\n        var confirmation = await dialog.ShowAsync<LongContentDemoComponent>(\n            title: "Confirm dialog title",\n            confirmDialogOptions: options);\n\n        if (confirmation)\n        {\n            // do whatever\n        }\n        else\n        {\n            // do whatever\n        }\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/confirm-dialog#scrolling-long-content"},"See Confirm Dialog demo here.")),(0,a.kt)("h3",{id:"vertically-centered"},"Vertically centered"),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},'DialogOptions.IsVerticallyCentered="true"')," to vertically center the confirm dialog."),(0,a.kt)("img",{src:"https://i.imgur.com/MjueRsB.png",alt:"Blazor Bootstrap: Confirm Dialog Component - Vertically centered"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<ConfirmDialog @ref="dialog" />\n\n<Button Color="ButtonColor.Primary" @onclick="ShowDialogAsync"> Launch Vertically Centered Confirm Dialog </Button>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'@code {\n    private ConfirmDialog dialog;\n\n    private async Task ShowDialogAsync()\n    {\n        var options = new ConfirmDialogOptions { IsVerticallyCentered = true };\n        var confirmation = await dialog.ShowAsync(\n            title: "Simple Confirm Dialog",\n            message1: "Do you want to proceed?",\n            confirmDialogOptions: options);\n\n        if (confirmation)\n        {\n            // do whatever\n        }\n        else\n        {\n            // do whatever\n        }\n    }\n}\n')),(0,a.kt)("p",null,'You can also create a scrollable dialog that allows scroll the dialog body by updating DialogOptions.IsScrollable="true".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<ConfirmDialog @ref="dialog" />\n\n<Button Color="ButtonColor.Primary" @onclick="ShowDialogAsync"> Launch Scrollable & Vertically Centered Confirm Dialog </Button>\n\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'@code {\n    private ConfirmDialog dialog;\n\n    private async Task ShowDialogAsync()\n    {\n        var options = new ConfirmDialogOptions { IsScrollable = true, IsVerticallyCentered = true };\n        var confirmation = await dialog.ShowAsync<LongContentDemoComponent>(title: "Confirm dialog title",\n            confirmDialogOptions: options);\n\n        if (confirmation)\n        {\n            // do whatever\n        }\n        else\n        {\n            // do whatever\n        }\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/confirm-dialog#vertically-centered"},"See Confirm Dialog demo here.")))}g.isMDXComponent=!0}}]);