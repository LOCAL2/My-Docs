'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import 'prismjs/themes/prism-tomorrow.css';

export default function MDXContent({ children, searchTerm, searchIndex }) {
  const router = useRouter();

  useEffect(() => {
    // Add ids to headings that don't have them
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading) => {
      if (!heading.id) {
        const text = heading.textContent.trim();
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        heading.id = id;
      }
    });

    // Scroll to search term if provided
    if (searchTerm && searchIndex !== undefined) {
      console.log('Searching for:', searchTerm, 'at index:', searchIndex);
      
      setTimeout(() => {
        const content = document.querySelector('.prose');
        if (content) {
          // หา text ที่ตรงกับ search term
          const textContent = content.textContent;
          const searchTermLower = searchTerm.toLowerCase();
          const textLower = textContent.toLowerCase();
          
          console.log('Content length:', textContent.length);
          console.log('Search term found at:', textLower.indexOf(searchTermLower));
          
          // หา element ที่มี text ตรงกับ search term
          const walker = document.createTreeWalker(
            content,
            NodeFilter.SHOW_TEXT,
            null,
            false
          );

          let node;
          let foundNode = null;
          let foundIndex = -1;
          
          while (node = walker.nextNode()) {
            const text = node.textContent;
            const textLower = text.toLowerCase();
            const index = textLower.indexOf(searchTermLower);
            
            if (index !== -1) {
              foundNode = node;
              foundIndex = index;
              break;
            }
          }

          if (foundNode) {
            console.log('Found node:', foundNode.textContent.substring(0, 50));
            
            // สร้าง range และ highlight
            const range = document.createRange();
            range.setStart(foundNode, foundIndex);
            range.setEnd(foundNode, foundIndex + searchTerm.length);
            
            // Highlight the text
            const span = document.createElement('span');
            span.style.backgroundColor = '#fef3c7';
            span.style.padding = '2px 4px';
            span.style.borderRadius = '4px';
            span.style.transition = 'background-color 0.3s ease';
            span.style.display = 'inline';
            
            try {
              range.surroundContents(span);
              
              // Scroll to the highlighted text
              span.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });

              console.log('Scrolled to highlighted text');

              // Remove highlight after 3 seconds and clean URL
              setTimeout(() => {
                if (span.parentNode) {
                  span.parentNode.replaceChild(
                    document.createTextNode(span.textContent),
                    span
                  );
                  console.log('Removed highlight');
                }
                
                // Clean URL - remove search parameters
                const currentPath = window.location.pathname;
                router.replace(currentPath, { scroll: false });
                console.log('Cleaned URL:', currentPath);
              }, 3000);
            } catch (e) {
              console.error('Error highlighting text:', e);
              // If surroundContents fails, just scroll to the element
              foundNode.parentElement?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
              
              // Clean URL after scroll
              setTimeout(() => {
                const currentPath = window.location.pathname;
                router.replace(currentPath, { scroll: false });
                console.log('Cleaned URL after scroll:', currentPath);
              }, 1000);
            }
          } else {
            console.log('No matching text found');
            // Clean URL even if no text found
            setTimeout(() => {
              const currentPath = window.location.pathname;
              router.replace(currentPath, { scroll: false });
              console.log('Cleaned URL (no text found):', currentPath);
            }, 1000);
          }
        }
      }, 500); // เพิ่ม delay เพื่อให้ content render เสร็จ
    }

    // Debug: Check if headings have ids
    console.log('Found headings:', headings.length);
    headings.forEach((heading, index) => {
      console.log(`Heading ${index + 1}:`, {
        text: heading.textContent.trim(),
        id: heading.id,
        tagName: heading.tagName
      });
    });
  }, [searchTerm, searchIndex, router]);

  return (
    <div 
      className="prose prose-lg max-w-none font-mono bg-white p-8 rounded-lg shadow-sm border border-gray-200"
      style={{
        color: '#1a1a1a',
        '--tw-prose-body': '#1a1a1a',
        '--tw-prose-headings': '#000000',
        '--tw-prose-links': '#0066cc',
        '--tw-prose-bold': '#000000',
        '--tw-prose-counters': '#1a1a1a',
        '--tw-prose-bullets': '#1a1a1a',
        '--tw-prose-hr': '#e1e5e9',
        '--tw-prose-quotes': '#6b7280',
        '--tw-prose-quote-borders': '#e1e5e9',
        '--tw-prose-captions': '#6b7280',
        '--tw-prose-code': '#d73a49',
        '--tw-prose-pre-code': '#f6f8fa',
        '--tw-prose-pre-bg': '#f6f8fa',
        '--tw-prose-th-borders': '#e1e5e9',
        '--tw-prose-td-borders': '#e1e5e9',
        lineHeight: '1.6',
        fontSize: '14px',
      }}
    >
      {children}
    </div>
  );
} 