/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#000000',
            h1: {
              color: '#000000',
              fontSize: '2.25rem',
              fontWeight: '700',
              marginTop: '0',
              marginBottom: '1.5rem',
            },
            h2: {
              color: '#000000',
              fontSize: '1.875rem',
              fontWeight: '600',
              marginTop: '2.5rem',
              marginBottom: '1rem',
              scrollMarginTop: '6rem',
            },
            h3: {
              color: '#000000',
              fontSize: '1.5rem',
              fontWeight: '600',
              marginTop: '2rem',
              marginBottom: '0.75rem',
              scrollMarginTop: '6rem',
            },
            h4: {
              color: '#000000',
              fontSize: '1.25rem',
              fontWeight: '600',
              marginTop: '1.5rem',
              marginBottom: '0.5rem',
            },
            p: {
              color: '#000000',
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              lineHeight: '1.75',
            },
            ul: {
              color: '#000000',
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              paddingLeft: '1.625rem',
            },
            ol: {
              color: '#000000',
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              paddingLeft: '1.625rem',
            },
            li: {
              color: '#000000',
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            blockquote: {
              borderLeft: '4px solid #e5e7eb',
              paddingLeft: '1rem',
              fontStyle: 'italic',
              color: '#6b7280',
              margin: '1.5rem 0',
            },
            code: {
              backgroundColor: '#f3f4f6',
              padding: '0.125rem 0.25rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
              color: '#dc2626',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#1f2937',
              color: '#f9fafb',
              padding: '1rem',
              borderRadius: '0.5rem',
              overflowX: 'auto',
              margin: '1.5rem 0',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              color: 'inherit',
              fontSize: '0.875rem',
            },
            table: {
              width: '100%',
              borderCollapse: 'collapse',
              margin: '1.5rem 0',
            },
            th: {
              backgroundColor: '#f9fafb',
              border: '1px solid #e5e7eb',
              padding: '0.75rem',
              textAlign: 'left',
              fontWeight: '600',
              color: '#000000',
            },
            td: {
              border: '1px solid #e5e7eb',
              padding: '0.75rem',
              color: '#000000',
            },
            a: {
              color: '#2563eb',
              textDecoration: 'underline',
            },
            'a:hover': {
              color: '#1d4ed8',
            },
            strong: {
              fontWeight: '600',
              color: '#000000',
            },
            em: {
              fontStyle: 'italic',
              color: '#000000',
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