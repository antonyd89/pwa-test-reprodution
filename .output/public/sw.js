if(!self.define){let e,n={};const s=(s,r)=>(s=new URL(s+".js",r).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,l)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(n[i])return;let u={};const o=e=>s(e,i),c={module:{uri:i},exports:u,require:o};n[i]=Promise.all(r.map((e=>c[e]||o(e)))).then((e=>(l(...e),u)))}}define(["./workbox-aff5ef07"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_nuxt/_...slug_.65103127.css",revision:null},{url:"_nuxt/_...slug_.779f60c9.js",revision:null},{url:"_nuxt/builds/latest.json",revision:"b766df14c41ca304552904b61ce70b14"},{url:"_nuxt/builds/meta/fedb5001-7edb-42d5-9ec7-da554eefb145.json",revision:null},{url:"_nuxt/entry.c7472fce.js",revision:null},{url:"_nuxt/error-404.7fc72018.css",revision:null},{url:"_nuxt/error-404.f957ad7c.js",revision:null},{url:"_nuxt/error-500.7c268c83.js",revision:null},{url:"_nuxt/error-500.c5df6088.css",revision:null},{url:"_nuxt/vue.f36acd1f.fddfb3e8.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"_payload.json",revision:"019d305ad3312192dbbabb2717163bfd"},{url:"/",revision:"62e6fbf7dd6dcd6242c2035186337b8d"},{url:"pwa-icon.png",revision:"d39f4a78ff15e16bfd0c02012a83d94a"},{url:"manifest.webmanifest",revision:"07db265060c1bcab832ab5e5fe58ba05"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/"),{allowlist:[/^\/*/]})),e.registerRoute((({sameOrigin:e,request:n})=>e&&"navigate"===n.mode),new e.NetworkFirst({cacheName:"company-name-es-cached-v2",plugins:[new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:604800}),new e.CacheableResponsePlugin({statuses:[200]}),{handlerDidError:async({state:e})=>null!=e&&e.fallback?Response.redirect("/",302):void 0,cacheWillUpdate:async({response:e})=>200===(null==e?void 0:e.status)?e:null,handlerWillRespond:async e=>{e.response||(null!=e.state||(e.state={}),e.state.fallback=!0);return e.response}}]}),"GET"),e.registerRoute((({url:e})=>e.pathname.endsWith(".css")),new e.NetworkFirst({cacheName:"company-name-es-css-v2",plugins:[new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:604800}),new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute((({url:e})=>e.pathname.endsWith(".png")),new e.NetworkFirst({cacheName:"company-name-es-images-v2",plugins:[new e.ExpirationPlugin({maxAgeSeconds:604800})]}),"GET")}));