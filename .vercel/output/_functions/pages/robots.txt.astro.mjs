export { renderers } from '../renderers.mjs';

function GET() {
  const body = `
User-agent: *
Disallow:

Sitemap: ${"https://jorgerosbel.vercel.app"}/sitemap-index.xml
`.trim();
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain"
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
