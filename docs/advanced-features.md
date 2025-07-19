---
title: Advanced Features
description: Advanced features and customization options
---

# Advanced Features

This guide covers advanced features and customization options for power users.

## Custom Components

### Creating Custom MDX Components

You can create custom components for use in your Markdown files:

```jsx
// components/CustomAlert.js
export default function CustomAlert({ type, children }) {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800'
  };

  return (
    <div className={`border-l-4 p-4 mb-4 ${styles[type]}`}>
      {children}
    </div>
  );
}
```

### Using Custom Components

In your Markdown files:

```markdown
<CustomAlert type="info">
  This is an informational message.
</CustomAlert>

<CustomAlert type="warning">
  This is a warning message.
</CustomAlert>
```

## Advanced Styling

### Custom CSS Classes

You can add custom CSS classes to your content:

```css
/* Add to your global CSS */
.custom-highlight {
  background: linear-gradient(120deg, #a8edea 0%, #fed6e3 100%);
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
}
```

### Tailwind Customization

Extend Tailwind CSS in your `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            h1: {
              color: '#111827',
            },
            h2: {
              color: '#111827',
            },
          },
        },
      },
    },
  },
  plugins: [],
}
```

## Dynamic Content

### Interactive Examples

You can create interactive examples using React components:

```jsx
// components/CodePlayground.js
'use client';

import { useState } from 'react';

export default function CodePlayground({ initialCode, language }) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');

  const runCode = () => {
    try {
      // Simple JavaScript evaluation (be careful with this in production)
      const result = eval(code);
      setOutput(String(result));
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden my-4">
      <div className="bg-gray-100 px-4 py-2 border-b">
        <span className="text-sm font-medium text-gray-700">
          {language} Playground
        </span>
      </div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full p-4 font-mono text-sm bg-gray-50"
        rows={6}
      />
      <div className="bg-gray-100 px-4 py-2 border-t">
        <button
          onClick={runCode}
          className="bg-blue-500 text-white px-4 py-1 rounded text-sm hover:bg-blue-600"
        >
          Run Code
        </button>
      </div>
      {output && (
        <div className="p-4 bg-white border-t">
          <strong>Output:</strong>
          <pre className="mt-2 text-sm">{output}</pre>
        </div>
      )}
    </div>
  );
}
```

## Search Functionality

### Implementing Search

Add search functionality to your documentation:

```jsx
// components/Search.js
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Search({ docs }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const searchResults = docs.filter(doc => 
      doc.content.toLowerCase().includes(query.toLowerCase()) ||
      doc.frontMatter.title.toLowerCase().includes(query.toLowerCase())
    );

    setResults(searchResults.slice(0, 5));
  }, [query, docs]);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search documentation..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      
      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-50">
          {results.map((doc, index) => (
            <button
              key={index}
              onClick={() => {
                router.push(`/docs/${doc.slug}`);
                setQuery('');
                setResults([]);
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
            >
              <div className="font-medium">{doc.frontMatter.title}</div>
              <div className="text-sm text-gray-600">{doc.frontMatter.description}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
```

## API Integration

### Fetching External Data

You can fetch data from external APIs in your documentation:

```jsx
// components/GitHubStats.js
async function getGitHubStats() {
  const response = await fetch('https://api.github.com/repos/your-repo/stats/contributors');
  return response.json();
}

export default async function GitHubStats() {
  const stats = await getGitHubStats();
  
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Repository Statistics</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-2xl font-bold text-blue-600">
            {stats.length}
          </div>
          <div className="text-sm text-gray-600">Contributors</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-600">
            {stats.reduce((sum, contributor) => sum + contributor.total, 0)}
          </div>
          <div className="text-sm text-gray-600">Total Commits</div>
        </div>
      </div>
    </div>
  );
}
```

## Performance Optimization

### Lazy Loading

Implement lazy loading for better performance:

```jsx
// components/LazyImage.js
'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function LazyImage({ src, alt, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
      <Image
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
}
```

### Code Splitting

Use dynamic imports for better code splitting:

```jsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false
});
```

## Analytics and Tracking

### Google Analytics

Add analytics to track user behavior:

```jsx
// components/Analytics.js
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
```

## Deployment Optimization

### Static Generation

Optimize your build for static generation:

```javascript
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    mdxRs: true,
  },
};

export default nextConfig;
```

### CDN Configuration

Configure your CDN for optimal performance:

```javascript
// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();

  // Add cache headers
  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  
  return response;
}

export const config = {
  matcher: [
    '/docs/:path*',
    '/_next/static/:path*',
  ],
};
```

## Next Steps

Now that you've explored advanced features:

- Learn about [Components](/docs/components) for detailed component documentation
- Check [Configuration](/docs/configuration) for advanced settings
- Explore the source code for more examples

---

You're now ready to build sophisticated documentation sites! 🚀 