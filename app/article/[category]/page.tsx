import { permanentRedirect } from 'next/navigation';

interface Props {
  params: Promise<{ category: string }>;
}

export default async function ArticleCategoryRedirect({ params }: Props) {
  const { category } = await params;
  permanentRedirect(`/id/article/${category}`);
}
