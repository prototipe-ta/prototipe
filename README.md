# Prototipe

## Description

**Prototipe** is a junior enterprise based in Montes Claros, in the heart of North Valley, Northern Minas Gerais. Originally focused on physical prototyping using 3D modeling in MDF, acrylic, and filament printing, the company has recently expanded its operations to include software development. By combining the theoretical knowledge of Computer Science students with market practice, Prototipe now designs and builds applications and websites for real clients, diversifying its portfolio and expanding its regional impact.

The previous static portal no longer met the company's needs. Limited to fixed HTML without any tools for publishing new projects or blog posts, the old site failed to attract new clients and served merely as an outdated "business card." 

This project aims to create a new website that represents Prototipe's ideals, integrates software development services with the existing prototyping showcase, optimizes user experience, and meets the requirements of the junior enterprise movement and partners. The goal is to build an attractive expository catalog and a standardized publication system capable of converting visitors into interested clients for both services.

### Key Features

- **Unified Platform**: Combines physical prototyping and software development services in a single digital showcase
- **Dynamic Content Management**: CMS panel for managing blog posts, portfolio items, and editable content without technical knowledge
- **Interactive 3D Models**: Renders interactive 3D models on the homepage
- **Responsive Design**: Mobile-first approach ensuring fluid navigation across all devices
- **Dark/Light Mode**: Theme toggle following Prototipe's color palette and branding guidelines
- **Portfolio with Filters**: Categorized catalog of completed projects with filtering capabilities
- **Contact System**: Functional form for message submission and budget requests
- **Blog Platform**: Dynamic space for articles, case studies, market news, and internal updates

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Configuration](#configuration)
- [Architecture / Tech Stack](#architecture--tech-stack)
- [Portfolio and Content Structure](#portfolio-and-content-structure)
- [Visual Identity Guidelines](#visual-identity-guidelines)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Docker
- Node.js (latest LTS version or install using Docker)
- Git for version control
- NPM package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/prototipe-ta/prototipe.git
cd prototipe
```

2. Install frontend dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

### Build and run Docker container

1. Build the production image

```bash
docker build -t prototipe -f Dockerfile .

docker run -p 3000:3000 prototipe
```

2. Build the development image

```bash
docker build -t prototipe-dev -f Dockerfile.dev .

docker run -p 5173:5173 prototipe-dev
```

## Usage

### Accessing the Site

After installation, access the application at `http://localhost:3000` using the Dokcer container in build mode or `http://localhost:5173` using the dev mode.

### Pages Overview

The website consists of eight main pages:

| Page | Description |
|------|-------------|
| **Home** | Landing page with brand presentation, service highlights, and interactive 3D models |
| **Services** | Clear breakdown of both business segments (physical prototyping and software development) |
| **About Us** | Institutional page with history, mission, vision, and values |
| **Portfolio** | Dynamic catalog of completed projects with images, descriptions, and category tags |
| **Selection Process** | Informative page for recruiting new members with schedule and instructions |
| **Blog** | Dynamic space for articles, case studies, and updates |
| **Contact** | Functional form for message submission and budget requests |
| **Admin Panel** | Restricted CMS for managing blog posts, portfolio items, and dynamic content |

### CMS Admin Panel

The admin panel allows members to manage content without technical programming knowledge:

- **Blog Management**: Create, edit, and delete blog posts
- **Portfolio Management**: Manage portfolio items including image uploads and descriptions
- **Content Updates**: Edit visible content that requires periodic updates

### Theme Toggle

The site includes a dark/light mode toggle that follows Prototipe's color palette and branding study. The theme preference is persisted across sessions.

## Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
DATABASE_URL=postgresql://user:password@localhost:5432/prototipe_db

# Email Configuration (for contact form)
SMTP_HOST=[YOUR_SMTP_HOST]
SMTP_PORT=[YOUR_SMTP_PORT]
SMTP_USER=[YOUR_SMTP_USER]
SMTP_PASSWORD=[YOUR_SMTP_PASSWORD]
CONTACT_EMAIL=[RECIPIENT_EMAIL]

# Application Settings
NODE_ENV=development
API_URL=http://localhost:8000
```

### Configuration Options

The system requires minimal configuration. Key configurable aspects include:

- Database connection settings for PostgreSQL
- Email server configuration for contact form notifications
- Theme preferences (stored per user session)
- Content moderation settings in the admin panel

## Architecture / Tech Stack

### Frontend

- **Framework**: Vite + React
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui for accessible and standardized components
- **3D Rendering**: Three.js or similar lightweight library for interactive models
- **Animations**: Lightweight animations optimized for performance

### Development Standards

- **Version Control**: Git with comprehensive code comments to facilitate knowledge transfer (addressing high turnover typical of junior enterprises)
- **Performance**: Initial load time under 3 seconds on 4G connections
- **Compatibility**: Supports Chrome, Firefox, Edge, and Opera latest versions
- **Responsive**: Fully responsive with mobile-first approach
- **Performance Optimization**: Animations optimized not to compromise performance on modest hardware or limited internet connections

## Portfolio and Content Structure

### Portfolio Organization

The portfolio follows a consolidated approach combining two structural routes:

1. **Service Pages**: Separate sections for each service type for visitors who know what they want
2. **Unified Portfolio**: Single portfolio with category filters for visitors exploring past projects

### Case Study Structure

Each portfolio case follows a standardized structure:

**Header:**
- Client name: Prototipe (internal project)
- Category badge: [Prototipagem & UX] or [Full-Stack: Design + Dev]
- Secondary category: [Web] / [Mobile] / [Internal System]

**Body:**
1. **Challenge**: The business problem addressed
2. **Visual Solution**: Prototypes, flows, screens
3. **Engineering**: Technologies, performance, security (also applies to prototyping cases showing the bridge to future development)
4. **Result**: Quantified impact whenever possible

### Portfolio Fields by Case Type

| Field | Prototyping & UX | Development & Websites |
|-------|------------------|----------------------|
| Product Stage | Ideation / Validation | Construction / Launch |
| Main Deliverable | Wireframe, navigable prototype, usability testing | Functional site/system, delivered code, deployment |
| Tools/Stack | Figma, Miro, A/B testing, Marvel | React, Next.js, Node, WordPress, Tailwind |
| Success Metrics | Conversion rate, hypothesis validation, prototype NPS | Uptime, PageSpeed Insights, delivered features, ROI |
| Average Time | 2-4 weeks | 4-12 weeks |

### Filling the Portfolio with Limited Cases

For junior enterprises with limited cases in one area:

- **Tactic A**: Update old prototyping projects - develop them internally as study projects
- **Tactic B**: Use the EJ's own website as the #1 development case study
- **Tactic C**: Create proactive redesigns (concept projects) for local businesses with outdated sites

## Visual Identity Guidelines

### Color Palette

- **Primary Accent**: Brand accent color
- **Base**: Clean background (white or light gray)
- **Cool Tones**: Blue, dark green, graphite for business security perception
- **Theme Support**: Dark and light modes following brand chromatic study

### Typography

- **Fonts**: Modern sans-serif fonts for titles (Inter, Plus Jakarta Sans, General Sans)
- **Legibility**: Ensured across all screen sizes

### Interface Guidelines

- **Visual Style**: Youthful yet professional, avoiding "university event" aesthetics
- **Mobile-First**: Over 60% of candidate and local client traffic comes from mobile devices
- **Clear CTA Hierarchy**: Visually separate "I want to hire" from "I want to join" from the Home page

### Badges and Selos

Each portfolio card displays:
- Thumbnail adapted to type (Prototyping: high-fidelity screens, device mockups; Development: working site on notebook)
- Category badge (distinct color or icon)
- Technical tags (React, Figma, Node) for additional filtering

## Contributing

This project is developed by Prototipe's team members. Due to the typical high turnover in junior enterprises, the codebase is thoroughly commented and version-controlled to facilitate knowledge transfer and onboarding.

For current team members:
- Follow the established code style and conventions
- Document all significant changes
- Test thoroughly before submitting changes
- Update relevant documentation
