# 🚀 Ashwani Singh - Portfolio

A modern, responsive portfolio website showcasing my journey as a Front-End Developer. Built with React, TypeScript, and Tailwind CSS, featuring smooth animations and a beautiful dark-first design.

![Portfolio Preview](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Ashwani+Singh+Portfolio)

## ✨ Features

- **🎨 Modern Design**: Glass morphism effects, smooth animations, and responsive layout
- **🌙 Dark Theme First**: Beautiful dark mode with light mode toggle option
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ Performance Optimized**: Fast loading with Vite build system
- **🎭 Smooth Animations**: Framer Motion powered transitions and interactions
- **🎯 Interactive Elements**: Hover effects, scroll animations, and micro-interactions

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.2.3** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite 6.2.0** - Lightning-fast build tool

### Styling & UI
- **Tailwind CSS 3.4.14** - Utility-first CSS framework
- **Framer Motion 12.34.0** - Animation library for React
- **Custom Mesh Gradients** - Beautiful background effects

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── common/         # Shared components (GlassCard, ThemeToggle, etc.)
│   │   └── layout/         # Layout components (Navbar, Footer, etc.)
│   ├── sections/           # Page sections (Hero, About, Projects, etc.)
│   ├── hooks/              # Custom React hooks (useTheme, useScroll)
│   ├── constants/          # App constants and data
│   ├── types/              # TypeScript type definitions
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── public/                 # Static assets
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎯 Key Sections

### 🏠 Hero Section
- Animated introduction with mesh gradient background
- Personal branding and tagline
- Smooth scroll animations

### 👨‍💻 About Section
- Professional summary and background
- Skills showcase with categories
- Experience timeline

### 💼 Projects Section
- Featured project case studies
- Interactive project cards with hover effects
- Technology stack badges

### 🛠️ Skills Section
- Technical skills organized by category
- Frontend, Programming, and Tools & Concepts
- Visual skill representation

### 📞 Contact Section
- Contact information and social links
- Professional email and phone
- LinkedIn profile connection

## 🎨 Design System

### Color Palette
- **Primary**: Custom gradient themes
- **Dark Mode**: Slate-based color scheme
- **Light Mode**: Clean white backgrounds
- **Accent**: Primary color for highlights

### Typography
- **Font Family**: System fonts for optimal performance
- **Scale**: Consistent font size system (xs to 7xl)
- **Weight**: Black (900) for headings, Medium (500) for body

### Components
- **GlassCard**: Frosted glass effect containers
- **SectionReveal**: Scroll-triggered animations
- **ThemeToggle**: Dark/light mode switcher
- **BackgroundBlobs**: Animated background elements

## 🔧 Customization

### Personal Information
Update your details in `src/constants/index.js`:
```javascript
export const PERSONAL_INFO = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other details
};
```

### Skills
Modify your skills in the same constants file:
```javascript
export const SKILLS = [
  {
    category: "Your Category",
    skills: ["Skill 1", "Skill 2", "Skill 3"]
  }
];
```

### Styling
- **Tailwind Config**: `tailwind.config.js` for custom themes
- **Component Styles**: Individual component files for specific styling
- **Global Styles**: `src/index.css` for global styles

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Tablet**: Optimized for tablet viewing
- **Desktop**: Full-width layouts for larger screens
- **Accessibility**: WCAG compliant design patterns

## 🌟 Performance Features

- **Code Splitting**: Automatic code splitting with Vite
- **Image Optimization**: Lazy loading and responsive images
- **Bundle Analysis**: Optimized bundle sizes
- **Fast Refresh**: Hot module replacement in development

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **React** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS approach
- **Framer Motion** - For smooth animations
- **Vite** - For the blazing fast build tool

## 📞 Contact

**Ashwani Singh**
- Email: ashwanisingh638796@gmail.com
- Phone: +91 6387964069
- LinkedIn: [Ashwani Singh](https://www.linkedin.com/in/ashwani-singh-b32a67267)
- Portfolio: [Your Portfolio URL]

---

⭐ **Star this repo** if you found it helpful!
