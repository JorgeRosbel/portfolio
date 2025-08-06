import { p as prisma } from '../../chunks/prisma_DV7qvZ4L.mjs';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
  try {
    const { slug } = await request.json();
    if (!slug) {
      return new Response(JSON.stringify({ error: "Missing slug" }), { status: 400 });
    }
    const post = await prisma.post.update({
      where: { slug },
      data: { likes: { increment: 1 } },
      select: { likes: true }
    });
    return new Response(JSON.stringify({ likes: post.likes }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Error incrementing likes:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
