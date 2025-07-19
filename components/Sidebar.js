'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Search from './Search';

export default function Sidebar({ sidebarConfig = [], allDocs = [] }) {
  const pathname = usePathname();

  return (
    <div className="w-full lg:w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-4 lg:p-6">
        <div className="mb-6 lg:mb-8">
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Documentation</h1>
          <p className="text-sm text-gray-600 mb-4">Complete guide to get started</p>
          
          <Search allDocs={allDocs} />
        </div>
        
        <nav className="space-y-6 lg:space-y-8">
          {sidebarConfig.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <div className="mb-3 lg:mb-4">
                <h2 className="text-base lg:text-lg font-semibold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {section.title}
                </h2>
                <div className="w-10 lg:w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mt-2"></div>
              </div>
              
              <ul className="space-y-1 lg:space-y-2">
                {section.items.map((item, itemIndex) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={itemIndex}>
                      <Link
                        href={item.href}
                        className={`block px-2 lg:px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                          isActive
                            ? 'bg-blue-50 text-blue-700 font-medium border-l-4 border-blue-500 shadow-sm'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:border-l-4 hover:border-gray-300'
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
} 