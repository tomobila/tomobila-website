# Technical Specifications: Landing Page Replication

## Overview
This document provides detailed technical specifications and code examples for replicating the French landing page structure in English and Arabic versions.

## 1. HTML Structure Updates

### 1.1 Document Head Updates

#### English Version (en/index.html)
```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tomobila - Car Rental Management Software</title>
  <!-- Existing meta tags and stylesheets -->
</head>
```

#### Arabic Version (ar/index.html)
```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>توموبيلا - برنامج إدارة تأجير السيارات</title>
  <!-- Existing meta tags and stylesheets -->
  <link rel="stylesheet" href="./assets/css/rtl-styles.css">
</head>
```

### 1.2 Header Structure

#### Complete Header Template (English)
```html
<header class="uc-header header-global text-white uc-navbar-sticky-wrap z-999">
  <nav class="uc-navbar-container uc-navbar-transparent uc-navbar-float ft-tertiary z-1"
    data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
    style="transform: translateY(0px); opacity: 1">
    <div class="uc-navbar-main">
      <div class="container max-w-lg lg:max-w-950px xl:max-w-xl">
        <div class="uc-navbar min-h-56px lg:min-h-100px px-2 lg:px-0 text-gray-900 dark:text-white"
          data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
          <div class="uc-navbar-left">
            <div class="uc-logo">
              <a class="panel text-none" href="/" style="width: 140px">
                <img class="text-primary dark:text-tertiary" src="./assets/images/logo.png" alt="Tomobila"
                  data-uc-svg="" width="300" />
              </a>
            </div>
          </div>
          <div class="uc-navbar-center d-none md:d-flex text-white">
            <ul class="uc-navbar-nav gap-4 xl:gap-5 d-flex fs-5 fw-bold" style="--uc-nav-height: 48px"
              data-uc-scrollspy-nav="closest: li; offset: 40; scroll: true">
              <li><a href="#" class="hover:text-white duration-150">Features</a></li>
              <li><a href="#" class="hover:text-white duration-150">Pricing</a></li>
              <li><a href="#" class="hover:text-white duration-150">Blog</a></li>
              <li><a href="#" class="hover:text-white duration-150">About</a></li>
            </ul>
          </div>
          <div class="uc-navbar-right">
            <a class="btn btn-sm btn-primary text-white text-none d-none md:d-inline-flex" href="#uc-newsletter-modal"
              data-uc-toggle>
              Free Trial
            </a>
            <a class="btn btn-md btn-tertiary dark:bg-white dark:text-dark border fs-5 lg:px-3 d-none lg:d-inline-flex shadow-xs hover:bg-tertiary-600 duration-150"
              href="https://app.tomobila.com" target="_blank">
              Login
            </a>
            <a class="btn btn-md btn-tertiary w-48px h-48px d-flex md:d-none" href="index.html#uc-menu-panel"
              data-uc-toggle="" role="button" aria-label="Open navigation menu" aria-expanded="false">
              <i class="icon icon-2 unicon-menu"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
```

#### Complete Header Template (Arabic)
```html
<header class="uc-header header-global text-white uc-navbar-sticky-wrap z-999" dir="rtl">
  <nav class="uc-navbar-container uc-navbar-transparent uc-navbar-float ft-tertiary z-1"
    data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
    style="transform: translateY(0px); opacity: 1">
    <div class="uc-navbar-main">
      <div class="container max-w-lg lg:max-w-950px xl:max-w-xl">
        <div class="uc-navbar min-h-56px lg:min-h-100px px-2 lg:px-0 text-gray-900 dark:text-white"
          data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
          <div class="uc-navbar-left">
            <div class="uc-logo">
              <a class="panel text-none" href="/" style="width: 140px">
                <img class="text-primary dark:text-tertiary" src="./assets/images/logo.png" alt="توموبيلا"
                  data-uc-svg="" width="300" />
              </a>
            </div>
          </div>
          <div class="uc-navbar-center d-none md:d-flex text-white">
            <ul class="uc-navbar-nav gap-4 xl:gap-5 d-flex fs-5 fw-bold" style="--uc-nav-height: 48px"
              data-uc-scrollspy-nav="closest: li; offset: 40; scroll: true">
              <li><a href="#" class="hover:text-white duration-150">الميزات</a></li>
              <li><a href="#" class="hover:text-white duration-150">الأسعار</a></li>
              <li><a href="#" class="hover:text-white duration-150">المدونة</a></li>
              <li><a href="#" class="hover:text-white duration-150">حول</a></li>
            </ul>
          </div>
          <div class="uc-navbar-right">
            <a class="btn btn-sm btn-primary text-white text-none d-none md:d-inline-flex" href="#uc-newsletter-modal"
              data-uc-toggle>
              تجربة مجانية
            </a>
            <a class="btn btn-md btn-tertiary dark:bg-white dark:text-dark border fs-5 lg:px-3 d-none lg:d-inline-flex shadow-xs hover:bg-tertiary-600 duration-150"
              href="https://app.tomobila.com" target="_blank">
              تسجيل الدخول
            </a>
            <a class="btn btn-md btn-tertiary w-48px h-48px d-flex md:d-none" href="index.html#uc-menu-panel"
              data-uc-toggle="" role="button" aria-label="فتح قائمة التنقل" aria-expanded="false">
              <i class="icon icon-2 unicon-menu"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
```

### 1.3 Hero Section Structure

#### English Hero Section
```html
<div id="hero_header" class="hero-header section panel overflow-hidden uc-dark">
  <div class="position-absolute top-0 start-0 end-0 h-screen bg-secondary dark:bg-tertiary-700 lg:rounded-2 lg:rounded-top-0 lg:m-2 lg:mt-0"></div>
  <div class="position-absolute top-50 start-50 translate-middle w-1000px h-500px bg-secondary-300 dark:bg-white rounded-circle blur-10 dark:blend-overlay"></div>
  <div class="section-outer panel py-8 lg:py-9 xl:py-10">
    <div class="position-absolute top-0 start-0 end-0 h-screen blend-difference opacity-20">
      <video data-uc-cover="" src="./assets/images/media/Tomobila-home-8.webm"></video>
    </div>
    <div class="container">
      <div class="section-inner panel">
        <div class="row child-cols-12 justify-center items-center g-8">
          <div class="lg:col-10">
            <div class="panel vstack gap-4 lg:gap-8">
              <div class="panel vstack justify-center items-center gap-2 px-2 pt-4 text-center">
                <h1 class="h2 md:h1 lg:display-5 m-0 mt-2"
                  data-anime="translateY: [10, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 450; delay: 250;">
                  Your
                  <span class="text-tertiary dark:text-primary" data-uc-splitext="types: 'chars'"
                    data-anime="targets: > *; translateY: [-5, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 250; delay: anime.stagger(50);">
                    rental agency
                  </span>
                  without paperwork!
                  <br class="d-none lg:d-block" />
                </h1>
                <p class="fs-6 xl:fs-3 xl:px-10 dark:text-white text-opacity-70" data-uc-splitext="types: 'words'"
                  data-anime="targets: > *; translateX: [5, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 450; delay: anime.stagger(50, {start:650});">
                  With Tomobila, easily manage your vehicles, track your customers and contracts, and save time every day.
                </p>
                <div class="vstack md:hstack justify-center gap-1 my-1 lg:my-3"
                  data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 750;">
                  <a href="index.html#" class="btn btn-md xl:btn-lg btn-primary border px-3 lg:px-5 w-auto">
                    <span>Start Your Trial</span>
                  </a>
                </div>
              </div>
              <div class="panel border shadow-lg rounded-2 p-1"
                data-anime="translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 450; delay: 950;">
                <img src="./assets/images/template/dashboard-8-home.png" alt="Tomobila Dashboard" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

#### Arabic Hero Section
```html
<div id="hero_header" class="hero-header section panel overflow-hidden uc-dark" dir="rtl">
  <div class="position-absolute top-0 start-0 end-0 h-screen bg-secondary dark:bg-tertiary-700 lg:rounded-2 lg:rounded-top-0 lg:m-2 lg:mt-0"></div>
  <div class="position-absolute top-50 start-50 translate-middle w-1000px h-500px bg-secondary-300 dark:bg-white rounded-circle blur-10 dark:blend-overlay"></div>
  <div class="section-outer panel py-8 lg:py-9 xl:py-10">
    <div class="position-absolute top-0 start-0 end-0 h-screen blend-difference opacity-20">
      <video data-uc-cover="" src="./assets/images/media/Tomobila-home-8.webm"></video>
    </div>
    <div class="container">
      <div class="section-inner panel">
        <div class="row child-cols-12 justify-center items-center g-8">
          <div class="lg:col-10">
            <div class="panel vstack gap-4 lg:gap-8">
              <div class="panel vstack justify-center items-center gap-2 px-2 pt-4 text-center">
                <h1 class="h2 md:h1 lg:display-5 m-0 mt-2"
                  data-anime="translateY: [10, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 450; delay: 250;">
                  <span class="text-tertiary dark:text-primary" data-uc-splitext="types: 'chars'"
                    data-anime="targets: > *; translateY: [-5, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 250; delay: anime.stagger(50);">
                    وكالة التأجير
                  </span>
                  الخاصة بك بدون أوراق!
                  <br class="d-none lg:d-block" />
                </h1>
                <p class="fs-6 xl:fs-3 xl:px-10 dark:text-white text-opacity-70" data-uc-splitext="types: 'words'"
                  data-anime="targets: > *; translateX: [5, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 450; delay: anime.stagger(50, {start:650});">
                  مع توموبيلا، أدر مركباتك بسهولة، وتابع عملاءك وعقودك، ووفر الوقت كل يوم.
                </p>
                <div class="vstack md:hstack justify-center gap-1 my-1 lg:my-3"
                  data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 750;">
                  <a href="index.html#" class="btn btn-md xl:btn-lg btn-primary border px-3 lg:px-5 w-auto">
                    <span>ابدأ تجربتك</span>
                  </a>
                </div>
              </div>
              <div class="panel border shadow-lg rounded-2 p-1"
                data-anime="translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 450; delay: 950;">
                <img src="./assets/images/template/dashboard-8-home.png" alt="لوحة تحكم توموبيلا" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## 2. CSS Specifications

### 2.1 RTL Stylesheet (rtl-styles.css)

```css
/* RTL Base Styles */
[dir="rtl"] {
  text-align: right;
}

[dir="rtl"] body {
  font-family: 'Cairo', 'Tajawal', 'Amiri', sans-serif;
  direction: rtl;
}

/* Navigation RTL */
[dir="rtl"] .uc-navbar-nav {
  flex-direction: row-reverse;
}

[dir="rtl"] .uc-navbar-right {
  order: -1;
}

[dir="rtl"] .uc-navbar-left {
  order: 1;
}

/* Layout RTL */
[dir="rtl"] .hstack {
  flex-direction: row-reverse;
}

[dir="rtl"] .row {
  direction: rtl;
}

/* Spacing RTL */
[dir="rtl"] .ms-1 { margin-right: 0.25rem !important; margin-left: 0 !important; }
[dir="rtl"] .ms-2 { margin-right: 0.5rem !important; margin-left: 0 !important; }
[dir="rtl"] .ms-3 { margin-right: 1rem !important; margin-left: 0 !important; }
[dir="rtl"] .ms-4 { margin-right: 1.5rem !important; margin-left: 0 !important; }
[dir="rtl"] .ms-5 { margin-right: 3rem !important; margin-left: 0 !important; }

[dir="rtl"] .me-1 { margin-left: 0.25rem !important; margin-right: 0 !important; }
[dir="rtl"] .me-2 { margin-left: 0.5rem !important; margin-right: 0 !important; }
[dir="rtl"] .me-3 { margin-left: 1rem !important; margin-right: 0 !important; }
[dir="rtl"] .me-4 { margin-left: 1.5rem !important; margin-right: 0 !important; }
[dir="rtl"] .me-5 { margin-left: 3rem !important; margin-right: 0 !important; }

/* Padding RTL */
[dir="rtl"] .ps-1 { padding-right: 0.25rem !important; padding-left: 0 !important; }
[dir="rtl"] .ps-2 { padding-right: 0.5rem !important; padding-left: 0 !important; }
[dir="rtl"] .ps-3 { padding-right: 1rem !important; padding-left: 0 !important; }
[dir="rtl"] .ps-4 { padding-right: 1.5rem !important; padding-left: 0 !important; }
[dir="rtl"] .ps-5 { padding-right: 3rem !important; padding-left: 0 !important; }

[dir="rtl"] .pe-1 { padding-left: 0.25rem !important; padding-right: 0 !important; }
[dir="rtl"] .pe-2 { padding-left: 0.5rem !important; padding-right: 0 !important; }
[dir="rtl"] .pe-3 { padding-left: 1rem !important; padding-right: 0 !important; }
[dir="rtl"] .pe-4 { padding-left: 1.5rem !important; padding-right: 0 !important; }
[dir="rtl"] .pe-5 { padding-left: 3rem !important; padding-right: 0 !important; }

/* Text Alignment */
[dir="rtl"] .text-start { text-align: right !important; }
[dir="rtl"] .text-end { text-align: left !important; }

/* Flexbox RTL */
[dir="rtl"] .justify-content-start { justify-content: flex-end !important; }
[dir="rtl"] .justify-content-end { justify-content: flex-start !important; }

/* Grid RTL */
[dir="rtl"] .col-4:first-child {
  order: 3;
}

[dir="rtl"] .col-4:last-child {
  order: 1;
}

[dir="rtl"] .col-8 {
  order: 2;
}

/* Typography RTL */
[dir="rtl"] h1, [dir="rtl"] h2, [dir="rtl"] h3, [dir="rtl"] h4, [dir="rtl"] h5, [dir="rtl"] h6 {
  font-weight: 700;
  line-height: 1.4;
}

[dir="rtl"] p {
  line-height: 1.6;
}

/* Button RTL */
[dir="rtl"] .btn {
  text-align: center;
}

/* Dropdown RTL */
[dir="rtl"] .uc-drop {
  left: auto !important;
  right: 0 !important;
}

/* Language Selector RTL */
[dir="rtl"] .nav-y.items-end {
  align-items: flex-start !important;
}

/* Feature Cards RTL */
[dir="rtl"] .feature-card {
  text-align: right;
}

[dir="rtl"] .feature-card .icon {
  margin-left: 0;
  margin-right: 0.5rem;
}

/* Animation RTL */
[dir="rtl"] [data-anime*="translateX"] {
  transform: translateX(-5px) !important;
}
```

### 2.2 Responsive RTL Styles

```css
/* Mobile RTL */
@media (max-width: 768px) {
  [dir="rtl"] .uc-navbar-nav {
    flex-direction: column;
    align-items: flex-end;
  }
  
  [dir="rtl"] .btn {
    width: 100%;
    text-align: center;
  }
}

/* Tablet RTL */
@media (min-width: 769px) and (max-width: 1024px) {
  [dir="rtl"] .container {
    padding-right: 2rem;
    padding-left: 2rem;
  }
}

/* Desktop RTL */
@media (min-width: 1025px) {
  [dir="rtl"] .uc-navbar-nav {
    gap: 2rem;
  }
}
```

## 3. JavaScript Considerations

### 3.1 RTL Animation Adjustments

```javascript
// RTL Animation Helper
function adjustAnimationForRTL() {
  if (document.dir === 'rtl' || document.documentElement.dir === 'rtl') {
    // Reverse translateX animations
    const translateXElements = document.querySelectorAll('[data-anime*="translateX"]');
    translateXElements.forEach(element => {
      const animeData = element.getAttribute('data-anime');
      if (animeData.includes('translateX: [5, 0]')) {
        element.setAttribute('data-anime', animeData.replace('translateX: [5, 0]', 'translateX: [-5, 0]'));
      }
    });
  }
}

// Call on page load
document.addEventListener('DOMContentLoaded', adjustAnimationForRTL);
```

### 3.2 Language Selector Functionality

```javascript
// Language Selector Handler
function initLanguageSelector() {
  const languageLinks = document.querySelectorAll('.language-selector a');
  
  languageLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetLang = this.getAttribute('href');
      
      // Store language preference
      localStorage.setItem('preferred-language', targetLang);
      
      // Navigate to language version
      window.location.href = targetLang;
    });
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initLanguageSelector);
```

## 4. Asset Management

### 4.1 Image Optimization

```html
<!-- Responsive Images -->
<picture>
  <source media="(max-width: 768px)" srcset="./assets/images/features/f1-mobile.webp">
  <source media="(max-width: 1024px)" srcset="./assets/images/features/f1-tablet.webp">
  <img src="./assets/images/features/f1.png" alt="Feature Image" loading="lazy">
</picture>
```

### 4.2 Font Loading

```html
<!-- Arabic Font Preloading -->
<link rel="preload" href="./assets/fonts/Cairo-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="./assets/fonts/Cairo-Bold.woff2" as="font" type="font/woff2" crossorigin>
```

## 5. Performance Optimization

### 5.1 Critical CSS

```css
/* Critical CSS for above-the-fold content */
.hero-header {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.uc-navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

/* RTL Critical Styles */
[dir="rtl"] .hero-header h1 {
  text-align: center;
  font-family: 'Cairo', sans-serif;
}
```

### 5.2 Lazy Loading Implementation

```javascript
// Intersection Observer for lazy loading
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      observer.unobserve(img);
    }
  });
});

// Observe all lazy images
document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});
```

## 6. Testing Specifications

### 6.1 RTL Testing Checklist

```javascript
// RTL Testing Helper
function testRTLLayout() {
  const tests = {
    textAlignment: document.dir === 'rtl',
    navigationOrder: checkNavigationOrder(),
    buttonAlignment: checkButtonAlignment(),
    gridLayout: checkGridLayout()
  };
  
  console.log('RTL Layout Tests:', tests);
  return tests;
}

function checkNavigationOrder() {
  const navItems = document.querySelectorAll('.uc-navbar-nav li');
  return navItems.length > 0;
}

function checkButtonAlignment() {
  const buttons = document.querySelectorAll('.btn');
  return Array.from(buttons).every(btn => 
    getComputedStyle(btn).textAlign === 'center'
  );
}

function checkGridLayout() {
  const gridItems = document.querySelectorAll('.row .col-4');
  return gridItems.length > 0;
}
```

### 6.2 Cross-Browser Testing

```javascript
// Browser Compatibility Check
function checkBrowserSupport() {
  const features = {
    flexbox: CSS.supports('display', 'flex'),
    grid: CSS.supports('display', 'grid'),
    customProperties: CSS.supports('--custom', 'property'),
    rtl: CSS.supports('direction', 'rtl')
  };
  
  console.log('Browser Support:', features);
  return features;
}
```

## 7. Deployment Considerations

### 7.1 Build Process

```json
{
  "scripts": {
    "build:en": "webpack --config webpack.en.config.js",
    "build:ar": "webpack --config webpack.ar.config.js",
    "build:all": "npm run build:en && npm run build:ar",
    "test:rtl": "jest --config jest.rtl.config.js"
  }
}
```

### 7.2 Server Configuration

```nginx
# Nginx configuration for language routing
location /en/ {
    try_files $uri $uri/ /en/index.html;
}

location /ar/ {
    try_files $uri $uri/ /ar/index.html;
    add_header Content-Language ar;
}

# Default to French
location / {
    try_files $uri $uri/ /index.html;
    add_header Content-Language fr;
}
```

This technical specification provides comprehensive implementation details for replicating the French landing page structure across English and Arabic versions while maintaining proper RTL support and performance optimization.