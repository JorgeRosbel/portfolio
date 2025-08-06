import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Bk6YCpj1.mjs';
import { manifest } from './manifest_D3LE_BEB.mjs';

const serverIslandMap = new Map([
	['Banner', () => import('./chunks/Banner_BxwFj7YD.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/get-likes.astro.mjs');
const _page2 = () => import('./pages/api/set-likes.astro.mjs');
const _page3 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page4 = () => import('./pages/llms.txt.astro.mjs');
const _page5 = () => import('./pages/robots.txt.astro.mjs');
const _page6 = () => import('./pages/rss.xml.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/get-likes.ts", _page1],
    ["src/pages/api/set-likes.ts", _page2],
    ["src/pages/blog/[...slug].astro", _page3],
    ["src/pages/llms.txt.ts", _page4],
    ["src/pages/robots.txt.ts", _page5],
    ["src/pages/rss.xml.js", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3cedb6d0-ef5e-47eb-883c-a8f2cb6578f6",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
