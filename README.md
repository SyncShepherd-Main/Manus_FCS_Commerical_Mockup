# FCS Foundation Commercial Services Website

A modern, SEO-optimized React application showcasing FCS Foundation Repair's commercial foundation repair services across the Dallas-Fort Worth metroplex.

## 🌐 Live Demo

**Production Site:** [https://syncshepherd-main.github.io/Manus_FCS_Commerical_Mockup/](https://syncshepherd-main.github.io/Manus_FCS_Commerical_Mockup/)

## 📋 Project Overview

This is a comprehensive commercial foundation repair website featuring 9 specialized pages with over 17,605 words of SEO-optimized content. Built with React and Vite, the site targets commercial property owners and managers across multiple property types in the Dallas-Fort Worth area.

### Key Features

- **9 Specialized Pages**: Main commercial hub + 8 property-type specific pages
- **SEO-Optimized Content**: Keyword-targeted content with proper meta tags and schema markup
- **Responsive Design**: Mobile-first approach with FCS brand styling
- **Trust Signals**: BBB A+ rating, 25+ years experience, 295+ reviews prominently displayed
- **Conversion-Focused**: Multiple CTAs, contact forms, and prominent phone numbers
- **Property Types Covered**:
  - Warehouse Foundation Repair
  - Retail Store Foundation Repair
  - Office Building Foundation Repair
  - Apartment Building Foundation Repair
  - Church Foundation Repair
  - Restaurant Foundation Repair
  - Industrial Foundation Repair
  - Healthcare/Medical Building Foundation Repair

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.2.1
- **Build Tool**: Vite 7.1.7
- **Routing**: Wouter 3.3.5
- **Styling**: Tailwind CSS 4.1.14
- **UI Components**: Radix UI + Custom Components
- **Animations**: Framer Motion 12.23.22
- **Deployment**: GitHub Pages via GitHub Actions

## 📁 Project Structure

```
Manus_FCS_Commerical_Mockup/
├── client/
│   └── src/
│       ├── components/      # Reusable UI components
│       ├── pages/          # Page components (Home, NotFound, property pages)
│       ├── contexts/       # React contexts (ThemeContext)
│       └── App.tsx         # Main application with routing
├── .github/
│   └── workflows/
│       └── deploy.yml      # Automated GitHub Pages deployment
├── vite.config.ts          # Vite configuration with GitHub Pages base path
├── package.json            # Dependencies and scripts
└── SEO_SCHEMA_IMPLEMENTATION_REPORT.md  # Detailed SEO documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- pnpm 10.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SyncShepherd-Main/Manus_FCS_Commerical_Mockup.git
cd Manus_FCS_Commerical_Mockup
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
pnpm build
```

Built files will be output to `dist/public/`

## 📊 SEO Implementation

### Content Strategy

- **Main Hub Page**: 3,432 words targeting "commercial foundation repair Dallas"
- **Property Pages**: Average 1,850 words each (1,500-2,000 word target)
- **Keyword Focus**: 25+ commercial foundation repair keywords
- **Internal Linking**: Hub and spoke model with strategic cross-linking

### Technical SEO

- ✅ Unique meta titles and descriptions for each page
- ✅ Proper H1/H2/H3 hierarchy with keyword integration
- ✅ Mobile-responsive design
- ✅ Fast page load times
- ✅ Clean URL structure
- 📋 Schema markup ready for implementation (see SEO report)

### Target Keywords

| Page | Primary Keyword | Monthly Volume |
|------|----------------|----------------|
| Commercial Hub | commercial foundation repair Dallas | 720 |
| Warehouse | warehouse foundation repair | 140 |
| Retail | retail store foundation repair | 90 |
| Office Building | office building foundation repair | 110 |
| Apartment | apartment building foundation repair | 170 |
| Church | church foundation repair | 50 |
| Restaurant | restaurant foundation repair | 60 |
| Industrial | industrial foundation repair | 130 |
| Healthcare | medical building foundation repair | 70 |

## 🔄 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### GitHub Actions Workflow

- Triggers on push to main or manual workflow dispatch
- Builds the React application with production settings
- Uploads artifacts to GitHub Pages
- Deploys to: `https://syncshepherd-main.github.io/Manus_FCS_Commerical_Mockup/`

## 📱 Contact Information

**FCS Foundation Repair and Concrete Services**
- Phone: 469-402-1038
- Service Area: Dallas-Fort Worth Metroplex
- Website: https://fcsfoundationandconcrete.com

## 🎯 Future Enhancements

- [ ] Add JSON-LD schema markup for SEO
- [ ] Implement breadcrumb navigation
- [ ] Add image galleries with optimized alt text
- [ ] Set up Google Analytics tracking
- [ ] Integrate contact form with backend
- [ ] Add live chat functionality
- [ ] Implement before/after photo galleries
- [ ] Add customer testimonial sections with ratings

## 📄 Documentation

For detailed SEO strategy, keyword targeting, and schema markup implementation, see [SEO_SCHEMA_IMPLEMENTATION_REPORT.md](./SEO_SCHEMA_IMPLEMENTATION_REPORT.md)

## 🤝 Contributing

This is a commercial project for FCS Foundation Repair. For questions or updates, contact the development team.

## 📜 License

Proprietary - © 2026 FCS Foundation Repair and Concrete Services

---

*Built with React + Vite | Deployed on GitHub Pages | SEO Optimized for Dallas-Fort Worth Market*
