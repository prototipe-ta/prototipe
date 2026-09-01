## 1. Project Context & Business Logic

### High-Level Synopsis
This project is the development of a new institutional website for **Prototipe**, a Junior Enterprise based in Montes Claros, MG. Prototipe operates on two main fronts:
1.  **Physical Prototyping:** Using 3D modeling with MDF, acrylic, and filament printing.
2.  **Software Development:** Creating applications and websites.

The old website was a static HTML page that did not reflect the company's expanded services. It lacked a CMS for updating the portfolio or blog and was ineffective at attracting new clients. The new site must be a modern, dynamic, and attractive digital storefront that unifies both business areas, converts visitors into leads, and serves as a strong branding tool.

### User Personas & Journeys
Based on the documents, we can identify two primary client personas and one internal user persona. The site architecture is designed to cater to their distinct needs.

- **Persona 1: The "Idea Validator" (Prototyping Client)**
    - **Profile:** Startups, entrepreneurs, or individuals in the early stages of an idea.
    - **Goal:** To validate a concept, test a hypothesis, or create a tangible model (physical or digital) with low initial investment.
    - **User Journey on Site:**
        1.  Lands on the **Homepage** and is drawn to the "Prototyping & UX" service section.
        2.  Navigates to the **Services** page to get a detailed explanation of the prototyping process and deliverables.
        3.  Explores the **Portfolio** and uses the filter to view only "Prototyping" cases to see previous work and success metrics.
        4.  Clicks on the **Contact** page to request a quote.

- **Persona 2: The "Product Builder" (Development Client)**
    - **Profile:** Established businesses (PMEs), validated startups, or organizations ready to build or scale a software product.
    - **Goal:** To get a functional, high-quality, and reliable website or application built.
    - **User Journey on Site:**
        1.  Lands on the **Homepage** and is drawn to the "Software Development" service section.
        2.  Navigates to the **Services** page to understand the technical stack, development lifecycle, and engineering rigor.
        3.  Explores the **Portfolio** and uses the filter to view only "Development" cases, looking for projects similar in scope to theirs.
        4.  Clicks on the **Contact** page to discuss their project requirements.

- **Persona 3: The "Future Member" (Prospective Junior)**
    - **Profile:** Students interested in joining Prototipe.
    - **Goal:** To understand the company's culture, values, and how to apply for the selection process.
    - **User Journey on Site:**
        1.  Lands on the **Homepage** and navigates to the **"Quero fazer parte" (I want to be a part)** section.
        2.  Visits the **"Quem Somos" (About Us)** page to learn about the company's history, mission, and internal culture.
        3.  Accesses the **"Processo Seletivo" (Selection Process)** page to check the schedule, requirements, and instructions.

### Critical Business Rules
- **Dual-Service Presentation:** The site must clearly and equally present both "Prototipagem & UX" and "Desenvolvimento de Software" as distinct, yet complementary, services.
- **CMS-Driven Content:** The blog and portfolio must be dynamic and manageable by non-technical members via an admin panel. This solves the primary pain point of the old, static site.
- **Responsive Design (Mobile-First):** The design must be fully responsive, with a mobile-first approach, as over 60% of traffic is expected from mobile devices.
- **User Experience (UX):** The user experience is a top priority. This includes:
    - **Theme Toggle:** A clear light/dark mode toggle.
    - **Performance:** Initial load time must be under 3 seconds on 4G connections.
    - **Animations:** Subtle and performant animations that do not consume excessive GPU/CPU resources.
- **Content Standardization:** All portfolio entries must follow a standardized content structure (Challenge, Solution, Engineering, Result) with specific fields for each service type.

## 2. Project Tree & Architectural Standards

The project is structured for maintainability and scalability. The following directory structure is **mandatory**:

```
src/
├── components/
│   ├── ui/          # shadcn/ui primitives. DO NOT MODIFY directly.
│   ├── custom/      # Domain-specific business components (e.g., ServiceCard, PortfolioFilter).
│   └── layout/      # Layout components (e.g., Header, Footer, Sidebar).
├── pages/           # Route-level components.
│   ├── Home/
│   ├── Services/
│   ├── Portfolio/
│   ├── Blog/
│   ├── Contact/
│   ├── AboutUs/
│   ├── SelectionProcess/
│   └── Admin/       # The CMS dashboard.
├── hooks/           # Custom React hooks for business logic and state abstraction.
├── lib/             # Core utilities: `cn()` function, API clients (axios/fetch), and helpers.
├── contexts/        # React Context providers for global state (e.g., ThemeContext).
├── styles/          # Tailwind entry point (`globals.css`).
├── types/           # TypeScript type definitions and interfaces.
└── assets/          # Static assets like images, fonts, and 3D model files.
```

### Architectural Responsibility
- **`components/ui/`**: Houses the raw shadcn/ui components. **These are considered a third-party library and must not be modified.**
- **`components/custom/`**: Contains all domain-specific components. This is where the majority of the UI development will take place.
- **`pages/`**: Represents the top-level application routes. Each page should mostly be a composition of components from the `components/` folder.
- **`hooks/`**: Used for encapsulating and reusing stateful logic (e.g., `useLocalStorage`, `useFetch`, `useTheme`).
- **`lib/`**: This is the application's core. It should include the `cn()` utility for Tailwind class merging and the configured API client for backend communication.

## 3. Development Environment Setup (Dev Environment Tips)

### Prerequisites
- **Node.js:** The project requires Node.js version `[NODE_VERSION]`. (Check `.nvmrc` or `.tool-versions` if available, otherwise, use a recent LTS version like v18 or v20).
- **Package Manager:** `npm`.

### Essential NPM Scripts
These scripts are defined in the `package.json` and are the standard way to interact with the project:

- `npm install` - Installs all project dependencies.
- `npm run dev` - Starts the Vite development server with Hot Module Replacement (HMR).
- `npm run build` - Compiles and bundles the application for production.
- `npm run preview` - Serves the production build locally for final testing before deployment.

### Environment Variables
- Vite uses `.env` files for environment variables. Client-side variables **must** be prefixed with `VITE_`.
- The AI should check for a `.env.example` file in the root directory to see which environment variables are required.
- **Example:** `VITE_API_BASE_URL=http://localhost:5000/api`

## 4. Testing Strategy (Test Instructions)

### Default Tool
- The default unit testing framework for this project is **Vitest**, as it is the native testing framework for Vite.

### Commands
- `npm run test` - Runs the test suite in watch mode.
- `npm run test:coverage` - Runs the test suite and generates a coverage report.

### Location and Naming
- Test files should be placed **in the same directory** as the component or function they are testing.
- The naming convention is `<fileName>.test.tsx` or `<fileName>.spec.tsx`.
- **Example:** `src/components/custom/ServiceCard.test.tsx`

## 5. Pull Request & Git Workflow (PR Instructions)

### Branching Convention
- All branches should follow this strict naming convention:
    - `feature/<short-description>` for new features.
    - `fix/<short-description>` for bug fixes.
    - `chore/<short-description>` for maintenance tasks (e.g., dependency updates).
    - **Example:** `feature/add-portfolio-filters`

### Commit Convention
- The project **enforces** the [Conventional Commits](https://www.conventionalcommits.org/) standard.
- **Allowed Types:** `feat:`, `fix:`, `refactor:`, `chore:`, `docs:`, `style:`, `test:`
- **Example:** `feat: implement dark mode toggle`

### PR Readiness Checklist
- Before submitting a Pull Request, ensure the following checklist is complete:
    - [ ] **Build:** `npm run build` passes without errors.
    - [ ] **Tests:** `npm run test` passes (all tests are green).
    - [ ] **Linting:** Code adheres to the project's linting rules (ESLint and Prettier).
    - [ ] **Review:** Has received at least 1 approval from a peer reviewer.

## 6. Code Style & Component Golden Rules

### shadcn/ui Policy
- **CRITICAL:** Do not modify the raw components in `src/components/ui/`. They are the library's core and should be treated as a dependency.
- To customize their appearance or behavior, create a wrapper component in `src/components/custom/`. Use the `className` prop to apply custom Tailwind classes or pass additional props.

### Tailwind CSS Best Practices
- Always use the `cn()` utility function (imported from `@/lib/utils`) for merging Tailwind classes. This function uses `clsx` and `tailwind-merge` to handle conditional logic and avoid class conflicts.
- Enforce a consistent class ordering for better readability. The `prettier-plugin-tailwindcss` plugin is recommended to automate this. A suggested order is:
    1.  Layout (e.g., `display`, `position`, `flex`, `grid`)
    2.  Box Model (e.g., `padding`, `margin`, `width`, `height`)
    3.  Typography (e.g., `font-*`, `text-*`, `text-align`)
    4.  Visuals (e.g., `background-*`, `border-*`, `shadow-*`)

### Import Aliases
- The `@/` alias is configured for all internal imports. **Always** use this path to import from the `src` directory.

## 7. Agent-Specific Behavioral Constraints (Rules for the AI)

- **Component Reusability:** Before creating a new component, always check the `src/components/ui/` directory first. If an equivalent primitive exists (e.g., `Button`, `Dialog`, `Select`), use it and customize it via `className` or a wrapper.
- **Form Handling:** For any form logic, prioritize using `react-hook-form` in combination with `zod` for validation. This is the standard approach recommended by shadcn/ui and ensures type-safe, robust forms.
- **Accessibility (a11y):** Enforce semantic HTML (e.g., using `<nav>`, `<main>`, `<article>`). Inherit accessibility standards from Radix UI primitives and ensure custom components include necessary ARIA attributes.
- **Static Content:** For static content like the text on the "Quem Somos" page, use constants instead of hardcoding strings in the JSX to improve maintainability. Refer to the "Estrutura de Site e Portfólio" PDF for content guidelines.
- **Portfolio Data Structure:** When creating or displaying portfolio items, ensure they strictly follow the standardized field structure defined in the PDFs:
    - **Name/Client**
    - **Service Type Badge:** `[Prototipagem & UX]` or `[Full-Stack: Design + Dev]`
    - **Secondary Category:** `[Web]` / `[Mobile]` / `[Sistema interno]`
    - **Content Sections:**
        1.  **Desafio (Challenge)**
        2.  **A Solução Visual (The Visual Solution)**
        3.  **A Engenharia (The Engineering)**
        4.  **Resultado (Result)**
