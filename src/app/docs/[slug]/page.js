import { notFound } from 'next/navigation';
import { getDocBySlug, getAllDocs, compileMDXContent, extractHeadings } from '../../../../lib/mdx';
import DocsLayout from '../../../../components/DocsLayout';
import MDXContent from '../../../../components/MDXContent';
import DocNavigation from '../../../../components/DocNavigation';

export async function generateStaticParams() {
  const { siteConfig } = await import('../../../../config.mjs');
  const params = [];
  
  siteConfig.sidebar.forEach(section => {
    section.items.forEach(item => {
      const slug = item.href.replace('/docs/', '');
      params.push({ slug });
    });
  });
  
  return params;
}

export default async function DocPage({ params, searchParams }) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const doc = getDocBySlug(slug);
  
  if (!doc) {
    notFound();
  }

  const { siteConfig } = await import('../../../../config.mjs');
  const allDocs = getAllDocs();
  const compiledContent = await compileMDXContent(doc.content);
  const headings = extractHeadings(doc.content);

  // รับ search parameters
  const searchTerm = resolvedSearchParams?.search;
  const searchIndex = resolvedSearchParams?.index;

  return (
    <DocsLayout headings={headings} sidebarConfig={siteConfig.sidebar} allDocs={allDocs}>
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {doc.frontMatter.title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </h1>
          {doc.frontMatter.description && (
            <p className="text-xl text-gray-600">
              {doc.frontMatter.description}
            </p>
          )}
        </header>
        
        <MDXContent searchTerm={searchTerm} searchIndex={searchIndex}>
          {compiledContent}
        </MDXContent>

        <DocNavigation currentSlug={slug} sidebarConfig={siteConfig.sidebar} />
      </article>
    </DocsLayout>
  );
} 