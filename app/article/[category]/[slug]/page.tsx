import { permanentRedirect } from 'next/navigation';

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export default async function ArticleSlugRedirect({ params }: Props) {
  const { category, slug } = await params;
  permanentRedirect(`/id/article/${category}/${slug}`);
}
