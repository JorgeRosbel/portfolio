import { p as prisma } from '../../chunks/prisma_DV7qvZ4L.mjs';
export { renderers } from '../../renderers.mjs';

async function GET({ url }) {
  const slug = url.searchParams.get("slug");
  if (!slug) {
    return new Response(JSON.stringify({ error: "Missing slug" }), { status: 400 });
  }
  const post = await prisma.post.findUnique({
    where: { slug },
    select: { likes: true }
  });
  return new Response(JSON.stringify({ likes: post?.likes ?? 0 }));
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
