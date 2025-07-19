export const siteConfig = {
  title: 'Documentation Site',
  description: 'A beautiful documentation website built with Next.js',
  sidebar: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/docs/introduction',
          file: 'docs/introduction.md'
        },
        {
          title: 'Installation',
          href: '/docs/installation',
          file: 'docs/installation.md'
        }
      ]
    },
    {
      title: 'Guides',
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