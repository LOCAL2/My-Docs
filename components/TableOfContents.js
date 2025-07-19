'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    // Reset active state when pathname changes
    setActiveId('');
  }, [pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -35% 0%' }
    );

    headings.forEach((heading) => {
      // Try to find element by id first, then by text content
      let element = document.getElementById(heading.id);
      
      if (!element) {
        // If no element with id found, try to find by text content
        const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        for (let h of allHeadings) {
          if (h.textContent.trim() === heading.text.trim()) {
            element = h;
            break;
          }
        }
      }
      
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings, pathname]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="w-64 bg-gray-50 border-l border-gray-200 h-screen overflow-y-auto">
      <div className="p-6">
        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
          On This Page
        </h2>
        <nav className="space-y-2">
          {headings.map((heading, index) => (
            <div
              key={index}
              className={`block w-full text-left text-sm transition-colors rounded px-2 py-1 ${
                activeId === heading.id
                  ? 'text-blue-600 font-medium bg-blue-50 border-l-2 border-blue-500'
                  : 'text-gray-600'
              } ${
                heading.level === 2
                  ? 'font-medium'
                  : 'ml-4 text-gray-500'
              }`}
            >
              {heading.text}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
} 