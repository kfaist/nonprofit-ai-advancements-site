import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('posts');

  return rss({
    title: 'Nonprofit AI Advancements Blog',
    description: 'Stay informed about AI advancements for nonprofits.',
    site: new URL(import.meta.env.SITE).toString(),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `${import.meta.env.BASE_URL}blog/${post.slug}/`,
      pubDate: post.data.date
    })),
  });
}
