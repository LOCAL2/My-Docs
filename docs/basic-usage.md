---
title: Basic Usage
description: Learn the basic usage patterns and common features
---

# Basic Usage

This guide covers the fundamental usage patterns and features you'll use most often.

## Core Concepts

### File Structure

Your documentation site follows this structure:

```
my-docs-site/
├── docs/                 # Markdown files
│   ├── introduction.md
│   ├── installation.md
│   └── ...
├── components/           # React components
├── lib/                  # Utility functions
├── config.mjs           # Site configuration
└── src/app/             # Next.js app directory
```

### Adding New Pages

To add a new documentation page:

1. Create a new `.md` file in the `docs/` folder
2. Add frontmatter with title and description
3. Update `config.mjs` to include the new page

Example:

```markdown
---
title: My New Page
description: Description of the new page
---

# My New Page

Content goes here...
```

## Markdown Features

### Headings

Use headings to structure your content:

```markdown
# Main Title (H1)
## Section Title (H2)
### Subsection Title (H3)
#### Sub-subsection (H4)
```

### Text Formatting

```markdown
**Bold text**
*Italic text*
`Inline code`
~~Strikethrough~~
```

### Lists

#### Unordered Lists

```markdown
- Item 1
- Item 2
  - Nested item
  - Another nested item
- Item 3
```

#### Ordered Lists

```markdown
1. First step
2. Second step
3. Third step
```

### Code Blocks

#### Basic Code Block

```javascript
function example() {
  console.log('Hello, World!');
}
```

#### Syntax Highlighting

```python
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))
```

### Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

### Links and Images

```markdown
[Link text](https://example.com)
![Alt text](image-url.jpg)
```

## Configuration

### Site Configuration

Edit `config.mjs` to customize your site:

```javascript
export const siteConfig = {
  title: 'Your Site Title',
  description: 'Your site description',
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
};
```

### Styling Customization

You can customize the appearance by modifying:

- `components/MDXContent.js` - Main content styling
- `components/Sidebar.js` - Sidebar appearance
- `components/TableOfContents.js` - Table of contents styling

## Best Practices

### Content Organization

1. **Use clear headings** - Help readers navigate your content
2. **Keep paragraphs short** - Improve readability
3. **Use code examples** - Show practical usage
4. **Include screenshots** - Visual aids help understanding

### File Naming

- Use kebab-case for file names: `my-page.md`
- Keep names descriptive but concise
- Avoid special characters

### Frontmatter

Always include frontmatter in your Markdown files:

```yaml
---
title: Page Title
description: Brief description of the page content
---
```

## Common Patterns

### Code Examples

When showing code examples:

1. Use appropriate syntax highlighting
2. Include comments for clarity
3. Show both input and expected output

```javascript
// Example function with comments
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// Usage example
const items = [
  { name: 'Apple', price: 1.00 },
  { name: 'Banana', price: 0.50 }
];

const total = calculateTotal(items);
console.log(total); // Output: 1.50
```

### Callouts and Notes

Use blockquotes for important notes:

```markdown
> **Note**: This is an important note that readers should pay attention to.

> **Warning**: This is a warning about potential issues.
```

### Step-by-Step Instructions

For tutorials, use numbered lists:

```markdown
1. **First step** - Detailed explanation
2. **Second step** - More details
3. **Third step** - Final instructions
```

## Troubleshooting

### Common Issues

#### Page Not Found

If a page shows "Not Found":

1. Check the file exists in `docs/` folder
2. Verify the slug in `config.mjs` matches the filename
3. Ensure the file has proper frontmatter

#### Styling Issues

If styles don't look right:

1. Check browser console for errors
2. Verify Tailwind CSS is working
3. Check component styling in `MDXContent.js`

#### Build Errors

If the build fails:

1. Check for syntax errors in Markdown
2. Verify all imports are correct
3. Check Node.js version compatibility

## Next Steps

Now that you understand the basics:

- Explore [Advanced Features](/docs/advanced-features) for more complex usage
- Learn about [Components](/docs/components) for custom functionality
- Check [Configuration](/docs/configuration) for detailed settings

---

Ready to explore more advanced features? Let's move on to the next section! 