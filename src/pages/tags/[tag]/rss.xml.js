import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const tag = context.params.tag;
  const posts = (await getCollection('posts')).filter(
    (p) => !p.data.draft && (p.data.tags ?? []).includes(tag),
  );
  const site = import.meta.env.SITE;
  const siteName = import.meta.env.PUBLIC_SITE_NAME ?? 'Nonprofit AI Advancements';
  return rss({
    title: `${tag} | ${siteName}`,
    description: `Posts tagged ${tag} on ${siteName}`,
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `${import.meta.env.BASE_URL}blog/${post.slug}/`,
      pubDate: new Date(post.data.date),
    })),
  });
}
