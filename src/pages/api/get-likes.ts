import { prisma } from '../../utils/prisma';

export async function GET({ url }: { url: URL }) {
  const slug = url.searchParams.get('slug');
  if (!slug) {
    return new Response(JSON.stringify({ error: 'Missing slug' }), { status: 400 });
  }

  const post = await prisma.post.findUnique({
    where: { slug },
    select: { likes: true },
  });

  return new Response(JSON.stringify({ likes: post?.likes ?? 0 }));
}
