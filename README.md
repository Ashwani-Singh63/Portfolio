# Project Structure

This project follows React best practices with a well-organized folder structure.

## Directory Structure

```
ashwani-singh---portfolio-2/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── common/         # Common/shared components
│   │   │   ├── GlassCard.tsx
│   │   │   ├── SectionReveal.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   └── index.ts
│   │   └── layout/         # Layout components
│   │       ├── BackgroundBlobs.tsx
│   │       ├── Footer.tsx
│   │       ├── Navbar.tsx
│   │       └── index.ts
│   ├── sections/           # Page sections/components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Timeline.tsx
│   │   └── index.ts
│   ├── hooks/              # Custom React hooks
│   │   ├── useScroll.ts
│   │   └── useTheme.ts
│   ├── constants/          # Application constants
│   │   └── index.ts
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/              # Utility functions (empty, ready for use)
│   ├── assets/             # Static assets (images, fonts, etc.)
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── vite-env.d.ts       # Vite type definitions
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Key Changes Made

1. **Created `src/` directory**: All source code is now organized under `src/`
2. **Organized components**: 
   - Common components (`ThemeToggle`, `GlassCard`, `SectionReveal`) → `src/components/common/`
   - Layout components (`Navbar`, `Footer`, `BackgroundBlobs`) → `src/components/layout/`
3. **Created sections folder**: Page sections (`Hero`, `About`, `Skills`, etc.) → `src/sections/`
4. **Extracted custom hooks**: Theme and scroll logic → `src/hooks/`
5. **Organized constants and types**: Moved to `src/constants/` and `src/types/`
6. **Renamed entry point**: `index.tsx` → `src/main.tsx` (React convention)
7. **Updated configurations**: 
   - `vite.config.ts`: Updated alias to point to `src/`
   - `tsconfig.json`: Updated paths and include patterns
   - `index.html`: Updated script source to `/src/main.tsx`

## Benefits

- ✅ Better code organization and maintainability
- ✅ Clear separation of concerns
- ✅ Easier to scale and add new features
- ✅ Follows React community best practices
- ✅ Improved import paths with TypeScript path aliases
- ✅ Reusable hooks for common functionality

## Import Examples

```typescript
// Components
import { ThemeToggle, GlassCard } from '@/components/common';
import { Navbar, Footer } from '@/components/layout';

// Sections
import { Hero, About, Skills } from '@/sections';

// Hooks
import { useTheme } from '@/hooks/useTheme';
import { useScroll } from '@/hooks/useScroll';

// Constants & Types
import { PERSONAL_INFO, SKILLS } from '@/constants';
import { Project, Experience } from '@/types';
```
