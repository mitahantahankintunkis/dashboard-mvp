import{r as e,o as t,c as o,a,b as n,F as s,d as r,w as i,e as l,t as p,p as u,f as c,g as d,h as _,i as m}from"./vendor.3c6f3362.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const f={},h=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in f)return;f[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":"modulepreload",t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e())):e()};var E=(e,t)=>{for(const[o,a]of t)e[o]=a;return e};var y=E({},[["render",function(n,s){const r=e("router-view");return t(),o("main",null,[a(r)])}],["__scopeId","data-v-bf2f6ff2"]]);const k=(e=>(u("data-v-04e061eb"),e=e(),c(),e))((()=>n("div",{class:"divider-cont"},[n("div",{class:"divider"})],-1))),P=l("Asetukset");var g=E({setup(u){const c=[{label:"Yleiskatsaus",path:"/yleiskatsaus"},{label:"Työpaikat",path:"/tyopaikat"},{label:"Yritystiedot",path:"/yritystiedot"},{label:"Koulutukset",path:"/koulutukset"},{label:"Palvelukatalogi",path:"/palvelukatalogi"},{label:"Tiedottaminen",path:"/tiedottaminen"},{label:"Oppimisen seuranta",path:"/oppimisen-seuranta"}];return(u,d)=>{const _=e("router-link");return t(),o("aside",null,[n("ul",null,[(t(),o(s,null,r(c,(e=>n("li",{key:e},[a(_,{to:e.path},{default:i((()=>[l(p(e.label),1)])),_:2},1032,["to"])]))),64)),k,n("li",null,[a(_,{to:"/asetukset"},{default:i((()=>[P])),_:1})])])])}}},[["__scopeId","data-v-04e061eb"]]);const v={class:"content"},b={setup:e=>(e,n)=>(t(),o("div",v,[a(g),a(y)]))},T=[{path:"/",component:()=>h((()=>import("./CompanyPage.9845af08.js")),["assets/CompanyPage.9845af08.js","assets/CompanyPage.597565a4.css","assets/vendor.3c6f3362.js"])},{path:"/yritystiedot",component:()=>h((()=>import("./CompanyPage.9845af08.js")),["assets/CompanyPage.9845af08.js","assets/CompanyPage.597565a4.css","assets/vendor.3c6f3362.js"])},{path:"/tyopaikat",component:()=>h((()=>import("./JobsPage.76150e67.js")),["assets/JobsPage.76150e67.js","assets/JobsPage.5a5f9c49.css","assets/vendor.3c6f3362.js"])},{path:"/tyopaikat/:id",component:()=>h((()=>import("./JobApplicantsPage.36921fbf.js")),["assets/JobApplicantsPage.36921fbf.js","assets/JobApplicantsPage.92283513.css","assets/vendor.3c6f3362.js"])},{path:"/koulutukset",component:()=>h((()=>import("./EducationPage.361918dc.js")),["assets/EducationPage.361918dc.js","assets/EducationPage.2733a4d4.css","assets/vendor.3c6f3362.js"])},{path:"/koulutukset/:id",component:()=>h((()=>import("./EducationGroup.bb512287.js")),["assets/EducationGroup.bb512287.js","assets/EducationGroup.d02e295e.css","assets/vendor.3c6f3362.js"])},{path:"/yleiskatsaus",component:()=>h((()=>import("./TodoPage.184adac9.js")),["assets/TodoPage.184adac9.js","assets/TodoPage.c991a7b2.css","assets/vendor.3c6f3362.js"])},{path:"/palvelukatalogi",component:()=>h((()=>import("./TodoPage.184adac9.js")),["assets/TodoPage.184adac9.js","assets/TodoPage.c991a7b2.css","assets/vendor.3c6f3362.js"])},{path:"/tiedottaminen",component:()=>h((()=>import("./TodoPage.184adac9.js")),["assets/TodoPage.184adac9.js","assets/TodoPage.c991a7b2.css","assets/vendor.3c6f3362.js"])},{path:"/oppimisen-seuranta",component:()=>h((()=>import("./TodoPage.184adac9.js")),["assets/TodoPage.184adac9.js","assets/TodoPage.c991a7b2.css","assets/vendor.3c6f3362.js"])},{path:"/asetukset",component:()=>h((()=>import("./TodoPage.184adac9.js")),["assets/TodoPage.184adac9.js","assets/TodoPage.c991a7b2.css","assets/vendor.3c6f3362.js"])}],L=d({history:_(),routes:T});m(b).use(L).mount("#app");export{E as _};
