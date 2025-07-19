import Sidebar from './Sidebar';
import TableOfContents from './TableOfContents';
import MobileSidebarToggle from './MobileSidebarToggle';

export default function DocsLayout({ children, headings = [], sidebarConfig = [], allDocs = [] }) {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50">
      {/* Mobile Sidebar Toggle Component */}
      <MobileSidebarToggle />
      
      {/* Sidebar - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block">
        <Sidebar sidebarConfig={sidebarConfig} allDocs={allDocs} />
      </div>
      
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden bg-white border-b border-gray-200 p-4">
        <button
          id="mobile-sidebar-toggle"
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span>Menu</span>
        </button>
      </div>
      
      {/* Mobile Sidebar Overlay */}
      <div
        id="mobile-sidebar-overlay"
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden hidden"
      >
        <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Documentation</h2>
            <button
              id="mobile-sidebar-close"
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="overflow-y-auto h-full">
            <Sidebar sidebarConfig={sidebarConfig} allDocs={allDocs} />
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          {children}
        </div>
      </main>
      
      {/* Table of Contents - Hidden on mobile, visible on desktop */}
      <div className="hidden xl:block">
        <TableOfContents headings={headings} />
      </div>
    </div>
  );
} 