'use client';

import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function DocNavigation({ currentSlug, sidebarConfig }) {
  // สร้าง array ของเอกสารตามลำดับใน config
  const allDocs = [];
  sidebarConfig.forEach(section => {
    section.items.forEach(item => {
      const slug = item.href.replace('/docs/', '');
      allDocs.push({
        slug,
        frontMatter: { title: item.title },
        href: item.href
      });
    });
  });

  // หาตำแหน่งของเอกสารปัจจุบัน
  const currentIndex = allDocs.findIndex(doc => doc.slug === currentSlug);
  
  // หาเอกสารก่อนหน้าและถัดไป
  const prevDoc = currentIndex > 0 ? allDocs[currentIndex - 1] : null;
  const nextDoc = currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null;

  if (!prevDoc && !nextDoc) {
    return null;
  }

  return (
    <div className="mt-16 pt-8 border-t border-gray-200">
      <div className="flex justify-between items-center">
        {prevDoc ? (
          <Link
            href={`/docs/${prevDoc.slug}`}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <ChevronLeftIcon className="w-4 h-4 mr-2" />
            <div className="text-left">
              <div className="text-xs text-gray-500">Previous</div>
              <div>{prevDoc.frontMatter.title}</div>
            </div>
          </Link>
        ) : (
          <div></div>
        )}

        {nextDoc ? (
          <Link
            href={`/docs/${nextDoc.slug}`}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <div className="text-right">
              <div className="text-xs text-gray-500">Next</div>
              <div>{nextDoc.frontMatter.title}</div>
            </div>
            <ChevronRightIcon className="w-4 h-4 ml-2" />
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
} 