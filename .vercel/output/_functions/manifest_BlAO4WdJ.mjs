import 'piccolore';
import { o as decodeKey } from './chunks/astro/server_CoGbQa_M.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Bf4tCZ5p.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/code/icone/","cacheDir":"file:///C:/code/icone/node_modules/.astro/","outDir":"file:///C:/code/icone/dist/","srcDir":"file:///C:/code/icone/src/","publicDir":"file:///C:/code/icone/public/","buildClientDir":"file:///C:/code/icone/dist/client/","buildServerDir":"file:///C:/code/icone/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contacts/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contacts","isIndex":true,"type":"page","pattern":"^\\/contacts\\/?$","segments":[[{"content":"contacts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacts/index.astro","pathname":"/contacts","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"test/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/test","isIndex":true,"type":"page","pattern":"^\\/test\\/?$","segments":[[{"content":"test","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/test/index.astro","pathname":"/test","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.iconeht.com/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/code/icone/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/blog/[post]@_@astro":"pages/blog/_post_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/contacts/index@_@astro":"pages/contacts.astro.mjs","\u0000@astro-page:src/pages/project/[slug]@_@astro":"pages/project/_slug_.astro.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astro-page:src/pages/test/index@_@astro":"pages/test.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BlAO4WdJ.mjs","C:/code/icone/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_N0hkoOkV.mjs","C:/code/icone/src/components/gallery":"_astro/gallery.DSKT9p1N.js","C:/code/icone/src/layouts/Navbar2":"_astro/Navbar2.BLfWxHoR.js","@astrojs/react/client.js":"_astro/client.BhqKvtnv.js","C:/code/icone/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.C1ZnLtef.js","C:/code/icone/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.CZaeXbjb.js","C:/code/icone/node_modules/sanity/lib/_chunks-es/resources6.mjs":"_astro/resources6.BHmPcXiL.js","C:/code/icone/node_modules/sanity/lib/_chunks-es/VideoPlayer.mjs":"_astro/VideoPlayer.BurCTzGn.js","C:/code/icone/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.D0lCJBjN.js","C:/code/icone/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.DwDD1pJ6.js","C:/code/icone/node_modules/sanity/lib/_chunks-es/resources5.mjs":"_astro/resources5.YFWUn7KL.js","C:/code/icone/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.B4-ZO41x.js","C:/code/icone/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.c8kWaT_U.js","C:/code/icone/node_modules/sanity/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.BlhZKMeS.js","C:/code/icone/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.CzhLRXXC.js","C:/code/icone/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.CDshXaQy.js","C:/code/icone/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.DylcIUiS.js","C:/code/icone/node_modules/sanity/lib/_chunks-es/resources7.mjs":"_astro/resources7.1zOZyrcp.js","C:/code/icone/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.TcKtUq_d.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_post_.gj5Ul8Jf.css","/favicon.svg","/placeholder.svg","/favicon/apple-touch-icon.png","/favicon/favicon-96x96.png","/favicon/favicon.ico","/favicon/favicon.svg","/favicon/site.webmanifest","/favicon/web-app-manifest-192x192.png","/favicon/web-app-manifest-512x512.png","/_astro/browser.6NsdFzuf.js","/_astro/client.BhqKvtnv.js","/_astro/client.Bldzs7uH.js","/_astro/gallery.DSKT9p1N.js","/_astro/image-url.umd.CmM9KNG9.js","/_astro/index.CoQRvKGO.js","/_astro/index.CzhLRXXC.js","/_astro/index2.CDshXaQy.js","/_astro/index3.DylcIUiS.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/Navbar2.BLfWxHoR.js","/_astro/refractor.BlhZKMeS.js","/_astro/resources.DwDD1pJ6.js","/_astro/resources2.CZaeXbjb.js","/_astro/resources3.B4-ZO41x.js","/_astro/resources4.D0lCJBjN.js","/_astro/resources5.YFWUn7KL.js","/_astro/resources6.BHmPcXiL.js","/_astro/resources7.1zOZyrcp.js","/_astro/stegaEncodeSourceMap.C1ZnLtef.js","/_astro/studio-component.C8v9fSbI.js","/_astro/studio-component.TcKtUq_d.js","/_astro/VideoPlayer.BurCTzGn.js","/_astro/ViteDevServerStopped.c8kWaT_U.js","/_astro/fonts/233f952ab2955996.woff2","/_astro/fonts/863c6d4ebf55aa09.woff2","/_astro/fonts/8ba4c8c86e349652.woff","/_astro/fonts/adb31d983d05f544.woff","/blog/index.html","/contacts/index.html","/test/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"WTrJXGGmKAbWInlD6S+9x4n/JROszatXtpk+EtJlQ1Q="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
