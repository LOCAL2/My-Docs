import Sidebar from './Sidebar';
import TableOfContents from './TableOfContents';

export default function DocsLayout({ children, headings = [], sidebarConfig = [], allDocs = [] }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar sidebarConfig={sidebarConfig} allDocs={allDocs} />
      
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-8 py-8">
          {children}
        </div>
      </main>
      
      <TableOfContents headings={headings} />
    </div>
  );
} 