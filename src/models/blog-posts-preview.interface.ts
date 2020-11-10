/**
 * Describes the each item
 */
interface BlogPostPreview {
  title: string,
  slug: string,
  id: string,
  positive_reactions_count: string,
  published_at: string,
  social_image: string,
  description: string,
  url: string,
  tag_list: string,
  user: object,
}

export type { BlogPostPreview };
