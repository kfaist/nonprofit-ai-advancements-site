import type { CollectionEntry } from 'astro:content';

/**
 * Compute related posts using a precomputed related.json if available,
 * otherwise fall back to tag overlap.
 */
export async function getRelatedPosts(
  currentSlug: string,
  allPosts: CollectionEntry<'posts'>[],
): Promise<CollectionEntry<'posts'>[]> {
  let relatedMap: Record<string, string[]> = {};
  try {
    relatedMap = (await import('../../data/related.json')).default;
  } catch {
    // ignore if missing
  }

  const current = allPosts.find((p) => p.slug === currentSlug);
  if (!current) return [];

  if (relatedMap[currentSlug]) {
    return relatedMap[currentSlug]
      .map((slug) => allPosts.find((p) => p.slug === slug))
      .filter(Boolean)
      .slice(0, 3) as CollectionEntry<'posts'>[];
  }

  const currentTags = current.data.tags ?? [];
  return allPosts
    .filter((p) => p.slug !== currentSlug)
    .map((p) => {
      const overlap =
        p.data.tags?.filter((t) => currentTags.includes(t)).length ?? 0;
      return { post: p, score: overlap };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((x) => x.post);
}
