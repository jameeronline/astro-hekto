import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DfMPXEG8.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/500.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/blog/author/_author_/_---page_.astro.mjs');
const _page4 = () => import('./pages/blog/author/_---page_.astro.mjs');
const _page5 = () => import('./pages/blog/category/_category_/_---page_.astro.mjs');
const _page6 = () => import('./pages/blog/category/_---page_.astro.mjs');
const _page7 = () => import('./pages/blog/tag/_tag_/_---page_.astro.mjs');
const _page8 = () => import('./pages/blog/tag/_---page_.astro.mjs');
const _page9 = () => import('./pages/blog/_---page_.astro.mjs');
const _page10 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page11 = () => import('./pages/cart.astro.mjs');
const _page12 = () => import('./pages/contact.astro.mjs');
const _page13 = () => import('./pages/demo.astro.mjs');
const _page14 = () => import('./pages/faq.astro.mjs');
const _page15 = () => import('./pages/my-account.astro.mjs');
const _page16 = () => import('./pages/pages.astro.mjs');
const _page17 = () => import('./pages/products.astro.mjs');
const _page18 = () => import('./pages/shop.astro.mjs');
const _page19 = () => import('./pages/success.astro.mjs');
const _page20 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/404.astro", _page0],
    ["src/pages/500.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/blog/author/[author]/[...page].astro", _page3],
    ["src/pages/blog/author/[...page].astro", _page4],
    ["src/pages/blog/category/[category]/[...page].astro", _page5],
    ["src/pages/blog/category/[...page].astro", _page6],
    ["src/pages/blog/tag/[tag]/[...page].astro", _page7],
    ["src/pages/blog/tag/[...page].astro", _page8],
    ["src/pages/blog/[...page].astro", _page9],
    ["src/pages/blog/[...slug].astro", _page10],
    ["src/pages/cart/index.astro", _page11],
    ["src/pages/contact.astro", _page12],
    ["src/pages/demo.astro", _page13],
    ["src/pages/faq.astro", _page14],
    ["src/pages/my-account.astro", _page15],
    ["src/pages/pages/index.astro", _page16],
    ["src/pages/products/index.astro", _page17],
    ["src/pages/shop/index.astro", _page18],
    ["src/pages/success.astro", _page19],
    ["src/pages/index.astro", _page20]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "db67a055-df2b-48c0-924c-6e0caa8f4382"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
