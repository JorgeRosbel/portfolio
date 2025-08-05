import { BASE_URL } from 'astro:env/server';

export const getLikes = async (slug: string): Promise<number> => {
  if (!slug) {
    throw new Error('Missing slug');
  }

  const res = await fetch(`${BASE_URL}/api/get-likes?slug=${encodeURIComponent(slug)}`);
  if (!res.ok) {
    throw new Error(`Error fetching likes: ${await res.text()}`);
  }

  const { likes } = await res.json();
  return likes ?? 0;
};
