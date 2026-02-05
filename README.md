# FCS Foundation Commercial Services Website

> **Comprehensive commercial foundation repair content hub featuring 9 SEO-optimized pages totaling 17,605+ words of unique content for the Dallas-Fort Worth market.**

[![React](https://img.shields.io/badge/React-19.2-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC.svg)](https://tailwindcss.com/)
[![Live Demo](https://img.shields.io/badge/Demo-Live-success.svg)](https://syncshepherd-main.github.io/Manus_FCS_Commerical_Mockup/)

## 🌐 Live Demo

**Production Site:** [https://syncshepherd-main.github.io/Manus_FCS_Commerical_Mockup/](https://syncshepherd-main.github.io/Manus_FCS_Commerical_Mockup/)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [Page Inventory](#page-inventory)
- [SEO & Schema](#seo--schema)
- [WordPress Integration](#wordpress-integration)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

This project is a production-ready commercial foundation repair website designed to dominate the Dallas-Fort Worth market. Built with React 19, Tailwind CSS 4, and modern web technologies, it features:

- **9 standalone pages** targeting specific commercial property types
- **17,605+ words** of SEO-optimized content
- **Real FCS Foundation content** including testimonials, reviews, and company statistics
- **Case study sections** on every page with property-specific examples
- **Dynamic case study gallery** on the main hub page
- **Mobile-responsive design** optimized for all devices
- **Conversion-focused elements** with multiple CTAs and trust signals

---

## ✨ Features

### Content & SEO
- ✅ **1,500-3,400+ words per page** for content depth and SEO authority
- ✅ **Keyword-optimized structure** with proper H1/H2/H3 hierarchy
- ✅ **Internal linking strategy** connecting all related pages
- ✅ **Schema markup guidelines** for LocalBusiness, Service, and FAQ
- ✅ **Geographic targeting** for Dallas, Fort Worth, Plano, McKinney, Frisco
- ✅ **Long-tail keyword integration** for property-specific searches

### Credibility & Trust
- ✅ **Real testimonials** from verified FCS Foundation clients
- ✅ **BBB A+ rating** prominently displayed
- ✅ **295+ Google reviews** with 5.0-star rating
- ✅ **25+ years experience** in the DFW market
- ✅ **4,790+ foundation repairs** completed
- ✅ **Lifetime transferable warranty** messaging

### User Experience
- ✅ **Mobile-first responsive design**
- ✅ **Fast page load times** with optimized assets
- ✅ **Clean URL structure** for SEO and usability
- ✅ **Intuitive navigation** with property-type cards
- ✅ **Multiple contact CTAs** throughout each page
- ✅ **Accessible design** following WCAG guidelines

### Technical
- ✅ **React 19.2.1** with modern hooks and patterns
- ✅ **TypeScript 5.6.3** for type safety
- ✅ **Tailwind CSS 4.1.14** for responsive styling
- ✅ **shadcn/ui** component library
- ✅ **Wouter 3.3.5** for lightweight client-side routing
- ✅ **Reusable components** for easy maintenance
- ✅ **GitHub Pages deployment** via GitHub Actions

---

## 📁 Project Structure

```
Manus_FCS_Commerical_Mockup/
├── client/
│   ├── public/                    # Static assets
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/            # Reusable components
│   │   │   ├── ui/               # shadcn/ui components
│   │   │   ├── CaseStudies.tsx   # Case study section component
│   │   │   ├── Testimonials.tsx  # Testimonial carousel component
│   │   │   ├── CaseStudyGallery.tsx  # Dynamic gallery for hub page
│   │   │   ├── ErrorBoundary.tsx # Error handling
│   │   │   ├── ManusDialog.tsx   # Custom dialog component
│   │   │   └── Map.tsx           # Map component
│   │   ├── pages/                # Page components
│   │   │   ├── Home.tsx          # Landing page with navigation
│   │   │   ├── CommercialFoundationRepairHub.tsx  # Main hub (3,432 words)
│   │   │   ├── WarehouseFoundationRepair.tsx      # Warehouse page (1,816 words)
│   │   │   ├── RetailFoundationRepair.tsx         # Retail page (1,922 words)
│   │   │   ├── OfficeBuildingFoundationRepair.tsx # Office page (2,018 words)
│   │   │   ├── ApartmentFoundationRepair.tsx      # Apartment page (2,564 words)
│   │   │   ├── ChurchFoundationRepair.tsx         # Church page (2,108 words)
│   │   │   ├── RestaurantFoundationRepair.tsx     # Restaurant page (1,635 words)
│   │   │   ├── IndustrialFoundationRepair.tsx     # Industrial page (1,611 words)
│   │   │   ├── HealthcareFoundationRepair.tsx     # Healthcare page (1,499 words)
│   │   │   └── NotFound.tsx      # 404 page
│   │   ├── contexts/             # React contexts
│   │   │   └── ThemeContext.tsx  # Theme provider
│   │   ├── hooks/                # Custom React hooks
│   │   ├── lib/                  # Utility functions
│   │   │   └── utils.ts
│   │   ├── App.tsx               # Main app component with routing
│   │   ├── main.tsx              # React entry point
│   │   └── index.css             # Global styles with FCS brand colors
│   └── index.html                # HTML template
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages deployment
├── server/                       # Server placeholder (static site)
│   └── index.ts
├── shared/                       # Shared types and constants
│   └── const.ts
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts            # Tailwind configuration
├── vite.config.ts                # Vite configuration
├── SEO_SCHEMA_IMPLEMENTATION_REPORT.md  # Detailed SEO documentation
└── README.md                     # This file
```

---

## 🚀 Installation

### Prerequisites

- **Node.js** 20+ (recommended: 20.x or higher)
- **pnpm** 10+ (or npm/yarn)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/SyncShepherd-Main/Manus_FCS_Commerical_Mockup.git
   cd Manus_FCS_Commerical_Mockup
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 💻 Development

### Available Scripts

```bash
# Start development server with hot reload
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview

# Type check TypeScript
pnpm check

# Format code with Prettier
pnpm format
```

### Development Workflow

1. **Create new pages** in `client/src/pages/`
2. **Add routes** in `client/src/App.tsx`
3. **Create reusable components** in `client/src/components/`
4. **Update styles** in `client/src/index.css` for global changes
5. **Test responsiveness** on mobile, tablet, and desktop

### Brand Colors (FCS Foundation)

```css
/* Primary Colors */
--navy-blue: #1E3A5F;      /* Headers, navigation */
--forest-green: #4A7C59;   /* Accents, success indicators */
--orange: #FF8C00;         /* CTAs, highlights */

/* Neutral Colors */
--white: #FFFFFF;          /* Backgrounds, text */
--light-gray: #F4F4F4;     /* Secondary backgrounds */
--dark-gray: #333333;      /* Body text */
```

### Typography

- **Font Family:** Roboto (Google Fonts)
- **Headings:** Bold (700-900 weight)
- **Body:** Regular (400 weight)
- **Links:** Medium (500 weight)

---

## 🌐 Deployment

### GitHub Pages (Current)

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

**Live URL:** https://syncshepherd-main.github.io/Manus_FCS_Commerical_Mockup/

### Alternative Hosting Options

#### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
pnpm build
netlify deploy --prod --dir=dist/public
```

### Environment Variables

No environment variables are required for the static site. All content is embedded in the pages.

---

## 📄 Page Inventory

### Main Hub Page
**URL:** `/commercial-foundation-repair`
**Word Count:** 3,432 words
**Purpose:** Central resource and navigation hub

**Features:**
- Comprehensive service overview
- Dynamic case study gallery (8 property types)
- Trust signals and company statistics
- Property-type navigation grid
- FAQ section
- Real testimonials

---

### Property-Type Pages (8 Pages)

| Page | URL | Word Count | Focus |
|------|-----|------------|-------|
| **Warehouse** | `/commercial/warehouse-foundation-repair` | 1,816 | Heavy loads, 24/7 operations, racking systems |
| **Retail** | `/commercial/retail-foundation-repair` | 1,922 | ADA compliance, customer safety, business hours |
| **Office** | `/commercial/office-building-foundation-repair` | 2,018 | Multi-story integrity, minimal disruption |
| **Apartment** | `/commercial/apartment-foundation-repair` | 2,564 | Multi-unit buildings, resident communication |
| **Church** | `/commercial/church-foundation-repair` | 2,108 | Historic preservation, community impact |
| **Restaurant** | `/commercial/restaurant-foundation-repair` | 1,635 | Kitchen equipment, health code compliance |
| **Industrial** | `/commercial/industrial-foundation-repair` | 1,611 | Precision machinery, production efficiency |
| **Healthcare** | `/commercial/healthcare-foundation-repair` | 1,499 | Medical equipment, infection control |

**Each page includes:**
- Property-specific challenges and solutions
- Case study with measurable results
- Real client testimonials
- FAQ section
- Multiple CTAs with phone number
- Internal links to related pages

---

## 🔍 SEO & Schema

### Meta Descriptions

Each page includes optimized meta descriptions (155-160 characters). See `SEO_SCHEMA_IMPLEMENTATION_REPORT.md` for complete recommendations.

**Example (Commercial Hub):**
```html
<meta name="description" content="Expert commercial foundation repair in Dallas-Fort Worth. 25+ years experience, BBB A+, lifetime warranty. Serving warehouses, retail, offices, apartments & more. Free evaluation." />
```

### Schema Markup

Implement structured data for enhanced search visibility:

1. **LocalBusiness Schema** (all pages)
2. **Service Schema** (property-type pages)
3. **FAQ Schema** (where applicable)

**Example LocalBusiness Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "FCS Foundation & Concrete Repair",
  "telephone": "[PHONE_NUMBER]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dallas",
    "addressRegion": "TX"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "295"
  }
}
```

See `SEO_SCHEMA_IMPLEMENTATION_REPORT.md` for complete schema examples.

---

## 🔧 WordPress Integration

### Conversion Steps

1. **Convert React Components to PHP Templates**
   - Page components → WordPress page templates
   - Maintain structure and content

2. **Create Custom Post Type** (optional)
   - Post type: `commercial_pages`
   - Custom fields for case studies
   - Template hierarchy for property types

3. **Add Schema Markup**
   - Install Yoast SEO or Rank Math
   - Add LocalBusiness schema to all pages
   - Add Service schema to property-type pages
   - Add FAQ schema where applicable

4. **Integrate Contact Forms**
   - Use Contact Form 7 or Gravity Forms
   - Add property type dropdown
   - Add square footage field
   - Add urgency selector
   - Connect to CRM (HubSpot, Salesforce, etc.)

5. **Replace Placeholder Images**
   - Upload actual FCS project photos
   - Create before/after galleries
   - Optimize images (WebP format, lazy loading)
   - Add descriptive alt text

### WordPress Plugins Recommended

- **Yoast SEO** or **Rank Math** - SEO optimization and schema
- **Contact Form 7** or **Gravity Forms** - Contact forms
- **Advanced Custom Fields (ACF)** - Custom fields for case studies
- **WP Rocket** - Performance optimization
- **Smush** - Image optimization
- **Redirection** - URL management

---

## 📊 Performance Optimization

### Current Optimizations

- ✅ Code splitting with React lazy loading
- ✅ Tailwind CSS purging for minimal CSS bundle
- ✅ Vite for fast builds and HMR
- ✅ Modern JavaScript with tree shaking

### Recommended Improvements

1. **Image Optimization**
   - Convert images to WebP format
   - Implement lazy loading
   - Use responsive images with srcset
   - Add blur-up placeholders

2. **Caching Strategy**
   - Set cache headers for static assets
   - Implement service worker for offline support
   - Use CDN for asset delivery

3. **Code Optimization**
   - Minimize JavaScript bundle size
   - Remove unused dependencies
   - Implement route-based code splitting

4. **Monitoring**
   - Set up Google Analytics
   - Monitor Core Web Vitals
   - Track conversion rates
   - A/B test CTAs and layouts

---

## 🎨 Customization

### Adding New Pages

1. Create new page component in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Add internal links from related pages

### Modifying Styles

Global styles are in `client/src/index.css`. Component-specific styles use Tailwind utility classes.

### Updating Content

Content is embedded in page components. To update:
1. Open the page component (e.g., `WarehouseFoundationRepair.tsx`)
2. Modify the JSX content
3. Save and hot reload will update instantly

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for all new code
- Follow existing naming conventions
- Use Tailwind CSS for styling (avoid custom CSS)
- Write descriptive commit messages
- Test on mobile, tablet, and desktop

---

## 📝 License

Proprietary - © 2026 FCS Foundation Repair and Concrete Services

All rights reserved. This code is proprietary and confidential. For internal use only.

---

*Last Updated: February 2026*
