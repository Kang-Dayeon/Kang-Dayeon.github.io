if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>r(e,o),u={module:{uri:o},exports:l,require:t};s[o]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(n(...e),l)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vuestagram"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.0190a725.css",revision:null},{url:"/follower.json",revision:"cf804a1751bde611b0af79cd97ac57a3"},{url:"/img/my_profile.048541b5.jpeg",revision:null},{url:"/index.html",revision:"4fbe2e9b0db3ea94697734660e0eea7a"},{url:"/js/app.bbe84ff0.js",revision:null},{url:"/js/chunk-vendors.91d0ed01.js",revision:null},{url:"/manifest.json",revision:"6a1ad00dd7d473f746f3897d0ce8c52e"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
