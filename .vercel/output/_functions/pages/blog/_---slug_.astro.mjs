import { f as createAstro, c as createComponent, g as renderComponent, h as renderHead, i as renderSlot, r as renderTemplate } from '../../chunks/astro/server_CiYCKlPB.mjs';
import 'kleur/colors';
import { g as getCollection, r as renderEntry } from '../../chunks/consts_D_uW4Mz9.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../../chunks/Footer_DDMwtWs9.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://jorgerosbel.vercel.app");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { postData } = Astro2.props;
  return renderTemplate`<html lang="en" class="dark"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": postData.data.title, "description": postData.data.description })}${renderHead()}</head> <body class="dark:bg-dark-bg w-full bg-light-bg flex flex-col items-center"> ${renderComponent($$result, "Header", $$Header, {})} <main class="w-full max-w-[900px] flex flex-col items-center px-8"> <section class="mt-30 w-full max-w-[900px] prose dark:prose-invert fade-up"> ${renderSlot($$result, $$slots["default"])} </section> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/rosbeldev/portfolio/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro("https://jorgerosbel.vercel.app");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.id }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const posts = await getCollection("blog");
  const post = posts.find((p) => p.id === Astro2.params.slug);
  if (!post) throw new Error("Post no encontrado.");
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { "postData": post }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/home/rosbeldev/portfolio/src/pages/blog/[...slug].astro", void 0);

const $$file = "/home/rosbeldev/portfolio/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
