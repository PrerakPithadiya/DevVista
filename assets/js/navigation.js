// Navigation System JavaScript

class NavigationSystem {
  constructor() {
    this.currentPage = this.getCurrentPage();
    this.navigationData = {
      'index.html': { title: 'Home', path: 'Home' },
      'homepage.html': { title: 'Home', path: 'Home' },
      'portfolio_week_2.html': { title: 'Portfolio', path: 'Home > Portfolio' },
      'cute_shop.html': { title: 'CuTe Shop', path: 'Home > E-commerce' },
      'contact_info_week_1.html': { title: 'Contact', path: 'Home > Contact' },
      'product_card_week_3.html': { title: 'Products', path: 'Home > Products' }
    };
    
    this.init();
  }

  init() {
    this.createNavigation();
    this.setupScrollEffect();
    this.setupMobileToggle();
    this.setActivePage();
    this.createBreadcrumbs();
    this.createBackButton();
  }

  getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    if (filename === '' || filename === 'index.html') {
      return 'index.html';
    }
    return filename || 'homepage.html';
  }

  createNavigation() {
    const navbar = document.querySelector('.main-navbar .navbar-collapse');
    if (!navbar) return;

    const nav = document.createElement('ul');
    nav.className = 'navbar-nav';
    nav.innerHTML = `
      <li class="nav-item">
        <a href="index.html" class="nav-link" data-page="index.html">
          <span>🏠</span> Home
        </a>
      </li>
      <li class="nav-item">
        <a href="portfolio_week_2.html" class="nav-link" data-page="portfolio_week_2.html">
          <span>👤</span> Portfolio
        </a>
      </li>
      <li class="nav-item">
        <a href="cute_shop.html" class="nav-link" data-page="cute_shop.html">
          <span>🛒</span> Shop
        </a>
      </li>
      <li class="nav-item">
        <a href="product_card_week_3.html" class="nav-link" data-page="product_card_week_3.html">
          <span>📦</span> Products
        </a>
      </li>
      <li class="nav-item">
        <a href="contact_info_week_1.html" class="nav-link" data-page="contact_info_week_1.html">
          <span>📞</span> Contact
        </a>
      </li>
    `;

    // Insert navigation before any existing content
    navbar.insertBefore(nav, navbar.firstChild);
  }

  setActivePage() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      const page = link.getAttribute('data-page');
      if (page === this.currentPage) {
        link.classList.add('active');
      }
    });
  }

  createBreadcrumbs() {
    const pageData = this.navigationData[this.currentPage];
    if (!pageData) return;

    const breadcrumbContainer = document.createElement('div');
    breadcrumbContainer.className = 'breadcrumb-container';
    breadcrumbContainer.innerHTML = `
      <div class="container">
        <ol class="breadcrumb">
          ${this.generateBreadcrumbHTML(pageData.path)}
        </ol>
      </div>
    `;

    // Insert breadcrumbs after the main navbar
    const navbar = document.querySelector('.main-navbar');
    if (navbar) {
      navbar.insertAdjacentElement('afterend', breadcrumbContainer);
    }
  }

  generateBreadcrumbHTML(path) {
    const parts = path.split(' > ');
    return parts.map((part, index) => {
      const isLast = index === parts.length - 1;
      const isFirst = index === 0;
      
      if (isLast) {
        return `<li class="breadcrumb-item active">${part}</li>`;
      } else if (isFirst) {
        return `<li class="breadcrumb-item"><a href="index.html">${part}</a></li>`;
      } else {
        return `<li class="breadcrumb-item">${part}</li>`;
      }
    }).join('');
  }

  createBackButton() {
    // Don't show back button on homepage
    if (this.currentPage === 'homepage.html' || this.currentPage === 'index.html') return;

    const backButton = document.createElement('a');
    backButton.href = 'index.html';
    backButton.className = 'back-button';
    backButton.textContent = 'Back to Home';

    // Insert back button at the beginning of main content
    const mainContent = document.querySelector('main, .container, section');
    if (mainContent) {
      mainContent.insertBefore(backButton, mainContent.firstChild);
    }
  }

  setupScrollEffect() {
    const navbar = document.querySelector('.main-navbar');
    if (!navbar) return;

    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      
      lastScrollY = currentScrollY;
    });
  }

  setupMobileToggle() {
    const toggler = document.querySelector('.navbar-toggler');
    const collapse = document.querySelector('.navbar-collapse');
    
    if (toggler && collapse) {
      toggler.addEventListener('click', () => {
        collapse.classList.toggle('show');
      });

      // Close mobile menu when clicking on a link
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          collapse.classList.remove('show');
        });
      });
    }
  }

  // Method to update page indicator
  updatePageIndicator() {
    const pageData = this.navigationData[this.currentPage];
    if (!pageData) return;

    const indicator = document.createElement('div');
    indicator.className = 'page-indicator';
    indicator.textContent = pageData.title;

    const navbar = document.querySelector('.main-navbar .navbar-collapse');
    if (navbar) {
      navbar.appendChild(indicator);
    }
  }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new NavigationSystem();
});

// Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
  if (e.altKey) {
    switch(e.key) {
      case '1':
        window.location.href = 'index.html';
        break;
      case '2':
        window.location.href = 'portfolio_week_2.html';
        break;
      case '3':
        window.location.href = 'cute_shop.html';
        break;
      case '4':
        window.location.href = 'product_card_week_3.html';
        break;
      case '5':
        window.location.href = 'contact_info_week_1.html';
        break;
    }
  }
});
