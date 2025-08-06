import { c as createComponent, m as maybeRenderHead, r as renderTemplate, f as createAstro, g as renderComponent, k as renderScript, l as addAttribute } from './astro/server_CiYCKlPB.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import { S as SITE_TITLE } from './consts_D_uW4Mz9.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="dark:bg-dark-bg w-full bg-light-bg flex items-center justify-center px-4 fixed top-0 z-50"> <nav class="flex w-full max-w-[900px] items-center justify-between h-20 border-b dark:border-dark-text/10 border-light-text/10 px-8"> <a aria-label="Home" class="text-light-text dark:text-dark-text font-semibold text-2xl tracking-[3px]" href="/">${"<Jorge/>"}</a> <div class="flex h-full items-center justify-between gap-4"> <a aria-label="Github Profile" href="https://github.com/JorgeRosbel" target="_blank" class="hover:dark:bg-dark-text/10 hover:bg-light-text/10 p-2 rounded transition-all duration-200"> <svg viewBox="0 0 16 16" aria-hidden="true" width="22" height="22" class="dark:text-dark-text text-light-text opacity-70 transition-all duration-200 hover:opacity-100"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg> </a> <a aria-label="Linkedin Profile" href="https://www.linkedin.com/in/jorge-rosbel-cruz-arias-881989252/" target="_blank" class="hover:dark:bg-dark-text/10 hover:bg-light-text/10 p-2 rounded transition-all duration-200"> <svg viewBox="0 0 24 24" width="22" height="22" class="dark:text-dark-text text-light-text opacity-70 transition-all duration-200 hover:opacity-100" aria-hidden="true"> <path fill="currentColor" d="M20.45 20.45h-3.55v-5.4c0-1.29-.03-2.96-1.8-2.96-1.8 0-2.07 1.4-2.07 2.85v5.51H9.47V9h3.41v1.56h.05c.47-.89 1.62-1.83 3.34-1.83 3.57 0 4.23 2.35 4.23 5.4v6.32zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0z"></path> </svg> </a> <a aria-label="X Profile" href="https://x.com/jorgedevreact" target="_blank" class="hover:dark:bg-dark-text/10 hover:bg-light-text/10 p-2 rounded transition-all duration-200"> <svg class="dark:text-dark-text text-light-text opacity-70 transition-all duration-200 hover:opacity-100" viewBox="0 0 1200 1227" aria-hidden="true" width="18" height="18" xmlns="http://www.w3.org/2000/svg"> <path fill="currentColor" d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path> </svg> </a> <button aria-label="dark-mode-toggle" class="cursor-pointer opacity-70 transition-all duration-200 hover:opacity-100 hover:dark:bg-dark-text/10 hover:bg-light-text/10 p-2 rounded" id="dark-toggle"> <svg class="dark:text-dark-text text-light-text hidden dark:block hover:animate-spin" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <circle cx="12" cy="12" r="5" fill="currentColor"></circle> <g stroke="currentColor" stroke-width="2"> <line x1="12" y1="1" x2="12" y2="4"></line> <line x1="12" y1="20" x2="12" y2="23"></line> <line x1="1" y1="12" x2="4" y2="12"></line> <line x1="20" y1="12" x2="23" y2="12"></line> <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"></line> <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"></line> <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"></line> <line x1="17.66" y1="6.34" x2="19.78" y2="4.22"></line> </g> </svg> <svg class="dark:text-dark-text text-light-text dark:hidden block" viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <path fill="currentColor" d="M21 12.79A9 9 0 0 1 11.21 3
            7 7 0 1 0 21 12.79z"></path> </svg> </button> </div> </nav> </header>`;
}, "/home/rosbeldev/portfolio/src/components/Header.astro", void 0);

const FallbackImage = new Proxy({"src":"/_astro/blog-placeholder-1.Bx0Zcyzv.jpg","width":960,"height":480,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rosbeldev/portfolio/src/assets/blog-placeholder-1.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://jorgerosbel.vercel.app");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/home/rosbeldev/portfolio/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/rosbeldev/portfolio/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$Astro = createAstro("https://jorgerosbel.vercel.app");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = FallbackImage } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"${addAttribute(SITE_TITLE, "title")}${addAttribute(new URL("rss.xml", Astro2.site), "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image.src, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image.src, Astro2.url), "content")}><meta name="google-site-verification" content="jexHnJqMeboiqtGnWhlhbNEq_Y0Nh68RcJOCYYJVeZQ"><!-- <ClientRouter /> -->${renderComponent($$result, "Analytics", $$Index, {})}${renderScript($$result, "/home/rosbeldev/portfolio/src/components/BaseHead.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/rosbeldev/portfolio/src/components/BaseHead.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="w-full h-20 flex items-center justify-center text-light-text dark:text-dark-text"> <p>&copy; ${today.getFullYear()} Created with ❤️ by Jorge Rosbel</p> </footer>`;
}, "/home/rosbeldev/portfolio/src/components/Footer.astro", void 0);

export { $$BaseHead as $, $$Header as a, $$Footer as b };
