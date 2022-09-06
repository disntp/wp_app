!function(){var e,t={14:function(e,t,o){"use strict";var l=window.wp.element,n=window.lodash,s=window.wp.components,a=window.wp.data,r=window.wp.notices,i=()=>{const e=(0,a.useSelect)((e=>e(r.store).getNotices()),[]),{removeNotice:t}=(0,a.useDispatch)(r.store),o=(0,n.filter)(e,{type:"snackbar"});return(0,l.createElement)(s.SnackbarList,{notices:o,className:"components-editor-notices__snackbar",onRemove:t})},c=o(184),m=o.n(c),u=window.wp.i18n;const d=[{slug:"dashboard",label:(0,u.__)("Dashboard","otter-blocks"),visibility:!0},{slug:"integrations",label:(0,u.__)("Integrations","otter-blocks"),visibility:!0},{slug:"upsell",label:(0,u.__)("Free vs PRO","otter-blocks"),visibility:!Boolean(window.otterObj.hasPro)}];var _=e=>{let{isActive:t,setActive:o}=e;return(0,l.createElement)("header",{className:"otter-header"},(0,l.createElement)("div",{className:"otter-container"},(0,l.createElement)("div",{className:"otter-logo"},(0,l.createElement)("img",{src:window.otterObj.assetsPath+"images/logo.png",title:(0,u.__)("Otter – Page Builder Blocks & Extensions for Gutenberg","otter-blocks")}),(0,l.createElement)("abbr",{title:(0,u.sprintf)((0,u.__)("Version: %s","otter-blocks"),window.otterObj.version),className:"version"},window.otterObj.version)),(0,l.createElement)("nav",{className:"otter-navigation"},d.map((e=>e.visibility&&(0,l.createElement)("button",{className:m()({"is-active":e.slug===t}),onClick:()=>o(e.slug),key:e.slug},(0,l.createElement)("span",null,e.label)))))))},b=window.wp.api,p=o.n(b),k=()=>{const{createNotice:e}=(0,a.dispatch)("core/notices"),[t,o]=(0,l.useState)({}),[n,s]=(0,l.useState)("loading"),r=()=>{p().loadPromise.then((async()=>{try{const e=new(p().models.Settings),t=await e.fetch();o(t)}catch(e){s("error")}finally{s("loaded")}}))};return(0,l.useEffect)((()=>{r()}),[]),[e=>null==t?void 0:t[e],(t,o)=>{s("saving");const l=new(p().models.Settings)({[t]:o}).save();l.success(((t,o)=>{"success"===o&&(s("loaded"),e("success",(0,u.__)("Settings saved.","otter-blocks"),{isDismissible:!0,type:"snackbar"})),"error"===o&&(s("error"),e("error",(0,u.__)("An unknown error occurred.","otter-blocks"),{isDismissible:!0,type:"snackbar"})),r()})),l.error((t=>{s("error"),e("error",t.responseJSON.message?t.responseJSON.message:(0,u.__)("An unknown error occurred.","otter-blocks"),{isDismissible:!0,type:"snackbar"})}))},n]},g=e=>{let{title:t,children:o}=e;return(0,l.createElement)(s.PanelBody,null,(0,l.createElement)("div",{className:"otter-info"},(0,l.createElement)("h3",null,t),o))},h=window.wp.apiFetch,E=o.n(h),v=()=>{var e;const[t,o]=(0,l.useState)(!1),[n,r]=(0,l.useState)(null===(e=window.otterObj)||void 0===e?void 0:e.license),[i,c]=(0,l.useState)(""),{createNotice:m}=(0,a.dispatch)("core/notices");(0,l.useEffect)((()=>{n.key&&["valid","active_expired"].includes(n.valid)&&c(n.key)}),[n]);const d="valid"===(null==n?void 0:n.valid)||"valid"===(null==n?void 0:n.license);return(0,l.createElement)(g,{title:(0,u.__)("Otter Pro License","otter-blocks")},(0,l.createElement)("p",null,(0,u.__)("Enter your license from ThemeIsle purchase history in order to get plugin updates.","otter-blocks")),Boolean(window.otterObj.hasNevePro)&&(0,l.createElement)("p",null,(0,u.__)("Neve Pro license can also be used to activate Otter Pro.","otter-blocks")),(0,l.createElement)("input",{type:"text",value:d?"******************************"+i.slice(-5):i,placeholder:(0,u.__)("Enter license key","otter-blocks"),disabled:t||d,onChange:e=>c(e.target.value)}),(0,l.createElement)("div",{className:"otter-info-button-group is-single"},(0,l.createElement)(s.Button,{variant:d?"secondary":"primary",isPrimary:!d,isSecondary:d,isBusy:t,disabled:t,onClick:()=>{return e={action:d?"deactivate":"activate",key:i},o(!0),void E()({path:"otter/v1/toggle_license",method:"POST",data:e}).then((e=>{o(!1),m(e.success?"success":"error",e.message,{isDismissible:!0,type:"snackbar"}),null!=e&&e.success&&e.license&&"free"!==e.license.key?(r(e.license),c(e.license.key)):(r({}),c(""))})).catch((e=>{o(!1),console.log(e)}));var e}},d?(0,u.__)("Deactivate","otter-blocks"):(0,u.__)("Activate","otter-blocks"))),d&&(0,l.createElement)("div",{className:"otter-license-footer"},(0,l.createElement)("p",null,(0,l.createElement)(s.Icon,{icon:"yes"}),(0,u.sprintf)((0,u.__)("Valid - Expires %s","otter-blocks"),n.expiration))),"active_expired"===(null==n?void 0:n.valid)&&(0,l.createElement)("div",{className:"otter-license-footer is-expired"},(0,l.createElement)("p",null,(0,u.__)("License Key has expired. In order to continue receiving support and software updates you must renew your license key.","otter-blocks")),(0,l.createElement)("p",null,(0,l.createElement)(s.ExternalLink,{href:`${window.otterObj.storeURL}?license=${i}`},(0,u.__)("Renew License","otter-blocks")))),!d&&(0,l.createElement)("p",{className:"otter-license-purchase-history"},(0,l.createElement)(s.ExternalLink,{href:window.otterObj.purchaseHistoryURL},(0,u.__)("Get license from Purchase History","otter-blocks"))))},y=e=>{let{setTab:t}=e;return(0,l.createElement)(l.Fragment,null,Boolean(window.otterObj.hasPro)?(0,l.createElement)(v,null):(0,l.createElement)(g,{title:(0,u.__)("Otter Pro","otter-blocks")},(0,l.createElement)("p",null,(0,u.__)("Upgrade to Otter Pro and get instant access to all pro features — including WooCommerce builder — and much more.","otter-blocks")),(0,l.createElement)("div",{className:"otter-info-button-group"},(0,l.createElement)(s.Button,{variant:"secondary",isSecondary:!0,onClick:()=>t("upsell")},(0,u.__)("Learn More","otter-blocks")),(0,l.createElement)(s.Button,{variant:"primary",isPrimary:!0,target:"_blank",href:window.otterObj.upgradeLink},(0,u.__)("Explore Otter Pro","otter-blocks")))),(0,l.createElement)(g,{title:(0,u.__)("Useful links","otter-blocks")},(0,l.createElement)("ul",{className:"otter-info-links"},(0,l.createElement)("li",null,(0,l.createElement)("a",{href:"https://wordpress.org/support/plugin/otter-blocks",target:"_blank"},(0,u.__)("Support","otter-blocks"))),(0,l.createElement)("li",null,(0,l.createElement)("a",{href:"https://otter.nolt.io/",target:"_blank"},(0,u.__)("Feature request","otter-blocks"))),(0,l.createElement)("li",null,(0,l.createElement)("a",{href:"https://wordpress.org/support/plugin/otter-blocks/reviews/#new-post",target:"_blank"},(0,u.__)("Leave a review","otter-blocks")))),(0,l.createElement)("div",{className:"otter-info-button-group is-single"},(0,l.createElement)(s.Button,{variant:"secondary",isSecondary:!0,target:"_blank",href:window.otterObj.docsLink},(0,u.__)("Documentation","otter-blocks")))))},w=e=>{let{label:t,help:o,buttonLabel:n,disabled:a,action:r,className:i}=e;return(0,l.createElement)("div",{className:m()("components-base-control","otter-button-control",i)},(0,l.createElement)("div",{className:"components-base-control_labels"},(0,l.createElement)("span",{className:"components-base-control__label"},t),(0,l.createElement)("p",{className:"components-base-control__help"},o)),(0,l.createElement)("div",{className:"otter-button-control-group"},(0,l.createElement)(s.Button,{variant:"secondary",isSecondary:!0,disabled:a,onClick:r},n)))},f=e=>{let{status:t,getOption:o,updateOption:n}=e;(0,l.useEffect)((()=>{Boolean(window.otterObj.stylesExist)||c(!0)}),[]);const{createNotice:r}=(0,a.dispatch)("core/notices"),[i,c]=(0,l.useState)(!1),[m,d]=(0,l.useState)(!1);return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(s.PanelBody,{title:(0,u.__)("Modules","otter-blocks")},(0,l.createElement)(s.PanelRow,null,(0,l.createElement)(s.ToggleControl,{label:(0,u.__)("Enable Custom CSS Module","otter-blocks"),help:(0,u.__)("Custom CSS module allows to add custom CSS to each block in Block Editor.","otter-blocks"),checked:Boolean(o("themeisle_blocks_settings_css_module")),disabled:"saving"===t,onChange:()=>n("themeisle_blocks_settings_css_module",!Boolean(o("themeisle_blocks_settings_css_module")))})),(0,l.createElement)(s.PanelRow,null,(0,l.createElement)(s.ToggleControl,{label:(0,u.__)("Enable Blocks Animation Module","otter-blocks"),help:(0,u.__)("Blocks Animation module allows to add CSS animations to each block in Block Editor.","otter-blocks"),checked:Boolean(o("themeisle_blocks_settings_blocks_animation")),disabled:"saving"===t,onChange:()=>n("themeisle_blocks_settings_blocks_animation",!Boolean(o("themeisle_blocks_settings_blocks_animation")))})),(0,l.createElement)(s.PanelRow,null,(0,l.createElement)(s.ToggleControl,{label:(0,u.__)("Enable Visibility Condition Module","otter-blocks"),help:(0,u.__)("Blocks Conditions module allows to hide/display blocks to your users based on selected conditions.","otter-blocks"),checked:Boolean(o("themeisle_blocks_settings_block_conditions")),disabled:"saving"===t,onChange:()=>n("themeisle_blocks_settings_block_conditions",!Boolean(o("themeisle_blocks_settings_block_conditions")))}))),(0,l.createElement)(s.PanelBody,{title:(0,u.__)("Other","otter-blocks")},(0,l.createElement)(s.PanelRow,null,(0,l.createElement)(s.ToggleControl,{label:(0,u.__)("Make Section your default block for Pages","otter-blocks"),help:(0,u.__)("Everytime you create a new page, Section block will be appended there by default.","otter-blocks"),checked:Boolean(o("themeisle_blocks_settings_default_block")),disabled:"saving"===t,onChange:()=>n("themeisle_blocks_settings_default_block",!Boolean(o("themeisle_blocks_settings_default_block")))})),(0,l.createElement)(s.PanelRow,null,(0,l.createElement)(s.ToggleControl,{label:(0,u.__)("Optimize Animations CSS","otter-blocks"),help:(0,u.__)("Only load CSS for the animations that are used on the page. We recommend you to regenerate styles after you toggle this option.","otter-blocks"),checked:Boolean(o("themeisle_blocks_settings_optimize_animations_css")),disabled:"saving"===t||!Boolean(o("themeisle_blocks_settings_blocks_animation")),onChange:()=>n("themeisle_blocks_settings_optimize_animations_css",!Boolean(o("themeisle_blocks_settings_optimize_animations_css")))})),(0,l.createElement)(s.PanelRow,null,(0,l.createElement)(s.ToggleControl,{label:(0,u.__)("Enable Rich Schema","otter-blocks"),help:(0,u.__)("Control if you want to show rich schema in Product Review Block.","otter-blocks"),checked:Boolean(o("themeisle_blocks_settings_disable_review_schema")),disabled:"saving"===t,onChange:()=>n("themeisle_blocks_settings_disable_review_schema",!Boolean(o("themeisle_blocks_settings_disable_review_schema")))})),(0,l.createElement)(s.PanelRow,null,(0,l.createElement)(s.ToggleControl,{label:(0,u.__)("Anonymous Data Tracking.","otter-blocks"),help:(0,u.__)("Become a contributor by opting in to our anonymous data tracking. We guarantee no sensitive data is collected.","otter-blocks"),checked:"yes"===o("otter_blocks_logger_flag"),disabled:"saving"===t,onChange:()=>n("otter_blocks_logger_flag","yes"===o("otter_blocks_logger_flag")?"no":"yes")}))),(0,l.createElement)(s.PanelBody,null,(0,l.createElement)(s.PanelRow,null,(0,l.createElement)(w,{label:(0,u.__)("Regenerate Styles","otter-blocks"),help:(0,u.__)("Clicking on this will delete all the Otter generated CSS files.","otter-blocks"),buttonLabel:(0,u.__)("Regenerate","otter-blocks"),disabled:i,action:()=>d(!0)}))),m&&(0,l.createElement)(s.Modal,{title:(0,u.__)("Are you sure?","otter-blocks"),onRequestClose:()=>d(!1)},(0,l.createElement)("p",null,(0,u.__)("Are you sure you want to delete all Otter generated CSS files?","otter-blocks")),(0,l.createElement)("p",null,(0,u.__)("Note: Styles will be regenerated as users start visiting your pages.","otter-blocks")),(0,l.createElement)("div",{className:"otter-modal-actions"},(0,l.createElement)(s.Button,{isSecondary:!0,onClick:()=>d(!1)},(0,u.__)("Cancel","otter-blocks")),(0,l.createElement)(s.Button,{isPrimary:!0,disabled:"saving"===t,isBusy:"saving"===t,onClick:async()=>{const e=await E()({path:"otter/v1/regenerate",method:"DELETE"});r(e.success?"success":"error",e.data.message,{isDismissible:!0,type:"snackbar"}),c(!0),d(!1)}},(0,u.__)("Confirm","otter-blocks")))))};const B=[{label:(0,u.__)("More than 30 Custom Blocks","otter-blocks"),description:(0,u.__)("Harness the potential of the new WordPress era with the growing list of 30+ page building blocks, covering all the elements needed to build a website.","otter-blocks"),inFree:!0},{label:(0,u.__)("Extra Functionalities for all Blocks","otter-blocks"),description:(0,u.__)("Otter Blocks adds extra functionality such as Custom CSS, Animations and Visibility Conditions to default or third party blocks present on your website.","otter-blocks"),inFree:!0},{label:(0,u.__)("Premium Blocks","otter-blocks"),description:(0,u.__)("Enhance your website's design with powerful Pro Blocks, like the Add to Cart Block, Business Hours Block and more blocks are coming soon.","otter-blocks")},{label:(0,u.__)("Extended Visibility Conditions & Sticky Blocks functionality","otter-blocks"),description:(0,u.__)("The Visibility Conditions feature allows you to set which conditions should be met for your chosen blocks to be displayed on the page. While the Sticky feature lets you set a Block as sticky, so that it sticks to its parent. ","otter-blocks")},{label:(0,u.__)("Dynamic Values","otter-blocks"),description:(0,u.__)("Streamline your Workflow with Otter Dynamic Values, which allows you to bind certain elements in the editor - with the dynamic data from your website database.","otter-blocks")},{label:(0,u.__)("Review Comparison Table","otter-blocks"),description:(0,u.__)("Allows you to display and compare a selection of product reviews made on the website.","otter-blocks")},{label:(0,u.__)("WooCommerce Builder Blocks","otter-blocks"),description:(0,u.__)("Build custom Single Product Pages using WooCommerce Builder Blocks by Otter. All the new features from Otter Pro are designed to maximize your conversion rate.","otter-blocks")},{label:(0,u.__)("Extended Popups","otter-blocks"),description:(0,u.__)("Display your content in beautiful popup with many customization options. Otter Pro extends the functionality of the popups in the free Otter version, with more advanced options.","otter-blocks")},{label:(0,u.__)("Priority Support","otter-blocks"),description:(0,u.__)("Our Happiness Engineers are happy to help you get the best results from our products. On average, Otter Pro user get a reply in five hours or less.","otter-blocks")}],S=(0,l.createElement)("svg",{width:"31",height:"31",viewBox:"0 0 31 31",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true"},(0,l.createElement)("path",{d:"M22.5326 10.5767L17.2226 15.8867L22.5326 21.1967L20.4176 23.3117L15.1076 18.0167L9.81262 23.3117L7.68262 21.1817L12.9776 15.8867L7.68262 10.5917L9.81262 8.46167L15.1076 13.7567L20.4176 8.46167L22.5326 10.5767Z",fill:"#FF7E65"})),C=(0,l.createElement)("svg",{width:"31",height:"31",viewBox:"0 0 31 31",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true"},(0,l.createElement)("path",{d:"M22.9863 7.99243L12.7863 18.1924L8.58633 13.9924L6.48633 16.0924L12.7863 22.3924L25.0863 10.0924",fill:"#5FBFD5"}));var P=()=>(0,l.createElement)("div",{className:"otter-upsell"},(0,l.createElement)("div",{className:"upsell-title"},(0,l.createElement)("h2",null,(0,u.__)("Powerful features available only in Otter Pro","otter-blocks"))),(0,l.createElement)("ul",{className:"upsell-table"},(0,l.createElement)("li",{className:"t-head"},(0,l.createElement)("div",null),(0,l.createElement)("div",{className:"c"},(0,u.__)("Free","otter-blocks")),(0,l.createElement)("div",{className:"c"},(0,u.__)("Pro","otter-blocks"))),B.map(((e,t)=>(0,l.createElement)("li",{key:t,className:"t-row"},(0,l.createElement)("div",{className:"content"},(0,l.createElement)("div",{className:"h-wrap"},(0,l.createElement)("h4",null,e.label)),(0,l.createElement)("p",null,e.description)),(0,l.createElement)("div",{className:"c"},null!=e&&e.inFree?C:S),(0,l.createElement)("div",{className:"c"},C))))),(0,l.createElement)(s.Button,{variant:"primary",href:window.otterObj.upgradeLink,target:"_blank"},(0,u.__)("View all Otter Pro features","otter-blocks"))),O=window.wp.hooks,N=()=>{const[e,t,o]=k();(0,l.useEffect)((()=>{a(e("themeisle_google_map_block_api_key"))}),[e("themeisle_google_map_block_api_key")]),(0,l.useEffect)((()=>{i(e("themeisle_google_captcha_api_site_key")),m(e("themeisle_google_captcha_api_secret_key"))}),[e("themeisle_google_captcha_api_site_key"),e("themeisle_google_captcha_api_secret_key")]);const[n,a]=(0,l.useState)(""),[r,i]=(0,l.useState)(""),[c,m]=(0,l.useState)("");let d=()=>(0,l.createElement)(s.PanelBody,{title:(0,u.__)("Fonts Module","otter-blocks"),className:"is-pro"},(0,l.createElement)(s.Disabled,null,(0,l.createElement)(s.PanelRow,null,(0,l.createElement)(s.ToggleControl,{label:(0,u.__)("Save Google Fonts Locally","otter-blocks"),help:(0,u.__)("Enable this option to save Google Fonts locally to make your website faster","otter-blocks"),checked:!1,disabled:!0}))));return d=(0,O.applyFilters)("otter.dashboard.integrations",(0,l.createElement)(d,null)),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(s.PanelBody,{title:(0,u.__)("Google Maps","otter-blocks")},(0,l.createElement)(s.PanelRow,null,(0,l.createElement)(s.BaseControl,{label:(0,u.__)("Google Maps API","otter-blocks"),help:(0,u.__)("In order to use Google Maps block, you need to use Google Maps and Places API.","otter-blocks"),id:"otter-options-google-map-api",className:"otter-button-field"},(0,l.createElement)("input",{type:"password",id:"otter-options-google-map-api",value:n,placeholder:(0,u.__)("Google Maps API Key","otter-blocks"),disabled:"saving"===o,onChange:e=>a(e.target.value)}),(0,l.createElement)("div",{className:"otter-button-group"},(0,l.createElement)(s.Button,{variant:"secondary",isSecondary:!0,disabled:"saving"===o,onClick:()=>t("themeisle_google_map_block_api_key",n)},(0,u.__)("Save","otter-blocks")),(0,l.createElement)(s.ExternalLink,{href:"https://developers.google.com/maps/documentation/javascript/get-api-key"},(0,u.__)("Get API Key","otter-blocks")))))),d,(0,l.createElement)(s.PanelBody,{title:(0,u.__)("Google reCaptcha API","otter-blocks"),initialOpen:!1},(0,l.createElement)(s.PanelRow,null,(0,l.createElement)(s.BaseControl,{help:(0,u.__)("In order to use reCaptcha field in the Form block, you need to use Google reCaptcha API.","otter-blocks"),id:"otter-options-google-recaptcha-api",className:"otter-button-field"},(0,l.createElement)(s.TextControl,{type:"password",label:(0,u.__)("Site Key","otter-blocks"),value:r,placeholder:(0,u.__)("Site Key","otter-blocks"),disabled:"saving"===o,onChange:e=>i(e)}),(0,l.createElement)(s.TextControl,{type:"password",label:(0,u.__)("Secret Key","otter-blocks"),value:c,placeholder:(0,u.__)("Secret Key","otter-blocks"),disabled:"saving"===o,onChange:e=>m(e)}),(0,l.createElement)("div",{className:"otter-button-group"},(0,l.createElement)(s.Button,{variant:"secondary",isSecondary:!0,disabled:"saving"===o,onClick:()=>{t("themeisle_google_captcha_api_site_key",r),t("themeisle_google_captcha_api_secret_key",c)}},(0,u.__)("Save","otter-blocks")),(0,l.createElement)(s.ExternalLink,{href:"https://www.google.com/recaptcha/admin"},(0,u.__)("Get API Key","otter-blocks")))))))},L=e=>{let{currentTab:t,setTab:o}=e;const[n,a,r]=k();return"loading"===r?(0,l.createElement)(s.Placeholder,null,(0,l.createElement)(s.Spinner,null)):(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:`otter-main is-${t}`},(0,l.createElement)((()=>{switch(t){case"integrations":return(0,l.createElement)("div",{className:"otter-left"},(0,l.createElement)(N,null));case"upsell":return(0,l.createElement)(P,null);default:return(0,l.createElement)("div",{className:"otter-left"},(0,l.createElement)(f,{status:r,getOption:n,updateOption:a}))}}),null),"upsell"!==t&&(0,l.createElement)("div",{className:"otter-right"},(0,l.createElement)(y,{setTab:o}))))},x=()=>(0,l.createElement)("footer",{className:"otter-footer"},(0,l.createElement)("div",{className:"otter-container"},(0,u.__)("No otters were harmed during the making of this plugin.","otter-blocks")));(0,l.render)((0,l.createElement)((()=>{const[e,t]=(0,l.useState)("dashboard");return(0,l.createElement)(l.Fragment,null,void 0!==wp.notices.store&&(0,l.createElement)(i,null),(0,l.createElement)(_,{isActive:e,setActive:t}),(0,l.createElement)(L,{currentTab:e,setTab:t}),(0,l.createElement)(x,null))}),null),document.getElementById("otter"))},184:function(e,t){var o;!function(){"use strict";var l={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var s=typeof o;if("string"===s||"number"===s)e.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&e.push(a)}}else if("object"===s)if(o.toString===Object.prototype.toString)for(var r in o)l.call(o,r)&&o[r]&&e.push(r);else e.push(o.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(o=function(){return n}.apply(t,[]))||(e.exports=o)}()}},o={};function l(e){var n=o[e];if(void 0!==n)return n.exports;var s=o[e]={exports:{}};return t[e](s,s.exports,l),s.exports}l.m=t,e=[],l.O=function(t,o,n,s){if(!o){var a=1/0;for(m=0;m<e.length;m++){o=e[m][0],n=e[m][1],s=e[m][2];for(var r=!0,i=0;i<o.length;i++)(!1&s||a>=s)&&Object.keys(l.O).every((function(e){return l.O[e](o[i])}))?o.splice(i--,1):(r=!1,s<a&&(a=s));if(r){e.splice(m--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var m=e.length;m>0&&e[m-1][2]>s;m--)e[m]=e[m-1];e[m]=[o,n,s]},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},l.d=function(e,t){for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};l.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,s,a=o[0],r=o[1],i=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(n in r)l.o(r,n)&&(l.m[n]=r[n]);if(i)var m=i(l)}for(t&&t(o);c<a.length;c++)s=a[c],l.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return l.O(m)},o=self.webpackChunkotter_blocks=self.webpackChunkotter_blocks||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var n=l.O(void 0,[431],(function(){return l(14)}));n=l.O(n)}();