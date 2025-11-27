import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DK_CZfRZ.mjs';
import { manifest } from './manifest_BlAO4WdJ.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/blog/_post_.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/contacts.astro.mjs');
const _page4 = () => import('./pages/project/_slug_.astro.mjs');
const _page5 = () => import('./pages/studio/_---params_.astro.mjs');
const _page6 = () => import('./pages/test.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog/[post].astro", _page1],
    ["src/pages/blog/index.astro", _page2],
    ["src/pages/contacts/index.astro", _page3],
    ["src/pages/project/[slug].astro", _page4],
    ["node_modules/@sanity/astro/dist/studio/studio-route.astro", _page5],
    ["src/pages/test/index.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "a70e8e2b-f069-42fd-9524-539a9298defa",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
