// Server-only — uses Node.js fs. Do NOT import in client components.
// Import types/constants from lib/articles-config.ts instead.
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import readingTime from 'reading-time';

export {
  ARTICLE_CATEGORIES,
  CATEGORY_META,
  formatDate,
  type ArticleCategory,
  type ArticleFrontmatter,
  type ArticleMeta,
  type Article,
} from './articles-config';

import { ARTICLE_CATEGORIES, type ArticleCategory, type ArticleFrontmatter, type ArticleMeta, type Article } from './articles-config';

const ARTICLES_DIR = path.join(process.cwd(), 'content/articles');

function getLangDir(lang: string): string {
  const p = path.join(ARTICLES_DIR, lang);
  // Fall back to 'id' if requested lang folder doesn't exist yet
  return fs.existsSync(p) ? p : path.join(ARTICLES_DIR, 'id');
}

function parseMeta(data: Record<string, any>, content: string, category: ArticleCategory, slug: string, lang: string): ArticleMeta {
  const stats = readingTime(content);
  return {
    ...(data as ArticleFrontmatter),
    category,
    slug,
    lang: (data.lang as string) ?? lang,
    readingTime: stats.text,
    canonicalId: (data.canonicalId as string) ?? slug,
  };
}

export function getAllArticles(lang = 'id'): ArticleMeta[] {
  const baseDir = getLangDir(lang);
  const articles: ArticleMeta[] = [];

  for (const category of ARTICLE_CATEGORIES) {
    const categoryPath = path.join(baseDir, category);
    if (!fs.existsSync(categoryPath)) continue;

    const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.md'));
    for (const file of files) {
      const slug = file.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(categoryPath, file), 'utf-8');
      const { data, content } = matter(raw);
      articles.push(parseMeta(data, content, category as ArticleCategory, slug, lang));
    }
  }

  return articles.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getArticlesByCategory(category: ArticleCategory, lang = 'id'): ArticleMeta[] {
  const categoryPath = path.join(getLangDir(lang), category);
  if (!fs.existsSync(categoryPath)) return [];

  return fs
    .readdirSync(categoryPath)
    .filter(f => f.endsWith('.md'))
    .map(file => {
      const slug = file.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(categoryPath, file), 'utf-8');
      const { data, content } = matter(raw);
      return parseMeta(data, content, category, slug, lang);
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function getArticleBySlug(
  category: string,
  slug: string,
  lang = 'id'
): Promise<Article | null> {
  const filePath = path.join(getLangDir(lang), category, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  const processed = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(content);

  return {
    ...(data as ArticleFrontmatter),
    category: category as ArticleCategory,
    slug,
    lang: (data.lang as string) ?? lang,
    readingTime: stats.text,
    canonicalId: (data.canonicalId as string) ?? slug,
    contentHtml: processed.toString(),
  };
}

export function getAllArticleSlugs(lang = 'id'): { category: string; slug: string }[] {
  // Strict — no fallback. Only returns slugs for actual files in this lang folder.
  const baseDir = path.join(ARTICLES_DIR, lang);
  if (!fs.existsSync(baseDir)) return [];
  const result: { category: string; slug: string }[] = [];
  for (const category of ARTICLE_CATEGORIES) {
    const categoryPath = path.join(baseDir, category);
    if (!fs.existsSync(categoryPath)) continue;
    fs.readdirSync(categoryPath)
      .filter(f => f.endsWith('.md'))
      .forEach(file => result.push({ category, slug: file.replace(/\.md$/, '') }));
  }
  return result;
}
