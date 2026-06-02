import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import readingTime from 'reading-time';

const ARTICLES_DIR = path.join(process.cwd(), 'content/articles');

export const ARTICLE_CATEGORIES = [
  'olahraga',
  'keuangan',
  'produktivitas',
  'ibadah',
  'saham-syariah',
  'tips',
] as const;

export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[number];

export const CATEGORY_META: Record<ArticleCategory, { label: string; emoji: string; color: string }> = {
  olahraga:       { label: 'Olahraga',       emoji: '⚽', color: 'emerald' },
  keuangan:       { label: 'Keuangan',       emoji: '💰', color: 'blue' },
  produktivitas:  { label: 'Produktivitas',  emoji: '🎯', color: 'purple' },
  ibadah:         { label: 'Ibadah',         emoji: '🕌', color: 'teal' },
  'saham-syariah':{ label: 'Saham Syariah',  emoji: '📈', color: 'amber' },
  tips:           { label: 'Tips & Trik',    emoji: '💡', color: 'rose' },
};

export interface ArticleFrontmatter {
  title: string;
  description: string;
  category: ArticleCategory;
  publishedAt: string;
  tags?: string[];
  relatedTool?: string;   // tool ID from TOOLS_DATA (e.g. "budget", "futsal")
  crossPromo?: boolean;   // show SmartScreener widget
  lang?: string;
  author?: string;
}

export interface ArticleMeta extends ArticleFrontmatter {
  slug: string;
  readingTime: string;
}

export interface Article extends ArticleMeta {
  contentHtml: string;
}

function ensureDir(): boolean {
  return fs.existsSync(ARTICLES_DIR);
}

export function getAllArticles(): ArticleMeta[] {
  if (!ensureDir()) return [];
  const articles: ArticleMeta[] = [];

  for (const category of ARTICLE_CATEGORIES) {
    const categoryPath = path.join(ARTICLES_DIR, category);
    if (!fs.existsSync(categoryPath)) continue;

    const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.md'));
    for (const file of files) {
      const slug = file.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(categoryPath, file), 'utf-8');
      const { data, content } = matter(raw);
      const stats = readingTime(content);
      articles.push({
        ...(data as ArticleFrontmatter),
        category: category as ArticleCategory,
        slug,
        readingTime: stats.text,
      });
    }
  }

  return articles.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getArticlesByCategory(category: ArticleCategory): ArticleMeta[] {
  const categoryPath = path.join(ARTICLES_DIR, category);
  if (!fs.existsSync(categoryPath)) return [];

  const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.md'));
  return files
    .map(file => {
      const slug = file.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(categoryPath, file), 'utf-8');
      const { data, content } = matter(raw);
      const stats = readingTime(content);
      return {
        ...(data as ArticleFrontmatter),
        category,
        slug,
        readingTime: stats.text,
      };
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function getArticleBySlug(
  category: string,
  slug: string
): Promise<Article | null> {
  const filePath = path.join(ARTICLES_DIR, category, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  const processed = await remark().use(remarkHtml, { sanitize: false }).process(content);
  const contentHtml = processed.toString();

  return {
    ...(data as ArticleFrontmatter),
    category: category as ArticleCategory,
    slug,
    readingTime: stats.text,
    contentHtml,
  };
}

export function getAllArticleSlugs(): { category: string; slug: string }[] {
  if (!ensureDir()) return [];
  const result: { category: string; slug: string }[] = [];
  for (const category of ARTICLE_CATEGORIES) {
    const categoryPath = path.join(ARTICLES_DIR, category);
    if (!fs.existsSync(categoryPath)) continue;
    const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.md'));
    files.forEach(file => result.push({ category, slug: file.replace(/\.md$/, '') }));
  }
  return result;
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
}
