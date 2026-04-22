# Typography System Documentation

## Overview
This project uses a comprehensive, scalable typography system built on Tailwind CSS. The system provides consistent font sizes, weights, and spacing across all components while making future changes easy.

## Architecture

### 1. Tailwind Configuration (`tailwind.config.js`)
Contains the core font size definitions with semantic naming:
- **Display sizes**: For hero titles and major headings
- **Heading scale**: H1-H6 hierarchy
- **Body text**: Regular content sizes
- **Captions**: Small labels and metadata

### 2. CSS Components (`src/index.css`)
Semantic utility classes that combine font sizes with appropriate styling:
- `.text-display` - Hero titles
- `.text-heading-1` through `.text-heading-6` - Section headings
- `.text-body`, `.text-body-lg`, `.text-body-sm` - Content text
- `.text-caption`, `.text-caption-sm` - Small labels
- `.text-hero-title`, `.text-hero-subtitle` - Specialized hero text
- `.text-button` - Button text

## Font Size Scale

```
Display: 72px (4.5rem) - Hero titles
Heading 1: 48px (3rem) - Main section titles
Heading 2: 36px (2.25rem) - Subsection titles
Heading 3: 30px (1.875rem) - Card titles
Heading 4: 24px (1.5rem) - Component headings
Heading 5: 20px (1.25rem) - Small headings
Heading 6: 18px (1.125rem) - Minor headings

Body Large: 18px (1.125rem) - Featured content
Body: 16px (1rem) - Regular content
Body Small: 14px (0.875rem) - Secondary content
Body XS: 12px (0.75rem) - Metadata

Caption: 12px (0.75rem) - Labels, tags
Caption Small: 9px (0.5625rem) - Tiny labels
```

## How to Modify Typography

### Option 1: Quick Global Changes
Edit `tailwind.config.js` fontSize values:

```javascript
fontSize: {
  'heading-1': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }], // Increase H1 size
  'body': ['1.125rem', { lineHeight: '1.7' }], // Increase body size
}
```

### Option 2: Component-Level Changes
Update the CSS component classes in `src/index.css`:

```css
.text-heading-1 {
  @apply text-6xl font-black tracking-tight leading-tight; /* Make H1 larger */
}
```

### Option 3: Responsive Adjustments
Modify responsive breakpoints in the config:

```javascript
'hero-title': ['2.5rem', { lineHeight: '0.9' }], // Mobile
'hero-title': ['4rem', { lineHeight: '0.85' }], // sm:
'hero-title': ['5rem', { lineHeight: '0.8' }], // md:
'hero-title': ['6rem', { lineHeight: '0.75' }], // lg:
```

## Best Practices

### 1. Use Semantic Classes
```jsx
// ✅ Good
<h1 className="text-heading-1">Title</h1>
<p className="text-body">Content</p>

// ❌ Avoid
<h1 className="text-4xl font-bold">Title</h1>
<p className="text-base">Content</p>
```

### 2. Consistent Hierarchy
- Display: Hero sections only
- Heading 1: Main section titles
- Heading 2: Subsection titles
- Body: Regular content
- Caption: Labels and metadata

### 3. Responsive Design
All text classes are responsive by default. Test on mobile devices.

### 4. Accessibility
- Maintain proper contrast ratios
- Use appropriate line heights (1.2-1.7)
- Consider font loading performance

## Migration Guide

When updating existing components:

1. Replace arbitrary values: `text-[10px]` → `text-caption`
2. Use semantic classes: `text-2xl` → `text-heading-4`
3. Test responsive behavior on all screen sizes
4. Verify contrast and readability

## Performance Notes

- Font sizes are defined once in the config
- CSS custom properties could be added for runtime changes
- Unused classes are purged in production builds
- Font loading is optimized with `font-display: swap`

## Future Enhancements

Consider adding:
- CSS custom properties for runtime theme switching
- Fluid typography with `clamp()` functions
- Dark mode specific font weights
- Print-optimized typography