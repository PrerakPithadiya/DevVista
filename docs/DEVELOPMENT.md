# Development Guide

## Project Structure

```
DevVista/
├── assets/                 # Static assets
│   ├── css/               # Stylesheets
│   ├── js/                # JavaScript files
│   └── images/            # Images
│       ├── products/      # Product images
│       └── ui/            # UI mockups and screenshots
├── src/                   # Source HTML files
├── docs/                  # Documentation
├── public/                # Public assets (if needed)
├── index.html             # Main entry point
├── package.json           # Dependencies and scripts
└── README.md              # Project overview
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## File Organization

### CSS Files
- `assets/css/homepage.css` - Homepage styles
- `assets/css/cute-shop.css` - E-commerce shop styles
- `assets/css/contact-form.css` - Contact form styles
- `assets/css/portfolio.css` - Portfolio styles
- `assets/css/product-cards.css` - Product card styles

### JavaScript Files
- `assets/js/cute-shop.js` - Shopping cart functionality
- `assets/js/portfolio.js` - Dark mode toggle
- `assets/js/product-cards.js` - Product interaction

### HTML Files
- `index.html` - Main homepage
- `src/homepage.html` - Project showcase
- `src/cute_shop.html` - E-commerce demo
- `src/contact_info_week_1.html` - Contact form
- `src/portfolio_week_2.html` - Portfolio showcase
- `src/product_card_week_3.html` - Product catalog

## Coding Standards

### CSS
- Use meaningful class names
- Follow BEM methodology where applicable
- Use CSS custom properties for theming
- Mobile-first responsive design

### JavaScript
- Use modern ES6+ syntax
- Add event listeners in DOMContentLoaded
- Use meaningful function and variable names
- Comment complex logic

### HTML
- Semantic HTML5 elements
- Proper accessibility attributes
- Meta tags for SEO
- Clean, readable structure

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Considerations
- Optimize images
- Minify CSS and JS in production
- Use CDN for external libraries
- Implement lazy loading for images
