# Deployment Guide

## Deployment Options

### GitHub Pages
1. Push code to GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

### Vercel
1. Import your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

## Environment Variables
No environment variables required for this static site.

## Build Process
The build process:
1. Cleans the dist directory
2. Copies all source files to dist
3. Minifies HTML, CSS, and JS

## Custom Domain
To use a custom domain:
1. Add CNAME file to repository root
2. Configure DNS settings with your domain provider
3. Update domain settings in hosting platform

## Performance Optimization
- Enable gzip compression
- Set up CDN for static assets
- Optimize images before deployment
- Use browser caching headers
