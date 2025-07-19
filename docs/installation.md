---
title: Installation
description: How to install and set up the project
---

# Installation Guide

This guide will walk you through the installation process step by step.

## System Requirements

Before installing, ensure your system meets these requirements:

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher (comes with Node.js)
- **Git**: For cloning the repository
- **Operating System**: Windows, macOS, or Linux

## Installation Methods

### Method 1: Clone from Repository

This is the recommended method for development:

```bash
# Clone the repository
git clone https://github.com/your-username/your-project.git

# Navigate to the project directory
cd your-project

# Install dependencies
npm install
```

### Method 2: Download ZIP

If you prefer not to use Git:

1. Download the ZIP file from the repository
2. Extract it to your desired location
3. Open terminal/command prompt in the extracted folder
4. Run `npm install`

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Development settings
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Customization

You can customize the site by editing `config.mjs`:

```javascript
export const siteConfig = {
  title: 'Your Documentation Site',
  description: 'Your custom description',
  // ... other settings
};
```

## Development Server

### Starting the Server

To start the development server:

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Development Features

- **Hot Reload**: Changes are reflected immediately
- **Error Overlay**: Clear error messages in the browser
- **Fast Refresh**: React components update without losing state

## Building for Production

### Build Process

To create a production build:

```bash
# Build the application
npm run build

# Start the production server
npm start
```

### Deployment Options

#### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

#### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Deploy from Git or upload manually

#### Self-Hosting

```bash
# Build the application
npm run build

# Start the server
npm start
```

## Troubleshooting

### Common Issues

#### Port Already in Use

If port 3000 is already in use:

```bash
# Use a different port
npm run dev -- -p 3001
```

#### Permission Errors

On Linux/macOS, you might need to use `sudo`:

```bash
sudo npm install
```

#### Node Version Issues

Check your Node.js version:

```bash
node --version
```

If it's below 18, update Node.js from [nodejs.org](https://nodejs.org/).

### Getting Help

If you encounter issues:

1. Check the [troubleshooting section](#troubleshooting)
2. Search existing issues on GitHub
3. Create a new issue with detailed information

## Next Steps

Now that you have the project installed:

- Read the [Basic Usage](/docs/basic-usage) guide
- Explore the [Configuration](/docs/configuration) options
- Check out [Advanced Features](/docs/advanced-features)

## Verification

To verify your installation is working:

1. Visit [http://localhost:3000](http://localhost:3000)
2. You should see the homepage with navigation
3. Click on "Introduction" to test the documentation pages
4. Verify that the sidebar and table of contents work

---

Congratulations! Your documentation site is now running. 🎉 