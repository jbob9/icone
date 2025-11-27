import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as l}from"./index.CoQRvKGO.js";/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),j=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,r)=>r?r.toUpperCase():a.toLowerCase()),c=s=>{const t=j(s);return t.charAt(0).toUpperCase()+t.slice(1)},m=(...s)=>s.filter((t,a,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===a).join(" ").trim(),g=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=l.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:o="",children:n,iconNode:h,...i},f)=>l.createElement("svg",{ref:f,...y,width:t,height:t,stroke:s,strokeWidth:r?Number(a)*24/Number(t):a,className:m("lucide",o),...!n&&!g(i)&&{"aria-hidden":"true"},...i},[...h.map(([u,p])=>l.createElement(u,p)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(s,t)=>{const a=l.forwardRef(({className:r,...o},n)=>l.createElement(v,{ref:n,iconNode:t,className:m(`lucide-${b(c(s))}`,`lucide-${s}`,r),...o}));return a.displayName=c(s),a};/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],k=x("menu",N);/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],d=x("x",C),I=()=>{const[s,t]=l.useState(!1),a=()=>t(o=>!o),r=()=>t(!1);return e.jsxs("nav",{className:"w-full flex items-center justify-between py-6 px-6 md:px-12 bg-white relative",children:[e.jsx("div",{className:"flex items-center",children:e.jsxs("a",{href:"/",className:"font-bold text-xl flex items-center",children:[e.jsx("span",{className:"text-[#c4ff00] mr-1",children:"●"})," Icone"]})}),e.jsxs("div",{className:"hidden md:flex space-x-8 items-center",children:[e.jsx("a",{href:"#insights",className:"text-sm font-medium hover:text-gray-500 transition-colors",children:"Insights"}),e.jsx("a",{href:"#projects",className:"text-sm font-medium hover:text-gray-500 transition-colors",children:"Projects"}),e.jsx("a",{href:"#innovation",className:"text-sm font-medium hover:text-gray-500 transition-colors",children:"Innovation"}),e.jsx("a",{href:"#faq",className:"text-sm font-medium hover:text-gray-500 transition-colors",children:"FAQ"}),e.jsxs("a",{href:"/contacts",className:"rounded-full hover:border-gray-500 border border-neutral-600 text-black hover:bg-black/5 p-1.5",children:["Contacts ",e.jsx("span",{className:"ml-1",children:"→"})]})]}),e.jsx("div",{className:"md:hidden",children:e.jsxs("button",{onClick:a,"aria-expanded":s,children:[e.jsx("span",{className:"sr-only",children:"Open menu"}),s?e.jsx(d,{}):e.jsx(k,{})]})}),s&&e.jsx("div",{className:"fixed inset-0 z-40 bg-black/40",onClick:r,children:e.jsxs("div",{className:"absolute top-0 right-0 w-64 bg-white shadow-lg h-full flex flex-col p-6 space-y-6",onClick:o=>o.stopPropagation(),children:[e.jsx("button",{className:"self-end mb-4",onClick:r,"aria-label":"Close menu",children:e.jsx(d,{})}),e.jsx("a",{href:"/#insights",className:"text-base font-medium hover:text-gray-500 transition-colors",onClick:r,children:"Insights"}),e.jsx("a",{href:"/#projects",className:"text-base font-medium hover:text-gray-500 transition-colors",onClick:r,children:"Projects"}),e.jsx("a",{href:"/#innovation",className:"text-base font-medium hover:text-gray-500 transition-colors",onClick:r,children:"Innovation"}),e.jsx("a",{href:"/#faq",className:"text-base font-medium hover:text-gray-500 transition-colors",onClick:r,children:"FAQ"}),e.jsxs("a",{href:"/contacts",className:"rounded-full hover:border-gray-500 border border-neutral-600 text-black hover:bg-black/5 p-1.5",children:["Contacts ",e.jsx("span",{className:"ml-1",children:"→"})]})]})})]})};export{I as default};
