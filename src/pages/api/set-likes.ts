// src/pages/api/increment-likes.ts
import { prisma } from '../../utils/prisma';

export async function POST({ request }: { request: Request }) {
  try {
    const { slug } = await request.json();
    if (!slug) {
      return new Response(JSON.stringify({ error: 'Missing slug' }), { status: 400 });
    }

    // Incrementa en 1 el campo 'likes'
    const post = await prisma.post.update({
      where: { slug },
      data: { likes: { increment: 1 } },
      select: { likes: true },
    });

    return new Response(JSON.stringify({ likes: post.likes }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Error incrementing likes:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
