# Documentation Website

A beautiful documentation website built with Next.js, featuring Markdown/MDX support, sidebar navigation, and table of contents.

## Features

- 📚 **Markdown/MDX Support** - Write documentation in Markdown with full MDX support
- 🧭 **Sidebar Navigation** - Configurable sidebar with sections and pages
- 📑 **Table of Contents** - Auto-generated "On This Page" navigation
- 🎨 **Beautiful Design** - Modern, responsive design with Tailwind CSS
- ⚡ **Fast Performance** - Static generation with Next.js
- 🔍 **SEO Optimized** - Built-in SEO features and meta tags
- 📱 **Mobile Responsive** - Works perfectly on all devices
- 🎯 **Easy Customization** - Simple configuration through `config.mjs`

## Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-docs-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
my-docs-site/
├── docs/                 # Markdown documentation files
│   ├── introduction.md
│   ├── installation.md
│   ├── basic-usage.md
│   ├── advanced-features.md
│   ├── components.md
│   └── configuration.md
├── components/           # React components
│   ├── Sidebar.js       # Sidebar navigation
│   ├── TableOfContents.js # Table of contents
│   ├── MDXContent.js    # MDX content wrapper
│   └── DocsLayout.js    # Main layout component
├── lib/                  # Utility functions
│   └── mdx.js           # MDX processing utilities
├── src/app/             # Next.js app directory
│   ├── docs/[slug]/     # Dynamic documentation pages
│   ├── layout.js        # Root layout
│   ├── page.js          # Homepage
│   └── globals.css      # Global styles
├── config.mjs           # Site configuration
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## Configuration

### Site Configuration

Edit `config.mjs` to customize your site:

```javascript
export const siteConfig = {
  title: 'Your Documentation Site',
  description: 'A beautiful documentation website built with Next.js',
  sidebar: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/docs/introduction',
          file: 'docs/introduction.md'
        }
      ]
    }
  ]
};
```

### Adding New Pages

1. Create a new `.md` file in the `docs/` folder
2. Add frontmatter with title and description:

```markdown
---
title: My New Page
description: Description of the new page
---

# My New Page

Content goes here...
```

3. Update `config.mjs` to include the new page in the sidebar

## Writing Documentation

### Markdown Features

The site supports full Markdown syntax:

- **Headings** (`#`, `##`, `###`)
- **Bold** and *italic* text
- `Inline code` and code blocks
- Lists and numbered lists
- Tables
- Links and images
- Blockquotes

### Code Blocks

Use syntax highlighting for code blocks:

```javascript
function example() {
  console.log('Hello, World!');
}
```

### Tables

Create tables with Markdown:

| Feature | Description | Status |
|---------|-------------|--------|
| Markdown | Full support | ✅ |
| Syntax Highlighting | Multiple languages | ✅ |
| Responsive Design | Mobile-friendly | ✅ |

## Customization

### Styling

Customize the appearance by modifying:

- `components/MDXContent.js` - Main content styling
- `components/Sidebar.js` - Sidebar appearance
- `components/TableOfContents.js` - Table of contents styling
- `src/app/globals.css` - Global styles

### Components

Create custom components for use in your documentation:

```jsx
// components/CustomAlert.js
export default function CustomAlert({ type, children }) {
  return (
    <div className={`alert alert-${type}`}>
      {children}
    </div>
  );
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Deploy from Git or upload manually

### Static Export

For static hosting:

```bash
npm run build
npm run export
```

The static files will be in the `out/` directory.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Dependencies

### Core Dependencies

- **Next.js** - React framework
- **React** - UI library
- **next-mdx-remote** - MDX processing
- **gray-matter** - Frontmatter parsing
- **remark-gfm** - GitHub Flavored Markdown
- **rehype-highlight** - Syntax highlighting
- **prismjs** - Code highlighting themes

### Development Dependencies

- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions:

1. Check the [troubleshooting section](#troubleshooting) in the documentation
2. Search existing issues on GitHub
3. Create a new issue with detailed information

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)

---

Happy documenting! 📚✨
