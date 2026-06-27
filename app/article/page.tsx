import { permanentRedirect } from 'next/navigation';

export default function ArticleIndexRedirect() {
  permanentRedirect('/id/article');
}
