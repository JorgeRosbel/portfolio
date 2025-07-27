import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '@/consts';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('blog');

  const lines = [
    `# ${SITE_TITLE}`,
    ``,
    `> ${SITE_DESCRIPTION}`,
    ``,
    `## Blog articles`,
    ...posts.map(post => {
      const title = post.data.title ?? post.id;
      const url = new URL(`/blog/${post.id}/`, site!).href;
      return `- [${title}](${url})`;
    }),
    ``,
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
