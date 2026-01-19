# Clinik-PE Mobile App - Comprehensive Project Analysis

**Project**: Healthcare Clinic Management Mobile Web App  
**Tech Stack**: React 19 + TypeScript + Vite + Tailwind CSS + Mantine  
**Target**: Mobile-optimized (max 420px width)  
**Date**: January 2026

---

## 📋 Table of Contents

1. [Project Structure](#project-structure)
2. [Design System](#design-system)
3. [Component Inventory](#component-inventory)
4. [UI/UX Consistency Analysis](#uiux-consistency-analysis)
5. [Dependencies & Libraries](#dependencies--libraries)
6. [Configuration Files](#configuration-files)
7. [Routing Architecture](#routing-architecture)
8. [Common Patterns](#common-patterns)
9. [State Management](#state-management)
10. [Key Observations & Recommendations](#key-observations--recommendations)

---

## 1. Project Structure

### Directory Tree

```
Clinikpe-MOB/
├── public/                          # Static assets (images, SVGs)
├── src/
│   ├── app/                         # Core app configuration
│   │   ├── App.tsx                 # Root component
│   │   ├── AppContents.tsx         # Routes configuration
│   │   ├── guards.tsx              # Empty (for future route guards)
│   │   ├── providers.tsx           # Global providers (Mantine, React Query)
│   │   └── routeMeta.ts            # Route metadata (headers, nav visibility)
│   ├── assets/                      # Images, SVGs (clinikpe.png, whitemap.svg, etc.)
│   ├── layouts/
│   │   └── AppShell/               # Main layout components
│   │       ├── AppShell.tsx        # Layout wrapper with header/nav
│   │       ├── BackHeader.tsx      # Back navigation header
│   │       ├── BottomNav.tsx       # Bottom navigation (4 tabs)
│   │       ├── Header.tsx          # Header dispatcher
│   │       ├── MainHeader.tsx      # Main page header
│   │       └── SecondaryHeader.tsx # Secondary header wrapper
│   ├── pages/
│   │   ├── auth/                   # Authentication pages
│   │   │   ├── LoginPage.tsx
│   │   │   ├── SplashPage.tsx
│   │   │   └── validation.ts       # Zod schemas for auth forms
│   │   ├── dashboard/              # Dashboard page
│   │   │   ├── DashboardPage.tsx
│   │   │   └── components/
│   │   │       ├── AssignmentCard.tsx
│   │   │       ├── AssignmentPreview.tsx
│   │   │       ├── SectionHeader.tsx
│   │   │       └── StatCard.tsx
│   │   ├── assignments/            # Assignment management
│   │   │   ├── AssignmentPage.tsx
│   │   │   ├── AssignmentPageDetails.tsx
│   │   │   └── components/
│   │   │       ├── ActivitiesTab/
│   │   │       │   └── ActivitesTab.tsx
│   │   │       ├── PaymentTab/
│   │   │       │   ├── PaymentCard.tsx
│   │   │       │   ├── PaymentStatCard.tsx
│   │   │       │   ├── PaymentTab.tsx
│   │   │       │   └── PaymentModal.tsx
│   │   │       ├── SampleTab/
│   │   │       │   ├── SampleCard.tsx
│   │   │       │   ├── SampleStatCard.tsx
│   │   │       │   └── SampleTab.tsx
│   │   │       ├── TestTab/
│   │   │       │   ├── TestCard.tsx
│   │   │       │   └── TestTab.tsx
│   │   │       ├── AssignmentPageCard.tsx
│   │   │       ├── AssignmentTabs.tsx
│   │   │       ├── ExpandableDetails.tsx
│   │   │       ├── FilterChips.tsx
│   │   │       ├── validation.ts
│   │   │       └── ActivitiesTab/
│   │   └── Test/
│   │       ├── AddTest.tsx
│   │       └── TestAddCard.tsx
│   ├── shared/
│   │   ├── ColorHelper.tsx         # Color utilities for badges
│   │   └── ui/
│   │       └── Badge.tsx           # Reusable badge component
│   └── styles/
│       ├── App.css                 # Tailwind directives
│       ├── global.css              # Global resets and overrides
│       └── index.css               # Root styles
├── Configuration Files
│   ├── tailwind.config.js
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── tsconfig.app.json
│   ├── tsconfig.node.json
│   ├── eslint.config.js
│   ├── postcss.config.js
│   ├── package.json
│   ├── index.html
│   └── README.md
```

---

## 2. Design System

### 2.1 Color Palette

| Color Name         | Hex Code              | Usage                                         | Component Examples                |
| ------------------ | --------------------- | --------------------------------------------- | --------------------------------- |
| **Primary Blue**   | `#0D52AF`             | Main buttons, active states, primary branding | Mantine Button, navigation active |
| **Secondary Gray** | `#828A94`             | Secondary text, muted elements                | Section headers, labels           |
| **Muted Gray**     | `#D9D9D9`             | Borders, disabled states, dividers            | Card borders                      |
| **Success Green**  | `#09986A` / `#16A34A` | Collected status, positive values             | SampleCard, StatusBadge           |
| **Warning Orange** | `#D58700` / `#EA580C` | Pending status, warnings                      | PaymentCard status                |
| **Light Gray**     | `#F3F4F6`             | Backgrounds, chips, dividers                  | Background color                  |
| **Dark Text**      | `#111827`             | Primary text, headings                        | All headings                      |
| **Medium Text**    | `#6B7280`             | Secondary text, descriptions                  | Secondary labels                  |
| **Light Text**     | `#9CA3AF`             | Tertiary text                                 | Tertiary information              |
| **Border Color**   | `#E5E7EB`             | Card/component borders                        | All cards                         |
| **Red Status**     | `#EF4444`             | Error/due amounts                             | PaymentStatCard                   |

### 2.2 Typography

```
Font Family Stack: Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI"

Font Sizes:
- xs: 12px (small labels)
- sm: 14px (body text)
- base: 16px (default)
- lg: 18px (section headers)
- xl: 20px (page titles)
- 2xl: 24px (large titles)

Font Weights:
- Regular: 400 (body text)
- Medium: 500 (labels)
- Semibold: 600 (headers, emphasis)
- Bold: 700 (important headers)
- Extra Bold: 800 (prominent titles)

Line Heights:
- Inherited from browser defaults (typically 1.5)
- No explicit line-height configuration
```

### 2.3 Spacing System

```
Tailwind/Mantine Spacing Scale:
- xs: 8px (gap-1)
- sm: 12px (gap-2)
- md: 16px (gap-3, gap-4)
- lg: 20px (gap-5)
- xl: 24px (gap-6)

Common Usage:
- Padding: p-2, p-3, p-4 (8px, 12px, 16px)
- Gap: gap-2, gap-3, gap-4 (12px, 16px, 24px)
- Margin: my-3, my-4 (Divider spacing)
```

### 2.4 Border Radius

| Size            | Value  | Usage                                      |
| --------------- | ------ | ------------------------------------------ |
| **Small**       | 8px    | `rounded-lg`, Chip elements, small buttons |
| **Medium**      | 12px   | Mantine default radius                     |
| **Large**       | 16px   | `rounded-xl`, Main cards, stat cards       |
| **Extra Large** | 24px   | `rounded-2xl`, Search input, modal corners |
| **Full Circle** | 9999px | Circular badges, FAB button                |

### 2.5 Shadow System

```
Mantine Shadow Scale:
- xs: Light shadow (used on hover states)
- sm: Default shadow (cards, dropdowns)
- md: Medium shadow (modals)
- lg: Large shadow (emphasized elements)

Actual Usage:
- Most cards: border + light shadow
- Dashboard cards: shadow-sm only (no border)
- Some components: no shadow (border-only aesthetic)
```

### 2.6 Responsive Breakpoints

```
Mobile-First Design:
- Target Width: Max 420px (fixed frame)
- All designs assume mobile viewport
- No tablet/desktop breakpoints defined
- CSS constraints:
  .app-frame {
    width: 100%;
    max-width: 420px;
    height: 100%;
  }
```

### 2.7 Global CSS Properties

```css
/* App Frame */
max-width: 420px
height: 100% (full viewport height)
overflow: hidden (prevent body scroll)

/* Main Content */
flex: 1 (flexible grow)
overflow-y: auto (scrollable content)
-webkit-overflow-scrolling: touch (momentum scroll on iOS)

/* Header */
flex-shrink: 0 (prevents collapse)
position: relative / fixed
z-index: 40-50 (above content)

/* Bottom Navigation */
position: fixed
bottom: 0
z-index: 40
background: white
border-top: 1px solid #E5E7EB
```

---

## 3. Component Inventory

### 3.1 Layout Components

| Component           | Location                               | Purpose                                                      | Key Props                |
| ------------------- | -------------------------------------- | ------------------------------------------------------------ | ------------------------ |
| **AppShell**        | `layouts/AppShell/AppShell.tsx`        | Main page layout wrapper with header & nav                   | children                 |
| **Header**          | `layouts/AppShell/Header.tsx`          | Dispatcher component (routes to specific header)             | variant (main/back/none) |
| **MainHeader**      | `layouts/AppShell/MainHeader.tsx`      | Main page header with menu icon                              | title, subtitle          |
| **BackHeader**      | `layouts/AppShell/BackHeader.tsx`      | Back button + title header                                   | title, onBack            |
| **SecondaryHeader** | `layouts/AppShell/SecondaryHeader.tsx` | Container for search/filter controls                         | children                 |
| **BottomNav**       | `layouts/AppShell/BottomNav.tsx`       | 4-tab navigation (Dashboard, Assignments, Profile, Settings) | activeTab                |

### 3.2 Authentication Pages

| Component      | Purpose              | Key Features                                  | Form Validation       |
| -------------- | -------------------- | --------------------------------------------- | --------------------- |
| **SplashPage** | Loading/intro screen | Gradient animation, 2.5s timer, auto-navigate | N/A                   |
| **LoginPage**  | User authentication  | ID + Password fields, form submission         | Zod schema validation |

### 3.3 Dashboard Components

| Component             | Purpose                   | Layout                              | Props                        |
| --------------------- | ------------------------- | ----------------------------------- | ---------------------------- |
| **DashboardPage**     | Main dashboard            | Grid of stats + assignments preview | N/A                          |
| **StatCard**          | 3-item stat display       | Horizontal 3-column grid            | items array, icon            |
| **AssignmentCard**    | Compact assignment item   | Horizontal card with progress       | name, progress, time         |
| **AssignmentPreview** | Recent assignments list   | Stacked list of cards               | assignments array            |
| **SectionHeader**     | Section title with action | Flex between title and link         | title, actionLabel, onAction |

### 3.4 Assignment Management Components

| Component                 | Purpose                       | Features                                   | State                                           |
| ------------------------- | ----------------------------- | ------------------------------------------ | ----------------------------------------------- |
| **AssignmentPage**        | Assignment list with filters  | Date-range filter chips, card list         | activeFilter (today/yesterday/tomorrow/old/new) |
| **AssignmentPageDetails** | Single assignment detail view | Collapsible sections, tab interface        | none                                            |
| **AssignmentPageCard**    | Large card with patient info  | Location button, sample stats, progress    | location, samples, collected count              |
| **AssignmentTabs**        | 4-tab interface               | Sample, Tests, Payments, Activities tabs   | activeTab, FAB button                           |
| **FilterChips**           | Date range selector           | Scrollable horizontal chips                | activeTab, onChange callback                    |
| **ExpandableDetails**     | Collapsible detail section    | Smooth height animation, multiple sections | open state, sections array                      |

### 3.5 Sample Management Components

| Component          | Purpose                                 | Layout                      | Props                 |
| ------------------ | --------------------------------------- | --------------------------- | --------------------- |
| **SampleTab**      | Sample display & stats                  | Stats header + list         | N/A                   |
| **SampleCard**     | Individual sample item                  | Horizontal card with status | name, status, actions |
| **SampleStatCard** | 3-stat grid (Total, Collected, Pending) | Grid layout                 | items array           |

### 3.6 Test Management Components

| Component       | Purpose              | Layout                         | Props                            |
| --------------- | -------------------- | ------------------------------ | -------------------------------- |
| **TestTab**     | Test list display    | Stats + list items             | N/A                              |
| **TestCard**    | Individual test item | Horizontal card with delete    | name, description, onDelete      |
| **TestAddCard** | Test from catalog    | Card with pricing & add button | title, description, price, onAdd |
| **AddTest**     | Test catalog page    | Search + scrollable list       | mock tests array                 |

### 3.7 Payment Components

| Component           | Purpose                    | Layout                                    | Props                        |
| ------------------- | -------------------------- | ----------------------------------------- | ---------------------------- |
| **PaymentTab**      | Payment summary & history  | Stats grid + transaction list             | N/A                          |
| **PaymentCard**     | Single payment transaction | Horizontal card with badge                | amount, method, date, status |
| **PaymentStatCard** | 4-item stat grid           | 2x2 grid (Total, Discount, Payable, Paid) | items array                  |
| **PaymentModal**    | Add payment form           | Form with 2 fields (amount, method)       | onClose callback             |

### 3.8 Activity Components

| Component         | Purpose           | Layout                          | Props            |
| ----------------- | ----------------- | ------------------------------- | ---------------- |
| **ActivitiesTab** | Activity timeline | Vertical list with colored dots | activities array |

### 3.9 Shared UI Components

| Component | Purpose          | Props                                     | Default             |
| --------- | ---------------- | ----------------------------------------- | ------------------- |
| **Badge** | Status indicator | color (orange/green/gray), size, children | size=md, color=gray |

---

## 4. UI/UX Consistency Analysis

### 4.1 Critical Inconsistencies Found

#### 1. **Button Styling Inconsistency** ⚠️ **CRITICAL**

```
Issue: Button color application unpredictable
Examples:
- <Button color="#0D52AF"> (using hex)
- <Button> (relying on theme default)
- className="bg-blue-600" (Tailwind)

Impact: Inconsistent primary button color (#0D52AF vs #2563EB)
```

**Recommendation:**

```typescript
// Create global button styles
<Button
  variant="filled"
  color="var(--primary-blue)"
  className="!bg-[#0D52AF] hover:!bg-[#0A3D8A]"
>
  Action
</Button>
```

#### 2. **Input Field Height Mismatch** ⚠️ **CRITICAL**

```
Issue: Inconsistent input sizing
- Global CSS: height: 48px
- Some inputs: default Mantine height
- Mobile tap target minimum: 44px

Current: 48px (acceptable)
Recommendation: Standardize and document
```

#### 3. **Card Border-Radius Inconsistency** ⚠️ **HIGH**

```
Variations found:
- Large cards: rounded-xl (16px) ✓
- Stat cards: rounded-lg (8px) ✓
- Payment cards: rounded-xl (16px) ✓
- Filter chips: rounded-2xl (24px) ✓

Pattern: Larger components use rounded-xl, smaller use rounded-lg
Status: Mostly consistent, minor inconsistencies in chips
```

#### 4. **Card Border & Shadow Styling** ⚠️ **HIGH**

```
Inconsistent approach:
- Assignment cards: border + shadow
- Dashboard stats: shadow-sm only
- Payment cards: border only (some)

Recommendation: Use one approach
Option A (Recommended): border + light shadow
Option B: shadow-md (cleaner modern look)

Use border OR shadow, not both often.
```

#### 5. **Status Color Inconsistency** ⚠️ **CRITICAL**

```
Issue: Same status uses different colors in different places
- "Collected": #09986A (ColorHelper) vs #16A34A (SampleCard)
- "Pending": #D58700 vs #EA580C
- "Completed": No standard

Current Hardcoding:
- SampleCard.tsx: Direct hex colors
- ColorHelper.tsx: Separate color definitions
- PaymentTab.tsx: Inline hex values

Recommendation: Create centralized colors.ts
```

**Solution:**

```typescript
// src/shared/constants/colors.ts
export const STATUS_COLORS = {
  COLLECTED: "#09986A",
  PENDING: "#D58700",
  COMPLETED: "#16A34A",
  PENDING_PAYMENT: "#EA580C",
  CANCELLED: "#EF4444",
} as const;

export const TEXT_COLORS = {
  PRIMARY: "#111827",
  SECONDARY: "#6B7280",
  TERTIARY: "#9CA3AF",
} as const;
```

#### 6. **Text Color Inconsistency** ⚠️ **MEDIUM**

```
Secondary text variations:
- text-gray-500 (#6B7280)
- text-gray-600 (#4B5563)
- text-secondary (#828A94)

Recommendation: Standardize on text-gray-600 for secondary text
```

#### 7. **Spacing Gap Inconsistency** ⚠️ **MEDIUM**

```
Gap variations:
- Between cards: gap-2, gap-3, gap-4
- Payment cards: gap-2 (12px)
- Assignment cards: gap-3 (16px)
- Stat cards: gap-4 (24px) - inconsistent

Recommendation: Define spacing scale:
- Compact: gap-2 (12px)
- Default: gap-3 (16px)  ← Most common
- Large: gap-4 (24px)    ← Section gaps
```

#### 8. **Font Weight Usage** ⚠️ **MEDIUM**

```
Inconsistent title styling:
- font-bold (700): AssignmentPageCard
- font-semibold (600): Most headers
- font-medium (500): Some labels

Recommendation:
- Page titles: font-bold (700)
- Section headers: font-semibold (600)
- Labels: font-medium (500)
- Body: font-regular (400)
```

#### 9. **Modal & Expandable Animation** ✅ **GOOD**

```
ExpandableDetails component: Smooth height animation ✓
- Uses requestAnimationFrame for smooth closing
- Calculates content height dynamically
- Consistent 300ms transition timing
```

#### 10. **Badge Component** ✅ **GOOD**

```
Centralized badge styling with ColorHelper
Colors consistently applied
Size options available
```

### 4.2 Typography Consistency Assessment

| Aspect             | Status          | Notes                                               |
| ------------------ | --------------- | --------------------------------------------------- |
| **Font Family**    | ✅ CONSISTENT   | Roboto fallback chain                               |
| **Heading Sizes**  | ⚠️ INCONSISTENT | Mix of 16px, 18px, 20px                             |
| **Body Text Size** | ✅ CONSISTENT   | 14px throughout                                     |
| **Font Weights**   | ⚠️ INCONSISTENT | 400, 500, 600, 700 all used without clear hierarchy |
| **Line Height**    | ⚠️ NO STANDARD  | Browser defaults (1.5) used                         |

### 4.3 Responsive Consistency

| Aspect                  | Status        | Notes                                               |
| ----------------------- | ------------- | --------------------------------------------------- |
| **Mobile Optimization** | ✅ EXCELLENT  | All layouts mobile-first, 420px max-width           |
| **Touch Targets**       | ✅ GOOD       | Buttons & inputs properly sized (44px+ recommended) |
| **Overflow Handling**   | ✅ GOOD       | Scrollable areas properly managed                   |
| **Bottom Nav**          | ✅ CONSISTENT | Fixed positioning across all pages                  |
| **Tablet Support**      | ❌ NONE       | No tablet breakpoints defined                       |

---

## 5. Dependencies & Libraries

### 5.1 Production Dependencies

| Package                  | Version | Size  | Purpose                              |
| ------------------------ | ------- | ----- | ------------------------------------ |
| `react`                  | 19.2.0  | -     | React core library                   |
| `react-dom`              | 19.2.0  | -     | React DOM rendering                  |
| `react-router-dom`       | 7.12.0  | ~50KB | Client-side routing                  |
| `@mantine/core`          | 8.3.12  | ~80KB | UI component library                 |
| `@mantine/hooks`         | 8.3.12  | ~10KB | Mantine utility hooks                |
| `@mantine/modals`        | 8.3.12  | ~5KB  | Modal component                      |
| `@mantine/notifications` | 8.3.12  | ~5KB  | Toast notifications                  |
| `react-hook-form`        | 7.71.1  | ~9KB  | Form state management                |
| `@hookform/resolvers`    | 5.2.2   | ~10KB | Zod + react-hook-form bridge         |
| `zod`                    | 4.3.5   | ~30KB | Schema validation (TypeScript-first) |
| `@tanstack/react-query`  | 5.90.17 | ~40KB | Server state management & caching    |
| `zustand`                | 5.0.10  | ~3KB  | Client state management (not used)   |
| `lucide-react`           | 0.562.0 | ~80KB | Icon library (20+ icons used)        |

**Total Production Bundle**: ~317KB (estimate, uncompressed)

### 5.2 Development Dependencies

| Package                     | Version | Purpose                    |
| --------------------------- | ------- | -------------------------- |
| `@vitejs/plugin-react`      | 4.2.4   | React fast refresh         |
| `vite`                      | 5.1.1   | Build tool & dev server    |
| `typescript`                | 5.9.3   | TypeScript compiler        |
| `tailwindcss`               | 3.4.17  | CSS framework              |
| `postcss`                   | 8.5.6   | CSS transformations        |
| `autoprefixer`              | 10.4.23 | Vendor prefix automation   |
| `eslint`                    | 9.39.1  | JavaScript linter          |
| `@eslint/js`                | 9.39.1  | ESLint JS rules            |
| `typescript-eslint`         | 8.46.4  | TypeScript ESLint          |
| `eslint-plugin-react-hooks` | 7.0.1   | React Hooks linting        |
| `@types/react`              | 19.2.5  | React type definitions     |
| `@types/react-dom`          | 19.2.3  | React DOM type definitions |

### 5.3 Dependency Analysis

```
✅ Well-Chosen Stack:
- Vite: Fast builds, excellent HMR
- TypeScript: Strong type safety
- React 19: Latest features, improved performance
- Mantine: Comprehensive component library
- React Hook Form: Lightweight form management
- Zod: Type-safe validation
- React Query: Enterprise server state management
- Lucide: Clean, consistent icon set

⚠️ Unused Dependency:
- zustand: Imported but not actively used
  Status: Consider removing or use for authentication state

❌ Missing Libraries to Consider:
- React Router Query params integration
- Error boundary library
- Testing libraries (Jest, Vitest, React Testing Library)
```

---

## 6. Configuration Files

### 6.1 Vite Configuration (`vite.config.ts`)

```typescript
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  // No custom configuration
  // Default settings:
  // - Entry: index.html
  // - Outdir: dist
  // - Minify: esbuild
});
```

**Analysis**:

- ✅ Minimal, clean configuration
- ✅ React Fast Refresh enabled
- ⚠️ No custom aliases defined (consider adding for src paths)
- ⚠️ No code splitting configuration

### 6.2 TypeScript Configuration (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    "jsx": "react-jsx",
    "jsxImportSource": "react",
    "moduleResolution": "bundler"
  }
}
```

**Key Settings**:

- **Strict Mode**: ENABLED - Enforces type safety
- **No Unused Locals**: true - All variables must be used
- **No Unused Parameters**: true - All parameters must be used
- **JSX Handling**: react-jsx (React 17+ auto-import)
- **Target**: ES2022 (modern browsers)

### 6.3 ESLint Configuration (`eslint.config.js`)

```javascript
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      "react-hooks/exhaustive-deps": "warn",
      "react-refresh/only-export-components": "warn",
    },
  },
];
```

**Plugins & Rules**:

- ✅ ESLint recommended rules
- ✅ TypeScript ESLint strict rules
- ✅ React Hooks dependency checking
- ✅ React Refresh HMR validation
- ⚠️ No custom rules for project conventions

### 6.4 Tailwind Configuration (`tailwind.config.js`)

```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D52AF",
        secondary: "#828A94",
        muted: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
```

**Configuration**:

- ✅ Content paths correctly configured
- ✅ Custom colors defined
- ⚠️ No custom spacing scale
- ⚠️ No typography customization
- ⚠️ No animation/transition configuration

### 6.5 PostCSS Configuration (`postcss.config.js`)

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

**Standard Setup**:

- Tailwind CSS processing
- Vendor prefix automation

---

## 7. Routing Architecture

### 7.1 Route Structure

```
Routes:
├── /                              (SplashPage)
│   └── No header, No bottom nav
├── /login                         (LoginPage)
│   └── No header, No bottom nav
└── /dashboard/*                   (AppShell Layout)
    ├── /dashboard                 (DashboardPage)
    │   └── Header: main, BottomNav: visible
    ├── /assignments               (AssignmentPage)
    │   └── Header: main, BottomNav: visible
    ├── /assignments/:id           (AssignmentPageDetails)
    │   └── Header: back, BottomNav: visible
    └── /test-add                  (AddTest)
        └── Header: back, BottomNav: hidden
```

### 7.2 Route Metadata System (`routeMeta.ts`)

```typescript
const routeMeta: Record<string, RouteMeta> = {
  "/": { header: "none", title: "Welcome", showBottomNav: false },
  "/login": { header: "none", title: "Login", showBottomNav: false },
  "/dashboard": { header: "main", title: "Dashboard", showBottomNav: true },
  "/assignments": { header: "main", title: "Assignments", showBottomNav: true },
  "/assignments/:id": { header: "back", title: "Details", showBottomNav: true },
  "/test-add": { header: "back", title: "Add Test", showBottomNav: false },
};
```

**Components Used**:

- `useLocation()` - Get current route
- `useNavigate()` - Programmatic navigation
- Route metadata determines header variant & nav visibility

### 7.3 Header Variants

| Variant  | Component  | Features                       | Used On                  |
| -------- | ---------- | ------------------------------ | ------------------------ |
| **main** | MainHeader | Menu icon, title, subtitle     | Dashboard, Assignments   |
| **back** | BackHeader | Back button, title, close icon | Details pages, Add forms |
| **none** | None       | No header rendered             | Splash, Login            |

---

## 8. Common Patterns

### 8.1 Component Composition Pattern

```typescript
// Small focused components
<SampleCard name="Blood" status="Collected" />

// Wrapper components aggregate smaller ones
<SampleTab>
  <SampleStatCard />
  <SampleCard />
  <SampleCard />
</SampleTab>

// Container pages orchestrate data & state
<AssignmentPage>
  <FilterChips />
  <AssignmentPageCard />
</AssignmentPage>
```

**Principle**: Single Responsibility Principle - Each component has one job

### 8.2 Form Handling Pattern

```typescript
// 1. Define schema (validation.ts)
export const paymentSchema = z.object({
  amount: z.number().positive('Amount must be > 0'),
  method: z.string().min(1, 'Required'),
})

// 2. Setup form (PaymentModal.tsx)
const { control, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(paymentSchema),
})

// 3. Render controlled inputs
<Controller
  name="amount"
  control={control}
  render={({ field }) => (
    <NumberInput {...field} error={errors.amount?.message} />
  )}
/>

// 4. Handle submission
<form onSubmit={handleSubmit(onSubmit)}>
  ...
</form>
```

**Benefits**: Type-safe, reusable validation, consistent error handling

### 8.3 Status Badge Pattern

```typescript
// Centralized badge with ColorHelper
<Badge color={ColorHelper.getStatusColor(status)}>{status}</Badge>;

// Color mapping in shared component
export const ColorHelper = {
  getStatusColor: (status: string) => {
    const colors = {
      Collected: "#09986A",
      Pending: "#D58700",
      Completed: "#16A34A",
    };
    return colors[status] || "#D9D9D9";
  },
};
```

### 8.4 Card Pattern

```typescript
// All cards use consistent structure
<div className="rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-sm">
  {/* Card content */}
</div>

// Stat cards (smaller variant)
<div className="rounded-lg bg-gray-100 px-4 py-3">
  {/* Stat content */}
</div>
```

**Spacing**: `p-2` (stat cards), `p-3`/`p-4` (regular cards)

### 8.5 Tab Interface Pattern

```typescript
<Tabs value={activeTab} onTabChange={setActiveTab}>
  <Tabs.List grow>
    <Tabs.Tab value="sample">Sample</Tabs.Tab>
    <Tabs.Tab value="tests">Tests</Tabs.Tab>
  </Tabs.List>

  <Tabs.Panel value="sample">
    <SampleTab />
  </Tabs.Panel>

  <Tabs.Panel value="tests">
    <TestTab />
  </Tabs.Panel>
</Tabs>;

// Conditional rendering
{
  (activeTab === "Tests" || activeTab === "Payments") && <FABButton />;
}
```

### 8.6 Modal Pattern

```typescript
// State management
const [modalOpen, setModalOpen] = useState(false)

// Modal component
<Modal
  opened={modalOpen}
  onClose={() => setModalOpen(false)}
  title="Add Payment"
>
  <PaymentModal onClose={() => setModalOpen(false)} />
</Modal>

// Trigger button
<button onClick={() => setModalOpen(true)}>Add</button>
```

### 8.7 Expandable Details Pattern

```typescript
// State + height animation
const [open, setOpen] = useState(true)
const [height, setHeight] = useState<number | undefined>(undefined)
const contentRef = useRef<HTMLDivElement>(null)

// Smooth animation on toggle
useEffect(() => {
  if (contentRef.current) {
    setHeight(open ? contentRef.current.scrollHeight : 0)
  }
}, [open])

// Render with transition
<div
  ref={contentRef}
  style={{
    height: height,
    transition: 'height 300ms ease-out',
    overflow: 'hidden'
  }}
>
  {/* Content */}
</div>
```

**Key Points**:

- Uses `scrollHeight` for accurate content measurement
- `requestAnimationFrame` for smooth closing
- No external animation library needed

### 8.8 Data Display Pattern

```typescript
// Props follow naming convention
interface AssignmentCardProps {
  name: string;
  age: number;
  gender: string;
  collectedCount: number;
  totalCount: number;
  samples: string[];
}

// Mock data in component (temporary)
const mockData = [
  { title: "Total", value: "₹12,500" },
  { label: "Discount", value: "₹500", color: "green" },
];

// Map over array
{
  mockData.map((item, index) => <StatCard key={index} {...item} />);
}
```

### 8.9 Navigation Pattern

```typescript
// Routes use URL params
navigate(`/assignments/${id}`);

// Components receive ID from params
const { id } = useParams();

// Back navigation via history
const navigate = useNavigate();
navigate(-1); // Go back
```

### 8.10 Mantine Theme Override Pattern

```typescript
// In providers.tsx
<MantineProvider
  theme={{
    colors: {
      blue: ["...", "#0D52AF", "..."],
    },
    components: {
      Button: {
        defaultProps: {
          color: "blue",
        },
      },
      Input: {
        defaultProps: {
          size: "md",
        },
      },
    },
  }}
>
  {children}
</MantineProvider>
```

---

## 9. State Management

### 9.1 Current Implementation

| Library             | Purpose               | Usage Status                           |
| ------------------- | --------------------- | -------------------------------------- |
| **useState**        | Local component state | ✅ Active - Form state, UI toggles     |
| **react-hook-form** | Form state management | ✅ Active - All forms                  |
| **Zod**             | Schema validation     | ✅ Active - Form validation            |
| **React Query**     | Server state          | ⚠️ Installed - Not actively integrated |
| **zustand**         | Global state          | ❌ Imported - Not used                 |

### 9.2 Form State Pattern

```typescript
// Component-level form state
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    // Handle submission
  };

  return <form onSubmit={handleSubmit(onSubmit)}>...</form>;
};
```

**Scope**: Isolated to form component, resets on unmount

### 9.3 UI State Pattern

```typescript
// Page-level UI state
const AssignmentTabs = () => {
  const [activeTab, setActiveTab] = useState("Sample");
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);

  return (
    <Tabs value={activeTab} onTabChange={setActiveTab}>
      ...
      <Modal
        opened={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
      >
        ...
      </Modal>
    </Tabs>
  );
};
```

**Scope**: Component-level, affects UI appearance/structure

### 9.4 Missing: Server State Management

```typescript
// Current: Mock data hardcoded
const mockData = [
  { title: "Test 1", ... },
  { title: "Test 2", ... },
]

// Should be: React Query
const { data: assignments, isLoading } = useQuery({
  queryKey: ['assignments'],
  queryFn: () => api.get('/assignments'),
})

if (isLoading) return <LoadingSpinner />

return assignments.map(assignment => <Card {...assignment} />)
```

### 9.5 Missing: Global Auth State

```typescript
// No global auth context visible
// Should implement:
// - Login/logout functions
// - Auth token storage
// - User info (name, role, permissions)
// - Protected route guards

// Recommendation: Use zustand or Context API
import create from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  login: (credentials) => {
    /* ... */
  },
  logout: () => set({ user: null }),
}));
```

---

## 10. Key Observations & Recommendations

### 10.1 Strengths ✅

1. **Clean Folder Structure**

   - Clear separation of concerns
   - Logical component organization
   - Easy to locate specific features

2. **Strong TypeScript Support**

   - Strict mode enabled
   - Type-safe components
   - Good IDE support

3. **Form Validation**

   - Zod schemas for type safety
   - React Hook Form integration
   - Consistent error handling

4. **Mobile-First Design**

   - Optimized for 420px viewport
   - Touch-friendly interactions
   - Proper scrolling behavior

5. **UI Component Library**

   - Mantine provides consistency
   - Pre-built accessible components
   - Easy theming

6. **Icon Integration**
   - Lucide icons well-integrated
   - Consistent icon styling
   - Good variety available

### 10.2 Critical Issues ⚠️ MUST FIX

#### Issue 1: Color Inconsistency

**Problem**: Status colors hardcoded in multiple places

- `#09986A` vs `#16A34A` for green
- `#D58700` vs `#EA580C` for orange

**Solution**:

```typescript
// src/shared/constants/colors.ts
export const COLORS = {
  STATUS: {
    COLLECTED: "#09986A",
    PENDING: "#D58700",
    COMPLETED: "#16A34A",
    DUE: "#EF4444",
    CANCELLED: "#9CA3AF",
  } as const,
  TEXT: {
    PRIMARY: "#111827",
    SECONDARY: "#6B7280",
    TERTIARY: "#9CA3AF",
  } as const,
  BACKGROUND: {
    PRIMARY: "#FFFFFF",
    SECONDARY: "#F3F4F6",
    MUTED: "#F9FAFB",
  } as const,
  BORDER: {
    LIGHT: "#E5E7EB",
    MEDIUM: "#D1D5DB",
  } as const,
} as const;

// Usage
import { COLORS } from "@/shared/constants/colors";

<Badge color={COLORS.STATUS.COLLECTED}>Collected</Badge>;
```

#### Issue 2: Button Styling Inconsistency

**Problem**: Multiple ways of styling buttons

**Solution**:

```typescript
// Create button variants
export const buttonClasses = {
  primary: 'bg-[#0D52AF] hover:bg-[#0A3D8A] text-white font-semibold rounded-lg px-4 py-2',
  secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-lg px-4 py-2',
  outline: 'border border-gray-300 hover:bg-gray-50 text-gray-900 font-semibold rounded-lg px-4 py-2',
}

// Usage
<button className={buttonClasses.primary}>Submit</button>

// OR use Mantine consistently
<Button color="#0D52AF" className="!bg-[#0D52AF]">
  Submit
</Button>
```

#### Issue 3: Missing API Integration

**Problem**: Mock data hardcoded, no backend integration

**Solution**:

```typescript
// src/api/client.ts
import axios from "axios";

const API_BASE = process.env.VITE_API_URL || "http://localhost:3000/api";

export const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

// src/hooks/useAssignments.ts
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api/client";

export function useAssignments() {
  return useQuery({
    queryKey: ["assignments"],
    queryFn: async () => {
      const { data } = await api.get("/assignments");
      return data;
    },
  });
}

// Usage
const AssignmentPage = () => {
  const { data, isLoading, error } = useAssignments();

  if (isLoading) return <Skeleton />;
  if (error) return <ErrorMessage error={error} />;

  return data.map((assignment) => <AssignmentCard {...assignment} />);
};
```

### 10.3 Important Issues ⚠️ SHOULD FIX

#### Issue 4: Global Auth State Missing

**Solution**:

```typescript
// src/store/authStore.ts
import create from "zustand";
import { api } from "@/api/client";

interface AuthStore {
  user: { id: string; name: string; role: string } | null;
  token: string | null;
  login: (id: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: localStorage.getItem("token"),
  isAuthenticated: !!localStorage.getItem("token"),

  login: async (id, password) => {
    const { data } = await api.post("/auth/login", { id, password });
    set({ user: data.user, token: data.token });
    localStorage.setItem("token", data.token);
  },

  logout: () => {
    set({ user: null, token: null });
    localStorage.removeItem("token");
  },
}));
```

#### Issue 5: No Error Boundary

**Solution**:

```typescript
// src/components/ErrorBoundary.tsx
import { ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <h1 className="text-red-800 font-bold">Something went wrong</h1>
          <p className="text-red-700 text-sm">{this.state.error?.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <AppContents />
</ErrorBoundary>;
```

#### Issue 6: No Loading States

**Solution**:

```typescript
// Create global loading context
// src/contexts/LoadingContext.tsx
import { createContext, useContext, ReactNode } from "react";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <GlobalLoader />}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context)
    throw new Error("useLoading must be used within LoadingProvider");
  return context;
};
```

### 10.4 Nice to Have Improvements 🎯

1. **Component Documentation (Storybook)**

   ```bash
   npm install --save-dev @storybook/react @storybook/addon-docs
   ```

2. **Testing Setup**

   ```bash
   npm install --save-dev vitest @vitest/ui @testing-library/react
   ```

3. **Accessibility Audit**

   - Add `aria-labels` to interactive elements
   - Ensure color contrast ratios meet WCAG AA
   - Test with screen readers

4. **Performance Optimization**

   - Code splitting for routes
   - Image lazy loading
   - Component memoization (React.memo, useMemo)

5. **Analytics Integration**

   - Page view tracking
   - User interaction tracking
   - Error tracking (Sentry)

6. **Dark Mode Support**
   - Add Mantine dark mode theme
   - Store user preference in localStorage
   - Respect system preference

---

## 11. File-by-File Details

### 11.1 Key Component Files

#### [AssignmentTabs.tsx](AssignmentTabs.tsx)

- **Purpose**: Tab interface for assignment details (Sample, Tests, Payments, Activities)
- **State**: `activeTab`, `paymentModalOpen`
- **Features**:
  - 4-tab system with smooth switching
  - FAB button appears on Tests/Payments tabs
  - Modal integration for payment form
  - Navigation integration
- **Props**: None (internal state)
- **Size**: ~150 LOC

#### [ExpandableDetails.tsx](ExpandableDetails.tsx)

- **Purpose**: Collapsible detail sections with smooth animation
- **State**: `open`, `height` (for animation)
- **Features**:
  - Smooth height-based expand/collapse animation
  - Dynamic content measurement
  - Multiple sections support
  - Location button for map viewing
- **Props**: `title`, `sections[]`, `defaultOpen`, `onLocationClick`
- **Animation**: 300ms cubic-bezier(0.4, 0, 0.2, 1)
- **Size**: ~150 LOC

#### [PaymentModal.tsx](PaymentModal.tsx)

- **Purpose**: Form for adding payment records
- **Validation**: Zod schema (amount, method required)
- **Features**:
  - React Hook Form integration
  - Amount & payment method fields
  - Error message display
  - Submit/cancel buttons
- **Props**: `onClose` callback
- **Size**: ~80 LOC

#### [AssignmentPageDetails.tsx](AssignmentPageDetails.tsx)

- **Purpose**: Master detail view for single assignment
- **Features**:
  - ExpandableDetails wrapper with all sections
  - AssignmentTabs for different information categories
  - Mock data for patient, booking, location, payment
- **Size**: ~50 LOC

### 11.2 Styling Files

#### [global.css](global.css)

```css
/* Key styles: */
- .app-frame: Mobile frame (420px max)
- .main-content: Scrollable area with safe-area padding
- .safe-bottom: Notch padding (44px)
- Input field: height 48px, padding-left 15px
- ::-webkit-scrollbar: Hidden custom scrollbars
```

#### [App.css](App.css)

- Tailwind @directives
- No custom rules

---

## 12. Recommendations Summary

### Priority 1: CRITICAL (Do First)

1. ✅ Centralize color constants
2. ✅ Standardize button styling
3. ✅ Add API integration layer

### Priority 2: IMPORTANT (Next Sprint)

1. ⚠️ Implement global auth state
2. ⚠️ Add error boundary
3. ⚠️ Add loading states
4. ⚠️ Fix font weight hierarchy

### Priority 3: ENHANCEMENT (Future)

1. 🎯 Setup testing infrastructure
2. 🎯 Add Storybook documentation
3. 🎯 Implement dark mode
4. 🎯 Add accessibility improvements

---

## 13. Quick Reference

### Common Commands

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Production build
npm run preview      # Preview prod build

# Linting
npm run lint         # Run ESLint

# Type Checking
npx tsc --noEmit    # Check types
```

### Tailwind Classes Reference

```
Colors: text-primary, bg-primary, border-gray-100
Sizing: w-14, h-14, px-4, py-3
Layout: flex, gap-3, rounded-xl
States: hover:bg-blue-700, disabled:opacity-50
```

### Mantine Components Used

- `Button`, `TextInput`, `NumberInput`, `Select`
- `Tabs`, `Modal`, `Badge`, `Divider`
- `Notification`, `Group`, `Stack`

---

**Document Version**: 1.0  
**Last Updated**: January 2026  
**Author**: Project Analysis System
