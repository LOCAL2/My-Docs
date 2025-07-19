---
title: Configuration
description: Complete configuration options and settings
---

# Configuration

This guide covers all configuration options available for customizing your documentation site.

## Site Configuration

### Basic Settings

The main configuration file is `config.mjs` in the root directory:

```javascript
export const siteConfig = {
  title: 'Your Documentation Site',
  description: 'A beautiful documentation website built with Next.js',
  // ... other settings
};
```

### Available Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `title` | string | - | Site title displayed in header and meta tags |
| `description` | string | - | Site description for SEO |
| `sidebar` | array | - | Navigation structure (see below) |
| `theme` | object | - | Theme customization options |
| `seo` | object | - | SEO settings |
| `analytics` | object | - | Analytics configuration |

## Sidebar Configuration

### Structure

The sidebar is configured as an array of sections:

```javascript
sidebar: [
  {
    title: 'Section Name',
    items: [
      {
        title: 'Page Title',
        href: '/docs/page-slug',
        file: 'docs/page-slug.md'
      }
    ]
  }
]
```

### Section Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `title` | string | Yes | Section header text |
| `items` | array | Yes | Array of page items |
| `collapsible` | boolean | No | Whether section can be collapsed |

### Item Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `title` | string | Yes | Page title in sidebar |
| `href` | string | Yes | URL path to the page |
| `file` | string | Yes | Path to Markdown file |
| `external` | boolean | No | Whether link opens in new tab |
| `icon` | string | No | Icon name for the item |

### Example Configuration

```javascript
export const siteConfig = {
  title: 'My Documentation',
  description: 'Complete guide to my project',
  sidebar: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/docs/introduction',
          file: 'docs/introduction.md',
          icon: 'book'
        },
        {
          title: 'Installation',
          href: '/docs/installation',
          file: 'docs/installation.md',
          icon: 'download'
        }
      ]
    },
    {
      title: 'Guides',
      collapsible: true,
      items: [
        {
          title: 'Basic Usage',
          href: '/docs/basic-usage',
          file: 'docs/basic-usage.md'
        },
        {
          title: 'Advanced Features',
          href: '/docs/advanced-features',
          file: 'docs/advanced-features.md'
        }
      ]
    },
    {
      title: 'API Reference',
      items: [
        {
          title: 'Components',
          href: '/docs/components',
          file: 'docs/components.md'
        },
        {
          title: 'Configuration',
          href: '/docs/configuration',
          file: 'docs/configuration.md'
        }
      ]
    }
  ]
};
```

## Theme Configuration

### Color Scheme

Customize the color scheme:

```javascript
theme: {
  colors: {
    primary: {
      50: '#eff6ff',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      900: '#1e3a8a'
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      500: '#6b7280',
      900: '#111827'
    }
  }
}
```

### Typography

Customize typography settings:

```javascript
theme: {
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['Fira Code', 'monospace']
    },
    fontSize: {
      'xs': '0.75rem',
      'sm': '0.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem'
    }
  }
}
```

### Layout

Customize layout settings:

```javascript
theme: {
  layout: {
    sidebarWidth: '16rem',
    maxContentWidth: '64rem',
    contentPadding: '2rem'
  }
}
```

## SEO Configuration

### Meta Tags

Configure SEO meta tags:

```javascript
seo: {
  titleTemplate: '%s | My Documentation',
  defaultTitle: 'My Documentation',
  description: 'Complete guide to my project',
  canonical: 'https://mydocs.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mydocs.com',
    siteName: 'My Documentation'
  },
  twitter: {
    handle: '@myusername',
    site: '@myusername',
    cardType: 'summary_large_image'
  }
}
```

### Sitemap

Configure sitemap generation:

```javascript
seo: {
  sitemap: {
    enabled: true,
    changefreq: 'weekly',
    priority: 0.7
  }
}
```

## Analytics Configuration

### Google Analytics

Configure Google Analytics:

```javascript
analytics: {
  googleAnalytics: {
    trackingId: 'GA_TRACKING_ID',
    anonymize: true,
    respectDNT: true
  }
}
```

### Other Analytics

Configure other analytics services:

```javascript
analytics: {
  plausible: {
    domain: 'mydocs.com'
  },
  mixpanel: {
    token: 'MIXPANEL_TOKEN'
  }
}
```

## Next.js Configuration

### next.config.mjs

Customize Next.js configuration:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',
  
  // Trailing slash for static hosting
  trailingSlash: true,
  
  // Image optimization
  images: {
    unoptimized: true
  },
  
  // Experimental features
  experimental: {
    mdxRs: true
  },
  
  // Custom webpack configuration
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    });
    return config;
  }
};

export default nextConfig;
```

## Tailwind CSS Configuration

### tailwind.config.js

Customize Tailwind CSS:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
            h3: {
              color: '#111827',
            },
            code: {
              backgroundColor: '#f3f4f6',
              padding: '0.125rem 0.25rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

## Environment Variables

### .env.local

Configure environment variables:

```env
# Site configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=My Documentation

# Analytics
NEXT_PUBLIC_GA_ID=GA_TRACKING_ID
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=mydocs.com

# API keys
GITHUB_TOKEN=your_github_token
CONTENTFUL_ACCESS_TOKEN=your_contentful_token

# Build settings
NODE_ENV=development
```

## Markdown Configuration

### Frontmatter

Configure frontmatter for Markdown files:

```yaml
---
title: Page Title
description: Page description for SEO
date: 2024-01-01
author: Your Name
tags: [guide, tutorial]
draft: false
---
```

### Custom Components

Register custom components for MDX:

```javascript
// lib/mdx-components.js
import CustomAlert from '../components/CustomAlert';
import CodeBlock from '../components/CodeBlock';

export const components = {
  CustomAlert,
  CodeBlock,
  // Add more custom components here
};
```

## Performance Configuration

### Caching

Configure caching strategies:

```javascript
// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();

  // Cache static assets
  if (request.nextUrl.pathname.startsWith('/_next/static/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  // Cache documentation pages
  if (request.nextUrl.pathname.startsWith('/docs/')) {
    response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400');
  }

  return response;
}

export const config = {
  matcher: [
    '/docs/:path*',
    '/_next/static/:path*',
  ],
};
```

### Bundle Optimization

Optimize bundle size:

```javascript
// next.config.mjs
const nextConfig = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@heroicons/react', 'lodash']
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  }
};
```

## Deployment Configuration

### Vercel

Configure Vercel deployment:

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "out",
  "framework": "nextjs",
  "headers": [
    {
      "source": "/docs/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600, s-maxage=86400"
        }
      ]
    }
  ]
}
```

### Netlify

Configure Netlify deployment:

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "out"

[[headers]]
  for = "/docs/*"
  [headers.values]
    Cache-Control = "public, max-age=3600, s-maxage=86400"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Testing Configuration

### Jest Configuration

Configure Jest for testing:

```javascript
// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapping: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
```

## Troubleshooting

### Common Issues

#### Configuration Not Loading

If your configuration isn't being loaded:

1. Check file path and extension
2. Verify import/export syntax
3. Clear Next.js cache: `rm -rf .next`

#### Build Errors

If you encounter build errors:

1. Check for syntax errors in config files
2. Verify all dependencies are installed
3. Check Node.js version compatibility

#### Styling Issues

If styles aren't applying correctly:

1. Verify Tailwind CSS is configured
2. Check class names are correct
3. Clear browser cache

## Best Practices

### Configuration Organization

1. **Keep it modular** - Split configuration into logical sections
2. **Use environment variables** - For sensitive data and environment-specific settings
3. **Document your changes** - Add comments to explain complex configurations
4. **Version control** - Include configuration files in version control

### Performance

1. **Optimize images** - Use appropriate formats and sizes
2. **Minimize bundle size** - Remove unused dependencies
3. **Enable caching** - Configure appropriate cache headers
4. **Use CDN** - For static assets

### Security

1. **Environment variables** - Never commit sensitive data
2. **Content Security Policy** - Configure CSP headers
3. **HTTPS only** - Enforce HTTPS in production
4. **Regular updates** - Keep dependencies updated

## Next Steps

- Explore [Advanced Features](/docs/advanced-features) for more customization options
- Check [Components](/docs/components) for component-specific configuration
- Review the source code for implementation examples

---

Your documentation site is now fully configured and ready for production! 🚀 