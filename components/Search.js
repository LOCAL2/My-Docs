'use client';

import { useState, useEffect, useRef } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Search({ allDocs }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
        setQuery('');
        setResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([]);
      return;
    }

    const searchResults = [];
    const searchTerm = query.toLowerCase();

    allDocs.forEach(doc => {
      // ค้นหาใน title
      const titleMatch = doc.frontMatter.title?.toLowerCase().includes(searchTerm);
      
      // ค้นหาใน description
      const descMatch = doc.frontMatter.description?.toLowerCase().includes(searchTerm);
      
      // ค้นหาใน content (เฉพาะ 200 ตัวอักษรแรก)
      const contentMatch = doc.content.toLowerCase().includes(searchTerm);
      
      if (titleMatch || descMatch || contentMatch) {
        let score = 0;
        let snippet = '';
        let searchIndex = -1;
        
        if (titleMatch) score += 10;
        if (descMatch) score += 5;
        if (contentMatch) {
          score += 1;
          // หา snippet จาก content
          searchIndex = doc.content.toLowerCase().indexOf(searchTerm);
          if (searchIndex !== -1) {
            const start = Math.max(0, searchIndex - 50);
            const end = Math.min(doc.content.length, searchIndex + 150);
            snippet = doc.content.substring(start, end).replace(/\n/g, ' ').trim();
            if (start > 0) snippet = '...' + snippet;
            if (end < doc.content.length) snippet = snippet + '...';
          }
        }
        
        searchResults.push({
          ...doc,
          score,
          snippet,
          searchIndex,
          searchTerm: query,
          title: doc.frontMatter.title || doc.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
        });
      }
    });

    // เรียงตาม score และ title
    searchResults.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.title.localeCompare(b.title);
    });

    setResults(searchResults.slice(0, 8)); // แสดงแค่ 8 ผลลัพธ์
  }, [query, allDocs]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setQuery('');
      setResults([]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter' && selectedIndex >= 0 && results[selectedIndex]) {
      e.preventDefault();
      handleResultClick(results[selectedIndex]);
    }
  };

  const handleResultClick = (result) => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
    setSelectedIndex(-1);
    
    // Close mobile sidebar if open
    const overlay = document.getElementById('mobile-sidebar-overlay');
    if (overlay && !overlay.classList.contains('hidden')) {
      overlay.classList.add('hidden');
      document.body.style.overflow = '';
    }
    
    // ส่ง search term ไปยังหน้าที่คลิก
    const url = `/docs/${result.slug}?search=${encodeURIComponent(result.searchTerm)}&index=${result.searchIndex}`;
    router.push(url);
  };

  return (
    <div ref={searchRef} className="relative">
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search documentation..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            setSelectedIndex(-1);
          }}
          onKeyDown={handleKeyDown}
          className="w-full pl-10 pr-10 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
              setSelectedIndex(-1);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 lg:max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <button
              key={result.slug}
              onClick={() => handleResultClick(result)}
              className={`block w-full text-left px-3 lg:px-4 py-2 lg:py-3 hover:bg-gray-50 transition-colors ${
                index === selectedIndex ? 'bg-blue-50 border-l-4 border-blue-500' : ''
              }`}
            >
              <div className="font-medium text-gray-900 mb-1 text-sm lg:text-base">{result.title}</div>
              {result.snippet && (
                <div className="text-xs lg:text-sm text-gray-600 line-clamp-2">{result.snippet}</div>
              )}
            </button>
          ))}
        </div>
      )}

      {isOpen && query && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-3 lg:p-4">
          <div className="text-gray-500 text-center text-sm lg:text-base">No results found for &ldquo;{query}&rdquo;</div>
        </div>
      )}
    </div>
  );
} 