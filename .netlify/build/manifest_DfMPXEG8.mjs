import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { y as NOOP_MIDDLEWARE_HEADER, z as decodeKey } from './chunks/astro/server_CUjydLEr.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/","cacheDir":"file:///Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/node_modules/.astro/","outDir":"file:///Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/dist/","srcDir":"file:///Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/src/","publicDir":"file:///Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/public/","buildClientDir":"file:///Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/dist/","buildServerDir":"file:///Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"500.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/500","isIndex":false,"type":"page","pattern":"^\\/500\\/?$","segments":[[{"content":"500","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/500.astro","pathname":"/500","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"cart/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cart","isIndex":true,"type":"page","pattern":"^\\/cart\\/?$","segments":[[{"content":"cart","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cart/index.astro","pathname":"/cart","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"demo/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/demo","isIndex":false,"type":"page","pattern":"^\\/demo\\/?$","segments":[[{"content":"demo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/demo.astro","pathname":"/demo","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"faq/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/faq","isIndex":false,"type":"page","pattern":"^\\/faq\\/?$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"my-account/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/my-account","isIndex":false,"type":"page","pattern":"^\\/my-account\\/?$","segments":[[{"content":"my-account","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/my-account.astro","pathname":"/my-account","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"pages/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/pages","isIndex":true,"type":"page","pattern":"^\\/pages\\/?$","segments":[[{"content":"pages","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pages/index.astro","pathname":"/pages","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"products/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/products","isIndex":true,"type":"page","pattern":"^\\/products\\/?$","segments":[[{"content":"products","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/products/index.astro","pathname":"/products","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"shop/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/shop","isIndex":true,"type":"page","pattern":"^\\/shop\\/?$","segments":[[{"content":"shop","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/shop/index.astro","pathname":"/shop","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"success/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/success","isIndex":false,"type":"page","pattern":"^\\/success\\/?$","segments":[[{"content":"success","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/success.astro","pathname":"/success","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://jameer.online","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/src/pages/blog/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/src/pages/blog/author/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/author/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/src/pages/blog/author/[author]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/author/[author]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/src/pages/blog/category/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/category/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/src/pages/blog/category/[category]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/category/[category]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/src/pages/blog/tag/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/tag/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/src/pages/blog/tag/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/tag/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/src/pages/500.astro",{"propagation":"none","containsHead":true}],["/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/src/pages/cart/index.astro",{"propagation":"none","containsHead":true}],["/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/src/pages/demo.astro",{"propagation":"none","containsHead":true}],["/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/src/pages/faq.astro",{"propagation":"none","containsHead":true}],["/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/src/pages/my-account.astro",{"propagation":"none","containsHead":true}],["/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/src/pages/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/src/pages/products/index.astro",{"propagation":"none","containsHead":true}],["/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/src/pages/shop/index.astro",{"propagation":"none","containsHead":true}],["/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/src/pages/success.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/500@_@astro":"pages/500.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/author/[author]/[...page]@_@astro":"pages/blog/author/_author_/_---page_.astro.mjs","\u0000@astro-page:src/pages/blog/author/[...page]@_@astro":"pages/blog/author/_---page_.astro.mjs","\u0000@astro-page:src/pages/blog/category/[category]/[...page]@_@astro":"pages/blog/category/_category_/_---page_.astro.mjs","\u0000@astro-page:src/pages/blog/category/[...page]@_@astro":"pages/blog/category/_---page_.astro.mjs","\u0000@astro-page:src/pages/blog/tag/[tag]/[...page]@_@astro":"pages/blog/tag/_tag_/_---page_.astro.mjs","\u0000@astro-page:src/pages/blog/tag/[...page]@_@astro":"pages/blog/tag/_---page_.astro.mjs","\u0000@astro-page:src/pages/blog/[...page]@_@astro":"pages/blog/_---page_.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/cart/index@_@astro":"pages/cart.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/demo@_@astro":"pages/demo.astro.mjs","\u0000@astro-page:src/pages/faq@_@astro":"pages/faq.astro.mjs","\u0000@astro-page:src/pages/my-account@_@astro":"pages/my-account.astro.mjs","\u0000@astro-page:src/pages/pages/index@_@astro":"pages/pages.astro.mjs","\u0000@astro-page:src/pages/products/index@_@astro":"pages/products.astro.mjs","\u0000@astro-page:src/pages/shop/index@_@astro":"pages/shop.astro.mjs","\u0000@astro-page:src/pages/success@_@astro":"pages/success.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DfMPXEG8.mjs","/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_DYh32j1E.mjs","/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DrVYK5fv.mjs","/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/src/components/scripts/LocalScript.astro?astro&type=script&index=0&lang.ts":"_astro/LocalScript.astro_astro_type_script_index_0_lang.CxYGIdHd.js","/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","astro:scripts/page.js":"_astro/page.BvKxy2Uc.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/src/components/scripts/LocalScript.astro?astro&type=script&index=0&lang.ts","const t=()=>{const a=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting&&n.target.classList.add(\"scroll-animated\")})});document.querySelectorAll(\".scroll-animation [data-scroll-animate]\").forEach(e=>{a.observe(e)})};document.addEventListener(\"DOMContentLoaded\",()=>{t()});document.addEventListener(\"astro:page-loaded\",()=>{t()});document.addEventListener(\"astro:after-swap\",()=>{t()});"]],"assets":["/_astro/latest-blog-1.UF7H7mBj.jpg","/_astro/latest-blog-3._3G9IGpR.jpg","/_astro/latest-blog-2.CgGsjkHO.jpg","/_astro/ibm-plex-sans-cyrillic-ext-wght-normal.d45eAU9y.woff2","/_astro/ibm-plex-sans-greek-wght-normal.CmyJS8uq.woff2","/_astro/ibm-plex-sans-cyrillic-wght-normal.BAAhND-U.woff2","/_astro/ibm-plex-sans-latin-ext-wght-normal.CIII54If.woff2","/_astro/ibm-plex-sans-latin-wght-normal.IvpUvPa2.woff2","/_astro/ibm-plex-sans-vietnamese-wght-normal.Dg1JeJN0.woff2","/_astro/josefin-sans-vietnamese-wght-normal.PFa5PiBn.woff2","/_astro/josefin-sans-latin-ext-wght-normal.D7uTKLaj.woff2","/_astro/lato-latin-ext-400-normal.C8eBZ-j2.woff2","/_astro/josefin-sans-latin-wght-normal.Y7p7x_b-.woff2","/_astro/lato-latin-400-normal.BEhtfm5r.woff2","/_astro/1.BdfcEgwT.png","/_astro/3.BjoOb3OV.png","/_astro/2.DQnJzLzI.png","/_astro/4.DQjcHESX.png","/_astro/5.CFbu0LlM.png","/_astro/8.BDmJjWqC.png","/_astro/11.raNNi1EI.png","/_astro/7.CRMTtSz5.png","/_astro/13.Ci9P_LnF.png","/_astro/9.C0KGUAMv.png","/_astro/6.DOf8SInC.png","/_astro/lato-latin-400-normal.B11PyLys.woff","/_astro/10.CKWLQd0s.png","/_astro/15.zL3rNjx0.png","/_astro/12.v2cNTfOt.png","/_astro/14.OqxEei1k.png","/_astro/dots.VocWcULc.svg","/_astro/chevron-right.VZA6fvvU.svg","/_astro/_page_.D1WmQ-WO.css","/favicon.svg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","/_astro/page.BvKxy2Uc.js","/blog/blog-1.png","/blog/blog-2.png","/blog/blog-3.png","/_astro/page.BvKxy2Uc.js","/404.html","/500.html","/about/index.html","/cart/index.html","/contact/index.html","/demo/index.html","/faq/index.html","/my-account/index.html","/pages/index.html","/products/index.html","/shop/index.html","/success/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Wuy6llJWfHhqElzeKQGoKg+cpAvi0idBtrOsmQD5X64=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/jamalmohamedameer/Documents/astro-sites/astro-hekto/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
