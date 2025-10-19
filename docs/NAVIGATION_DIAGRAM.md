# Navigation System Structure

## Visual Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    MAIN NAVIGATION BAR                         │
├─────────────────────────────────────────────────────────────────┤
│ [🏠 Home] [👤 Portfolio] [🛒 Shop] [📦 Products] [📞 Contact]  │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                    BREADCRUMB NAVIGATION                       │
├─────────────────────────────────────────────────────────────────┤
│ Home › Portfolio › Current Page                                │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                    PAGE CONTENT                                │
├─────────────────────────────────────────────────────────────────┤
│ ← Back to Home                                                 │
│                                                                 │
│ [Page-specific content here]                                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Page Hierarchy

```
index.html (Home)
├── portfolio_week_2.html (Portfolio)
├── cute_shop.html (E-commerce)
├── product_card_week_3.html (Products)
└── contact_info_week_1.html (Contact)
```

## Navigation Features

### 🧭 Main Navigation
- **Sticky positioning** - stays at top when scrolling
- **Active page highlighting** - current page is clearly marked
- **Responsive design** - collapses to hamburger menu on mobile
- **Smooth animations** - hover effects and transitions

### 🍞 Breadcrumb Trail
- **Location awareness** - shows exactly where you are
- **Clickable paths** - navigate back to previous sections
- **Visual hierarchy** - clear indication of page depth

### 🔙 Back Button
- **Quick return** - one-click return to homepage
- **Contextual** - only appears on sub-pages
- **Visual design** - matches overall aesthetic

### ⌨️ Keyboard Shortcuts
- **Alt + 1** - Go to Home
- **Alt + 2** - Go to Portfolio  
- **Alt + 3** - Go to Shop
- **Alt + 4** - Go to Products
- **Alt + 5** - Go to Contact

## Mobile Responsive Design

### Desktop (≥768px)
```
┌─────────────────────────────────────────────────────────────────┐
│ [Logo] [🏠 Home] [👤 Portfolio] [🛒 Shop] [📦 Products] [📞 Contact] │
└─────────────────────────────────────────────────────────────────┘
```

### Mobile (<768px)
```
┌─────────────────────────────────────────────────────────────────┐
│ [Logo]                                                    [☰]  │
├─────────────────────────────────────────────────────────────────┤
│ [🏠 Home]                                                      │
│ [👤 Portfolio]                                                 │
│ [🛒 Shop]                                                      │
│ [📦 Products]                                                  │
│ [📞 Contact]                                                   │
└─────────────────────────────────────────────────────────────────┘
```

## Implementation Files

```
assets/
├── css/
│   └── navigation.css          # All navigation styles
└── js/
    └── navigation.js           # Navigation functionality
```

## CSS Classes Used

- `.main-navbar` - Main navigation container
- `.navbar-brand` - Logo/brand link
- `.navbar-nav` - Navigation links container
- `.nav-link` - Individual navigation links
- `.nav-link.active` - Active page indicator
- `.breadcrumb-container` - Breadcrumb wrapper
- `.breadcrumb` - Breadcrumb list
- `.breadcrumb-item` - Individual breadcrumb items
- `.back-button` - Back to home button
