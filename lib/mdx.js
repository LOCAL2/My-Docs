import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';

const docsDirectory = path.join(process.cwd(), 'docs');

export function getDocBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(docsDirectory, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    frontMatter: data,
    content,
  };
}

export function getAllDocs() {
  const fileNames = fs.readdirSync(docsDirectory);
  const allDocsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const doc = getDocBySlug(slug);
      return doc;
    })
    .filter(Boolean);

  return allDocsData.sort((a, b) => {
    if (a.frontMatter.date && b.frontMatter.date) {
      return new Date(b.frontMatter.date) - new Date(a.frontMatter.date);
    }
    return 0;
  });
}

export async function compileMDXContent(content) {
  const { content: compiledContent } = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, rehypeHighlight],
      },
    },
  });

  return compiledContent;
}

export function extractHeadings(content) {
  const headingRegex = /^#{2,3}\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[0].match(/^#+/)[0].length;
    const text = match[1];
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    headings.push({
      level,
      text,
      id,
    });
  }

  return headings;
} 