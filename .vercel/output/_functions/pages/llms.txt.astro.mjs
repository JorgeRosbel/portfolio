import { g as getCollection, S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/consts_D_uW4Mz9.mjs';
export { renderers } from '../renderers.mjs';

const GET = async ({ site }) => {
  const posts = await getCollection("blog");
  const lines = [
    `# ${SITE_TITLE}`,
    ``,
    `> ${SITE_DESCRIPTION}`,
    ``,
    `## Blog articles`,
    ...posts.map((post) => {
      const title = post.data.title ?? post.id;
      const url = new URL(`/blog/${post.id}/`, site).href;
      return `- [${title}](${url})`;
    }),
    ``
  ];
  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
