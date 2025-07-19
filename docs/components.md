---
title: Components
description: Available components and their usage
---

# Components

This page documents all available components and their usage patterns.

## Core Components

### Sidebar

The main navigation component that displays the site structure.

**Location:** `components/Sidebar.js`

**Props:** None (uses `siteConfig` from config.mjs)

**Usage:**
```jsx
import Sidebar from '../components/Sidebar';

<Sidebar />
```

**Features:**
- Automatic active state highlighting
- Responsive design
- Collapsible sections (future enhancement)

### TableOfContents

Displays the current page's table of contents with smooth scrolling.

**Location:** `components/TableOfContents.js`

**Props:**
- `headings` (array): Array of heading objects with `level`, `text`, and `id`

**Usage:**
```jsx
import TableOfContents from '../components/TableOfContents';

const headings = [
  { level: 2, text: 'Getting Started', id: 'getting-started' },
  { level: 3, text: 'Installation', id: 'installation' }
];

<TableOfContents headings={headings} />
```

**Features:**
- Auto-highlights current section
- Smooth scrolling to anchors
- Responsive design

### MDXContent

Wrapper component for rendering MDX content with custom styling.

**Location:** `components/MDXContent.js`

**Props:**
- `children`: MDX compiled content

**Usage:**
```jsx
import MDXContent from '../components/MDXContent';

<MDXContent>
  {compiledMdxContent}
</MDXContent>
```

**Features:**
- Custom typography styles
- Syntax highlighting
- Responsive design
- Dark theme support for code blocks

### DocsLayout

Main layout component that combines sidebar, content, and table of contents.

**Location:** `components/DocsLayout.js`

**Props:**
- `children`: Page content
- `headings` (optional): Array of headings for table of contents

**Usage:**
```jsx
import DocsLayout from '../components/DocsLayout';

<DocsLayout headings={headings}>
  <article>
    {/* Your content here */}
  </article>
</DocsLayout>
```

## Utility Components

### CustomAlert

A customizable alert component for important messages.

**Props:**
- `type`: 'info', 'warning', 'error', or 'success'
- `children`: Alert content

**Usage:**
```jsx
<CustomAlert type="info">
  This is an informational message.
</CustomAlert>

<CustomAlert type="warning">
  This is a warning message.
</CustomAlert>
```

### CodeBlock

Enhanced code block with syntax highlighting and copy functionality.

**Props:**
- `children`: Code content
- `language`: Programming language for syntax highlighting
- `title` (optional): Code block title

**Usage:**
```jsx
<CodeBlock language="javascript" title="Example Function">
function greet(name) {
  return `Hello, ${name}!`;
}
</CodeBlock>
```

### Callout

A styled callout box for important information.

**Props:**
- `type`: 'note', 'tip', 'warning', or 'important'
- `title` (optional): Callout title
- `children`: Callout content

**Usage:**
```jsx
<Callout type="tip" title="Pro Tip">
  Use this feature to improve your workflow.
</Callout>
```

## Interactive Components

### Search

Full-text search component for documentation.

**Props:**
- `docs`: Array of documentation objects
- `placeholder` (optional): Search placeholder text

**Usage:**
```jsx
import Search from '../components/Search';

<Search docs={allDocs} placeholder="Search documentation..." />
```

### CodePlayground

Interactive code editor with live execution.

**Props:**
- `initialCode`: Starting code
- `language`: Programming language
- `height` (optional): Editor height in pixels

**Usage:**
```jsx
<CodePlayground 
  initialCode="console.log('Hello, World!');"
  language="javascript"
  height={300}
/>
```

### Tabs

Tabbed interface for organizing content.

**Props:**
- `tabs`: Array of tab objects with `label` and `content`
- `defaultTab` (optional): Index of default active tab

**Usage:**
```jsx
const tabs = [
  { label: 'JavaScript', content: 'JavaScript code here' },
  { label: 'Python', content: 'Python code here' }
];

<Tabs tabs={tabs} defaultTab={0} />
```

## Layout Components

### Container

Responsive container for content.

**Props:**
- `children`: Container content
- `maxWidth` (optional): Maximum width (default: '4xl')
- `padding` (optional): Padding size (default: '8')

**Usage:**
```jsx
<Container maxWidth="6xl" padding="12">
  <h1>Your content here</h1>
</Container>
```

### Grid

Flexible grid layout component.

**Props:**
- `children`: Grid items
- `cols`: Number of columns (1-12)
- `gap`: Gap between items
- `className` (optional): Additional CSS classes

**Usage:**
```jsx
<Grid cols={3} gap={6}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

## Form Components

### Button

Styled button component with variants.

**Props:**
- `variant`: 'primary', 'secondary', 'outline', or 'ghost'
- `size`: 'sm', 'md', or 'lg'
- `children`: Button content
- `onClick`: Click handler
- `disabled` (optional): Disabled state

**Usage:**
```jsx
<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>
```

### Input

Styled input component.

**Props:**
- `type`: Input type
- `placeholder`: Placeholder text
- `value`: Input value
- `onChange`: Change handler
- `error` (optional): Error message

**Usage:**
```jsx
<Input
  type="text"
  placeholder="Enter your name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  error={nameError}
/>
```

## Data Display Components

### Table

Styled table component.

**Props:**
- `headers`: Array of header strings
- `rows`: Array of row data arrays
- `striped` (optional): Alternating row colors

**Usage:**
```jsx
const headers = ['Name', 'Email', 'Role'];
const rows = [
  ['John Doe', 'john@example.com', 'Admin'],
  ['Jane Smith', 'jane@example.com', 'User']
];

<Table headers={headers} rows={rows} striped />
```

### Badge

Small badge component for labels and status.

**Props:**
- `variant`: 'default', 'success', 'warning', 'error', or 'info'
- `children`: Badge content

**Usage:**
```jsx
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
```

## Navigation Components

### Breadcrumb

Breadcrumb navigation component.

**Props:**
- `items`: Array of breadcrumb items with `label` and `href`

**Usage:**
```jsx
const items = [
  { label: 'Home', href: '/' },
  { label: 'Docs', href: '/docs' },
  { label: 'Components', href: '/docs/components' }
];

<Breadcrumb items={items} />
```

### Pagination

Pagination component for long content.

**Props:**
- `currentPage`: Current page number
- `totalPages`: Total number of pages
- `onPageChange`: Page change handler

**Usage:**
```jsx
<Pagination
  currentPage={2}
  totalPages={10}
  onPageChange={(page) => setCurrentPage(page)}
/>
```

## Creating Custom Components

### Component Structure

When creating new components, follow this structure:

```jsx
// components/MyComponent.js
'use client'; // If using hooks or browser APIs

import { useState } from 'react';

export default function MyComponent({ prop1, prop2, children }) {
  const [state, setState] = useState(initialValue);

  return (
    <div className="my-component">
      {children}
    </div>
  );
}
```

### Styling Guidelines

- Use Tailwind CSS classes for styling
- Follow the existing design system
- Ensure responsive design
- Support dark mode when applicable

### Testing Components

Create tests for your components:

```jsx
// __tests__/MyComponent.test.js
import { render, screen } from '@testing-library/react';
import MyComponent from '../components/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent>Test content</MyComponent>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});
```

## Component Library

### Installation

To use these components in your own project:

1. Copy the component files to your project
2. Install required dependencies
3. Import and use components as needed

### Dependencies

Required dependencies for all components:

```json
{
  "dependencies": {
    "react": "^18.0.0",
    "next": "^13.0.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.0.0"
  }
}
```

## Next Steps

- Explore [Advanced Features](/docs/advanced-features) for more complex components
- Check [Configuration](/docs/configuration) for component customization
- Review the source code for implementation details

---

These components provide a solid foundation for building beautiful documentation sites! 🎨 